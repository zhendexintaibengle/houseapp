import React, { Component } from 'react'
import './main.css'
// 引入betterscroll
import BScroll from 'better-scroll';
import { Grid, Carousel, Flex, WingBlank, WhiteSpace } from 'antd-mobile';

import {connect} from 'react-redux'

 class Main extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    label: '2013',
                    value: '2013',
                },
                {
                    label: '2014',
                    value: '2014',
                },
            ],
            // slide图片名
            slide: ['1', '2', '3'],
            // 图片高度
            imgHeight: 176,
            icon01: [{ num: '1', text: '新房' }, { num: '2', text: '二手房' }, { num: '3', text: '租房' }, { num: '4', text: '商铺' }].map(val => {
                return { icon: require('../../../assets/images/icon-' + val.num + '.png'), text: val.text }
            }),
            icon02: [{ num: '1', text: '新房' }, { num: '2', text: '二手房' }, { num: '3', text: '租房' }, { num: '4', text: '商铺' }].map(val => (
                { icon: require('../../../assets/images/icon-' + val.num + '.png'), text: val.text }
            )),
            icon03: [
                { icon: require('../../../assets/images/icon-1.png'), text: '新房' },
                { icon: require('../../../assets/images/icon-2.png'), text: '新房' },
                { icon: require('../../../assets/images/icon-3.png'), text: '新房' },
                { icon: require('../../../assets/images/icon-4.png'), text: '新房' }
            ],
            city: "定位中",
            houseimg: [{ num: 1 }, { num: 2 }, { num: 3 }, { num: 4 }, { num: 5 }, { num: 6 }, { num: 7 }, { num: 8 }, { num: 9 }, { num: 10 }]
        }

    };
    render() {
        return (
            <div id="main" className="main">
                <ul className="content">
                    <div className="main-content">
                        {/* 头部 */}
                        <div className="main-head">
                            <div className="main-head-addr" onClick={this.changeHash.bind(this, '/city')}>
                                {this.state.city}▼
                            </div>
                            <div className="main-head-search" onClick={this.changeHash.bind(this, '/search')}>
                                <i></i>
                                <input placeholder="挑好房，上源码App" />
                            </div>
                            <div className="main-head-map" onClick={this.changeHash.bind(this, '/map')}>
                            </div>
                        </div>
                        <div className="main-body">
                            {/* 轮播图 */}
                            <div className="slide">
                                <Carousel
                                    autoplay
                                    infinite
                                    dots
                                    dotStyle={{ background: "#fff" }}
                                    dotActiveStyle={{ backgroundColor: "#0a0" }}
                                >
                                    {this.state.slide.map(val => (
                                        <a
                                            key={val}
                                            href="http://www.alipay.com"
                                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                        >
                                            <img
                                                src={`${require('../../../assets/images/slide-' + val + '.jpg')}`}
                                                alt=""
                                                style={{ width: '100%', verticalAlign: 'top' }}
                                                onLoad={() => {
                                                    // fire window resize event to change height
                                                    window.dispatchEvent(new Event('resize'));
                                                    this.setState({ imgHeight: 'auto' });
                                                }}
                                            />
                                        </a>
                                    ))}
                                </Carousel>
                            </div>

                            {/* 导航菜单 */}
                            <div className="main-menu">
                                <WhiteSpace size="lg" />
                                <WingBlank>
                                    <Grid data={this.state.icon01} hasLine={false} />
                                </WingBlank>
                                <WhiteSpace size="lg" />
                                <WingBlank>
                                    <Grid data={this.state.icon02} hasLine={false} />
                                </WingBlank>
                                <WhiteSpace size="lg" />
                            </div>




                            {/* 房产百科 */}
                            <div className="main-wikipedia">
                                <WhiteSpace size="sm" />
                                <WingBlank>
                                    <p><span>房产全百科</span>&nbsp;专业的买房攻略</p>
                                </WingBlank>

                                <WhiteSpace size="lg" />
                                <WingBlank>
                                    <Grid itemStyle={{ width: "100px", padding: "none" }} data={this.state.icon03} hasLine={false} />
                                </WingBlank>
                                <WhiteSpace size="lg" />
                            </div>

                            {/* 猜你喜欢 */}
                            <div className="main-like">
                                <WhiteSpace size="sm" />
                                <WingBlank>
                                    <p><span>猜你喜欢</span></p>
                                </WingBlank>

                                <WingBlank>
                                    {this.state.houseimg.map(item => (
                                        <div onClick={ this.addHistoryList.bind(this,item) } key={item.num} className="main-like-item">
                                            <div className="main-like-item-img">
                                                <a href="#">
                                                    <img src={require("../../../assets/images/" + item.num + ".jpg")} />
                                                </a>
                                            </div>
                                            <div className="main-like-item-info">
                                                <h2>绿地锦天府</h2>
                                                <p>锦江区&nbsp;攀成钢</p>
                                                <p>4室2厅&nbsp;208平</p>
                                            </div>
                                            <div className="main-like-item-price">
                                                <p>19000/平</p>
                                            </div>
                                        </div>
                                    ))}
                                </WingBlank>
                                <WhiteSpace size="lg" />
                            </div>


                        </div>

                    </div>
                </ul>
            </div>
        )
    };


    // 实现滚动
    componentDidMount() {
        let scroll = new BScroll('#main', {
            scrollY: true,
            click: true
        })
        // 保存this的指向
        let _this = this;
        function showCityInfo() {
            //实例化城市查询类
            var citysearch = new window.AMap.CitySearch();
            //AMap挂载在window对象上，由于作用域的影响，在组件内如果找不到变量，则会中断，不会继续往上找，所以需要使用window上的变量，直接采用window.xxx的方式获取该变量
            //自动获取用户IP，返回当前城市
            citysearch.getLocalCity(function (status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    if (result && result.city && result.bounds) {
                        var cityinfo = result.city;
                        var citybounds = result.bounds;
                        // document.getElementById('info').innerHTML = '您当前所在城市：' + cityinfo;

                        // 修改定位城市数据
                        _this.setState({
                            city: cityinfo
                        })
                        //地图显示当前城市
                        // mymap.setBounds(citybounds);
                    }
                } else {
                    // document.getElementById('info').innerHTML = result.info;
                }
            });
        }
        showCityInfo();
    };


    // 选择城市
    changeHash(hash) {
        this.props.h.push(hash)
    }

    // 添加足迹
    addHistoryList(item){
        // 创建通知，修改数据
        this.props.dispatch({
            type:"addHistory",
            history:item
        })
    }
}

export default connect()(Main)