// 导入状态机
import { createStore, combineReducers } from 'redux';

// combineReducers多状态库

// 创建并导出store
export default createStore(combineReducers({
    tes,
    historyArr
}))

// 创建reducer
function tes(state = "test", action) {
    switch (action.type) {
        default: return state;
    }
}

function historyArr(state = [], action) {
    // 数组去重，并将最新的数据放在最前
        // 方法一：
        for(let i = 0 ;i<state.length;i++){
            if(state[i].num === action.history.num ){
                state.splice(i,1);
            }
        }


        // 方法二：利用fliter方法过滤，返回的值为true，那就往添加到新数组中，如果返回的是false，则不会添加到新数组中
        // let newArr = state.filter(item=>{
        //     return item.num != action.history.num
        // })
    switch (action.type) {
        // 方法一的接收方式
        // case "addHistory": return [action.history,...state];

        // 方法二的接收方式
        // case "addHistory": return [action.history,...newArr];
        
        // 方法三：直接在方法二的基础上简写
        case "addHistory": return [action.history,...state.filter(item => item.num != action.history.num)]
        default: return state;
    }
}