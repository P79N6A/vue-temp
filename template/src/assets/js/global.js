import Vue from 'Vue'
const IMG_ROOT = '';
// const API_ROOT = 'http://127.0.0.1:8080/';
const API_ROOT = location.protocol +'//'+ location.host + '/';
const bus = new Vue();

export default {
    bus: bus,
    Event: Event,
    isLoading: isLoading,
    API_ROOT: API_ROOT,
    IMG_ROOT: IMG_ROOT,
    install(Vue, options) {
        Vue.prototype.global = {
            bus: bus,
            IMG_ROOT: IMG_ROOT,
            API_ROOT: API_ROOT
        }
    }
}