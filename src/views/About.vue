<template>
  <div>
    <header>
      <div class="wddd">
        <van-icon name="arrow-left" class="arrow" v-tap="{methods:goSetting}" />
        <p>个人信息</p>
      </div>
    </header>
    <section>
        <h3>关于我们</h3>
    </section>
  </div>
</template>

<script>
export default {
 name:'About',
  data(){
    return{
      
    }
  },
  methods: {
    goSetting(){
      this.$router.push('/Setting')
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