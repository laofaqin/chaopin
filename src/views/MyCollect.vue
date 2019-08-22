<template>
  <div>
    <header>
      <div class="wddd">
        <van-icon name="arrow-left" class="arrow" v-tap="{methods:goMine}" />
        <p>我的收藏</p>
      </div>
    </header>
    <section>
      <van-card
        num="0"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
      />
    </section>
  </div>
</template>

<script>
export default {
  name: "MyCollect",
  data() {
    return {};
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