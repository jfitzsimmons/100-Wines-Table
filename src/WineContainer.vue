<template>
  <div class="flex">
    <vue-good-table
      :columns="columns"
      :rows="wines"
      row-style-class="table-row"
      @on-row-mouseenter="onRowMouseover"
      :sort-options="{
        enabled: true,
        initialSortBy: [
          {field: 'score', type: 'desc'},
          {field: 'winery_full', type: 'asc'}
        ],
      }"
      :search-options="{
        enabled: true,
        skipDiacritics: true,
        placeholder: 'Search Top 100 Wines',
      }"  />

      <WineNote :note="mutableNote" :pos="mutablePos" />
</div>
</template>

<script>
  import WineNote from './WineNote.vue'
  import {mapState} from 'vuex'
  import Vue from 'vue'

  export default {
    name: 'WineContainer',
    components: {
      WineNote,
    },
    props: {
      wines: {
        type: Array,
        required: false
      },
      note: {
        type: String,
        default: "Hover over a row to see the note"
      },
      pos: {
        type: String,
        default: '0'
      },
    },
    methods: {
      onRowMouseover(params) {
        let rowHover = document.querySelectorAll('tbody > tr')[params.pageIndex];
        let top = window.scrollY + rowHover.getBoundingClientRect().bottom + 25;
        this.mutableNote = params.row.note;
        this.mutablePos = top.toString();
      }
    },
    data() {
      return {
        mutablePos: this.pos,
        mutableNote: this.note,
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
