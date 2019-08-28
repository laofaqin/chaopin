<template>
  <div class="cart">
    <header>
      <van-nav-bar
          title="我的收藏"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight"
        >
        <van-icon  slot="right" color='white' >编辑</van-icon>
        </van-nav-bar>

    </header>
    <section>
      <van-card 
          :id="item._id"
          v-tap="{methods:goDetail}"
          v-for="(item,i) in list"
          :key="i"
          :centered="true"
          :price="item.price"
          :desc="item.descriptions"  
          :thumb="item.coverImg"
          />
    </section>
    <footer>
      
    </footer>
  </div>
</template>

<script>
import api from '../api/api_try'
export default {
  
  data() {
    return {
      list:[]
    };
  },
  
  inject:['reload'],
   
  methods: {
    onClickRight(){
      this.$router.push('/MyFav2')
    },
    onClickLeft() {
            console.log('fanhui')
            this.$router.go(-1)
        },
    goDetail(res){
            console.log(res.event.currentTarget.id)
            localStorage.setItem('detail',res.event.currentTarget.id)
            this.$router.push('/ProDetail')
        }
   
  },
  mounted(){
    let arr = JSON.parse(localStorage.getItem('fav'))
    console.log(arr)
    if(arr){
      let favlist = []
      let _this = this
      arr.map(function(i){
        api.getDetail(i).then(res=>{
          console.log(res)
          favlist.push(res.data)
          _this.list = favlist
          console.log(_this.list)
        })
      })
    }
    
    
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
 .van-nav-bar .van-icon{
        color:white;
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