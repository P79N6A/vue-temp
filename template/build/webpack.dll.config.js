/**
 * Created by xuchao211309 on 2017/7/24.
 */
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        vendor: ['vue/dist/vue.common.js'
            ,'vue'
            ,'vue-router'
            ,'vue-resource'
            ,'element-ui'
            ,'bootstrap'
            // , 'babel-polyfill'
            // ,'axios'
            // ,'vue-echarts-v3'
        ]
    },
    output: {
        path: path.join(__dirname, '../static/js'),
        filename: '[name].dll.js',
        library: '[name]_library'       // vendor.dll.js中暴露出的全局变量名
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, '.', '[name]-manifest.json'),
            name: '[name]_library'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};