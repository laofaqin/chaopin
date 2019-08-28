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

      <div class="times">
        <span>2019/08/28 08:50</span>
        <p>等待买家付款</p>
      </div>
        <van-card
          v-for="(item,i) in orders" :key="i"
          num="1"
          :price="item.price"
          desc="描述信息"  
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
        />
      
      <div class="price">
        <p>共1件商品 总计: ￥ 999.00</p>
      </div>
    </section>
  </div>
</template>

<script>
import api from '../api/api_zhang'
export default {
  name:'MyOrder',
  data(){
    return{
      active:0,
      orders:[]
    }
  },
  methods: {
    goMine(){
      this.$router.push('/Mine')
    }
  },
  mounted() {
      let params = {
        per:10,
        page:1
      }
      api.getOrders(params).then(res=>{
        //console.log(res.data.orders)
        this.orders = res.data.orders
        // console.log(this.orders)
      })
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
  margin-left: 135px;
}
.arrow {
  color: whitesmoke;
  margin-left: 12px;
  margin-top: 12px;
}
.times{
  height: 40px;
  border-bottom: 1px solid #cecece;
  display: flex;
}
.times span{
  margin-top:10px;
  margin-left:10px;
  font-size:14px;
}
.times p{
  margin-left: 155px;
  font-size: 14px;
  margin-top: 10px;
}
.price{
  height:40px;
  border-top: 1px solid #cecece;
  border-bottom: 1px solid #cecece;
}
.price p{
  font-size: 14px;
  margin-left:200px;
}
</style>