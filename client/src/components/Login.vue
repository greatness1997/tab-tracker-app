<template>
	<div>
		<v-layout column>
			<v-flex xs6 offset-xs3>
				<div class="white elevation-2">
					<v-toolbar flat dense class="purple" dark>
						Login
					</v-toolbar>

					<div class="pl-4 pr-4 pt-2 pb-2">
						<form name="tab-tracker-form">
							<v-text-field label="E-mail" v-model="email"></v-text-field>
							<br />
							<v-text-field label="Password" type="password" v-model="password"></v-text-field>
						</form>
						<br />
						<div class="error" v-html="error" />
						<v-btn class="purple" dark @click="login">Login</v-btn>
					</div>
				</div>
			</v-flex>
		</v-layout>
	</div>
</template>	

<script>
	import AuthenticationService from "@/services/AuthenticationService";
	export default {
		data() {
			return {
				email: "",
				password: "",
				error: null
			};
		},
		methods: {
			async login() {
				try {
					await AuthenticationService.login({
						email: this.email,
						password: this.password
					});
				} catch (error) {
					this.error = error.response.data.error;
				}
			}
		}
	};
</script>

<style scoped>

	
</style>
