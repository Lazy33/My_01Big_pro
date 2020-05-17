<template>
  <div class="item-item">
    <GoodsListItem v-for="(item,index) in goods" :key="index" :goodsItem="item"></GoodsListItem>
  </div>
</template>

<script>
import GoodsListItem from '../../../components/content/goods/GoodsListItem' 
  export default {
    name: 'CategoryItemItem' ,
    props:{
      goods:{
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

    components: {
      GoodsListItem
    },

    computed: {},

    methods: {}
  }

</script>
<style scoped>
.item-item{
  width: 73%;
  padding:0 10px 0 12px;
  margin-bottom: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>