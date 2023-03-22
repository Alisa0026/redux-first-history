import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from "redux-first-history";
// 先创建history
const history = createBrowserHistory();
// 把 history 传入 createReduxHistoryContext，返回一个对象，进行解构
const { routerReducer, routerMiddleware, createReduxHistory } = createReduxHistoryContext({ history });
// 导出
export {
    routerReducer, // 处理器，把浏览器种路径同步到仓库状态中，就是使用这个 routerReducer 把路径存放到仓库里
    routerMiddleware, // 通过派发动作的方式跳转路径，通过 routerMiddleware 这个中间件跳转路径
    createReduxHistory // 创建 redux 版本的 history 对象
}