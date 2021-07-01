<template>
	<div>
		<v-toolbar fixed class="purple" dark>
			<v-toolbar-title class="mr-4">
				<div class="header-title">TabTracker</div>
			

			</v-toolbar-title>
			<v-toobar-items>
			<v-btn flat dark :to="{name: 'songs' }">Browse</v-btn>
			</v-toobar-items>
			<v-spacer></v-spacer>
			<v-toolbar-items>
				<v-btn v-if="!$store.state.isUserLoggedIn" flat dark :to="{name: 'login' }">login</v-btn>
				<v-btn v-if="!$store.state.isUserLoggedIn" flat dark :to="{name: 'register' }">Sign Up</v-btn>
				<v-btn v-if="$store.state.isUserLoggedIn" flat dark @click="logout">Log out</v-btn>
			</v-toolbar-items>
		</v-toolbar>
	</div>
</template>

<script>
	
	export default {
		methods: {
			logout(){
				this.$store.dispatch('setToken', null)
				this.$store.dispatch('setToken', null)
				this.$router.push({
					name: 'songs'
				})
			}
		}
	};
</script>

<style scoped>
</style>