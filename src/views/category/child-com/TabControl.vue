<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="index" class="tab-control-item" @click="activeClick(index)" :class="{'active':index==currentIndex}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      currentIndex:0
    }
  },
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    activeClick(index){
      this.currentIndex = index;
      this.$emit('tabClick',index)
    }
  }
}

</script>
<style scoped>
  .tab-control{
    width: 73%;
    display: flex;
    text-align: center;
    margin-top: 10px;
    position: sticky;
    top: 44px;
    right: 0;
  }
  .tab-control-item{
    flex: 1;
    height: 40px;
    line-height: 40px;
    background: #FFF;
  }
  .active{
    color: tomato;
  }
  .tab-control-item span{
    padding: 5px;
  }
  .active span{
    border-bottom: 3px solid hotpink;
  }

</style>