<template>
<div>
  <Initialize />
  <WineContainer v-if="wines" :wines="wines.wines.wine" />
</div>
</template>

<script>
import WineContainer from './WineContainer.vue'
import Initialize from './Initialize.vue'
import {
  mapState
} from 'vuex'

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
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,400i,700,900&subset=latin-ext');
  @import "./css/style.scss";
</style>
