import adminHome from './components/admin/adminHome.vue'
import c_list from './components/admin/category/list.vue'
import c_new from './components/admin/category/new.vue'
import c_edit from './components/admin/category/edit.vue'


//post
import allPost  from './components/admin/post/list.vue'
import editPost  from './components/admin/post/edit.vue'
import newPost  from './components/admin/post/new.vue'


export const routes = [
    { path: '/home', component: adminHome },
    { path: '/category/list', component: c_list },
    { path: '/category/new', component: c_new },
    { path: '/category/edit/:id', component: c_edit },

    //post Routes
    { path: '/post/list', component: allPost },
    { path: '/post/new', component: newPost },
    { path: '/post/edit', component: editPost },
]