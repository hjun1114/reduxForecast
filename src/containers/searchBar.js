import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends React.Component {

  constructor(props){
    super(props)

    this.state = {term: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({term: event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }

  render(){
    return (
      <form onSubmit={this.onFormSubmit} className ="input-group">
        <input
          placeholder="search for your favorite cities"
          className="form-control"
          value={this.state.term} // controlled component.
          onChange={this.onInputChange}
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
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch);
}
export default connect(null, mapDispatchToProps)(SearchBar);
//mapDispatchToProps ALWAYS has to be second parameter. thats why we need null as a first eventhough we don't need it at the moment.
