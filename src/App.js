import React, { Component } from 'react'
import Nav from './pages/nav/Nav'
import Login from './pages/login/Login'
import Reg from './pages/reg/Reg'
import Eorr404 from './pages/eorr/Eorr404'
import Mymap from './pages/map/Mapmy'
import Search from './pages/search/Search'
import City from './pages/city/City'
import { HashRouter, Switch, Route } from 'react-router-dom'


// 引入redux
import store from './store'

// 导入全局注册组件
import { Provider } from 'react-redux'


// 程序的入口组件
export default class App extends Component {
    render() {
        return (
            <Provider store = { store }>
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={Nav} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/reg" component={Reg} />
                        <Route exact path="/map" component={Mymap} />
                        <Route exact path="/search" component={Search} />
                        <Route exact path="/city" component={City} />
                        {/* 配置404页面 */}
                        <Route component={Eorr404} />
                    </Switch>
                </HashRouter>
            </Provider>
        )
    }
}
