<template>
    <div>
        <v-layout>
            <v-flex xs4>
                <panel title="Song Metadata">
                    <v-text-field label="Title" required :rules="[required]" v-model="song.title"></v-text-field>
                    <v-text-field label="Artiste" required :rules="[required]" v-model="song.artiste"></v-text-field>
                    <v-text-field label="Genre" required :rules="[required]" v-model="song.genre"></v-text-field>
                    <v-text-field label="Album" required :rules="[required]" v-model="song.album"></v-text-field>
                    <v-text-field label="Album Image Url" required :rules="[required]" v-model="song.albumImageUrl"></v-text-field>
                    <v-text-field label="youTube Id" required :rules="[required]" v-model="song.youtubeId"></v-text-field>
                </panel>
            </v-flex>
            <v-flex xs8 ml-2>
                <panel title="Songs structure">
                    <v-text-field label="Lyrics" required :rules="[required]" multi-line v-model="song.lyrics"></v-text-field>
                    <v-text-field label="Tab" required :rules="[required]" multi-line v-model="song.tab"></v-text-field>
                </panel>
                <div class="danger-alert" v-if="error">{{error}}</div>
                <v-btn class="purple" dark @click="create">Create Song</v-btn>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>

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
            },
            error: null,
            required: (value) => !!value || 'Required'
        }
    },
    methods: {
        async create () { 
            this.error = null
            const areAllFieldsFilledIn = Object
            .keys(this.song)
            .every(key => !!this.song[key])
            if (!areAllFieldsFilledIn) {
                this.error = 'Please fill in all the required fields'
                return
            }

            try {
            await SongsService.post(this.song)
            this.$router.push({
                name: 'songs'
            })
            }catch(err){
                console.log(err)
            }
        }
    }
    
}
</script>

<style scoped>
    
</style>