import axios from 'axios';


import qs from 'qs';


// 1.字符串拼接
const IP = "http://127.0.0.1:80";

// 2.axios.create写出公共部分

// const http = axios.create({
//     baseURL:"http://127.0.0.1:80"
// });



// 写接口请求


// 登录请求接口
// 暴露的2中写法
// 1.
// const login = function(acc,pwd){
//    return axios.post(IP+'/login.php',qs.stringify({acc,pwd}))
// }

// // 开始暴露
// export login;


// 第二种暴露的方法
// acc===用户名   pwd===密码
export function login(acc,pwd){
    return axios.post(IP+'/login.php',qs.stringify({acc,pwd}));
}


// 注册请求接口
export function reg(acc,pwd){
    return axios.post(IP+'/reg.php',qs.stringify({acc,pwd}));
}