<template>
  <div class="home container">
      <!-- <MyHome></MyHome> -->
        <!-- <Cookie position="top" v-if="open"/> -->
        <div class="form-builder mt-5 p-3">
            <FormBuilder type="template"/>
        </div>
  </div>
</template>

<script>
// import MyHome from './components/MyHome';
// import Cookie from '@/Cookie.vue';
import FormBuilder from 'v-form-builder';

export default {
    name: 'home',
    data(){
        return {
           open: false
        }
    },
    components: {
        // MyHome,
        // Cookie,
        FormBuilder
    },
    mounted(){
        setTimeout(() => {
            this.open = true
        }, 6000);
    },
    methods: {
        
    }
}
</script>

<style scoped>
.form-builder{
    border: 1px dashed #000;
}
</style>