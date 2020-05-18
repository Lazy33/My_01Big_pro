<template>
  <div id="cate">
    <!-- 顶部标题栏 -->
    <NavBar class="nav-bar2">
      <div slot="center" class="center">商品分类</div>
    </NavBar>
    <BetterScroll :click="true" :pullupload="true" :probeType="3" class="better-scroll" ref="betterscroll" @bsscroll="catescroll">
      <!-- 左侧列表 -->
      <div class="clearFloat">
        <CategoryList :ListGoods="ListGoods" class="left" @list-item-key="listItemKey"></CategoryList>
        <CategoryListItem class="right" :ItemListGoods="ItemListGoods"></CategoryListItem>
        <TabControl :titles="['综合','新品','销量']" class="tab-control right" @tabClick="tabClick" ref="tabContent"></TabControl>
        <CategoryItemItem class="item-item right" :goods="goods[currentType].list"></CategoryItemItem>
      </div>
    </BetterScroll>
    <BackTop v-show="isShowTop" @click.native="backTop"></BackTop>
  </div>
  
</template>

<script>
//网络请求数据
import { getCategoryListdata } from '../../network/caregory'
import { getCategoryListItemdata } from '../../network/caregory'
import { getHomeGoods } from '../../network/home'

//公共组件
import NavBar from '../../components/common/nav-bar/Navbar'
import BetterScroll from '../../components/common/better-scroll/BetterScroll'
import BackTop from '../../components/content/back-top/BackTop'
// import BS from '@better-scroll/core'
// import Pullup from '@better-scroll/pull-up'

//子组件
import CategoryList from './child-com/CategoryList'
import CategoryListItem from './child-com/CategoryListItem'
import TabControl from './child-com/TabControl'
import CategoryItemItem from './child-com/CategoryItemItem'
export default {
  name:"Category",
  components:{
    NavBar,
    CategoryList,
    CategoryListItem,
    TabControl,
    CategoryItemItem,
    BackTop,
    BetterScroll
  },
  data(){
    return{
      ListGoods:[],
      sub:"3627",
      ItemListGoods:[],
      goods:{
        pop:{page:0,list:[]},
        new:{page:0,list:[]},
        sell:{page:0,list:[]}
      },
      currentType:'pop',
      isShowTop:false,
      isTabFixed:false
    }
  },
  created(){
    this.getCategoryListdata()
    this.getCategoryListItemdata(this.sub)
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods:{
    //网络请求的相关方法
    getCategoryListdata(){
      getCategoryListdata().then(res=>{
        console.log(res);
      //左侧分类数据的获取
        this.ListGoods = res.data.category.list
      })
    },
    getCategoryListItemdata(sub){
      getCategoryListItemdata(this.sub).then(res => {
        console.log(res);
        this.ItemListGoods = res.data.list
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page +=1
      })
    },
    //本页的常规方法
    listItemKey(item){
      this.sub = item
      this.getCategoryListItemdata(this.sub)
    },
    tabClick(index){
      switch(index){
        case 0:this.currentType = "pop"
          break
        case 1:this.currentType = "new"
          break
        case 2:this.currentType = "sell"
          break
      }
    },
    catescroll(position){
      // console.log(position);
      this.isShowTop = position.y < -400
    },
    backTop(){
      this.$refs.betterscroll.bs.scrollTo(0,0,2000)
    }
  }
}
</script>
<style scoped>
  #cate{
    height: 100vh;
    padding-top: 44px;
  }
 .nav-bar2{
    background: #FF8197;
    color: white;
    position: fixed;
    top: 0px;
    left: 0px;
  }
  .center{
    text-align: center;
  }
  .clearFloat{
    overflow: hidden;
  }
  .better-scroll{
    height: calc(100% - 44px);
    overflow: hidden;
  }
</style>