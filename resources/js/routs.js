import adminHome from './components/admin/adminHome.vue'
import posts from './components/admin/test.vue'

export const routes = [
    { path: '/home', component: adminHome },
    { path: '/post', component: posts }
]