import { LOCATION_CHANGE } from './actions';

export function createRouterReducer(history) {
    // 定义初始值
    const initialState = {
        action: history.action,
        location: history.location
    }
    return function (state = initialState, action) {
        if (action.type === LOCATION_CHANGE) {
            // 修改仓库的路径
            return { ...state, location: action.payload.location, action: action.payload.action };
        } else {
            return state;
        }
    }
}
