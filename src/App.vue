<template>
  <div>
  <!--
   ! Left this comment to show the component I created to seed firebase
    <Initialize />
    -->
    <WineContainer v-if="wines" :wines="wines" />
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
        wines: state => state.wines.wines.wine,
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
