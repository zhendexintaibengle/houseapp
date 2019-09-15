import React, { Component } from 'react'

export default class Mapmy extends Component {

    constructor() {
        super();
        this.state = {

        }
    };


    render() {
        return (
            <div style={{ width: '100%', height: '100%', backgroundColor: "#ccc" }}>
                <div id="container" style={{ width: '100%', height: '100%', backgroundColor: "#ccc" }}></div>
                {/* <div id="tip">
                    <input type="text" id="keyword" name="keyword" value="请输入关键字：(选定后搜索)" onfocus='this.value=""' />
                </div> */}
            </div>
        )
    };

    componentDidMount() {
        var windowsArr = [];
        var marker = [];
        var mymap = new window.AMap.Map("container", {
            resizeEnable: true,
            center: [116.397428, 39.90923],
            zoom: 2
        });
        //获取用户所在城市信息
        function showCityInfo() {
            //实例化城市查询类
            var citysearch = new window.AMap.CitySearch();
            //自动获取用户IP，返回当前城市
            citysearch.getLocalCity(function (status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    if (result && result.city && result.bounds) {
                        var cityinfo = result.city;  //获取当前定位城市
                        var citybounds = result.bounds;  //获取当前定位城市坐标
                        // document.getElementById('info').innerHTML = '您当前所在城市：' + cityinfo;
                        //地图显示当前城市
                        mymap.setBounds(citybounds);
                    }
                } else {
                    // document.getElementById('info').innerHTML = result.info;
                }
            });
        }
        showCityInfo();
        console.log(window)
        // window.AMap.plugin(['window.AMap.Autocomplete','window.AMap.PlaceSearch'],function(){
        //     var autoOptions = {
        //       city: "北京", //城市，默认全国
        //       input: "keyword"//使用联想输入的input的id
        //     };
        //     var autocomplete= new window.AMap.Autocomplete(autoOptions);
        //     var placeSearch = new window.AMap.PlaceSearch({
        //           city:'北京',
        //           mymap:mymap
        //     })
        //     window.AMap.event.addListener(autocomplete, "select", function(e){
        //        //TODO 针对选中的poi实现自己的功能
        //        placeSearch.setCity(e.poi.adcode);
        //        placeSearch.search(e.poi.name)
        //     });
        //   });
    }
}