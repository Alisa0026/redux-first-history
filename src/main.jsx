import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, Link } from 'react-router-dom'
import { HistoryRouter } from 'redux-first-history/rr6'
import { Provider } from 'react-redux'
import { store, history } from './store'
import Home from './Home'
import Counter from './Counter'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/counter">计数器</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </HistoryRouter>
  </Provider>,
)
