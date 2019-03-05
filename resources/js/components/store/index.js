import axios from 'axios'
export default {
    state:{
        category:[],
        post:[]
    },
    getters:{
        getAllCategory(state){
            return state.category
        },
        getAllPosts(state) {
            return state.post
        }
    },
    actions:{
        getCategories(context){
            axios.get('/category/get')
                .then((res)=>{
                    context.commit('categories', res.data.categories)
                })
        },
        getAllPosts(context){
            axios.get('/post/get')
                .then((response)=>{
                    console.log(response.data.posts)
                    context.commit('allPosts', response.data.posts)
                })
        }
    },
    mutations:{
        categories(state, data){
                return state.category = data;
        },
        allPosts(state, data){
            return state.post = data;
        }
    }
}