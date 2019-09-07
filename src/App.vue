<template>
  <div>
    <Initialize />
    <WineContainer v-if="wines" :wines="wines.wines.wine" />
  </div>
</template>

<script>
  import WineContainer from './WineContainer.vue'
  import Initialize from './Initialize.vue'
  import {mapState} from 'vuex'

  export default {
    name: 'app',
    components: {
      WineContainer,
      Initialize
    },
    computed: {
      ...mapState({
        wines: 'wines',
      })
    },
    beforeCreate() {
      this.$store.dispatch('wines/get');
    },
  }
</script>

<style lang="scss">
  @import "./css/style.scss";
</style>
