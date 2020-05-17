<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center" class="center">购物车({{cartLength}})</div>
    </nav-bar>
    <Bscroll class="content" :click="true">
      <CartList></CartList>
    </Bscroll>
    <CartBottomBar></CartBottomBar>
  </div>
</template>

<script>
//公共组件
import NavBar from '../../components/common/nav-bar/Navbar'
import Bscroll from '../../components/common/better-scroll/BetterScroll'
//子组件
import CartList from './children-components/CartList'
import CartBottomBar from './children-components/CartBottomBar'

import { mapGetters } from 'vuex'
export default {
  name:'Cart',
  data () {
    return {
    };
  },
  components:{
    NavBar,
    CartList,
    CartBottomBar,
    Bscroll
  },
  computed:{
    ...mapGetters([
      'cartLength',
      'cartList'
    ])
  }
}

</script>
<style scoped>
.nav-bar{
  background: hotpink;
  color: white;
  vertical-align: middle;
}
.center{
 text-align: center;
}
.cart{
  height: 100vh;
}
.content{
  height: calc(100% - 138px);
}
</style>