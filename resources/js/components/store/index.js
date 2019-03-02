import axios from 'axios'
export default {
    state:{
        category:[],
    },
    getters:{
        getAllCategory(state){
            return state.category
        }
    },
    actions:{
        getCategories(context){
            axios.get('/category/get')
                .then((res)=>{
                    context.commit('categories', res.data.categories)
                })
        }
    },
    mutations:{
        categories(state, data){
                return state.category = data;
        }
    }
}