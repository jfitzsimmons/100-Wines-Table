<template>
  <div id="notes" class="notes" v-bind:style="{ top: pos + 'px' }">
    <div class="arrow-up"></div>
    <div class="notes__content">
    <p class="notes__header">Tasting Note:</p>
    <p v-html="note"></p>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Vue from 'vue'

  export default {
    name: 'WineContainer',
    props: {
      note: {
        type: String,
        default: "Hover over a row to see the note"
      },
      pos: {
        type: String,
        default: "0"
      },
    },
  };
</script>
