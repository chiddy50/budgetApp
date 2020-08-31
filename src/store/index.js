import Vue from 'vue'
import Vuex from 'vuex'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    budgetAmount: 0,
    totalExpense: 0,
    expenseName: '',
    expenseAmount: 0,
    balance: 0,
    itemList: [
      
    ]
  },
  mutations: {
    SET_BUDGET: function(state, budget){
      state.budgetAmount = budget;
      this.commit("SET_EXPENSES")
      this.commit("SET_BALANCE")
      localStorage.setItem('budget', JSON.stringify(state.budgetAmount))
    },
    
    SET_EXPENSES: function(state){
      state.totalExpense = state.itemList.reduce((acc, item) => {
        acc += parseInt(item.amount)
        return acc;
      }, 0)
    },
    SET_BALANCE: function(state){
      state.balance = state.budgetAmount - state.totalExpense;
    },
    SET_EXPENSE: function(state, id){
      state.itemList.push({
        id: id,
        name: state.expenseName,
        amount: state.expenseAmount
      });
      localStorage.setItem('itemList', JSON.stringify(state.itemList))
      this.commit("SET_EXPENSES");
      this.commit("SET_BALANCE");
    },
    SET_EXPENSE_NAME(state, name){
      state.expenseName = name;
    },
    SET_EXPENSE_AMOUNT(state, amount){
      state.expenseAmount = amount;
    },

    SET_LIST(state){
      state.itemList = JSON.parse(localStorage.getItem('itemList')) || []
    },
    
    EDIT_ITEM(state, payload){
      console.log(payload);
      state.expenseAmount = parseInt(payload.amount);
      state.expenseName = payload.name;
      state.itemList = state.itemList.filter(item => item.id !== payload.id );
      this.commit("SET_EXPENSES");
      this.commit("SET_BALANCE");
    },
    DELETE_ITEM(state, payload){
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          state.itemList = state.itemList.filter(item => item.id !== payload.id );
          Swal.fire(
            'Deleted!',
            'Your item has been deleted.',
            'success'
          )
        }
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
