<template>
  <div id="app">
    <router-view v-show="!global.isLoading"/>
    <div id="bottomBar" v-show="!noBottomBar.some(item=>item==$route.name)" >
      <router-link to="/" :class="$route.name=='Home' ? 'selected' : ''"><i class="fas fa-home" :class="$route.name=='Home' ? 'selected' : ''"></i><div>首页</div></router-link>
      <router-link to="cate" :class="$route.name=='Cate' ? 'selected' : ''"><i class="fas fa-list-ul"></i> <div>分类</div></router-link>
      <router-link to="my" :class="$route.name=='My' ? 'selected' : ''"><i class="fas fa-user" :class="$route.name=='My' ? 'selected' : ''"></i> <div>我的</div></router-link>
    </div>
    <div id="loading" v-show="global.isLoading"
         style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(255,255,255,0.7)">
    </div>
    <Offline v-show="offline"></Offline>
    <Launch v-show="!launched"></Launch>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui';
import Launch from './components/Launch.vue'
import Offline from './components/Offline.vue'
import  './assets/js/flexible'
import global from './assets/js/global'
export default {
    name: 'App',
    components: {Indicator, Launch, Offline},
    data(){
        return {
            isLoading: false,
            launched: false,
            offline: false,
            noBottomBar: ['SelectCate', 'Search', 'SelectResult', 'Result', 'Detail', 'Play', 'Launch']
        }
    },

    mounted(){
//        Indicator.open({
//            text: '加载中...',
//            spinnerType: 'fading-circle'
//        })

        console.log(this.global);
        let _this = this;
        setTimeout(function(){
            _this.launched = true;
        }, 2000)
        global.bus.$on(global.Event.OFFLINE, () => {
            _this.offline = true;
        })

        global.bus.$on(global.Event.ONLINE, () => {
            _this.offline = false;
            _this.$router.go(0);
        })

        global.bus.$on('LOADING', function (e) {
            if(e){
                this.isLoading = true;
                Indicator.open({
                    text: '加载中...',
                    spinnerType: 'fading-circle'
                })
            }
            else {
                this.isLoading = false;
                Indicator.close();
            }
        })
    },
}
</script>

<style  lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height: 100%;
  }

  #bottomBar{
    background: #fff;
    color: #ccc;
    position: fixed;
    border-top: 1px solid #ccc;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 2px 0;
    display: flex;
    justify-content: space-around;

  }

  @media only screen
  and (device-width : 375px)
  and (device-height : 812px)
  and (-webkit-device-pixel-ratio : 3) {
    #bottomBar{
      padding: 2px 0 0.1rem 0;
    }
  }

  /*bottomBar里选中的效果。router-link的选择器是a标签*/
  a.selected{
    color: rgb(95, 160, 56)
  }

</style>
