<template>
  <div>
    <swiper></swiper>
    <jiugong></jiugong>
  </div>
</template>

<script>
import swiper from "./swiper"//轮播图
import jiugong from "./jiugongge"
export default {
  components:{
    swiper,
    jiugong
  },
  data(){
    return{
      list:[]
    }
  }

}
</script>

<style>

</style>
