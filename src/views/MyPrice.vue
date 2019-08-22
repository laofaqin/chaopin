<template>
  <div>
    <header>
      <div class="wddd">
        <van-icon name="arrow-left" class="arrow" v-tap="{methods:goMine}" />
        <p>我的砍价</p>
      </div>
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
.wddd {
  height: 40px;
  background: black;
  display: flex;
}
.wddd p {
  color: whitesmoke;
  margin-top: 10px;
  margin-left: 120px;
}
.arrow {
  color: whitesmoke;
  margin-left: 12px;
  margin-top: 12px;
}
</style>