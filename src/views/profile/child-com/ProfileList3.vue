<template>
 <div class="profile-userlist">
   <ul>
     <li>
       <span><img src="../../../assets/img/user/msg.png" alt=""></span>
       <span>我的消息</span>
     </li>
     <li>
       <span><img src="../../../assets/img/user/banlance.png" alt=""></span>
       <span>积分商城</span>
     </li>
     <li>
       <span><img src="../../../assets/img/user/member.png" alt=""></span>
       <span>会员卡</span>
     </li>
     <li>
       <span><img src="../../../assets/img/user/car.png" alt=""></span>
       <span>我的购物车</span>
     </li>
     <li>
       <span><img src="../../../../public/logo.png" alt=""></span>
       <span>下载购物APP</span>
     </li>
   </ul>
 </div>
</template>

<script>
export default {
  name: "components_name",
  data() {
    return {

    }
  },
  methods: {},
};
</script>

<style scoped>
li{
  display: flex;
  list-style: none;
  line-height: 55px;
  font-size: 18px;
}
li span:first-child{
  width: 15%;
  text-align: center;
}
li span:last-child{
  width: 85%;
  border-bottom: 1px solid #ccc;
}
li:nth-child(3) span:last-child{
  border:none
}
li:nth-child(3){
  border-bottom: 15px solid #eee;
}
li img{
  width: 30px;
  vertical-align: middle;
}
li:last-child img{
  width: 25px;
}
</style>
