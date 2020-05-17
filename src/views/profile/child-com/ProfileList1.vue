<template>
 <div class="profile-userstate">
   <div class="user-left">
    <img src="../../../assets/img/user/user.jpg" alt="">
   </div>
   <div class="user-center"><div>登录/注册</div><div><span class="phone"></span>暂无绑定手机号</div></div>
   <div class="user-right"><span></span></div>
 </div>
</template>

<script>
export default {
  name: "profileList1",
  data() {
    return {

    }
  },
  methods: {},
};
</script>

<style scoped>
.profile-userstate{
  padding:10px;
  display: flex;
  height: 100px;
  background-color: #FF8197;
  color: #fff;
}
.user-left img{
  width: 60px;
  margin-right: 10px;
  margin-top: 10px;
}
.phone{
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url('../../../assets/img/user/phone.png');
  background-size: cover;
  vertical-align: middle;
}

.user-center{
  flex: 1;
  padding-top: 15px;
  line-height: 25px;
}
.user-right{
  flex: 1;
  position: relative;
}
.user-right span{
  position: absolute;
  top: 40%;
  right: 20px;
  display: inline-block;
  width: 15px;
  height: 15px;
  border: transparent;
  border-right: 2px solid #fff;
  border-top: 2px solid #fff;
  transform: rotate(45deg);
}
</style>
