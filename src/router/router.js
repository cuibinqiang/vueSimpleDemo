/**
 *  路由文件
 *  引入[Vue, VueRouter]模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

/**
 *  加载模块
 */
Vue.use(VueRouter)

/**
 *  配置路由
 */
const router = new VueRouter({
    routes:[
        {   //登录页面
            path:'/login',
            name:'login',
            title:'vue login',
            component:function (resolve) {
                require(['../components/login.vue'], resolve)
            }
        },
		{   //首页
            path:'/index',
            name:'index',
            title:'vue index',
            component:function (resolve) {
                require(['../components/index.vue'], resolve)
            }
        },
		{   //标签页
            path:'/tabs',
            name:'tabs',
            title:'vue tabs',
            component:function (resolve) {
                require(['../components/tabs.vue'], resolve)
            }
        },
        {   //主页面
            path:'/home',
            name:'home',
            title:'home',
            component:function (resolve) {
                require(['../components/home.vue'], resolve)
            }
        }
    ]
})

export  default  router