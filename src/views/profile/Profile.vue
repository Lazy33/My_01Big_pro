<template>
  <div class="profile">
    <ProfileNavBar/>
    <ProfileList1></ProfileList1>
    <ProfileList2></ProfileList2>
    <ProfileList3></ProfileList3>
  </div>
</template>
<script>
import ProfileNavBar from './child-com/ProfileNavBar'
import ProfileList1 from './child-com/ProfileList1'
import ProfileList2 from './child-com/ProfileList2'
import ProfileList3 from './child-com/ProfileList3'

export default {
  name: "component_name",
  components: {
    ProfileNavBar,
    ProfileList1,
    ProfileList2,
    ProfileList3
  },
  data () {
    return {

    };
  },
  methods: {
  }
}
</script>
<style scoped>
</style>