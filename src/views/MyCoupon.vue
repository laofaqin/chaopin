<template>
  <div>
    <header>
      <div class="wddd">
        <van-icon name="arrow-left" class="arrow" v-tap="{methods:goMine}" />
        <p>优惠券</p>
      </div>
    </header>
    <section>
      <van-tabs v-model="activeName">
        <van-tab title="未使用(0)" name="a"></van-tab>
        <van-tab title="已使用" name="b"></van-tab>
        <van-tab title="已过期" name="c"></van-tab>
      </van-tabs>
    </section>
  </div>
</template>

<script>
export default {
  name: "MyCoupon",
  data() {
    return {
        activeName: 'a'
    };
  },
  methods: {
    goMine() {
      this.$router.push("/Mine");
    }
  }
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