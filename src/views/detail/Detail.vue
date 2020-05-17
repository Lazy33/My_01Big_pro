<template>
  <div id="detail">
    <!-- 创建顶部导航 -->
    <DetailNavBar @titleClick="titleClick" ref="nav"></DetailNavBar>
    <Bscroll class="content" ref="scroll" @bsscroll="bScroll" :probeType="3">      <!-- 丝滑效果 -->
      <!-- 创建轮播图 -->
      <DetailSwiper :top-images="topImages"></DetailSwiper>
      <!-- 商品基本信息 -->
      <DetailBaseInfo :goods="goodsInfo"></DetailBaseInfo>
      <!-- 商家基本信息 -->
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <!-- 商品详情展示 -->
      <DetailGoodsInfo :detail-info="detailInfo" @imgload="imageLoad"></DetailGoodsInfo>
      <!-- 商品参数展示 -->
      <DetailParamsInfo :params-info = "paramsInfo" ref="goods"></DetailParamsInfo>
      <!-- 评论列表展示 -->
      <DetailCommentInfo :commentInfo='commentInfo' ref="comment"></DetailCommentInfo>
      <!-- 热门推荐展示 -->
      <DetailRecommendInfo :recommend-info="recommendInfo" ref="recommend"></DetailRecommendInfo>
    </Bscroll>
    <!-- 底部导航 -->
    <DetailBottomBar @addCart="addCart"></DetailBottomBar>
    <!-- 返回顶部 -->
    <BackTop v-show="isShowTop" @click.native="backTop"></BackTop>
  </div>
</template>

<script>
import Bscroll from '../../components/common/better-scroll/BetterScroll'

import {getDetailData,getRecommendData,GoodsInfo,GoodsParams} from '../../network/detail'
import DetailNavBar from './child-coms/DetailNavBar'
import DetailSwiper from './child-coms/DetailSwiper'
import DetailBaseInfo from './child-coms/DetailBaseInfo'
import DetailShopInfo from './child-coms/DetailShopInfo'
import DetailGoodsInfo from './child-coms/DetailGoodsInfo'
import DetailParamsInfo from './child-coms/DetailParamsInfo'
import DetailCommentInfo from './child-coms/DetailCommentInfo'
import DetailRecommendInfo from './child-coms/DetailRecommendInfo'
import DetailBottomBar from './child-coms/DetailBottomBar'


import { debounce } from '../../comment/fangdou'
import { backTopMixin } from '../../comment/mixin'

export default {
  name:'Detail',
  data(){
    return {
      iid:null,
      topImages:[],
      goodsInfo:{},
      shop:{},
      detailInfo:{},
      paramsInfo:{},
      commentInfo:{},
      recommendInfo:[],
      positionY:[],  //NavBar四个下表对应要跳转的坐标
      getPositionY:null,
      currentIndex:0,
    }
  },
  mixins:[backTopMixin],
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    Bscroll,
    DetailParamsInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    DetailBottomBar
  },
  created(){
    this.iid = this.$route.params.id
    //请求详情页数据
    getDetailData(this.iid).then(res=>{
      console.log(res)
      let data = res.result
      //获取轮播图数据
      this.topImages = data.itemInfo.topImages
      //获取商品信息
      this.goodsInfo = new GoodsInfo(data.columns,data.itemInfo,data.shopInfo)
      //获取商家信息
      this.shop = data.shopInfo
      //获取商品的详情展示
      this.detailInfo = data.detailInfo
      //获取商品参数信息
      this.paramsInfo = new GoodsParams(data.itemParams.info , data.itemParams.rule)
      //获取评论数据
      if(data.rate.list){
        this.commentInfo = data.rate.list[0]  
      }
      
    })
    //请求热门推荐数据
    getRecommendData().then(res => {
      this.recommendInfo = res.data.list
    })
    this.getPositionY = debounce(() => {
        this.positionY = []  //每次发生数据变化，数组先清空，在添加进去
        this.positionY.push(0)
        this.positionY.push(-this.$refs.goods.$el.offsetTop + 44)
        this.positionY.push(-this.$refs.comment.$el.offsetTop + 44)
        this.positionY.push(-this.$refs.recommend.$el.offsetTop + 44)
      },300)
  },
  mounted(){      //拿到各个组件,拿到距离顶部的坐标
      
  },
  updated(){      //获取不到refs.$el,加了这个钩子函数,  但是换个页面就不行了，所以换地方
    // this.positionY = []  //每次发生数据变化，数组先清空，在添加进去
    // this.positionY.push(0)
    // this.positionY.push(-this.$refs.goods.$el.offsetTop + 44)
    // this.positionY.push(-this.$refs.comment.$el.offsetTop + 44)
    // this.positionY.push(-this.$refs.recommend.$el.offsetTop + 44)
    // console.log(this.$refs.goods.$el.offsetTop);  //可以访问了
    // console.log(this.$refs.comment.$el.offsetTop);  
    // console.log(this.$refs.recommend.$el.offsetTop);  
    
  },
  methods:{
    imageLoad(){
      this.$refs.scroll.bs.refresh()
      this.getPositionY()
    },
    titleClick(index){
      // console.log(index) 打印下标;
       this.$refs.scroll.bs.scrollTo(0,this.positionY[index],800)
      
    },
    bScroll(position){
      // console.log(position) 打印坐标 ;
      let y =position.y
      for(let i in this.positionY){
        if(this.currentIndex !== i &&(y <= this.positionY[i] && y > this.positionY[+i+1] && this.positionY.length-1 || i == this.positionY.length-1 && y <= this.positionY[+i])){
          //默认currentindex=0，不相等再执行      前面排除最大的那个（0-2）,最后判断3，
          this.currentIndex = i
          this.$refs.nav.currentIndex = i
        }
      }      
      this.isShowTop = position.y < -800
      this.getBackTopShow(position)
    },
    addCart(){
      // console.log(111);测试是否传过来事件
      //判断是否需要数据
         //获取购物车需要展示的信息
      let cartInfo = {}
      cartInfo.img = this.topImages[0]
      cartInfo.title = this.goodsInfo.title
      cartInfo.desc = this.goodsInfo.desc
      cartInfo.price = this.goodsInfo.highNowPrice
      cartInfo.iid = this.iid
      //将商品加入到购物车
      // this.$store.state.push(cartInfo); 没有经过mutations，网页监控不到数据
      // this.$store.commit('addCart',cartInfo)
      this.$store.dispatch('addCart',cartInfo)
    }
  }
}

</script>
<style scoped>
  #detail{
    position: relative;
    z-index: 1000;
    background: white;
    clear: both;
    height: 100vh;
  }
  .content{
    height: calc(100% - 44px - 60px);
  }
</style>