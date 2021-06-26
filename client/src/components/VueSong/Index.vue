<template>
	<div>
		<v-layout>
			<v-flex xs6>
				<song-metadata :song="song" />
			</v-flex>

			<v-flex xs6 ml-2>
				<You-tube :youtubeId="song.youtubeId" />
			</v-flex>
		</v-layout>

		<v-layout>
			<v-flex xs6 mt-2 mr-2>
				<tab :song="song"/>
			</v-flex>

			<v-flex xs6 mt-2>
				<lyrics :song="song" />
			</v-flex> 
		</v-layout>


		<panel /> 
	</div>
</template>

<script>
	import SongMetadata from "./SongMetadata";
	import Lyrics from "./Lyrics";
	import Tab from "./Tab";
	import YouTube from "./YouTube";
	import SongsService from "@/services/SongsService";
	import Panel from "@/components/Panel";

	export default {
		components: {
			Panel,
			SongMetadata,
			YouTube,
			Lyrics,
			Tab
		},
		data() {
			return {
				song: {}
			};
		},
		async mounted() {
			const songId = this.$store.state.route.params.songId;
			this.song = (await SongsService.show(songId)).data;
		}
	};
</script>

<style scoped>
	textarea {
		width: 100%;
		font-family: monospace;
		border: none;
		height: 600px;
		border-style: none;
		border-color: transparent;
		overflow: auto;
		padding: 40px;
	}
</style>