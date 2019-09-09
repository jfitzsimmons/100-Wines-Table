<template>
  <div class="flex" v-on:mouseleave="hideNote">
    <vue-good-table
      :columns="columns"
      :rows="wines"
      styleClass="vgt-table"
      row-style-class="table-row"
      :sort-options="sortoptions"
      :search-options="{
        enabled: true,
        skipDiacritics: true,
        placeholder: 'Search Wine Spectator’s Top 100 wines of the year',
      }"
      @on-row-mouseenter="onRowMouseover"
      @on-row-mouseleave="onRowMouseleave">
      <template slot="table-column" slot-scope="props">
         <span v-on:mouseenter="hideNote" class="full-width">
            {{props.column.label}}
         </span>
      </template>
    </vue-good-table>
    <WineNote :note="mutableNote" :pos="mutablePos" />
  </div>
</template>

<script>
  import WineNote from './WineNote.vue'
  import _ from 'lodash';
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
      sortoptions: {
        type: Object,
        default: () => ({
          enabled: true,
          initialSortBy: [
            {field: 'score', type: 'desc'},
            {field: 'winery_full', type: 'asc'}
          ],
        }),
      }
    },
    methods: {
      debounceNote: _.debounce(function(p) {
        document.getElementById('notes').style.display = 'flex';
        let rowHover = document.querySelectorAll('tbody > tr')[p.pageIndex];
        let top = window.scrollY + rowHover.getBoundingClientRect().bottom + 25;
        this.mutableNote = p.row.note;
        this.mutablePos = top.toString();
      }, 300),
      onRowMouseover(params) {
        this.debounceNote(params);
      },
      onRowMouseleave(row, pageIndex) {
        document.getElementById('notes').style.display = 'none';
      },
      hideNote() {
        setTimeout(function() {
          document.getElementById('notes').style.display = 'none';
        }, 500);
      },
      tdClassFunc(row) {
        return "color " + row.color;
      }
    },
    data() {
      return {
        mutablePos: this.pos,
        mutableNote: this.note,
        columns: null
      };
    },
    created() {
      this.columns = [{
        label: 'Score',
        field: 'score',
        width: '50px',
        type: 'number',
        tdClass: 'center',
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
        width: '65px',
        type: 'string',
        tdClass: 'center',
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
        width: '80px',
        type: 'string',
        html: true,
        tdClass: this.tdClassFunc,
        formatFn: this.colorFn,
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
      }]
    }
  };
</script>
