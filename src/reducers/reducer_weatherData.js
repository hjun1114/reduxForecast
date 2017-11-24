import FETCH_WEATHER from '../actions/index';

export default function(state, action){
  if(state === undefined){
    state = [];
  }
  switch(action.type){
    case FETCH_WEATHER:
      return [action.type.data, ...state];
      // important that this return statement return current state + new state
      // existing array plus pushed new array.
      // ALSO IMPORTANT that we don't mutate our state. ALWAYS RETURN  new instance of the state.
      // Bad example: state.push(...); -> we are pushing into state, changing the original state.

  }
  return state;
}
