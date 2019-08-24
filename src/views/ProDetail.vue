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
    </section>
    <v-tanchu showw='open'></v-tanchu>
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
      goods: {
        title: "美国伽力果（约680g/3个）",
        price: 2680,
        express: "免运费",
        remain: 19,
        thumb: [
          "https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg",
          "https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg"
        ]
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
      this.$store.commit('change')
      console.log(333)

    },
    sorry() {
      Toast("暂无后续逻辑~");
    },
    shoucang(){
        Toast("收藏成功");
    }
  },

  mounted() {
    api.getDetail(localStorage.getItem("detail")).then(res => {
      console.log(res);
      this.goods.title = res.data.descriptions;
      this.goods.remain = res.data.quantity;
      this.goods.price = res.data.price * 100;
      this.goods.thumb = [res.data.coverImg];
    });
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