# redux-first-history
- 把redux仓库和路由连接的库
- 作用：
1. 把地址栏中的新路径保存到redux仓库中
  - createReduxHistory 中进行派发订阅，路径发生改变后会派发一个动作 locationChangeAction 给到 reducer
  - reducer 就是 createRouterReducer，接收到新的 action 放到仓库状态树中
2. 可以通过派发动作的方式跳转路径
  - actions 中的 push派发
  - 中间件 middleware 接收,判断actions类型进行跳转