<template>
  <div class="cart">
    <header>
      <van-nav-bar
          title="我的收藏"
          @click-right="onClickRight"
        >
        <van-icon name="" slot="right" color='white' >编辑</van-icon>
        </van-nav-bar>

    </header>
    <section>
      <van-checkbox-group class="card-goods" v-model="checkedGoods">
        <van-checkbox class="card-goods__item" v-for="item in goods" :key="item.id" :name="item.id">
          <van-card
            :title="item.title"
            :desc="item.desc"
            :price="(item.price/100).toFixed(2)"
            :thumb="item.thumb"
          />
        </van-checkbox>
      </van-checkbox-group>
      <van-submit-bar
        button-text="删除"
        @submit="deleteFav"
      />
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
      list:[],
      one:'',
      checkedGoods: [],
      goods:[]
        
    };
  },
  
  inject:['reload'],
   
  methods: {
    deleteFav(){
      console.log('删除')
      console.log(this.checkedGoods)
      let _this = this
      let arr = JSON.parse(localStorage.getItem('fav'))
      console.log(arr)
      this.checkedGoods.map((i)=>{
        arr = arr.filter(function(item){
          return item!=i
            })
      })
      console.log(arr)
      localStorage.setItem('fav',JSON.stringify(arr))
      _this.reload()
    }
    ,
    
    onClickRight(){
      
      this.$router.go(-1)
      
    }
  },
  
  beforeMount(){
    
    let arr = JSON.parse(localStorage.getItem('fav'))
    console.log(arr)
    if(arr){
      let favlist = []
      let _this = this
      arr.map(function(i){
        _this.one = 'one'
        api.getDetail(i).then(res=>{
          console.log(res)
          favlist.push(res.data)
          console.log(favlist)
          _this.goods=favlist.map((i,n)=>{
            return {
                id:`${i._id}`,
                title: `${i.descriptions}`,
                desc: "约250g，2根",
                price:`${Number(i.price*100)}`,
                num:`${i.quantity}`,
                thumb:`${i.coverImg}`,
                pid:`${i._id}`
            }
          })
        })
      })
      console.log(this.goods)
    }
  },
  mounted(){
      console.log(this.goods)
      localStorage.setItem('orderList',JSON.stringify(this.goods))
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