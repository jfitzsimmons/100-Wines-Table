<template>
  <div class="notes" v-bind:style="{ top: pos + 'px' }">
    <div class="arrow-up"></div>
    <div class="notes__content">
      {{note}}
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
    data() {
      return {
        note: "Hover over a row to see the note",
        hovering: false,
        columns: [{
          label: 'Score',
          field: 'score',
          width: '40px',
          type: 'number',
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: 'Filter',
            filterValue: '',
            filterDropdownItems: [],
            filterFn: this.columnFilterFn,
            trigger: 'enter',
          },
        },
        {
          label: 'Winery',
          field: 'winery_full',
          type: 'string',
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: 'Filter by Winery',
            filterValue: '',
            filterDropdownItems: [],
            filterFn: this.columnFilterFn,
            trigger: 'enter',
          },
        },
        {
          label: 'Wine',
          field: 'wine_full',
          type: 'string',
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: 'Filter by Wine',
            filterValue: '',
            filterDropdownItems: [],
            filterFn: this.columnFilterFn,
            trigger: 'enter',
          },
        },
        {
          label: 'Vintage',
          field: 'vintage',
          width: '75px',
          type: 'string',
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: 'Filter',
            filterValue: '',
            filterDropdownItems: [],
            filterFn: this.columnFilterFn,
            trigger: 'enter',
          },
        },
        {
          label: 'Color',
          field: 'color',
          width: '100px',
          type: 'string',
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: 'Filter Color',
            filterValue: '',
            filterDropdownItems: [],
            filterFn: this.columnFilterFn,
            trigger: 'enter',
          },
        },
        {
          label: 'Region',
          field: 'region',
          type: 'string',
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: 'Filter Region',
            filterValue: '',
            filterDropdownItems: [],
            filterFn: this.columnFilterFn,
            trigger: 'enter',
          },
        }],
      };
    },
  };
</script>
<style scoped>
.notes__content {
  top: pos;
}
</style>
