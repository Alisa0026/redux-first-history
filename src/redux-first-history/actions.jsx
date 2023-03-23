//调用历史对象的方法
export const CALL_HISTORY_METHOD = '@@router/CALL_HISTORY_METHOD';
//当路径变更后会派发这个动作给仓库，让仓库中reducer把最新的路径放入仓库状态中
export const LOCATION_CHANGE = '@@router/LOCATION_CHANGE';

// 路径改变动作
function locationChangeAction(location, action) {
    return {
        type: LOCATION_CHANGE,
        payload: { action, location }
    }
}

// 实现如何使用first跳转路径
function push(...args) { // args=['/counter']
    return {
        type: CALL_HISTORY_METHOD,
        payload: { method: 'push', args }
    }
}

export {
    push,
    locationChangeAction
}