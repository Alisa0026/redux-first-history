import { createRouterMiddleware } from './middleware'; // 创建路由中间件
import { push, locationChangeAction } from './actions';
import { createRouterReducer } from './reducer';

// const selectRouterState = state => state[routerReducerKey] // routerReducerKey 就是reducer 合并时的key就是 router
const selectRouterState = state => state.router // routerReducerKey 就是 router

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
        // 最终返回history,这里有点儿问题：传入的history返回的还是，没啥区别，源码中对这里做了个改造，返回的不是history，而是整个重写了
        // return history
        return {
            block: history.block, //工具方法直接拿过来用
            createHref: history.createHref,//工具方法直接拿过来用
            push: (...args) => store.dispatch(push(...args)), // 之前直接跳路径history.push('/counter');，这里变成向仓库派发一个动作,replace/go/goBack/goForward/back/forward 都和push一样的实现，这里省略
            listen: history.listen, // 监听
            get location() {// 原来获取路径是从history对象上取的，现在是从仓库中取 store.getState()
                return selectRouterState(store.getState()).location;
            },
            get action() {// 获取action
                return store.getState().router.action;
            }
        };
    }

    return {
        routerMiddleware,
        createReduxHistory,
        routerReducer
    }
}