import React, { Component } from 'react';
import Main from './main/Main';
import My from './my/My';
import History from './history/History';
import Chat from './chat/Chat';
import { TabBar } from 'antd-mobile';
import { Link } from 'react-router-dom';
export default class Nav extends Component {
    // 定义数据状态
    constructor() {
        super();//获取this的指向
        // 定义数据
        this.state = {
            selectedTab: '首页',
            arr: [
                { title: '首页', url: 'index-de.png', selectedurl: 'index.png' },
                { title: '微聊', url: 'chat-de.png', selectedurl: 'chat.png' },
                { title: '足迹', url: 'history-de.png', selectedurl: 'history.png' },
                { title: '我的', url: 'my-de.png', selectedurl: 'my.png' }
            ]
        }
    };
    render() {
        return (
            <div style={{ height: "100%" }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#00BC5B"
                    barTintColor="white"
                >
                    {this.state.arr.map(val => (
                        <TabBar.Item
                            onPress={() => {
                                this.setState({
                                    selectedTab: `${val.title}`,
                                });
                            }}
                            selected
                            title={val.title}
                            key={val.title}
                            icon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${require('../../assets/images/'+val.url)}) center center /  21px 21px no-repeat`
                            }}
                            />
                            }
                            selectedIcon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `url(${require('../../assets/images/'+val.selectedurl)}) center center /  21px 21px no-repeat`
                                }}
                                />
                            }
                            selected={this.state.selectedTab === `${val.title}`}
                        >
                          {this.renderContent()}
                        </TabBar.Item>
                    ))}

                </TabBar>
            </div>
        )
    };

    renderContent(){
        switch(this.state.selectedTab){
            case '首页' : return <Main h={this.props.history}/>;
            case '微聊' : return <Chat/>;
            case '足迹' : return <History/>;
            case '我的' : return <My h={this.props.history}/>;
        }
    }
}
