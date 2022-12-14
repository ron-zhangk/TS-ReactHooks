import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import history from '@/history';
import rootReducer from './reducers';

// promise 和 thunk 都是中间件
// promise可让我们派发promise，thunk让我们可以派发函数

let store = applyMiddleware(routerMiddleware(history), promise, thunk, logger)(createStore)(
  rootReducer,
);

export default store;
