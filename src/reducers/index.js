import { combineReducers } from 'redux';

const globalReducer = (state = {}, action) => {
  if (action.type === 'GET_GLOBAL_PROPERTIES') {
    state = { ...action.payload };
  }
  return state;
};

const priceReducer = (state = {}, action) => {
  if (action.type === 'GET_PRICE') {
    state = { ...action.payload };
  }
  return state;
};

export default combineReducers({ global: globalReducer, price: priceReducer });
