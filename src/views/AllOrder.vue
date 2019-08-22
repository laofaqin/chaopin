<template>
  <div>
    <header>
      <div class="wddd">
        <van-icon name="arrow-left" class="arrow" v-tap='{methods:goMine}'/>
        <p>我的订单</p>
      </div>
    </header>
    <section>
      <van-tabs  v-model="active">
        <van-tab title="全部"></van-tab>
        <van-tab title="未付款"></van-tab>
        <van-tab title="代发货"></van-tab>
        <van-tab title="已发货"></van-tab>
        <van-tab title="已收货"></van-tab>
      </van-tabs>
    </section>
  </div>
</template>

<script>
export default {
  name:'AllOrder',
  data(){
    return{
      active:1
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