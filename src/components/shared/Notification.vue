<template lang="pug">
  .container
    .columns
      .column.is-5.is-offset-4
        div(:class="[!typeNotification ? 'notification is-success' : 'notification is-danger']")
          slot(name="body") Algo anduvo mal
</template>

<script>
export default {
  props: ['typeNotification']
}
</script>


<style lang="scss" scoped>
  .notificaction {
    margin: 10px;
  }
</style>
