<template>
  <div>
      <h1 v-on:click="changeHeader">{{myHeader}}</h1>
      <button @click="increase">Add</button>
      <p>{{ value }}</p>
  </div>
</template>
<script>
// import { bus } from '../main'
export default {
    name: 'child1',
    data(){
        return {
            value: 0,
            myHeader: this.header
        }
    },
    props: {
        header:{
            type: String
        } 
    },
    methods: {
        changeHeader (){
            this.myHeader = "changed header";
            this.$bus.$emit('changeIt', 'changed header');
        },
        increase(){
            this.value++
            this.$bus.$emit('addVal', this.value);
        }
    },
    watch: {
        header(val){
            this.myHeader = val
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>