<template>
    <div>
        <v-layout>
            <v-flex xs4>
                <panel title="Song Metadata">
                    <v-text-field label="Title" v-model="song.title"></v-text-field>
                    <v-text-field label="Artiste" v-model="song.artiste"></v-text-field>
                    <v-text-field label="Genre" v-model="song.genre"></v-text-field>
                    <v-text-field label="Album" v-model="song.album"></v-text-field>
                    <v-text-field label="Album Image Url" song.v-model="albumImageUrl"></v-text-field>
                    <v-text-field label="youTube Id" v-model="song.youtubeId"></v-text-field>
                </panel>
            </v-flex>
            <v-flex xs8 ml-2>
                <panel title="Songs structure">
                    <v-text-field label="Lyrics" multi-line v-model="song.lyrics"></v-text-field>
                    <v-text-field label="Tab" multi-line v-model="songtab"></v-text-field>
                </panel>
                <v-btn class="purple" dark @click="create">Create Song</v-btn>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
    data () {
        return {
                song: {
                title: null,
                artiste: null,
                genre: null,
                album: null,
                albumImageUrl: null,
                youtubeId: null,
                lyrics: null,
                tab: null
            }
        }
    },
    methods: {
        async create () {
            try {
            await SongsService.post(this.song)
            this.$router.push({
                name: 'songs'
            })
            }catch(err){
                console.log(err)
            }
        }
    },
    components: {
        Panel
    }
}
</script>

<style scoped>
    
</style>