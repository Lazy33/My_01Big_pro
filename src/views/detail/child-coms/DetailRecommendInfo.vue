<template>
  <div class="recommend-info" >
    <div class="info-head">热门推荐</div>
    <div class="goods">
      <GoodsListItem v-for="(item,index) in recommendInfo" :key="index" :goodsItem="item"></GoodsListItem>
    </div>
  </div>
</template>

<script>
import GoodsListItem from '../../../components/content/goods/GoodsListItem'
  export default {
    name: 'DetailRecommendInfo' ,
    props:{
      recommendInfo:{
        type:Array
      }
    },
    components:{
      GoodsListItem
    },
    data () {
      return {
      };
    }
  }

</script>
<style scoped>
.recommend-info{
  padding:5px;
}
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 3px 3px 3px 3px;
}
.info-head{
  font-size: 16px;
  line-height: 40px;
  padding-left: 16px;
  color: #333;
}
</style>