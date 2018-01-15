import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const setMiddlewares = () => {
  const middlewares = [thunk];
  if (process.env.NODE_ENV === 'development') {
    return composeWithDevTools(applyMiddleware(...middlewares, logger));
  } else {
    return applyMiddleware(...middlewares);
  }
};

const store = createStore(reducers, setMiddlewares());

export default store;
