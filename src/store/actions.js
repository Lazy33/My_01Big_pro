export default {
  addCart(context,payLoad){
    let oldCartInfo = context.state.cartList.find(item =>item.iid == payLoad.iid)
    if(oldCartInfo){
      context.commit('addCount',oldCartInfo)
    }else {
      context.commit('addList',payLoad)
    }
  }
}