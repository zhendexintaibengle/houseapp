import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { InputItem, Button, Checkbox, WhiteSpace, WingBlank } from 'antd-mobile'
import './reg.css'

import { reg } from '../../api/api'

export default class Reg extends Component {
    constructor() {
        super();
        this.state = {
            user: '',
            pwd: '',
            oldUser: '',
            oldPwd: '',
            info: "none",
            flag:true
        }
    }
    render() {
        return (
            <div className="reg" style={{ height: "100%" }}>
                <InputItem
                    placeholder="请输入手机号"
                    style={{ height: "50px" }}
                    clear
                    value={this.state.user}
                    onChange={(val) => { this.setState({ user: val }) }}
                />
                <InputItem
                    placeholder="请输入密码"
                    style={{ height: "50px" }}
                    clear
                    type="password"
                />
                <div className="reg-check">
                    <InputItem
                        placeholder="请输入验证码"
                        style={{ height: "50px" }}
                        clear
                        type="password"
                    />
                    <Button size="small" style={{ width: "100px", height: "25px", border: "none" }}>获取验证码</Button>
                </div>
                <WingBlank>
                    <span style={{ display: this.state.info }}>请输入用户信息</span>
                </WingBlank>

                <WhiteSpace size="xl" />
                <div className="reg-checkbod">
                    <Checkbox onChange = { this.checkboxChange.bind(this) }></Checkbox>
                    <Link to="/login">我已经同意<span>《用户服务协议》</span>及<span>《隐私权政策》</span></Link>
                </div>
                <WhiteSpace size="xl" />
                <WingBlank>
                    <Button disabled = {this.state.flag} onClick={this.toreg.bind(this)} style={{ backgroundColor: "#00BC5B", color: "#fff" }}>注册</Button>
                </WingBlank>
                <WhiteSpace size="xl" />
                <WingBlank>
                    <Link to="/login">已有账号</Link>
                </WingBlank>
            </div>
        )
    };


    async toreg() {
        // 获取用户信息
        let { user, pwd, oldUser, oldPwd } = this.state;
        
        if (user && pwd) {
            let msg = await reg(user, pwd);
            console.log(msg);
        } else {
            this.setState({
                info: "block"
            })
        }
    };


    checkboxChange(){
        this.setState({
            flag:!this.state.flag
        })
    }
}
