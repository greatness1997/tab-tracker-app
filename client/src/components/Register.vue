<template>
	<div>
		<v-layout row wrap>
			<v-flex xs6 offset-xs3>
				<panel title="Register">

					<div class="pl-4 pr-4 pt-2 pb-2">
						<v-text-field label="E-mail" v-model="email"></v-text-field>
						<br />
						<v-text-field label="Password" type="password" v-model="password"></v-text-field>
						<br />
						<div class="error" v-html="error" />
						<v-btn class="purple" dark @click="register">Register</v-btn>
					</div>
				</panel>
			</v-flex>
		</v-layout>
	</div>
</template>	

<script>
	import AuthenticationService from "@/services/AuthenticationService";
	import Panel from "@/components/Panel";
	export default {
		data() {
			return {
				email: "",
				password: "",
				error: null
			};
		},
		methods: {
			async register() {
				try {
					const response = await AuthenticationService.register({
						email: this.email,
						password: this.password
					});
					this.$store.dispatch('setToken', response.data.token)
					this.$store.dispatch('setUser', response.data.user)
				} catch (error) {
					this.error = error.response.data.error;
				}
			}
		
		},
		components: {
			Panel
		}
	};
</script>

<style scoped>

	
</style>
