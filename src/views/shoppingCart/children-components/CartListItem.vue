<template>
  <div class="list-item">
    <div class="item-button">
      <CheckedButton :ischeck="item.check" @checkClick="changeChecked"></CheckedButton>
    </div>
    <div class="item-img">
      <img :src="item.img" alt="">
    </div>
    <div class="item-info">
      <div class="item-title">{{item.title}}</div>
      <div class="item-desc">{{item.desc}}</div>
      <div class="item-bottom">
        <div class="item-price left">￥{{item.price}}</div>
        <div class="item-count right">X{{item.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckedButton from './CheckedButton'
  export default {
    name: 'CartListItem' ,
    props:{
      item:Object
    },
    // data () {
    //   return {
    //     ischeck:this.item.check
    //   };
    // },

    components: {
      CheckedButton
    },
    methods:{
      changeChecked(){
        // console.log(111);
        this.$store.commit('changeCheck',this.item)
      }
    }
  }

</script>
<style scoped>
.list-item{
  width: 100%;
  display: flex;
  padding: 5px;
  border-bottom: 1px solid #ccc;
  position: relative;
}
.item-button{
  height: 24%;
  position: relative;
  left: 0px;
  top: 36px;
}
.item-img img{
  width: 80px;
  height: 100px;
  border-radius: 5px 10px;
}
.item-info{
  font-style: 16px;
  color: #333333;
  padding:5px 10px ;
  overflow: hidden;
}
.item-title,.item-desc{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-info .item-desc{
  font-size: 14px;
  color: #666;
  margin-top: 10px;
}
.item-bottom{
  margin-top: 25px;

}
.item-bottom .item-price{
  color: #ff4500;
}
</style>