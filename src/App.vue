<template>
  <div>
    <PaymentContainer
      v-if="payments"
      :payments="payments.payments.payments"
    />
  </div>
</template>

<script>
import PaymentContainer from './PaymentContainer.vue'

import { mapState } from 'vuex'

export default {
  name: 'app',

  components: {
    PaymentContainer
  },

  computed: {
    ...mapState({
      payments: 'payments',
    })
  },
 
  beforeCreate() {
    this.$store.dispatch('payments/get');
  },
}
</script>

<style>
</style>
