<template>
    <div>
        <!-- budget feedback -->
        <div class="budget-feedback alert alert-danger text-capitalize">budget feedback</div>
        <!-- budget form -->
        <form @submit.prevent="submitBudget" class=" budget-form">
            <h5 class="text-capitalize">please enter your budget</h5>
            <div class="form-group">
                <input type="number" class="form-control budget-input" @keyup="submitBudget" v-model="budget" id="budget-input">
            </div>
            <!-- submit button -->
            <button type="submit" class="btn text-capitalize budget-submit">calculate</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'budgetForm',
    data(){
        return {
            budget: parseInt(JSON.parse(localStorage.getItem('budget'))) || 0
        }
    },
    mounted(){
        this.$store.commit("SET_BUDGET", this.budget)
    },  
    methods: {
        submitBudget(){
            this.$store.commit("SET_BUDGET", this.budget)
        }
    },
    watch: {
        budget(budget){
            this.$store.state.budgetAmount = budget
        }
    }
}
</script>

<style>

</style>