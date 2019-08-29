<template>
  <div>
    <header>
      <van-nav-bar class="sportshoes"
            title="优惠券"
            left-arrow
            @click-left="goMine"
            />
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