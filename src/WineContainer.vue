<template>
<div class="flex">
  <vue-good-table
    :columns="columns"
    :rows="wines"
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
    }"  />
    <div class="notes">{{note}}</div>
</div>
</template>

<script>
import {
  mapState
} from 'vuex'
import Vue from 'vue'
import EditInput from './EditInput'
import WineNote from './WineNote'

const noteElement = document.getElementById('notes');

export default {
  name: 'WineContainer',
  props: {
    wines: {
      type: Array,
      required: false
    },
    note: {
      type: String,
      default: "Another damn test"
    }
  },
  components: {
    EditInput,
    WineNote
  },
  methods: {
    onCellClick(params) {
/*
      var ComponentClass = Vue.extend(EditInput)
      var instance = new ComponentClass({
        propsData: {
          type: 'primary'
        }
      })
      instance.$mount() // pass nothing
              console.log(this.$refs)
      this.$refs.container.appendChild(instance.$el)
*/
      /*
            console.dir(params.row);
            console.dir(params.column);
            console.dir(params.rowIndex);
            console.dir(params.event);
            */

    },
    onRowMouseover(params) {
    //  console.log(noteElement);
    this.note = params.row.note;
    }
  },

  data() {
    return {
      note: 'TESTING PASSED PRO OF NOTE FROM WINE CONTAINER',
      columns: [{
          label: 'Score',
          field: 'score',
          width: '40px',
          type: 'number',
          filterable: true,
          filterOptions: {
            enabled: true, // enable filter for this column
            placeholder: '... by Score', // placeholder for filter input
            filterValue: '', // initial populated value for this filter
            filterDropdownItems: [], // dropdown (with selected values) instead of text input
            filterFn: this.columnFilterFn, //custom filter function that
            trigger: 'enter', //only trigger on enter not on keyup
          },
        },
        {
          label: 'Winery',
          field: 'winery_full',
          type: 'string',
          filterable: true,
          filterOptions: {
            enabled: true, // enable filter for this column
            placeholder: 'Filter by Winery', // placeholder for filter input
            filterValue: '', // initial populated value for this filter
            filterDropdownItems: [], // dropdown (with selected values) instead of text input
            filterFn: this.columnFilterFn, //custom filter function that
            trigger: 'enter', //only trigger on enter not on keyup
          },
        },
        {
          label: 'Wine',
          field: 'wine_full',
          type: 'string',
          filterable: true,
          filterOptions: {
            enabled: true, // enable filter for this column
            placeholder: 'Filter by Wine', // placeholder for filter input
            filterValue: '', // initial populated value for this filter
            filterDropdownItems: [], // dropdown (with selected values) instead of text input
            filterFn: this.columnFilterFn, //custom filter function that
            trigger: 'enter', //only trigger on enter not on keyup
          },
        },
        {
          label: 'Vintage',
          field: 'vintage',
          width: '75px',
          type: 'string',
          filterable: true,
          filterOptions: {
            enabled: true, // enable filter for this column
            placeholder: '... by Vintage', // placeholder for filter input
            filterValue: '', // initial populated value for this filter
            filterDropdownItems: [], // dropdown (with selected values) instead of text input
            filterFn: this.columnFilterFn, //custom filter function that
            trigger: 'enter', //only trigger on enter not on keyup
          },
        },
        {
          label: 'Color',
          field: 'color',
          width: '100px',
          type: 'string',
          filterable: true,
          filterOptions: {
            enabled: true, // enable filter for this column
            placeholder: '... by Color', // placeholder for filter input
            filterValue: '', // initial populated value for this filter
            filterDropdownItems: [], // dropdown (with selected values) instead of text input
            filterFn: this.columnFilterFn, //custom filter function that
            trigger: 'enter', //only trigger on enter not on keyup
          },
        },
          {
            label: 'Region',
            field: 'region',
            type: 'string',
            filterable: true,
            filterOptions: {
              enabled: true, // enable filter for this column
              placeholder: '... by Region', // placeholder for filter input
              filterValue: '', // initial populated value for this filter
              filterDropdownItems: [], // dropdown (with selected values) instead of text input
              filterFn: this.columnFilterFn, //custom filter function that
              trigger: 'enter', //only trigger on enter not on keyup
            },
          },
      ],
    };
  },
};
</script>
