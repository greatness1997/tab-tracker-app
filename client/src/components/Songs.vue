<template>
	<div>
		<v-layout row wrap>
			<v-flex xs6 offset-xs3>
				<div class="white elevation-2">
					<panel title="Songs">
						<div v-for="song in songs" :key="song.title">
							{{song.title}} -
							{{song.artiste}} - 
							{{song.album}}
						</div>
					</panel>
				</div>
			</v-flex>
		</v-layout>
	</div>
</template>

<script>
	import SongsService from '@/services/SongsService'
	import Panel from "@/components/Panel";
	export default {
		components: {
			Panel
		},
		data() {
			return {
				songs: null
			} 
		},
		async mounted () {
			this.songs = (await SongsService.index()).data
		},
	};
</script>

<style scoped>
</style>