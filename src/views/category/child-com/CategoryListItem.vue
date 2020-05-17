<template>
  <div class="item-list">
    <div v-for="(item,index) in ItemListGoods" :key="index" class="list-goods">
      <img :src="item.image" alt="">
      <p>{{item.title}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CategoryListItem' ,
    props:{
     ItemListGoods:{
       type:Array,
       default(){
         return []
       }
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
.item-list{
  width: 73%;
}
.list-goods{
  display: inline-block;
  width: 33.33%;
  text-align: center;
  padding: 15px 5px 5px 5px;
}
.list-goods img{
  width: 75%;
}
.list-goods p{
  padding-top: 8px;
  font-size: 14px;
}
</style>