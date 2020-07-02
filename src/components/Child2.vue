<template>
  <div>
      <h3>{{ myHeader }}</h3>
      <h6>{{ value }}</h6>
  </div>
</template>
<script>
// import { bus } from '../main'

export default {
    name: 'child2',
    props: {
        header: String
    },
    data(){
        return {
            myHeader: this.header,
            value: 0
        }
    },
    created (){
        this.$bus.$on('changeIt', (data) => {
        this.myHeader = data;
        })

        this.$bus.$on('addVal', (value) => {
            this.value = value
        })
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