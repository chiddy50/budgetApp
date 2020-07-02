<template>
  <div>
    <child-one :header="header"></child-one>
    <child-two :header="header"></child-two>
    <input type="text" v-model="header">
  </div>
</template>

<script>
import Axios from 'axios';
import ChildOne from './Child1';
import ChildTwo from './Child2';
export default {
  name: 'Modal',
  components: {
    ChildOne,
    ChildTwo
  },  
  data(){
    return{
      header:'Initial header'
    }
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
