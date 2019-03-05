<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row d-flex justify-content-center">
                <div class="col-md-12">
                    <div class="card align-content-center">
                        <div class="card-header">
                            <h3 class="card-title float-left">Post Table</h3>
                            <router-link to="/post/new" class="btn btn-primary float-right">Add Post</router-link>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <table class="table table-bordered">
                                <tr>
                                    <th>SL</th>
                                    <th>Author</th>
                                    <th>Category</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Photo</th>
                                    <th>Action</th>
                                </tr>
                                <tr v-for="(post, index) in allPosts">
                                    <td>{{index+1}}</td>
                                    <td v-if="post.user">{{post.user.name}}</td><td v-else>Null</td>
                                    <td v-if="post.category">{{post.category.name}}</td><td v-else>Null</td>
                                    <td>{{post.title}}</td>
                                    <td>{{post.description}}</td>
                                    <td><img :src="post.image" height="100" width="100"></td>
                                    <td>
                                        <a >Edit</a> |
                                        <a href="" @click.prevent="">Delete</a>
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
    export default {
        name: "list",
        mounted() {
            return this.$store.dispatch("getAllPosts")
        },
        computed:{
            allPosts(){
                return this.$store.getters.getAllPosts

            }
        },
        methods:{
        }
    }
</script>

<style scoped>

</style>