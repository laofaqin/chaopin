<template>
  <div>

    <header>
      <div class="wddd">
        <van-icon name="arrow-left" class="arrow" v-tap='{methods:goSetting}'/>
        <p>设置</p>
      </div>
    </header>
    <section>
        <div class="grxx" v-tap='{methods:goMyInfo}'>
            <van-image
                :round='true' 
                cover
                width="60px"
                height="60px"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <p>{{userInfo}}</p>
            <van-icon name="arrow" class="arrow0"/>
        </div>

        <div>
            <div class="gywm" v-tap='{methods:goAbout}'>
                <p>关于我们<van-icon name="arrow" class="arrow1"/></p>   
            </div>
            <div class="tsyj" v-tap='{methods:goSuggestion}'>
                <p>投诉建议<van-icon name="arrow" class="arrow2"/></p>
            </div>           
        </div>
    </section>
    <footer>
        <div class="footer" v-tap='{methods:removeInfo}'>
            <p>退出当前账户</p>
        </div>
    </footer>
  </div>
</template>

<script>
export default {
    name:'Setting',
    data(){
        return{
            userInfo:''
        }
    },
    methods: {
        goSetting(){
            this.$router.push('/Mine')
        },
        goMyInfo(){
            this.$router.push('/MyInfo')
        },
        goAbout(){
            this.$router.push('/About')
        },
        goSuggestion(){
            this.$router.push('/Suggestion')
        },
        removeInfo(){
            this.userInfo = localStorage.removeItem('userInfo')
            this.$toast('退出成功')
            this.$router.push('/Home')
        }
  },
  mounted() { 
      this.userInfo = localStorage.getItem("userInfo")
      //console.log(localStorage.getItem("userInfo"))
  },
}

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
.wddd {
  height: 40px;
  background: black;
  display: flex;
}
.wddd p {
  color: whitesmoke;
  margin-top: 10px;
  margin-left: 150px;
}
.arrow {
  color: whitesmoke;
  margin-left: 12px;
  margin-top: 12px;
}
.grxx{
    height:80px;
    display: flex;
    border-bottom: 1px solid #cecece;
}
.grxx p{
    margin-top:30px;
    margin-left:12px;
    color: grey;
}
.van-image{
    margin-top:10px;
    margin-left:10px;
}
.arrow0{
    margin-left:175px;
    margin-top: 35px;
    color: grey;
}
.gywm{
    height:40px;
    border-top: 1px solid #cecece;
    margin-top:15px;
    display: flex;
    flex-direction: column;
}
.gywm p{
    margin-left:5px;
}
.tsyj{
    height:40px;
    border-top: 1px solid #cecece;
    border-bottom: 1px solid #cecece;
}
.tsyj p{
    margin-left:5px;
}
.arrow1{
    margin-left:268px;
    color:grey;
}
.arrow2{
    margin-left:268px;
    color:grey;
}
.footer{
    height:50px;
    width:100%;
    background: black;
    position: fixed;
    bottom: 0;
}
.footer p{
    color:whitesmoke;
    text-align: center;
    line-height: 20px;
}
</style>