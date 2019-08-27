<template >
  <div>
    <!-- 头部>购物车+搜索 -->
    <div style="height:60px">
      <van-nav-bar :fixed='true' @click-right="goSearch()" @click-left="goCart()" left-arrow class="nav-bar">
        <van-icon class="cart-icon" name="cart-circle-o" slot="left" color="white" />
        <van-search disabled class="search" placeholder="搜索您想要的商品" slot="right" />
      </van-nav-bar>
    </div>

    <div>
      <!-- 轮播图 -->
      <van-swipe :autoplay="2000" indicator-color="white" :height="200" v-tap='{methods:goList}'>
        <van-swipe-item>
          <img class="lunbo" src="..\img\qiaodan-2.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img class="lunbo" src="..\img\qiaodan-2.jpg" alt />
        </van-swipe-item>
      </van-swipe>

      <!-- 宫格列表 -->
      <van-grid :column-num="5">
        <van-grid-item icon="photo-o" text="运动鞋" v-tap="{methods:goShoes}">
          <img src="..\img\Screenshot_20190822-114059_01_03.jpg" slot="icon" />
        </van-grid-item>
        <van-grid-item icon="photo-o" text="箱包" v-tap="{methods:goBag}">
          <img src="..\img\Screenshot_20190822-114059_01_05.jpg" slot="icon" />
        </van-grid-item>
        <van-grid-item icon="photo-o" text="名表" v-tap="{methods:goWatch}">
          <img src="..\img\Screenshot_20190822-114059_01_07.jpg" slot="icon" />
        </van-grid-item>
        <van-grid-item icon="photo-o" text="饰品" v-tap="{methods:goBeauty}">
          <img src="..\img\Screenshot_20190822-114059_01_09.jpg" slot="icon" />
        </van-grid-item>
        <van-grid-item icon="photo-o" text="服饰" v-tap="{methods:goFashion}">
          <img src="..\img\Screenshot_20190822-114059_01_14.jpg" slot="icon" />
        </van-grid-item>
      </van-grid>

      <!-- 红包/优惠券 -->
      <img
        v-tap="{methods:goCut}"
        class="quan"
        src="..\img\Screenshot_20190822-114059_01_02.gif"
        alt
      />

      <!-- 特价商品 -->
      <div class="tejia">
        <img src="..\img\Screenshot_20190822-114059_01_03.gif" alt />
        <img style="width:67%" src="..\img\Screenshot_20190822-114059_01_04.gif" alt />
        <img src="..\img\Screenshot_20190822-114059_01_05.gif" alt />
        <img src="..\img\Screenshot_20190822-114059_01_06.jpg" alt />
      </div>

      <div class="pinpai">
          <img src="..\img\Screenshot_20190822-164045_02.jpg" alt="" v-tap="{methods:goList}">
          <img src="..\img\Screenshot_20190822-164045_04.jpg" alt="" v-tap="{methods:goList}">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      color: "yellow"
    };
  },
  methods: {
    goSearch() {
      this.$router.push("/Search");
    },
    goCart() {
      this.$router.push("/Cart");
    },
    goShoes() {
      this.$router.push("/SportShoes");
    },
    goBag() {
      this.$router.push("/Bag");
    },
    goWatch() {
      this.$router.push("/Watch");
    },
    goBeauty() {
      this.$router.push("/Beauty");
    },
    goFashion() {
      this.$router.push("/Clothes");
    },
    goCut() {
      this.$router.push("/GetCut");
    },
    goList(){
      this.$router.push("/PinpaiList")
    }
  }
};
</script>

<style scoped>
.nav-bar {
  height: 60px;
  background: rgba(0, 0, 0, 0.8);
}
.search {
  padding: 0;
  margin: 9px 17px;
  width: 280px;
}
.cart-icon {
  font-size: 24px;
}
.quan {
  width: 100%;
}
.lunbo {
  height: 200px;
}
.van-grid img {
  width: 50px;
}
.tejia img {
  float: left;
  width: 33%;
}
.pinpai img{
  width:100%
}
</style>