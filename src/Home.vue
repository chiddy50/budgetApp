<template>
    <div class="mt-3">
        <!-- <Cookie position="top" v-if="open"/> -->
        <div class="row" style="margin: 0px 20px;">
            <div class="col-md-4">
                <div class="form-group">
                    <label>Form Config Title</label>
                    <input type="text" class="form-control" v-model="name">
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
            name: "",
            formData: null,
            id: "",
            storageForms: []
        }
    },
    components: {
        // MyHome,
        // Cookie,
        FormBuilder
    },
    mounted(){
        // setTimeout(() => {
        //     this.open = true
        // }, 6000);
        this.getStorage()
    },
    methods: {
        saveForm(){
            let self = this;
            let data = {
                user: self.name,
                formData: self.formData
            }
            console.log('Form name:  '+ this.name);
            console.log('JSON data: ',JSON.stringify(data));         
            
            this.storageForms.push(data);
            localStorage.setItem('formData', JSON.stringify(this.storageForms));
        },
        resetForm(){
            this.formData.type = "";
            this.formData.sections = [];
        },
        getStorage(){
            if (localStorage.getItem('formData') === null) {
                this.storageForms = [];
            }else{
                this.storageForms = JSON.parse(localStorage.getItem('formData'));
            }
        },
    }
}
</script>

<style scoped>
.form-builder{
    border: 1px dashed #000;
}
</style>