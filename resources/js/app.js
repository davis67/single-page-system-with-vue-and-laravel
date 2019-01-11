
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
//window.Vuetify = require('vuetify');
import Vuetify from 'vuetify'


Vue.use(Vuetify);
Vue.component('app-home', require('./components/AppHome.vue'));
 const app =  new Vue({
      el: '#app'
    })
  
