import React, { Component } from 'react'
// 导入betterscrol
import BScroll from 'better-scroll'
import './chat.css'
import {WhiteSpace,Button} from 'antd-mobile'

export default class Chat extends Component {
    render() {
        return (
            <div id="chat" className="chat">
                <div className="chat-none">
                   <div className="chat-none-img">
                       <img/>
                   </div>
                   <div className="chat-none-info">
                       <p>职业顾问：<span>张小妹</span></p>
                       <p>专业服务&nbsp;诚信做人&nbsp;诚信做事</p>
                       <Button style={{backgroundColor:"#00BC5B",color:"#fff"}}>我要聊天</Button>
                   </div>
                </div>
                <ul className="content">
                    {/* 没有聊天对象时的页面 */}
                    <div className="chat-content">
                        
                    </div>
                </ul>
            </div>
        )
    };

    componentDidMount() {
        // 使用betterscroll
        let scroll = new BScroll("#chat", {
            scrollY: true,
            click: true
        })
    }
}
