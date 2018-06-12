import axios from 'axios'
import utils from './utils'
import global from './global'
let vue = null;
/**
 * 发送http请求的方法
 * @param url
 * @param params 接口参数
 * @param method http方法，默认jsonp
 * @param timeout 超时时间
 * @returns {*|Promise$1}
 */
let request = async (url, params, method, timeout)=>{

    return new Promise(function(resolve, reject){
        
        url = global.API_ROOT + url;
        // if(!method){
        axios.get(url,
            {
                
            }).then(
            function (res) {
                resolve(res.data);
                return res;
            },
            function(err){
                reject(err);
            })
        // }
        // else if(method == 'get'){
        //     Vue.http.get(url,
        //         {
        //             params: params,
        //         }).then(function (res) {
        //         resolve(res);
        //         return res;
        //     })
        // }
    }).catch(function(e){
        console.log(e)
    })
};

export default {
    install(Vue, options){
            vue = Vue;
    },


}