import React, { Component } from 'react'
import BScroll from 'better-scroll'
// 导入城市列表
import cityList from '../../json/city.json'
export default class City extends Component {
    render() {
        return (
            <div id = "city" className="city" style={{height:"100%",overflow:"scroll"}}>
                <ul className="content">
                    <div className="city-hostcity" style={{height:"100%"}}>
                        <p style={{ lineHeight: "40px", backgroundColor: "#eee", margin: "0", textIndent: "20px" }}>热门城市</p>
                        <div style={{ padding: "0 20px" }}>
                            {
                                cityList.hotcity.map(item => (
                                    <p key={item} style={{ lineHeight: "35px", margin: "0", textIndent: "5px", borderBottom: "1px solid #ddd" }}>{item}</p>
                                ))
                            }
                        </div>
                    </div>

                    <div className="allcity" >
                        {
                            cityList.city.map(item => (
                                <div key={item.title} id={item.title}>
                                    <p key={item.title} style={{ lineHeight: "40px", backgroundColor: "#eee", margin: "0", textIndent: "20px" }}>{item.title}</p>
                                    <div style={{ padding: "0 20px" }}>
                                        {item.name.map(value => (
                                            <p key={value} style={{ lineHeight: "35px", margin: "0", textIndent: "5px", borderBottom: "1px solid #ddd" }}>{value}</p>
                                        ))}
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </ul>

                <div style={{position:"fixed",right:0,top:100,width:"20px",textAlign:"center"}}>
                    {
                        cityList.city.map(item=>(
                            <p onClick={ this.selectArea.bind(this,item.title) } key={item.title}>{item.title}</p>
                        ))
                    }
                </div>
            </div>
        )
    };

    componentDidMount(){
        this.scroll = new BScroll("#city",{
            click:true,
            scrollY:true
        });
    };


    selectArea(val){
        // 点击之后，滚动到对应的区域中
        this.scroll.scrollToElement("#" + val,600)
    }
}
