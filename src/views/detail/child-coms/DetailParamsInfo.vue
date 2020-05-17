<template>
  <div class="info-params" v-if="Object.keys(paramsInfo).length !== 0">
    <table v-for="(item,index) in paramsInfo.size" :key="index" class="info-size">
      <tr v-for="(tr,index2) in item" :key="index2">
        <td v-for="(td,index3) in tr" :key="index3">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(item,index) in paramsInfo.info" :key="index">
        <td class="info-param-key">{{item.key}}</td>
        <td class="param-value">{{item.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramsInfo.img.length !==0">
      <img :src="paramsInfo.img" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailParamsInfo' ,
    props:{
      paramsInfo:{
        type:Object
      }
    },
    data () {
      return {
      };
    }
  }

</script>
<style scoped>
.info-params{
  width: 100%;
  border-bottom: 3px solid #eee;
  padding:0 10px;
  /* z-index: 100; */
}
.info-params tr{
  height: 40px;
}
.info-params tr td:first-child{
  width: 100px;
  color:#333;
}
.info-params tr td{
  color:rgb(201, 41, 121);
}
.info-img{
  padding:0 10px;
  border-bottom: 2px solid #eee;
}
.info-img img{
  width: 100%;
}
</style>