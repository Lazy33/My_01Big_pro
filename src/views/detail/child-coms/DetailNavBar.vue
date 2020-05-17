<template>
  <div class="nav-bar">
    <Navbar>
      <div slot="left" class="back-image" @click="backHome">
        <img src="../../../assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" class="title-item" :key="index" :class='{active:index == currentIndex}' @click="itemClick(index)">{{item}}</div>
      </div>
      <div slot="right"></div>
    </Navbar>
  </div>
</template>

<script>
import Navbar from '../../../components/common/nav-bar/Navbar'

export default {
  name:'DetailNavBar',
  components:{
    Navbar
  },
  data(){
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index
      this.$emit('titleClick',index)
    },
    backHome(){
      this.$router.back()
    }
  }
}

</script>
<style scoped>
  .nav-bar{
    background: white;
  }
  .title{
    display: flex;
  }
  .title-item{
    flex: 1;
  }
  .back-image{
    margin-top: 5px;
    margin-left: 5px;
  }
  .active{
    color: hotpink;
  }
</style>