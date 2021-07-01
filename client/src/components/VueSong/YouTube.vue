<template>
    <div>
        <panel title="YouTube Video">
            <youtube :video-id="youtubeId" :player-width="500" :player-height="250">
            </youtube>
        </panel>
    </div>
</template>

<script>

export default {
    props: [
        'youtubeId'
    ]
    
    
}
</script>

<style scoped>

</style>