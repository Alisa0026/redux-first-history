import { CALL_HISTORY_METHOD } from './actions'

// 通过中间件拦截 push 的路由跳转路径
// 参数是原生的history
export function createRouterMiddleware(history) {
    return function (middlewareAPI) {
        return function (next) {
            return function (action) { // 次函数就是我们改造后的新的 dispatch
                if (action.type == CALL_HISTORY_METHOD) {
                    const { method, args } = action.payload;
                    history[method](...args); // history.push('/counter')
                    // history[action.payload.method](...action.payload.args)
                } else {
                    return next(action);
                }

            }
        }
    }
}