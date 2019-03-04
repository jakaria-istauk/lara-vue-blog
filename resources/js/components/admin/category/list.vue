<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row d-flex justify-content-center">
                <div class="col-md-6">
                    <div class="card align-content-center">
                        <div class="card-header">
                            <h3 class="card-title float-left">Category Table</h3>
                            <router-link to="/category/new" class="btn btn-primary float-right">Add Category</router-link>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <table class="table table-bordered">
                                <tr>
                                    <th>SL</th>
                                    <th>Category Name</th>
                                    <th>Action</th>
                                </tr>
                                <tr v-for="(category, index) in getCategory">
                                    <td>{{ index+1 }}</td>
                                    <td>{{ category.name }}</td>
                                    <td>
                                        <router-link :to="`/category/edit/${category.id}`">Edit</router-link> |
                                        <a href="" @click.prevent="deleteCategory(category.id)">Delete</a>
                                    </td>
                                </tr>

                            </table>
                        </div>
                        <!-- /.card-body -->
                    </div>
                    <!-- /.card -->
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import axios from 'axios'
    import Toast from 'sweetalert2'
    export default {
        name: "list",
        mounted() {
            return this.$store.dispatch("getCategories")
        },
        computed:{
            getCategory(){
               return this.$store.getters.getAllCategory

            }
        },
        methods:{
            deleteCategory(id){
                axios.get('/category/delete/'+id)
                    .then(()=>{
                        this.$store.dispatch("getCategories")
                        Toast.fire({
                            type: 'success',
                            title: 'Category Deleted successfully'
                        })

                    })
            }
        }
    }
</script>

<style scoped>

</style>