import { createRouterMiddleware } from './middleware'; // 创建路由中间件
import { push, locationChangeAction } from './actions';
import { createRouterReducer } from './reducer';


export function createReduxHistoryContext({ history }) {
    const routerMiddleware = createRouterMiddleware(history);
    const routerReducer = createRouterReducer(history);
    
    // 返回redux版本的 history ，接收仓库 store
    function createReduxHistory(store) {
        // 先派发一次，在初始化的时候把初始的路径和动作派发给仓库，让仓库同步到自己的状态对象中
        store.dispatch(locationChangeAction(history.location, history.action));
        // 然后做订阅，订阅路径变化事件，当路径发生变化后再派发新的动作和路径动作给仓库，重新保存路径
        history.listen(({ location, action }) => {
            store.dispatch(locationChangeAction(location, action));
        });
        // 最终返回history
        return history
    }

    return {
        routerMiddleware,
        createReduxHistory,
        routerReducer
    }
}