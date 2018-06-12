import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

let router = new Router({
    // mode: 'history',
    // base: '/',

    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {
                title: '爱学习'
            }
        }
    ],
});
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

router.afterEach((to, from) => {
    // fetch('http://dm.iqiyi.com/mlog/send/reliao/qos?t=start').then(
    //     function (response) {
    //         return response.body;
    //     }
    // );
})
export default router
