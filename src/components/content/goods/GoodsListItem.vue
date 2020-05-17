<template>
  <!-- <div class="goods-list-item"> -->
  <div class="goods-list-item" @click="itemClick">
    <!-- <img :src="goodsItem.show.img" alt=""> -->
    <img :src="getimg" alt="" @load="imageLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">￥{{goodsItem.price}}</span>
      <span class="cfav">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'GoodsListItem',
  props:{
    goodsItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    imageLoad(){
      this.$emit('imageload')
    },
    itemClick(){
      console.log(this.goodsItem);
      this.$router.push('/detail/'+this.goodsItem.iid)
    }
  },
  computed:{
    getimg(){
      return this.goodsItem.image || this.goodsItem.show.img
    }
  }
}

</script>
<style scoped>
.goods-list-item{
    width: 48%;
    position: relative;
  }
  .goods-list-item img{
    width: 100%;
    height: 100%;
    padding-bottom: 40px;
  }
  .goods-info{
    font-size: 12px;
    text-align: center;
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 100%;
  }
  .goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 5px;
  }
  .goods-info .price{
    color: red;
    margin-right: 20px;
  }
  .goods-info .cfav{
    position: relative;
  }
  .goods-info .cfav::before{
    position: absolute;
    content: "";
    width: 14px;
    height: 14px;
    left: -14px;
    top: 0;
    background: url('../../../assets/img/common/collect.svg') 0 0/14px 14px;
  }

</style>