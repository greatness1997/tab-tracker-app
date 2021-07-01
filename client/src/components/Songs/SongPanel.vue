<template>
	<div>		
        <div class="white elevation-2">
					<panel title="Songs">
						<v-btn
							slot="action"
							:to="{name:'songs-create'}"
							class="purple lighten-2"
							dark
							medium
							absolute
							right
							middle
							fab
						>
							<v-icon>add</v-icon>
						</v-btn>
						<div v-for="song in songs" class="song" :key="song.title">
							<v-layout>
								<v-flex xs-6>
									<div class="song-title">{{song.title}}</div>
									<div class="song-artiste">{{song.artiste}}</div>
									<div class="song-genre">{{song.genre}}</div>
									<v-btn
										class="purple"
										dark
										:to="{name: 'song', params: {
									songId: song.id
								}
								}"
									>View</v-btn>
								</v-flex>

								<v-flex xs-6>
									<img class="album-image" :src="song.albumImageUrl" />
								</v-flex>
							</v-layout>
						</div>
					</panel>
				</div>
	</div>
</template>

<script>
	import SongsService from "@/services/SongsService";
	
	export default {
			data() {
				return {
					songs: null
				};
			},
			watch: {
				'$route.query.search': {
				immediate: true,
				async handler(value) {
					this.songs = (await SongsService.index(value)).data
				}
			}
		}
	}
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