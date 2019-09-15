import React, { Component } from 'react'
import "./login.css"

import { Button, WhiteSpace, Flex } from 'antd-mobile';
import { Link } from 'react-router-dom'

// 导入登录接口文档
import { login } from '../../api/api';

export default class Login extends Component {

    // 定义数据状态
    constructor() {
        // 修改this的指向
        super();
        // 初始数据
        this.state = {
            user: '',
            pwd: '',
            oldUer:'',
            oldPwd:'',
            info: "none"
        }
    };
    render() {
        return (
            <div className="login">
                {/* logo */}
                <div className="login-logo"></div>
                {/* 登录部分 */}
                <div className="login-content">
                    <form className="login-content-input">
                        <p>
                            <label></label>
                            <input value={this.state.user} onChange={this.getUser.bind(this)} placeholder="请输入手机号" />
                        </p>
                        <p>
                            <label></label>
                            <input type="password" value={this.state.pwd} onChange={this.getPwd.bind(this)} placeholder="请输入密码" />
                        </p>
                        <span style={{ display: this.state.info }}>用户名或者密码错误</span>
                        <WhiteSpace size="lg" />
                        <Button onClick={this.tologin.bind(this)} style={{ backgroundColor: "#00BC5B", color: "#fff" }}>登录</Button>
                        <WhiteSpace size="lg" />

                        <Flex justify="between">
                            <Link to="/reg" style={{ color: "#00BC5B" }}>手机快速注册</Link>
                            <Link to="/reg" style={{ color: "#00BC5B" }}>忘记密码</Link>
                        </Flex>

                    </form>
                </div>
                {/* 底部 */}
                <div className="login-foot">
                    <p><a>登录/注册即代表同意《源码房产用户协议》</a></p>
                </div>
            </div>
        )
    };

    // 获取input中的value
    getUser(e) {
        // 获取当前input的value
        let val = e.target.value;
        // 修改数据
        this.setState({
            user: val
        })
    };
    getPwd(e) {
        // 获取当前input的value
        let val = e.target.value;
        // 修改数据
        this.setState({
            pwd: val
        })
    }

    // ES6语法
    // tologin(){
    //     let _this = this;
    //     // 获取当前用户的信息
    //     let {user,pwd} = this.state;

    //     login(user,pwd).then(res=>{
    //         // 如果登录成功
    //         if(res.data === "ok"){
    //             // _this.props.history.push("/");
    //             this.props.history.push("/");
    //         }else{
    //             this.setState({
    //                 info:"block"
    //             })
    //         }
    //     })
    // }

    // ES8语法
    async tologin() { //将普通函数转为异步函数,await只能在async定义的函数中使用

        // 性能优化
        /* 
            思路：判断用户名和密码是否发生改变，只有当改变的时候才发送ajax请求，减少对服务器的请求次数，增加性能
        */

// 获取当前用户的信息
        let {user,pwd,oldUser,oldPwd} = this.state;
        if(user === oldUser && pwd === oldPwd) return;
        // 将新的用户信息赋给旧的用户
        this.setState({
            oldUser:user,
            oldPwd:pwd
        })
        
        let msg = await login(user, pwd);
        if (msg.data === "ok") {
            // _this.props.history.push("/");
            this.props.history.push("/");
            // 将用户信息储存在本地
            localStorage.setItem("username",user);
        } else {
            this.setState({
                info: "block"
            })
        }
    }
}