<template>
  <div>
      <van-nav-bar class="sportshoes"
        title="优惠券"
        left-arrow
        @click-left="onClickLeft"
        />
       <!-- <van-popup  position="bottom"> -->
        <van-coupon-list
            :coupons="coupons"
            :disabled-coupons="disabledCoupons"
            @change="onChange"
            @exchange="onExchange"
        />
        <!-- </van-popup> -->
        
  </div>
</template>

<script>
const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元'
};
export default {
    data(){
        return{
            chosenCoupon: -1,
            coupons: [coupon],
            disabledCoupons: [coupon]
        }
    },
    methods:{
        onClickLeft() {
            console.log('fanhui')
            this.$router.go(-1)
        },
        onChange(index) {
      this.showList = true;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    }
    }
}
</script>

<style scoped>
    .van-nav-bar{
        height:60px;
        line-height: 60px;
        background:rgba(0, 0, 0, 0.8);
        
    }
    .van-nav-bar__title{
        color:white;
    }
    .van-nav-bar .van-icon{
        color:white;
    }
    
</style>