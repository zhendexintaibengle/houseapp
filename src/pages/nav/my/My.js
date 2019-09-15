import React, { Component } from 'react';
import './my.css';
import { WingBlank, Flex, WhiteSpace, Icon } from 'antd-mobile'

import BScroll from 'better-scroll';

import { Link } from 'react-router-dom'
import { List } from 'antd-mobile'
const Item = List.Item;

export default class My extends Component {
    constructor() {
        super();
        this.state = {
            loginStyle:"登录/注册",
            icon1: [
                { num: "1", text: "我的积分" },
                { num: "2", text: "我的订阅" },
                { num: "3", text: "微聊联系人" },
                { num1: "a" },
                { num: "4", text: "房贷计算器" },
                { num: "5", text: "我的房子" },
                { num1: "c" },
                { num: "6", text: "我的看房纪录" },
                { num: "7", text: "我的问答" },
                { num1: "b" },
                { num: "8", text: "设置" },
                { num: "9", text: "意见反馈" }
            ]
        }
    }
    render() {
        return (
            <div id="my" className="my" style={{height:"100%",overflow:"scroll"}}>
                {/* 头部 */}
                <ul className="content">
                    <div className="my-head">
                        <WingBlank>
                            <div className="my-head-top">
                                <div className="my-head-top-img">
                                    <img />
                                </div>

                                <div className="my-head-top-login">
                                    <p onClick={this.toLogin.bind(this)} style={{fontSize:"1.6em",fontWeight:"bold"}}>{this.state.loginStyle}</p>
                                    <p>可以与经纪人发起聊天</p>
                                </div>
                                <div className="my-head-top-set">
                                    <a><img src={require('../../../assets/images/set.png')} /></a>
                                </div>
                            </div>
                            <WhiteSpace size="lg" />
                            <WhiteSpace size="lg" />
                            <div className="my-head-bottom">
                                <Flex>
                                    <Flex.Item style={{ borderRight: "1px solid #fff" }}>
                                        <div>
                                            <p>0</p>
                                            <p>
                                                <img className="my-head-bottom-money" src={require('../../../assets/images/money.png')} />
                                                <span>钱包</span>
                                            </p>
                                        </div>
                                    </Flex.Item>
                                    <Flex.Item style={{ borderRight: "1px solid #fff" }}>
                                        <div>
                                            <p>0</p>
                                            <p>
                                                <img src={require('../../../assets/images/coupons.png')} />
                                                &nbsp;&nbsp;
                                            <span>钱包</span>
                                            </p>
                                        </div>
                                    </Flex.Item>
                                    <Flex.Item>
                                        <div>
                                            <p>0</p>
                                            <p>
                                                <img src={require('../../../assets/images/integral.png')} />
                                                &nbsp;&nbsp;
                                            <span>钱包</span>
                                            </p>
                                        </div>
                                    </Flex.Item>
                                </Flex>
                            </div>
                        </WingBlank>
                    </div>



                    <List>
                        {this.state.icon1.map(val => {
                            if (val.num) {
                                return <Item
                                    key={val.num}
                                    thumb={require(`../../../assets/images/icon-my-${val.num}.png`)}
                                    arrow="horizontal"
                                    onClick={() => { }}
                                >{val.text}</Item>
                            } else {
                                return <div key={val.num1} style={{ height: "20px", background: "#F5F5F9" }}></div>
                            }
                        })}
                    </List>
                    {/* 内容1 */}
                </ul>

            </div>
        )
    };


    componentDidMount() {
        let scroll = new BScroll("#my");

        // 判断本地是否有数据,并加载数据
        let user = localStorage.getItem("username");
        this.setState({
            loginStyle:user?user:"登录/注册"
        })
        // console.log(BScroll)
    };

    toLogin(){
        // 如果是登录状态，那么就禁止跳转，如果未登录，即可进行跳转
        if(!localStorage.getItem("username")){
            this.props.h.push("/login");
        }
        
    }
}
