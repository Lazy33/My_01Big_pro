<template>
  <div class="shop-info">
<!------- 店铺logo --------->
    <div class="shop-top">
      <img :src="shop.shopLogo" alt="">
      <span class="shop-title">{{shop.name}}</span>
    </div>
<!-----店铺详情 ------------->
    <div class="shop-middle">
      <div class="shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">
            {{shop.cSells | sellsFilter}}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-all">
          <div class="all-count">
            {{shop.cGoods}}
          </div>
          <div class = "all-text">全部宝贝</div>
        </div>
      </div> 
      <div class="shop-middle-right">
        <table>
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="right-score" :class="{'right-score2':item.isBetter}">{{item.score}}</td>
            <td class="rihgt-top" :class="{'rihgt-top2':item.isBetter}">{{item.isBetter?'高':'低'}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailShopInfo' ,
    props:{
      shop:{
        typr:Object

      }
    },
    filters:{
      sellsFilter(value){
        if(value < 10000){
          return value
        }
        return (value/10000).toFixed(1) + '万'
      }
    },
    data () {
      return {
      };
    },

    components: {},

    computed: {},

    methods: {}
  }

</script>
<style scoped>
  .shop-top {
    margin: 10px 0 30px 0;
  }
  .shop-top img{
    width: 55px;
    vertical-align: middle;
    margin: 0 10px;
  }
  .shop-top span{
    vertical-align: middle;
    font-size: 16px;
  }
  .shop-middle{
    display: flex;
    flex-direction:row
  }
  .shop-middle-left{
    display: flex;
    text-align: center;
    margin: 19px 0;
    padding: 0 28px;
    vertical-align: middle;
    border-right: 1px solid #ccc;
  }
  .sells-count{
    font-size: 19px;
    color: black;
  }
  .sells-text{
    font-size: 14px;
    margin-top: 5px;
  }
  .info-all{
    margin-left: 12px;
  }
  .all-count{
    font-size: 19px;
    color: black;
  }
  .all-text{
    font-size: 14px;
    margin-top: 5px;
  }

  .shop-middle-right{
    vertical-align: middle;
    margin: 0 0 0 26px ;
  }
  .shop-middle-right td{
    /* background: blanchedalmond; */
    padding: 4px 4px;
    text-align: center;
  }
  .shop-bottom{
    display: flex;
    justify-content:center;
    padding: 10px 0;
  }
  .enter-shop{
    background: #eee;
    padding: 8px 60px;
    border-radius: 10px;
    font-size: 18px;
  }
  .right-score{
    color: green;
  }
  .right-score2{
    color: red;
  }
  .rihgt-top{
    background: green;
    color: white;
  }
  .rihgt-top2{
    background: red;
    color: white;
  }
</style>