2cl<template>
    <!-- expense list -->
    <div class="expense-list" id="expense-list">
        <div class="expense-list__info d-flex justify-content-between text-capitalize">
            <h5 class="list-item">expense</h5>
            <h5 class="list-item">amount</h5>
            <h5 class="list-item"></h5>
        </div>

        <!-- single expense -->
        <div>
            <div v-for="(item, index) in $store.state.itemList" :key="index" class="expense">
                <div class="expense-item d-flex justify-content-between align-items-baseline">

                    <h6 class="expense-title mb-0 text-uppercase list-item">- {{ item.name }}</h6>
                    <h5 class="expense-amount mb-0 list-item">{{ formatCurrency(item.amount) }}</h5>

                    <div class="expense-icons list-item">
                        <a href="#" class="edit-icon mx-2" @click="EDIT_ITEM(item)">
                        <i class="fas fa-edit edit--icon"></i>
                        </a>
                        <a href="#" class="delete-icon" @click="DELETE_ITEM(item)">
                        <i class="fas fa-trash delete--icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
		<!-- end of single expense -->
    </div>
</template>

<script>
import { mapMutations} from 'vuex'

export default {
    name: "expenseList",
    mounted(){
        this.$store.commit('SET_LIST')
        this.$store.commit("SET_EXPENSES");
        this.$store.commit("SET_BALANCE");


    },
    methods: {
        ...mapMutations(['EDIT_ITEM', 'DELETE_ITEM']),
        formatCurrency(amount){
            return new Intl.NumberFormat().format(amount)
        }
    }
}
</script>

<style>

</style>