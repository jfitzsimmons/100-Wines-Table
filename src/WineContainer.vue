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
    <div class="notes">
      <div class="arrow-left"></div>
      <div class="notes__content">{{note}}</div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Vue from 'vue'

  export default {
    name: 'WineContainer',
    props: {
      wines: {
        type: Array,
        required: false
      },
      note: {
        type: String,
        default: "Hover over a row to see the note"
      }
    },
    methods: {
      onRowMouseover(params) {
        this.note = params.row.note;
      }
    },
    data() {
      return {
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
