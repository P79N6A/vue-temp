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
                title: ''
            }
        }
    ],
});
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        if(navigator.userAgent.toLowerCase().indexOf('iphone') > -1){
          router.changeTitle(to.meta.title);
        }
        else{
          document.title = to.meta.title
        }
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

router.changeTitle = (title) => {
    document.title = title
    var ifm = document.createElement('iframe');
    ifm.style.display = 'none';
    document.body.appendChild(ifm);
    // ifm.onload = function () {
        setTimeout(function () {
            document.body.removeChild(ifm);
        }, 0)
    // }
}

export default router
