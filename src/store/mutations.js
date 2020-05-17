export default {
  addList(state,payLoad){
    payLoad.check = true
    payLoad.count = 1
    state.cartList.push(payLoad)
    },
  addCount(state,payLoad){
    payLoad.count += 1
  },
  changeCheck(state,payLoad){
    payLoad.check = ! payLoad.check
  },
  clearCheck(state){
    state.cartList.forEach(item =>item.check=false)
  },
  allCheck(state){
    state.cartList.forEach(item =>item.check=true)
  }
}