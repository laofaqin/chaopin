<template>
  <div>
    <header>
      <div class="wddd">
        <van-icon name="arrow-left" class="arrow" v-tap="{methods:goMine}" />
        <p>联系客服</p>
      </div>
      <div class="wdkf">
          <p>客服时间早上8点到晚上11点</p>
      </div>
    </header>
  </div>
</template>

<script>
export default {
     name:'Service',
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
.wdkf{
    height:40px;
    background: black;
    margin-top: -20px;
}
.wdkf p{
    color:whitesmoke;
    line-height: 40px;
    text-align: center;
}
</style>