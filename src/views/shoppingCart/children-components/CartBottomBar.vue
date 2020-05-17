<template>
  <div class="bottom-bar">
    <div class="all-che left">
      <CheckedButton :ischeck="ischeck" @checkClick="allChecked"></CheckedButton>
    </div>
    <div class="left bottom-info">
      <span class="all-ch">全选</span>
      <span class="all-price">总价：￥{{ allPrice }}</span>
      <span class="right buy-all">去结算({{cartCount}})</span>
    </div>
    
  </div>
</template>

<script>
import CheckedButton from './CheckedButton'
import { mapGetters } from 'vuex'
  export default {
    name: 'CartBottomBar' ,

    data () {
      return {
      };
    },

    components: {
      CheckedButton
    },

    computed: {
      ...mapGetters([
        'cartList'
      ]),
      allPrice(){
        return this.cartList.filter(item =>item.check).reduce((preValue,item) => {
          return preValue + item.count*item.price
        },0).toFixed(2)
      },
      cartCount(){
        return this.cartList.filter(item =>item.check).reduce((preValue,item) =>{
          return preValue + item.count
        },0)
      },
      ischeck(){
        // return this.cartList.every(function(item,index,Array){
        //   return item.check
        // })  下面简化
        return this.cartList.every(item => item.check)
      }
    },

    methods: {
      allChecked(){
        let boo = this.cartList.every(item => item.check)

        if(boo){
          this.$store.commit('clearCheck')
        }else{
          this.$store.commit('allCheck')
        }
      }
    }
  }

</script>
<style scoped>
.bottom-bar{
  width: 100%;
  height: 44px;
  background: #dddddd;
  position: fixed;
  bottom: 50px;
  left: 0px;
}
.all-che{
  width: 10%;
  position: relative;
  padding-left: 10px;
  top: 11px;
  
}
.bottom-info{
  width: 90%;
}
span{
  line-height: 44px;
}
.all-ch{
 margin-right: 20px; 
}
.all-price{
  font-size: 18px;
}
.buy-all{
  width: 120px;
  height: 44px;
  background: #ff4500;
  color: #fff;
  text-align: center;
}
</style>