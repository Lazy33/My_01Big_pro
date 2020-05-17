<template>
 <div class="profile-banlance">
   <div class="banlance">
     <div class="item-ban"><span class="num">{{banlance}}</span>元</div>
     <span>我的余额</span>
   </div>
   <div class="discounts">
     <div class="item-dis"><span class="num">{{discounts}}</span>个</div>
     <span>我的优惠</span>
   </div>
   <div class="integral">
     <div class="item-int"><span class="num">{{integral}}</span>分</div>
     <span>我的积分</span>
   </div>
 </div>
</template>

<script>
export default {
  name: "profileList2",
  data() {
    return {
      banlance:'0.00',
      discounts:0,
      integral:0
    }
  },
  methods: {},
};
</script>

<style scoped>
.profile-banlance{
  display: flex;
  height: 110px;
  font-size: 13px;
  border-bottom: 15px solid #eee;
}
.banlance,.discounts,.integral{
  text-align: center;
  flex: 1;
  border-right: 1px solid #eee;
}
.item-ban,.item-dis,.item-int{
  margin-top: 20px;
}
.num{
  font-size: 30px;
  color:#FD6040;
  font-weight: 600;
}
</style>
