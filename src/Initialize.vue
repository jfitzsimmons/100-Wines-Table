<template>
  <div>
    <button @click="init">Initialize app base state</button>
    <button @click="get">Get</button>
  </div>
</template>

<script>
  export default {
    name: 'InitializeData',

    methods: {
      init () {
        this.$store.dispatch('payments/seed')
      },

      get () {
        console.log('test get  init');
      //  console.log(this.$store.dispatch('payments/get'));
        this.$store.dispatch('payments/get')
      }
    }
  }
</script>

<style>
</style>
