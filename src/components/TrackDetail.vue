<template lang="pug">
  .container
    .columns
      .column.is-5.is-offset-4
        pm-track(:track="track")
</template>

<script>
import TrackService from '@/services/track'
import PmTrack from '@/components/Track.vue'

export default {
  components: { PmTrack },
  data () {
    return {
      track: {}
    }
  },
  created () {
    const id = this.$route.params.id

    TrackService.getById(id)
      .then(res => {
        console.log(res)
        this.track = res
      })
  }
}
</script>

<style lang="scss" scoped>
.columns {
  margin: 20px;
}
</style>

