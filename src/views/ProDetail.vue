<template>
  <div id="box">
    <van-nav-bar class="sportshoes" title="商品详情" left-arrow @click-left="onClickLeft" />
    <section>
      <div class="goods">
        <van-swipe class="goods-swipe" :autoplay="3000">
          <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
            <img :src="thumb" />
          </van-swipe-item>
        </van-swipe>

        <van-cell-group>
          <van-cell>
            <div class="goods-title">{{ goods.title }}</div>
            <div class="goods-price">{{ formatPrice(goods.price) }}</div>
          </van-cell>
          <van-cell class="goods-express">
            <van-col span="10">运费：{{ goods.express }}</van-col>
            <van-col span="14">剩余：{{ goods.remain }}</van-col>
          </van-cell>
        </van-cell-group>

        <van-cell-group class="goods-cell-group">
          <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
            <template slot="title">
              <span class="van-cell-text">有赞的店</span>
              <van-tag class="goods-tag" type="danger">官方</van-tag>
            </template>
          </van-cell>
          <van-cell title="线下门店" icon="location-o" is-link @click="sorry" />
        </van-cell-group>

        <van-cell-group class="goods-cell-group">
          <van-cell title="查看商品详情" is-link @click="sorry" />
        </van-cell-group>

        <van-goods-action>
          <van-goods-action-icon icon="chat-o" @click="sorry">客服</van-goods-action-icon>
          <van-goods-action-icon icon="cart-o" @click="onClickCart">购物车</van-goods-action-icon>
          <van-goods-action-icon icon="star" @click="shoucang">收藏</van-goods-action-icon>
          <van-goods-action-button type="warning" @click="sorry">发起砍价</van-goods-action-button>
          <van-goods-action-button type="danger" @click="buy">立即购买</van-goods-action-button>
        </van-goods-action>
      </div>

      <img v-for="i in 4" :key='i' :src="goods.thumb" />
      <van-sku
        v-model="show"
        :sku="sku"
        :goods="goods"
        :close-on-click-overlay='true'
        @buy-clicked="onBuyClicked"
        @add-cart="onAddCartClicked"
        @close-preview='close'
    />
    </section>
  </div>
</template>

<script>
import api from "../api/api_try";
import {
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from "vant";
export default {
  beforeRouteEnter(to,from,next){
    if (from.name === 'PayOrder2') {
      next(vm=>{
        vm.$router.go(-2)
      })
    }else{
      next()
    }
  },
  components: {
    [Tag.name]: Tag,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton,
    'v-tanchu':()=>import('./Tanchu')
  },
  data() {
    return {
      show:false,
      goods: {
        title: "美国伽力果（约680g/3个）",
        price: 2680,
        express: "免运费",
        remain: 19,
        thumb: [
          "https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg",
          "https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg"
        ]
      },
      sku: {
          // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
          // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
          tree: [
              {
              k: '尺寸', // skuKeyName：规格类目名称
              v: [
                  {
                  id: '30349', // skuValueId：规格值 id
                  name: '37', // skuValueName：规格值名称
                  },
                  {
                  id: '1215',
                  name: '38',
                  },
                  {
                  id: '1193',
                  name: '39',
                  },
                  {
                  id: '1217',
                  name: '40',
                  },
                  {
                  id: '1218',
                  name: '41   ',
                  }
              ],
              k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
              }
          ],
          // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
          list: [
              {
              id: 2259, // skuId，下单时后端需要
              price: 103230, // 价格（单位分）
              s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
              s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
              s3: '0', // 最多包含3个规格值，为0表示不存在该规格
              stock_num: 110 // 当前 sku 组合对应的库存
              }
          ],
          price: '1.00', // 默认价格（单位元）
          stock_num: 227, // 商品总库存
          collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
          none_sku: false, // 是否无规格商品
          
          hide_stock: false // 是否隐藏剩余库存
      },
      goods: {
          // 数据结构见下方文档
          // 商品标题
          title: '测试商品',
          // 默认商品 sku 缩略图
          picture: 'https://img.yzcdn.cn/1.jpg'
      },
      skuData: {
          // 商品 id
          goodsId: '946755',
          // 留言信息
          messages: {
              message_0: '12',
              message_1: ''
          },
          // 选择的商品数量
          selectedNum: 1,
          // 选择的 sku 组合
          selectedSkuComb: {
              id: 2257,
              price: 100,
              s1: '30349',
              s2: '1193',
              s3: '0',
              stock_num: 111
          }
      }
    
    };
  },
  methods: {
    formatPrice() {
      return "¥" + (this.goods.price / 100).toFixed(2);
    },
    onClickCart() {
      this.$router.push("cart");
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    buy(){
      this.show = true

      // console.log(333)

    },
    sorry() {
      Toast("暂无后续逻辑~");
    },
    shoucang(){
       if(localStorage.getItem('fav')){
          let detail = localStorage.getItem('detail')
          let arr = JSON.parse(localStorage.getItem('fav'))
          if(arr.indexOf(detail)==-1){
            arr.push(localStorage.getItem('detail'))
          }
          localStorage.setItem('fav',JSON.stringify(arr))
          Toast("收藏成功");
        }else{
          // console.log(3)
          let arr = [];
          let detail = localStorage.getItem('detail')
          arr.push(localStorage.getItem('detail'))
          // console.log(arr)
          localStorage.setItem('fav',JSON.stringify(arr))
          Toast("收藏成功");
        }
        
    },
    onBuyClicked(){
            // console.log('立即购买')
            this.$router.push('/PayOrder')
        },
        onAddCartClicked(){
            // console.log('加入购物车')
            let data = {
                product:localStorage.getItem('detail') ,  //商品id
                quantity:this.skuData.selectedNum        //数量(默认值1)
            }
            // console.log(this.skuData.selectedNum)
            api.addCart(data).then(res=>{
                // console.log(res)
            this.show = false;
            })
    },
    close(){
        // this.$store.commit('change')
        // console.log('关闭')
    }
  },

  mounted() {
    api.getDetail(localStorage.getItem("detail")).then(res => {
      // console.log(res);
      this.goods.title = res.data.descriptions;
      this.goods.remain = res.data.quantity;
      this.goods.price = res.data.price * 100;
      this.goods.thumb = [res.data.coverImg];

      
    });
    api.getDetail(localStorage.getItem("detail")).then(res => {
        // console.log(res)
        this.goods.picture = res.data.coverImg;
        this.sku.price = res.data.price;
        this.sku.stock_num  = res.data.quantity;
        this.sku.list[0].price = res.data.price*100;

        this.$store.state.orderDetail = [{
            quantity:1,  
            product:res.data._id,  
            price: res.data.price
        }]

        this.$store.state.order = [{
            title:res.data.descriptions,
            num:1,
            price:res.data.price*100,
            thumb:res.data.coverImg
        }]

        this.$store.state.sum = res.data.price*100

    })
  }
};
</script>

<style scoped>
.van-nav-bar {
  height: 60px;
  line-height: 60px;
  background: rgba(0, 0, 0, 0.8);
}
.van-nav-bar__title {
  color: white;
}
.van-nav-bar .van-icon {
  color: white;
}
.tab {
  margin: 0;
  padding: 0;
}
.van-tabs__line {
  display: none;
}
#box {
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
}
.sportshoes {
  height: 60px;
}
section {
  flex: 1;
  overflow: auto;
  /* margin-top: 60px; */
}

.van-swipe-item {
  display: flex;
  justify-content: center;
}
.van-swipe-item img {
    width:300px;
    height: 100%;
}
section>img{
    width:100%;
}
</style>