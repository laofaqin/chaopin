<template>
  <div class="cart">
    <header>
      <van-nav-bar
          title="购物车"
          @click-right="onClickRight"
        >
        <van-icon name="delete" slot="right" color='white' />
        </van-nav-bar>

    </header>
    <section>
      <van-checkbox-group class="card-goods" v-model="checkedGoods">
        <van-checkbox class="card-goods__item" v-for="item in goods" :key="item.id" :name="item.id">
          <van-card
            :title="item.title"
            :desc="item.desc"
            :num="item.num"
            :price="formatPrice(item.price)"
            :thumb="item.thumb"
          />
        </van-checkbox>
      </van-checkbox-group>
      <van-submit-bar
        :price="totalPrice"
        :disabled="!checkedGoods.length"
        :button-text="submitBarText"
        @submit="onSubmit"
        >
        <van-checkbox v-model="checked" @click="change(this)">全选</van-checkbox>
      </van-submit-bar>
    </section>
    <footer>
      
    </footer>
  </div>
</template>

<script>
import api from '../api/api_try'
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from "vant";
export default {
  components: {
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [CheckboxGroup.name]: CheckboxGroup
  },
  data() {
    return {
      checked:false,
      checkedGoods: [],
      goods:[]
        // {
        //   id: "1",
        //   title: "进口香蕉",
        //   desc: "约250g，2根",
        //   price: 200,
        //   num: 1,
        //   thumb:
        //     "https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg"
        // }
      
    };
  },
  computed: {
    submitBarText() {
      const count = this.checkedGoods.length;
      return "结算" + (count ? `(${count})` : "");
    },
    totalPrice() {
      let money = this.goods.reduce(
        (total, item) =>
          total + Number(this.checkedGoods.indexOf(item.id) !== -1 ? item.price*item.num : 0),
        0
      );
      this.$store.state.sum = money
      return money

    }
  },
  inject:['reload'],
   
  methods: {
    change(){
      if(this.checked==false){
        this.goods.map((item)=>{
          this.checkedGoods.push(item.id)
        })
      }else{
        this.checkedGoods=[]
      }
    },
    formatPrice(price) {
      return (price / 100).toFixed(2);
    },
    onSubmit() {
      this.$store.state.orderId = this.checkedGoods;
      localStorage.setItem('orderId',JSON.stringify(this.checkedGoods))
      let orderList = this.$store.state.orderList
        let orderId = JSON.parse(localStorage.getItem('orderId'));
       let order = [];
        for(let i in orderId){
            for(let j in orderList){
                if(orderId[i]==orderList[j].id){
                    order.push(orderList[j])
                }
            }
        }
        this.$store.state.order = order
      
      this.$router.push('/payOrder')
    },
    onClickRight(){
      
      let _this = this
      this.checkedGoods.map(function(i){
        api.deleteCart(i).then(res=>{
          _this.reload()
        })
      })
      
    }
  },
  mounted(){
    if(this.checked==true){
    }
    api.getCart().then(res=>{
      this.goods= res.data.map((i,n)=>{
       return {
          id:`${i._id}`,
          title: `${i.product.descriptions}`,
          desc: "约250g，2根",
          price:`${Number(i.product.price*100)}`,
          num:`${i.quantity}`,
          thumb:`${i.product.coverImg}`,
          pid:`${i.product._id}`
        }
      })
      this.$store.state.orderList = this.goods
      localStorage.setItem('orderList',JSON.stringify(this.goods))
    })
    
  },
  updated(){
    
  },
  beforeUpdate(){
   
  }
  
};
</script>

<style scoped lang='less'>
.van-nav-bar {
  height: 60px;
  line-height: 60px;
  background: rgba(0, 0, 0, 0.8);
}
.van-nav-bar__title {
  color: white;
}
.header {
  z-index: 4;
  height: 60px;
  background: black;
  display: flex;
}
.header p {
  color: whitesmoke;
  margin-left: 165px;
  margin-top: 20px;
}
.icon-del {
  color: whitesmoke;
  margin-left: 125px;
  margin-top: 25px;
}

.van-submit-bar{
  bottom: 50px;
}
.cart{
  height: 87vh;
  display: flex;
  flex-direction: column;
}
section{
  flex:1;
  overflow: auto;
}
.van-tabbar-item{
  height: 10vh;
}






.card-goods {
  padding: 10px 0;
  background-color: #fff;
  &__item {
    position: relative;
    background-color: #fafafa;
    .van-checkbox__label {
      width: 100%;
      height: auto; 
      padding: 0 10px 0 15px;
      box-sizing: border-box;
    }
    .van-checkbox__icon {
      top: 50%;
      left: 10px;
      z-index: 1;
      position: absolute;
      margin-top: -10px;
    }
    .van-card__price {
      color: #f44;
    }
  }
}
</style>