<template>
    <div>
        <p>User Id is {{ $route.params.id }}</p>
        <button @click="goHome">Go Home</button>
        <button v-if="previousPage" @click="goPreviousPage">Previous Page</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            previousPage: ''
        }
    },
    watch: {
        '$route' (to, from) {
            alert(to.params.id);
            this.previousPage = from.fullPath
            console.log(to);
            console.log(from);
            
        }
    },
    created(){
        alert('User '+ this.$route.params.id);

    },
    methods: {
        goHome(){
            this.$router.push('/');
        },
        goPreviousPage(){
            this.$router.push(`${this.previousPage}`);
        }
    }
}
</script>

<style>

</style>