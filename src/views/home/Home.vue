<template>
  <div id="home">
    <Navbar class="nav-bar">
      <div slot="center">蘑菇街</div>
    </Navbar>
    <TabControl :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabClick" v-show="isTabFixed" ref="tabFixed"></TabControl>
    <BetterScroll :click="true" :pullupload="true" :probeType="3" class="better-scroll" @bsscroll="homeScroll" ref="scroll" @pullingup="loadMore">
      <HomeSwiper :banners="banners"></HomeSwiper>
      <HomeRecommend :recommend="recommend"></HomeRecommend>
      <HomePopular></HomePopular>
      <TabControl :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabClick" v-show="!isTabFixed" ref="tabContent"></TabControl>
      <GoodsList :goods="goods[currentType].list" class="goods"></GoodsList>
    </BetterScroll>
    <BackTop v-show="isShowTop" @click.native="backTop"></BackTop>
  </div>
</template>

<script>
//公共组件
import Navbar from '../../components/common/nav-bar/Navbar'
import TabControl from '../../components/content/tabControl/TabControl'
import GoodsList from '../../components/content/goods/GoodsList'
import BetterScroll from '../../components/common/better-scroll/BetterScroll'
import {backTopMixin} from '../../comment/mixin'
//home的子组件
import HomeSwiper from './child-coms/HomeSwiper'
import {getHomeMultidata,getHomeGoods} from '../../network/home'
import HomeRecommend from './child-coms/HomeRecommend'
import HomePopular from './child-coms/HomePopular'

export default {
  name:'Home', 
  mixins:[backTopMixin],
  data(){
    return {
      banners:[],
      recommend:[],
      goods:{
        pop:{page:0,list:[]},
        new:{page:0,list:[]},
        sell:{page:0,list:[]}
      },
      currentType:'pop',
      isTabFixed:false
    }
  },
  components:{
    Navbar,
    HomeSwiper,
    HomeRecommend,
    HomePopular,
    TabControl,
    GoodsList,
    BetterScroll,
  },
  created(){
    this.getHomeMultidata(),
    this.getHomeGoods('pop'),
    this.getHomeGoods('new'),
    this.getHomeGoods('sell')
  },
  methods: {
    //网络请求相关的方法
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
        this.recommend = res.data.recommend.list
        this.banners = res.data.banner.list
      });
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1;
      getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        this.$refs.scroll.finishpullup()
      }).catch((err)=>{
        this.$refs.scroll.finishpullup()
      })
    },
    //常规事件处理方法
    tabClick(index){
      switch(index){
        case 0:this.currentType = 'pop'
          break;
        case 1:this.currentType = 'new'
          break;
        case 2:this.currentType = 'sell'
          break;
      }
      this.$refs.tabFixed.currentIndex = index
      this.$refs.tabContent.currentIndex = index
    },
    homeScroll(position){
      this.isTabFixed = position.y < -528
      this.getBackTopShow(position)
    },
    //上拉加载更多
    loadMore(){
      this.getHomeGoods(this.currentType)
    }
  },
}
</script>

<style scoped>
  #home{
    height: 100vh;
  }
  .nav-bar{
    background: hotpink;
    text-align: center;
    font-weight: bold;
    color: white;
  }
  /* .tab-control{
    position: sticky;
    top: 44px;
    z-index: 100;
  } */
  .better-scroll{
    height: calc(100% - 94px);
    overflow: hidden;
  }
</style>