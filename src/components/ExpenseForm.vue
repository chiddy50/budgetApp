<template>
    <div>
        <!-- expense feedback -->
        <div class="expense-feedback alert alert-danger text-capitalize">expense feedback</div>
        <!-- expense form -->
        <form @submit.prevent="submitExpense" class=" expense-form">
            <h5 class="text-capitalize form__label">please enter your expense</h5>
            <div class="form-group">
                <input type="text" class="form-control expense-input" v-model="name">
            </div>
            <h5 class="text-capitalize form__label">please enter expense amount</h5>
            <div class="form-group">
                <input type="number" class="form-control expense-input" v-model="amount">
            </div>
            <!-- submit button -->
            <button type="submit" class="btn text-capitalize expense-submit" id="expense-submit">add expense</button>
        </form>
    </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
    name: 'expenseForm',
    data(){
        return {
            name: "",
            amount: 0
        }
    },
    computed: {
        expenseName(){
            return this.$store.state.expenseName
        },
        expenseAmount(){
            return this.$store.state.expenseAmount
        }
    },
    methods: {
        submitExpense(){
            if (this.name === "" || this.amount === "") {
                Swal.fire(
                    'Sorry!',
                    'Fill all fields.',
                    'error'
                )
                return
            }
            let self = this
            this.$store.commit('SET_EXPENSE', this.$uuid.v1())
            self.name = ""
            self.amount = ""
        }
    },
    watch: {
        expenseName(name){
            this.name = name
        },
        expenseAmount(amount){
            this.amount = amount
        },
        name(name){
            this.$store.commit('SET_EXPENSE_NAME', name)
        },
        amount(amount){
            let val = parseInt(amount)
            this.$store.commit('SET_EXPENSE_AMOUNT', parseInt(val))
        }
    }
}
</script>

<style>

</style>