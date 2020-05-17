<template>
  <div class="bottom-bar">
    <div class="bar-left bar-item">
      <div>
        <div class="icon service"></div>
        <div class="text">客服</div>
      </div>
      <div>
        <div class="icon shop"></div>
        <div class="text">店铺</div>
      </div>
      <div>
        <div class="icon select"></div>
        <div class="text">收藏</div>
      </div>
    </div>
    <div class="bar-right bar-item">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailBottomBar' ,
    methods:{
      addToCart(){
        this.$emit('addCart')
      }
    },
    data () {
      return {
      };
    },
  }

</script>
<style scoped>
.bottom-bar{
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  background: white;
  height: 50px;
  display: flex;
  text-align: center;
}
.bar-item{
  flex: 1;
  display: flex;
}
.bar-item div{
  flex: 1;
}
.bar-left .text{
  font-size: 13px;
}
.bar-left .icon{
  display: block;
  width: 22px;
  height: 22px;
  margin: 5px auto;
  background: url('../../../assets/img/detail/detail_bottom.png') 0 0/100%;
}
.bar-left .service{
  background-position: 0px -53px;
}
.bar-left .shop{
  background-position: 0px -98px;
}
.bar-left .select{
  background-position: 0px -26px;
}
.bar-right{
  line-height: 50px;
  text-align: center;
  font-size: 14px;
}
.bar-right .cart{
  background: #ffe818;
  color: #333;
}
.bar-right .buy{
  background: #ff6799;
  color: white;
}
</style>