<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <!-- left column -->
                <div class="col-md-6">
                    <!-- general form elements -->
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title">Add New Category</h3>
                        </div>
                        <!-- /.card-header -->
                        <!-- form start -->
                        <form role="form" @submit.prevent="addCategory()">
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="name">Category Name</label>
                                    <input type="text"
                                           class="form-control"
                                           :class="{ 'is-invalid': form.errors.has('CategoryName') }"
                                           id="name"
                                           placeholder="Enter Category Name"
                                           name="CategoryName"
                                           v-model="form.CategoryName">
                                    <has-error :form="form" field="CategoryName"></has-error>
                                </div>
                            </div>
                            <!-- /.card-body -->

                            <div class="card-footer">
                                <button type="submit" class="btn btn-primary">Save</button>
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
    export default {
        name: "new",
        data() {
            return {
                // Create a new form instance
                form: new Form({
                    CategoryName: '',
                })
            }
        },

        methods: {
            addCategory() {
                // Submit the form via a POST request
                this.form.post('/category/add')
                    .then(()=>{
                        this.$router.push('/category/list')
                    })
            }
        }
    }
</script>

<style scoped>

</style>