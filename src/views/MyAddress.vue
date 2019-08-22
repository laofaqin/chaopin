<template>
  <div>
    <header>
      <div class="wddd">
        <van-icon name="arrow-left" class="arrow" v-tap='{methods:goSetting}'/>
        <p>我的地址</p>
      </div>
    </header>
    <section>
        
    </section>
    <footer>
        <div class="footer" v-tap='{methods:goNewAddress}'>
            <p>添加新地址</p>
        </div>
    </footer>
  </div>
</template>

<script>
export default {
    name:'MyAddress',
    data(){
        return{

        }
    },
    methods: {
        goSetting(){
            this.$router.push('/Mine')
        },
        goNewAddress(){
            this.$router.push('/NewAddress')
        }
  }
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
  margin-left: 120px;
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
    margin-left:170px;
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