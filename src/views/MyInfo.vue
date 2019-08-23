<template>
  <div>
    <header>
      <div class="wddd">
        <van-icon name="arrow-left" class="arrow" v-tap="{methods:goSetting}" />
        <p>个人信息</p>
      </div>
    </header>
    <section>
      <div class="thsx">
        <div class="tx">
          <p>头像</p>
            <van-image 
            round 
            width="70px" 
            height="70px" 
            src="https://img.yzcdn.cn/vant/cat.jpeg" 
            />
          <van-icon name="arrow" class="arrow1"/>
        </div>
        
        <div class="hym">
            <p>会员名</p>
            <span>{{userInfo}}</span>
          <van-icon name="arrow" class="arrow2"/>
        </div>

        <div class="phone">
            <p>手机号码</p>
            <span>{{userInfo}}</span>
          <van-icon name="arrow" class="arrow3"/>
        </div>
        
        <van-button color="goldenrod" size='large' round='true'>保存</van-button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "MyInfo",
  data() {
    return {
      userInfo:''
    };
  },
  methods: {
    goSetting() {
      this.$router.push("/Setting");
    }
  },
  mounted() {
      this.userInfo = localStorage.getItem("userInfo")        
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

.thsx{
    height:200px;
    border-top: 1px solid #cecece;
    border-bottom: 1px solid #cecece;
    margin-top:20px;
}
.tx{
    height:100px;
    overflow: hidden;
    display: flex;
    border-bottom: 1px solid #cecece;
}
.tx p{
    margin-left:10px;
    margin-top: 38px;
}
.van-image--round{
    margin-left:230px;
    margin-top:15px;
}
.arrow1{
    margin-left:10px;
    margin-top:40px;
    color:grey;
}

.hym{
    display: flex;
    border-bottom: 1px solid #cecece;
}
.hym p{
    margin-left:10px;
}
.hym span{
    margin-left:180px;
    margin-top:18px;
}
.arrow2{
    margin-left:10px;
    margin-top:20px;
    color:grey;
}

.phone{
    display: flex;
}
.phone p{
    margin-left: 10px;
}
.phone span{
    margin-left: 10px;
}
.phone span{
    margin-left:165px;
    margin-top:18px;
}
.arrow3{
    margin-left:10px;
    margin-top:20px;
    color:grey;
}
</style>