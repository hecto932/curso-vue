<template lang="pug">
  #app
    input(v-model="name")
    input(v-model="lastname")
    input(type="date" v-model="birthdate" value="birthdate")

    p {{ fullName }}
    p {{ getAge }}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      name: 'Hector',
      lastname: 'Flores',
      birthdate: new Date().toISOString().slice(0, 10)
    }
  },
  computed: {
    fullName () {
      return `${this.name} ${this.lastname}`
    },
    getAge () {
      let birthdate = new Date(this.birthdate)
      let ageDifMs = Date.now() - birthdate.getTime()
      let ageDate = new Date(ageDifMs)
      return Math.abs(ageDate.getUTCFullYear() - 1970)
    }
  },
  watch: {
    name (newValue, oldValue) {
      console.log()
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss'
</style>
