<template>
	<div>
		<v-layout row wrap>
			<v-flex xs6 offset-xs3>
				<song-search-panel />
				<song-panel class='mt-3'/>
			</v-flex>
		</v-layout>
	</div>
</template>

<script>
	import SongsService from "@/services/SongsService";
	import SongPanel from "./SongPanel"
	import SongSearchPanel from "./SongSearchPanel"
	export default {

		components: {
			SongPanel,
			SongSearchPanel
		},
	
		data() {
			return {
				songs: null
			};
		},
		async mounted() {
			this.songs = (await SongsService.index()).data;
		}
	};
</script>

<style scoped>
	.song {
		padding: 20px;
		height: 320px;
		overflow: hidden;
	}

	.song-title {
		font-size: 30px;
	}

	.song-artiste {
		font-size: 24px;
	}

	.song-genre {
		font-size: 18px;
	}
	.album-image {
		width: 70%;
		margin: 0 auto;
	}
</style>