<template>
	<div id="app">
		<div class="container-fluid">
			<div class="row">
				<div class="col-11 mx-auto pt-3">
					<h3 class="text-uppercase mb-4">budget app</h3>
					<div class="row">
						<div class="col-md-5 my-3">
							<budget-form></budget-form>
						</div>

						<div class="col-md-7">
							<!-- app info -->
							<balance-info></balance-info>
						</div>
					</div>

					<div class="row">
						<div class="col-md-5 my-3">
							<expense-form></expense-form>
						</div>	

						<div class="col-md-7 my-3">
							<expense-list></expense-list>
						</div>
					</div>
				</div>
			</div>

			

		</div>		
	</div>
</template>

<script>
import BudgetForm from '@/components/BudgetForm.vue'
import BalanceInfo from '@/components/BalanceInfo.vue'
import ExpenseForm from '@/components/ExpenseForm.vue'
import ExpenseList from '@/components/ExpenseList.vue'

export default {
	name: "app",
	components: {
		BudgetForm,
		BalanceInfo,
		ExpenseForm,
		ExpenseList
	}
}
</script>

<style lang="scss">

</style>
