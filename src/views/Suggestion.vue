<template>
  <div>
    <header>
      <div class="wddd">
        <van-icon name="arrow-left" class="arrow" v-tap="{methods:goSetting}" />
        <p>个人信息</p>
      </div>
    </header>
    <section>
        <textarea 
        name="" 
        id="txt" 
        cols="40" 
        rows="10" 
        placeholder="想跟我们说点什么呢?"
        >
        </textarea>

        <van-button color="goldenrod" size='large'>保存</van-button>

    </section>
  </div>
</template>

<script>
export default {
     name:'Suggestion',
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
#txt{
    margin: 20px;
}
</style>