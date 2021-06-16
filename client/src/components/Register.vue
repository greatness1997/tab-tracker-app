<template>
	<v-content>
		<v-container class="fill-height" fluid>
			<v-row align="center" justify="center">
				<v-col cols="12" sm="8" md="8">
					<v-toolbar flat dense class="cyan" dark>
						<v-toolbar-title>Register</v-toolbar-title>
					</v-toolbar>
					<div class="pl-4 pr-4 pt-2 pb-2">
						<v-text-field label="E-mail" v-model="email"></v-text-field>
						<br />
						<v-text-field label="Password" v-model="password"></v-text-field>
						<br />
						<div class="error" v-html="error" />
						<v-btn @click="register">Register</v-btn>
					</div>
				</v-col>
			</v-row>
		</v-container>
	</v-content>
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
			async register() {
				try {
					await AuthenticationService.register({
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
	.error {
		color: red;
	}
	
</style>
