<template>
  <div>
    <Tabbar>
      <TabbarItem path="/home">
        <div class="fa fa-home" slot="tab-icon"></div>
        <div class="fa fa-star" slot="tab-icon-active"></div>
        <div slot="tab-text">首页</div>
      </TabbarItem>
      <TabbarItem path="/category">
        <div class="fa fa-home" slot="tab-icon"></div>
        <div class="fa fa-star" slot="tab-icon-active"></div>
        <div slot="tab-text">分类</div>
      </TabbarItem>
      <TabbarItem path="/cart">
        <div class="fa fa-home" slot="tab-icon"></div>
        <div class="fa fa-star" slot="tab-icon-active"></div>
        <div slot="tab-text" v-if="cartLength!=0">购物车({{cartLength}})</div>
        <div slot="tab-text" v-else>购物车</div>
      </TabbarItem>
      <TabbarItem path="/profile">
        <div class="fa fa-home" slot="tab-icon"></div>
        <div class="fa fa-star" slot="tab-icon-active"></div>
        <div slot="tab-text">我的</div>
      </TabbarItem>
    </Tabbar>
  </div>
</template>

<script>
  import Tabbar from './Tabbar'
  import TabbarItem from './Tabbar-item'

  import { mapGetters } from 'vuex'
  export default {
    name: '',
    data(){
      return {}
    },
    components: {
      TabbarItem,
      Tabbar
    },
    computed:{
      ...mapGetters([
        'cartLength'
      ])
    },
  }
</script>
<style scoped>
  @import "../../../assets/css/base.css";
  @import "../../../assets/css/font-awesome-4.7.0/css/font-awesome.min.css";
</style>
