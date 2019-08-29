<template>
  <div>
    <header>
      <van-nav-bar class="sportshoes"
            title="我的砍价"
            left-arrow
            @click-left="goMine"
            />
    </header>
  </div>
</template>

<script>
export default {
     name:'MyOrder',
  data(){
    return{
      
    }
  },
  methods: {
    goMine(){
      this.$router.push('/Mine')
    }
  },

};
</script>

<style scoped>
.van-nav-bar{
    background: black;
}
.van-icon-arrow-left{
    color:whitesmoke;
}
.van-nav-bar__text{
    color: black;
}
.van-nav-bar__title{
    color: whitesmoke;
}
.arrow {
  color: whitesmoke;
  margin-left: 12px;
  margin-top: 12px;
}
</style>