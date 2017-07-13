<template lang="pug">
  #app
    img(src='./assets/platzi-station.jpg')
    h1 {{ msg }}
    form
      .container-elment
        label(for="name" class="container-label") Nombre
        input(name="name" class="container-input")
      .container-elment
        label(for="lastname" class="container-label") Apellido
        input(name="lastname" class="container-input")
      .container-elment
        label(for="role" class="container-label") Cargo
        input(name="role" class="container-input")
      .container-submit
        button(class="container-btn") Enviar

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hola vue!'
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss'
</style>
