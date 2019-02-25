var merge = require('webpack-merge')
var devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  API_ROOT: '""'
  // API_ROOT: 'window.location.origin + "/hitchhike/v3/public"'
  // API_ROOT: 'http://hotchat-oa.iqiyi.com/hitchhike/v3/public'//二期正式
})
