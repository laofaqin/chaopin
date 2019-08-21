<template>
  <div>
    <van-nav-bar @click-right="goSearch()" @click-left='goCart()'  left-arrow class="nav-bar">
      <van-icon class="cart-icon" name="cart-circle-o" slot="left" color='white'/>
      <van-search disabled class="search" placeholder="搜索您想要的商品" slot="right" />
    </van-nav-bar>
  </div>
</template>

<script>


export default {
  data(){
    return{
      value:''
    }
  },
  methods:{
    goSearch(){
      this.$router.push('/Search');
      console.log(111)
    },
    goCart(){
      this.$router.push('/Cart')
    }
  }
}
</script>

<style>
  .nav-bar{
    height:60px;
    background:rgba(0, 0, 0, 0.8)
  }
  .search{
    padding:0;
    margin: 9px 17px;
    width: 280px;
  }
  .cart-icon{
    font-size: 24px;
  }
</style>