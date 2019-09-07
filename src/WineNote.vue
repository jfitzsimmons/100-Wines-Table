<template>
  <div id="notes" class="notes">test{{note}}</div>
</template

<script>
import {
  mapState
} from 'vuex'
import Vue from 'vue'

export default {
  name: 'WineNote',
  props: {
    note: {
      type: String,
      required: true,
      default: "This one must work!"
    }
  },
  data() {
    return {
      note: "LAST CHANCE !"
    };
  },
};
</script>
