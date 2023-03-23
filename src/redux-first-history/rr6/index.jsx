import React from 'react';
import { Router } from 'react-router';
// 是一个路由容器，两个属性：历史对象 history，儿子 children
// 之前用 BrowserRouter、HashRouter，现在用的 HistoryRouter来替换。但是都依赖 Router
export function HistoryRouter({ history, children }) {

    const [state, setState] = React.useState({
        action: history.action,//动作
        location: history.location//路径
    });

    React.useLayoutEffect(() => {
        // 订阅，监听路径变化，当路径变化后，会把最新的路径和动作传进来调用回调函数
        history.listen(({ action, location }) => setState({ action, location }));
    }, [history]); // 依赖history

    return (
        <Router
            location={state.location}//路径
            action={state.action} // action
            navigator={history}//导航器
            navigationType={state.action}//导航类型
        >
            {children}
        </Router>
    )

}