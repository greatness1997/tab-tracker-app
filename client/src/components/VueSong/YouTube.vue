<template>
    <div>
        <panel title="YouTube Video">
            <youtube :video-id="youtubeId" :player-width="500" :player-height="250">
            </youtube>
        </panel>
    </div>
</template>

<script>
import Panel from '@/components/Panel'
export default {
    props: [
        'youtubeId'
    ],
    
    components: {
        Panel
    }
    
}
</script>

<style scoped>

</style>