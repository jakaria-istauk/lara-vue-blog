<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <!-- left column -->
                <div class="col-md-6">
                    <!-- general form elements -->
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title">Update Category</h3>
                        </div>
                        <!-- /.card-header -->
                        <!-- form start -->
                        <form role="form" @submit.prevent="updateCategory()">
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="name">Category Name</label>
                                    <input type="text"
                                           class="form-control"
                                           :class="{ 'is-invalid': form.errors.has('name') }"
                                           id="name"
                                           placeholder="Enter Category Name"
                                           name="name"
                                           v-model="form.name">
                                    <has-error :form="form" field="name"></has-error>
                                </div>
                            </div>
                            <!-- /.card-body -->

                            <div class="card-footer">
                                <button type="submit" class="btn btn-primary">Update</button>
                            </div>
                        </form>
                    </div>
                    <!-- /.card -->
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Form from 'vform'
    import Swal from 'sweetalert2'
    import axios from 'axios'
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
    });
    export default {
        name: "edit",
        mounted(){
            axios.get(`/category/edit/${this.$route.params.id}`)
                .then((response)=>{
                    this.form.fill(response.data.category);
                })
        },
        data() {
            return {
                // Create a new form instance
                form: new Form({
                    name: '',
                })
            }
        },

        methods: {
            updateCategory() {
                // Submit the form via a POST request
                this.form.post(`/category/update/${this.$route.params.id}`)
                    .then(()=>{
                        this.$router.push('/category/list')
                        Toast.fire({
                            type: 'success',
                            title: 'Category Updated successfully'
                        })

                    })
            }
        }
    }
</script>

<style scoped>

</style>