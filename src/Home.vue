<template>
    <div class="mt-3">
        <!-- <Cookie position="top" v-if="open"/> -->
        <div class="row" style="margin: 0px 20px;">
            <div class="col-md-4">
                <div class="form-group">
                    <label>Form Config Title</label>
                    <input type="text" class="form-control" v-model="title">
                </div>
            </div>
        </div>

        <hr>

        <form-builder type="template" v-model="formData"></form-builder>

        <div class="text-right mt-3" style="margin: 0px 20px;">
            <button class="btn btn-default" @click="resetForm">Reset</button>
            <button class="btn btn-primary" @click="saveForm">Save</button>
        </div>
    </div>
</template>

<script>
// import Cookie from '@/Cookie.vue';
import FormBuilder from 'v-form-builder';
import axios from 'axios';

export default {
    name: 'home',
    data(){
        return {
            open: false,
            title: "",
            formData: null,
            id: "",
            storageForms: []
        }
    },
    components: {
        // Cookie,
        FormBuilder
    },
    mounted(){
        // setTimeout(() => {
        //     this.open = true
        // }, 6000);
    },
    methods: {
        saveForm(){
            let self = this;
            let data = {
                // user: self.formData._uniqueId,
                user: 1,
                title: self.title,
                data: JSON.stringify(self.formData)
            }
            axios.post("http://isoraeosarenren.pythonanywhere.com/api/", data)
            .then(response => {
                console.log(response);                
            })
            .catch(err =>  console.log(err))
        },
        resetForm(){
            this.formData.type = "";
            this.formData.sections = [];
        }
    }
}
</script>

<style scoped>
.form-builder{
    border: 1px dashed #000;
}
</style>