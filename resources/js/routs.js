import adminHome from './components/admin/adminHome.vue'
import c_list from './components/admin/category/list.vue'
import c_new from './components/admin/category/new.vue'
import c_view from './components/admin/category/view.vue'


export const routes = [
    { path: '/home', component: adminHome },
    { path: '/category/list', component: c_list },
    { path: '/category/new', component: c_new },
    { path: '/category/view', component: c_view },
]