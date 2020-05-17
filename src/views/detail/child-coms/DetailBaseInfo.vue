<template>
  <div class="base-info" v-if="Object.keys(goods).length!==0">
    <!-- 标题 -->
    <div class="info-title">{{goods.title}}</div>
    <!-- 价格 -->
    <div class="info-price">
      <span class="new-price">{{goods.newPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <!-- 销量收藏 -->
    <div class="info-sales">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <!-- 退换货 -->
    <div class="info-service">
      <span v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>

  </div>
</template>

<script>
export default {
  name:'DetailBaseInfo',
  props:{
    goods:Object
  }
}
</script>

<style scoped>
  .base-info{
    margin-top: 15px;
    padding: 0 10px;
  }
  .info-title{
    color: #222;
  }
  .info-price{
    margin-top: 15px;
  }
  .info-price .new-price{
    font-size: 24px;
    color: hotpink;
  }
  .info-price .old-price{
    font-size: 14px;
    text-decoration: line-through;
    margin-left: 8px;
  }
  .info-price .discount{
    background: hotpink;
    border-radius: 5px;
    color: #FFF;
    font-size: 12px;
    padding: 4px;
    position: relative;
    top: -8px;
    left: 5px;
  }
  .info-sales{
    margin-top: 15px;
    display: flex;
    border-bottom: 1px solid rgba(100, 100, 100, .3);
    padding-bottom: 10px;
    justify-content: space-between;
    font-size: 14px;
    color: #999;
  }
  .info-service{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #333;
    line-height: 50px;
  }
  .info-service img{
    width: 14px;
    height: 14px;
  }

</style>