<template>
  <div>
    <header>
      <div class="wddd">
        <van-icon name="arrow-left" class="arrow" v-tap="{methods:goMine}" />
        <p>我的收藏</p>
        <van-icon name="delete" class="delete" v-tap='{methods:Delete}'/>
      </div>
    </header>
    <section>
      <van-card
        :price="detail.price"
        :desc="detail.descriptions"
        :title="detail.name"
        :thumb="detail.coverImg"
      />
    </section>
  </div>
</template>

<script>
import api from '../api/api_try'
export default {
  name: "MyCollect",
  data() {
    return {
      detail:''
    };
  },
  methods: {
    goMine() {
      this.$router.push("/Mine");
    },
    Delete(){
      this.detail = ''
    }
  },
  mounted() {
    let pid = '5d612315b91b9569e466e9ab'
    api.getDetail(pid).then(res=>{
      // console.log(res)
      this.detail = res.data
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
.delete{
  font-size: 14px;
  color: whitesmoke;
  margin-left:135px;
  margin-top:12px;
}
</style>