import { lazy, Suspense } from "react"
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import 'animate.css'
import './style/base.scss'
import './style/App.scss'

// HashRouter
// BrowserRouter 模式需要服务端配置，否者页面刷新时会找不到404
// 公共模块
const DefaultLayout = lazy(() => import(/* webpackChunkName: 'default' */ './containers'))
// 基础页面
const View404 = lazy(() => import(/* webpackChunkName: '404' */ './views/Others/404'))
const View500 = lazy(() => import(/* webpackChunkName: '505' */ './views/Others/500'))
const Login = lazy(() => import(/* webpackChunkName: 'login' */ './views/Login'))


const App = () => (
    <Router>
		<Suspense fallback={<span>Loading...</span>}>
			<Switch>
				<Route path='/' exact render={() => <Redirect to='/index' />} />
				<Route path='/500' component={View500} />
				<Route path='/login' component={Login} />
				<Route path='/404' component={View404} />
				<Route component={DefaultLayout} />
			</Switch>
		</Suspense>
    </Router>
)

/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
