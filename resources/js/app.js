/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


require('./bootstrap');

window.Vue = require('vue');
//Vue Router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import {routes} from "./routs";
const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: 'history'
})

//Vue X
import Vuex from 'vuex'
Vue.use(Vuex)
import storeData from './components/store/index'
const store = new Vuex.Store(
    storeData
)

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin-main', require('./components/admin/adminMaster.vue').default);

// CommonJS
const Swal = require('sweetalert2')
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});
window.Toast = Toast;

//Vform Configuration
import { Form, HasError, AlertError } from 'vform'


Vue.component(Form.name, Form)
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
window.Form = Form;

const app = new Vue({
    el: '#app',
    router,
    store
});
