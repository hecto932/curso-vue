<template lang="pug">
  .container
    .columns
      .column.is-5.is-offset-4
        .notification.is-danger
          slot(name="body") Algo anduvo mal
</template>

<style lang="scss" scoped>
  .notificaction {
    margin: 10px;
  }
</style>
