import { createStore, applyMiddleware } from 'redux';
import combinedReducer from './reducers';
import { routerMiddleware, createReduxHistory } from './history';

//routerMiddleware 可以拦截到 push('/counter') 这个action,调用history进行路径的跳转
export const store = applyMiddleware(routerMiddleware)(createStore)(combinedReducer);

// store 传进去返回一个新的history
export const history = createReduxHistory(store);

// 方便看
window.store = store;