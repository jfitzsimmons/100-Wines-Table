<template>
  <div>
    <vue-good-table
      :columns="columns"
      :rows="payments"
      :sort-options="{
        enabled: true
      }"
      :search-options="{
        enabled: true,
        skipDiacritics: true,
      }"
      @on-cell-click="onCellClick"
      />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PaymentContainer',

  props: {
    payments: {
      type: Array,
      required: false
    }
  },

  methods: {
    onCellClick(params) {
      console.log(params.row);
      console.log(params.column);
      console.log(params.rowIndex);
      console.log(params.event);
      // params.row - row object
      // params.column - column object
      // params.rowIndex - index of this row on the current page.
      // params.event - click event
    }
  },

  data(){
    return {
      columns: [
        {
          label: 'ID',
          field: 'ID',
          type: 'string',
          filterable: true,
          filterOptions: {
            enabled: true, // enable filter for this column
            placeholder: 'Filter This Thing', // placeholder for filter input
            filterValue: '', // initial populated value for this filter
            filterDropdownItems: [], // dropdown (with selected values) instead of text input
            filterFn: this.columnFilterFn, //custom filter function that
            trigger: 'enter', //only trigger on enter not on keyup
          },
        },
        {
          label: 'Name',
          field: 'Name',
          type: 'string',
          filterable: true,
          filterOptions: {
            enabled: true, // enable filter for this column
            placeholder: 'Filter This Thing', // placeholder for filter input
            filterValue: '', // initial populated value for this filter
            filterDropdownItems: [], // dropdown (with selected values) instead of text input
            filterFn: this.columnFilterFn, //custom filter function that
            trigger: 'enter', //only trigger on enter not on keyup
          },
        },
        {
          label: 'Description',
          field: 'Description',
          type: 'string',
          filterable: true,
          filterOptions: {
            enabled: true, // enable filter for this column
            placeholder: 'Filter This Thing', // placeholder for filter input
            filterValue: '', // initial populated value for this filter
            filterDropdownItems: [], // dropdown (with selected values) instead of text input
            filterFn: this.columnFilterFn, //custom filter function that
            trigger: 'enter', //only trigger on enter not on keyup
          },
        },
        {
          label: 'Date',
          field: 'Date',
          type: 'string',
          filterable: true,
          filterOptions: {
            enabled: true, // enable filter for this column
            placeholder: 'Filter This Thing', // placeholder for filter input
            filterValue: '', // initial populated value for this filter
            filterDropdownItems: [], // dropdown (with selected values) instead of text input
            filterFn: this.columnFilterFn, //custom filter function that
            trigger: 'enter', //only trigger on enter not on keyup
          },
        },
        {
          label: 'Amount',
          field: 'Amount',
          type: 'number',
          filterable: true,
          filterOptions: {
            enabled: true, // enable filter for this column
            placeholder: 'Filter This Thing', // placeholder for filter input
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
