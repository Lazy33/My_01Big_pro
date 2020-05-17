<template>
  <div class="cart-list">
    <CartListItem v-for="(item,index) in cartList" :key="index" :item="item"></CartListItem>
  </div>
</template>

<script>
import CartListItem from './CartListItem'

import { mapGetters } from 'vuex'
  export default {
    name: 'CartList' ,
    props:{
      item:Object
    },
    data () {
      return {
      };
    },

    components: {
      CartListItem
    },

    computed: {
      ...mapGetters([
        'cartList'
      ])
    }
  }

</script>
<style scoped>
</style>