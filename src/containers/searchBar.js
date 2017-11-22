import React from 'react';

class SearchBar extends React.Component {

  constructor(props){
    super(props)

    this.state = {term: ''};
  }

  onInputChange(value){
    this.setState({term: value});
  }

  onFormSubmit(event){
    event.preventDefault();
  }

  render(){
    return (
      <form onSubmit={this.onFormSubmit} className ="input-group">
        <input
          placeholder="search for your favorite cities"
          className="form-control"
          value={this.state.term} // controlled component.
          onChange={(event)=>{ // fat arrow function deals binding.
            this.onInputChange(event.target.value)
          }}
        />
        <span className ="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

export default SearchBar;
