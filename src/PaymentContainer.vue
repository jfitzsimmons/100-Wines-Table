<template>
  <div>
    <vue-good-table
      :columns="columns"
      :rows="payments"/>
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

  data(){
    return {
      columns: [
        {
          label: 'ID',
          field: 'ID',
          type: 'string',
        },
        {
          label: 'Name',
          field: 'Name',
          type: 'string',
        },
        {
          label: 'Description',
          field: 'Description',
          type: 'string',
        },
        {
          label: 'Date',
          field: 'Date',
          type: 'string',
        },
        {
          label: 'Amount',
          field: 'Amount',
          type: 'number',
        },
      ],

    };
  },
};
</script>
