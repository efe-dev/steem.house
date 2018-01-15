import { combineReducers } from 'redux';

const reducer = (state = {}, action) => {
  if (action.type === 'GET_GLOBAL_PROPERTIES') {
    state = { ...action.payload };
  }
  return state;
};

export default combineReducers({ r1: reducer });
