<template lang="pug">
  #app
    input(v-model="name")
    button(@click="format") Formart 

    p {{ formatedName }}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      name: '',
      formatedName: ''
    }
  },
  methods: {
    format () {
      this.formatedName = this.name.split(' ').join('-')
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss'
</style>
