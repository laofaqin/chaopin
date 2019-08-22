<template>
  <van-nav-bar class="sportshoes"
  title="运动鞋"
  left-arrow
  @click-left="onClickLeft"
/>
</template>

<script>
export default {
    methods:{
        onClickLeft() {
            console.log('fanhui')
            this.$router.go(-1)
        }
    }
}
</script>

<style>
    .van-nav-bar{
        height:60px;
        line-height: 60px;
        background:rgba(0, 0, 0, 0.8);
        
    }
    .van-nav-bar__title{
        color:white;
    }
    .van-nav-bar .van-icon{
        color:white;
    }
</style>