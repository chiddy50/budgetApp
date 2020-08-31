<template>
    <div class="row my-3">
        <div class="col-md-4 col-sm-12 text-center mb-2">
            <h6 class="text-uppercase info-title">budget</h6>
            <span class="budget-icon"><i class="fas fa-money-bill-alt"></i></span>
            <h4 class="text-uppercase mt-2 budget" id="budget">
                <span>$ </span><span id="budget-amount">{{ formatCurrency($store.state.budgetAmount) || null}}</span>
            </h4>
        </div>
        <div class="col-md-4 col-sm-12 text-center">
            <h6 class="text-uppercase info-title">expenses</h6>
            <span class="expense-icon"><i class="far fa-credit-card"></i></span>
            <h4 class="text-uppercase mt-2 expense" id="expense"><span>$ </span>
            <span id="expense-amount">{{ formatCurrency($store.state.totalExpense) }}</span>
            </h4>
        </div>
        <div class="col-md-4 col-sm-12 text-center">
            <h6 class="text-uppercase info-title">balance</h6>
            <span class="balance-icon"><i class="fas fa-dollar-sign"></i></span>
            <h4 class="text-uppercase mt-2 balance" id="balance">
                <span :class="filterBalance($store.state.balance)">$ </span>
                <span id="balance-amount" :class="filterBalance($store.state.balance)">
                    {{ formatCurrency($store.state.balance) }}
                </span>
            </h4>
        </div>
    </div>
</template>

<script>
export default {
    name: 'balanceInfo',
    methods: {
        filterBalance(balance){
            if (balance < 0) {
                return 'showRed'
            }else if (balance === 0) {
                return "showBlack"
            } else if(balance > 0) {
                return 'showGreen'
            }
        }, 
        formatCurrency(amount){
            return new Intl.NumberFormat().format(amount)
        }
    }
}
</script>

<style>

</style>