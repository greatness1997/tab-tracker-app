<template>
    <div>
        <panel title="Search">
            <v-text-field label="Search by Title, Artiste, Song Name, Album or Genre" v-model="search"></v-text-field>

        </panel>
    </div>
</template>

<script>
export default {
    data() {
        return {
            search: ""
        }
    },
    watch: {
        search () {
            const route = {
                name: 'songs'
            }
            if (this.search !== '') {
                route.query = {
                    search: this.search
                }
            }
            this.$router.push(route)
        
        },
        '$route.query.search': {
            immediate: true,
            handler(value) {
                this.search = value
            }
        }
    }
    
}
</script>

<style scoped>
    
</style>