<template>
  <div class="myHome">
      <h3>My Home</h3>
      <button @click="show = !show">Show List</button>
      <div v-if="show">
        <List></List>
      </div>
  </div>
</template>

<script>
import LoadingComponent from "@/components/LoadingComponent";
import ErrorComponent from '@/components/ErrorComponent';
const List = () => ({
    component: import("@/components/List.vue"),
    loading: LoadingComponent,
    error: ErrorComponent,
    timeout: 3000 
});

export default {
    data(){
        return {
            show: false
        }
    },
    components: {
        // List: () => import("@/components/List.vue")
        List
    }
}
</script>

<style scoped>
.myHome{
    border: 1px red solid;
    text-align: center;
}
</style>