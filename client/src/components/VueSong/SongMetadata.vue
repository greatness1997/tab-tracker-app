<template>
	<div>
		<panel title="Song Metadata">
			<v-layout>
				<v-flex xs6>
					<div class="song-title">{{song.title}}</div>
					<div class="song-artiste">{{song.artiste}}</div>
					<div class="song-genre">{{song.genre}}</div>
					<v-btn
						class="purple"
						dark
						@click="navigateTo({name: 'song-edit', params: {
									songId: song.id
								}
								})"
					>Edit</v-btn>
				</v-flex>

				<v-flex xs6>
					<img class="album-image" :src="song.albumImageUrl" />
					<br />
					{{song.album}}
				</v-flex>
			</v-layout>
		</panel>
	</div>
</template>

<script>
	import Panel from "@/components/Panel";
	export default {
		props: ["song"],
		methods: {
			navigateTo (route) {
				this.$router.push(route)
			}
			
		},
		components: {
			Panel
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