<template>
  <div class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// import BS from '@better-scroll/core'
// import Pullup from '@better-scroll/pull-up'
// BS.use(Pullup)
import BS from 'better-scroll'

export default {
  name:"BetterScroll",
  data(){
    return {
      bs:[]
    }
  },
  props:{
    pullupload:{
      type:Boolean,
      default:false
    },
    probeType:{
      type:Number,
      default:0
    },
    click:{
      type:Boolean,
      default:false
    }
  },
  mounted(){
    //创建better-scroll对象
    this.bs = new BS('.wrapper',{
      click:this.click,
      pullUpLoad:this.pullupload,
      probeType:this.probeType
    })
    //监听滚动事件
    this.bs.on('scroll',(position)=>{
      // console.log(position);
      this.$emit('bsscroll',position)
    })
    //监听上拉事件
    this.bs.on('pullingUp',()=>{
      this.$emit('pullingup')
    })
  },
  methods:{
    finishpullup(){
      this.bs.finishPullUp()
    }
  }
}

</script>

<style scoped>

  
</style>