<template>
  <div class="click-button" :class="{active:ischeck}" @click="checkClick">
    <img src="../../../assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
  export default {
    name: 'CheckedButton' ,
    props:{
      ischeck:Boolean
    },
    methods:{
      checkClick(){
        this.$emit('checkClick')
      }
    },
    computed:{
      isCheck(){
        return cartList.check
      }
    },
    data () {
      return {
      };
    }
  }

</script>
<style scoped>
.click-button{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #CCC;
  cursor: pointer;
  background: white;
}
.active{
 background: hotpink;
 border: 2px solid hotpink;
}
</style>