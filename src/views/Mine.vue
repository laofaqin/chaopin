<template>
  <div>
    <!-- TOP -->
    <div class="sz" v-tap='{methods:goSet}'>
      <van-icon name="setting-o" class="icon-set" />
    </div>

    <div class="grxx" v-tap='{methods:goSet}'>
      <div>
        <van-image
          :round='true'
          cover
          width="60px"
          height="60px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
      </div>
      <div class="grxx_dh">
        <p>{{userInfo}}</p>
        <p>个人信息</p>
      </div>
    </div>
    <!-- 我的订单 -->
    <div class="kx"></div>
    <div class="wddd" v-tap='{methods:goOrder}'>
        <van-icon name="todo-list" class="ddjt_1"/>
        <p>我的订单</p>
        <p>查看全部订单</p>
        <span>
            <van-icon name="arrow" class="ddjt_2"/>
        </span>
    </div>

    <div class="wddd_2">
        <van-grid>
            <van-grid-item
                :key="1"
                icon="paid"
                text="待付款"
                v-tap='{methods:goAllOrder}'
            />
            <van-grid-item
                :key="2"
                icon="logistics"
                text="待收货"
                v-tap='{methods:goSent}'
            />
            <van-grid-item
                :key="3"
                icon="flower-o"
                text="待评价"
                v-tap='{methods:goGetPro}'
            />
            <van-grid-item
                :key="4"
                icon="after-sale"
                text="退款售后"
                v-tap='{methods:goAllOrder}'
            />
        </van-grid>
    </div>
    <!-- 我的... -->
    <div class="kx"></div>
    <div class="wd">
        <div class="wdkj" v-tap='{methods:goMyPrice}'>
            <van-icon name="chat" class="wdkj_1"/>
            <p>我的砍价</p>
            <van-icon name="arrow" class="wdkj_2"/>
        </div>
        <div class="wdkj" v-tap='{methods:goMyCollect}'>
            <van-icon name="star" class="wdkj_1"/>
            <p>我的收藏</p>
            <van-icon name="arrow" class="wdkj_2"/>
        </div>
        <div class="wdkj" v-tap='{methods:goMyEstimate}'>
            <van-icon name="smile" class="wdkj_1"/>
            <p>我的评价</p>
            <van-icon name="arrow" class="wdkj_2"/>
        </div>
        <div class="wdkj" v-tap='{methods:goMyAddress}'>
            <van-icon name="map-marked" class="wdkj_1"/>
            <p>我的地址</p>
            <van-icon name="arrow" class="wdkj_2"/>
        </div>
        <div class="wdkj" v-tap='{methods:goMyCoupon}'>
            <van-icon name="gold-coin" class="wdkj_1"/>
            <p>优惠券</p>
            <van-icon name="arrow" class="arr_yhq"/>          
        </div>
    </div>
    <!-- 联系客服 -->
    <div class="kx3"></div>
    <div class="lxkf">
        <div class="wdkj" v-tap='{methods:goService}'>
            <van-icon name="phone" class="wdkj_1"/>
            <p>联系客服</p>
            <van-icon name="arrow" class="wdkj_2"/>
        </div>
        <!-- <div class="wdkj" v-tap='Share'>
            <van-icon name="cluster" class="wdkj_1"/>
            <p>分享好友</p>
            <van-icon name="arrow" class="wdkj_2"/>
        </div> -->
    </div>
  </div>
</template>

<script>
import api from '../api/api_zhang'
export default {
    name:'Mine',
    data(){
        return{
            userInfo:''
        }
    },
    methods: {
        goSet(){
            this.$router.push('/Setting')
        },
        goOrder(){
            this.$router.push('/MyOrder')
        },
        goAllOrder(){
            this.$router.push('/AllOrder')
        },
        goSent(){
            this.$router.push('/Sent')
        },
        goGetPro(){
            this.$router.push('/GetPro')
        },
        goMyPrice(){
            this.$router.push('/MyPrice')
        },
        goMyCollect(){
            this.$router.push('/MyCollect')
        },
        goMyEstimate(){
            this.$router.push('/MyEstimate')
        },
        goMyAddress(){
            this.$router.push('/MyAddress')
        },
        goMyCoupon(){
            this.$router.push('/MyCoupon')
        },
        goService(){
            this.$router.push('/Service')
        }       
    },
    mounted() {
      this.userInfo = localStorage.getItem("userInfo")        
    },
}
</script>

<style scoped>
.kx{
    height: 10px;
    background: rgb(240, 235, 235);
}
.kx3{
    height:20px;
    background: rgb(240, 235, 235);
}
.sz {
  height: 15vh;
  background: black;
  color: white;
}
.icon-set {
  font-size: 24px;
  position: relative;
  left: 330px;
  bottom: -55px;
}
.grxx {
  height: 15vh;
  background: black;
  color: white;
  display: flex;
  padding-left:20px;
}
.grxx_dh{
    margin-left:10px;
}
.grxx_dh p{
    font-size: 12px;
}
.van-image {
  width: 80px;
  height: 80px;
}
.wddd{
    height:20px;
    display: flex;
    margin-top:10px;
}
.wddd p{
    font-size:12px;
}
.ddjt_1{
    margin-left:10px;
    margin-top:14px;
}
.ddjt_2{
    margin-left:5px;
    margin-top:12px;
    color: rgb(186, 186, 186);
}
.wddd p:nth-of-type(2){
    margin-left:200px;
    color: rgb(186, 186, 186);
}
.ddjt{
    font-size: 12px;
}
.wddd_2{
    margin-top: 20px;
}

.wd{
    height:200px;
    margin-top:10px;
}
.wdkj{
    height:40px;
    border-bottom: 1px solid #cecece;
    display: flex;
}
.wdkj_1{
    margin-left:10px;
    margin-top:13px;
}
.wdkj p{
    font-size: 14px;
    margin-left:10px;
    margin-top:10px;
}
.wdkj_2{
    margin-left: 255px;
    margin-top: 12px;
    color: rgb(186, 186, 186);
}
.arr_yhq{
    margin-left: 268px;
    margin-top: 12px;
    color: rgb(186, 186, 186);
}

</style>