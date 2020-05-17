<template>
  <div class="category-list">
    <ul>
      <li v-for="(item,index) in ListGoods" :key="index" class="list-li" @click="li_click(item,index)" :class="[num==index?'hover':'list-li']">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'CategoryList' ,
    props:{
    ListGoods:{
      type:Array,
      default(){
        return []
      }
    }
  },
    data () {
      return {
        num:0,
      };
    },

    components: {},

    computed: {},

    methods: {
      li_click(item,index){
        this.num=index
        this.$emit("list-item-key",item.maitKey)
      }
    }
  }

</script>
<style scoped>
.category-list{
  width: 27%;
  height: 818px;
}

.list-li{
  background:#F6F6F6;
  list-style: none;
  width: 100%;
  height: 48px;
  line-height: 48px;
  text-align: center;
  font-size: 16px;
}
.hover{
  color: #FF8197;
  background: white;
  border-left: 3px solid #FF8197;
}
</style>