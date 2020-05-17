<template>
  <div v-if="Object.keys(detailInfo).length != 0" class="goods-info">
    <div class="info-desc">
      <div class="start">______________</div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end">______________</div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" :src="item" alt="" @load="imageLoad">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailGoodsInfo' ,
    props:{
      detailInfo:Object
    },
    methods:{
      imageLoad(){
        this.num++;
        if(this.num === this.imgLength){
          
        }
        this.$emit('imgload')
      }
    },
    data () {
      return {
        imgLength:0,
        num:0
      };
    },
    watch:{
      detailInfo(){
        this.imgLength = this.detailInfo.detailImage[0].list.length
      }
    }
  }

</script>
<style scoped>
  .info-desc{
    padding: 20px 12px;
    font-size: 16px;
  }
  .start{
    padding-bottom: 15px;
  }
  .end{
    float: right;
  }
  .info-key{
    margin: 10px;
    font-weight: bold;
  }
  .info-list img{
    width: 100%;
  }
</style>