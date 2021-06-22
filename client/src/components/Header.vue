<template>
	<div>
		<v-toolbar fixed class="purple" dark>
			<v-toolbar-title class="mr-4">
				<div class="header-title">TabTracker</div>
			

			</v-toolbar-title>
			<v-toobar-items>
			<v-btn flat dark @click="navigateTo({name: 'songs' })">Browse</v-btn>
			</v-toobar-items>
			<v-spacer></v-spacer>
			<v-toolbar-items>
				<v-btn v-if="!$store.state.isUserLoggedIn" flat dark @click="navigateTo({name: 'login' })">login</v-btn>
				<v-btn v-if="!$store.state.isUserLoggedIn" flat dark @click="navigateTo({name: 'register' })">Sign Up</v-btn>
				<v-btn v-if="$store.state.isUserLoggedIn" flat dark @click="logout">Log out</v-btn>
			</v-toolbar-items>
		</v-toolbar>
	</div>
</template>

<script>
	
	export default {
		methods: {
			navigateTo(route) {
				this.$router.push(route);
			}
		},
		logout(){
			this.$store.dispatch('setToken', null)
			this.$store.dispatch('setToken', null)
			this.$router.push({
				name: 'root'
			})
		}
	};
</script>

<style scoped>
</style>