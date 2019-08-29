<template>
  <div>
    <header>
      <div class="">
        <van-nav-bar class="sportshoes"
            title="新增地址"
            left-arrow
            @click-left="goMyAddress"
            />
      </div>
    </header>
    <section>
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
      />
    </section>
  </div>
</template>

<script>
import addressList from '../data/addressList'
import api from '../api/api_zhang'
export default {

  name: "NewAddress",
  data() {
    return {
      areaList: addressList,
      searchResult: []
    };
  },
  methods: {
    goMyAddress() {
      this.$router.go(-1);
    },
    onSave(res) {
      console.log(res)
      let params = {
        address:res.addressDetail,
        receiver:res.name,
        mobile:res.tel,
        regions:res.province+'-'+res.city+'-'+res.county,
        idDefault:true
      }
      api.newAddress(params).then(data=>{
        // console.log(data)
            this.$toast("添加成功");
            this.$router.go(-1)
      })
    },
    onDelete() {
      // console.log(2)
    },
    onChangeDetail(val) {
      
    }
  },
  mounted() {

  },
}
</script>

<style scoped>
.van-nav-bar{
    background: black;
}
.van-icon-arrow-left{
    color:whitesmoke;
}
.van-nav-bar__text{
    color: black;
}
.van-nav-bar__title{
    color: whitesmoke;
}
.arrow {
  color: whitesmoke;
  margin-left: 12px;
  margin-top: 12px;
}
</style>