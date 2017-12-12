import Vue from 'vue'
import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-chalk/index.css'
//import './element-variables.scss'
import App from './App.vue'
import './theme/index.css'

import router from './router/router'

Vue.use(ElementUI)

/**
 *  定义常量信息
 *  @DOMAINNAME：客户端地址
 *  @SERVERNAME：服务端地址
 *  @API_SERVER：服务端接口
 */
let DOMAINNAME = ''
let SERVERNAME = ''
let API_SERVER = ''

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
