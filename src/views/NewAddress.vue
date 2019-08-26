<template>
  <div>
    <header>
      <div class="wddd">
        <van-icon name="arrow-left" class="arrow" v-tap="{methods:goMyAddress}" />
        <p>新增地址</p>
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
      this.$router.push("/MyAddress");
    },
    onSave(res) {
      console.log(res)
      let params = {
        receiver:res.name,
        mobile:res.tel,
        regions:res.province+'-'+res.city+'-'+res.county,
        idDefault:true
      }
      api.newAddress(params).then(data=>{
        console.log(data)
      })
    },
    onDelete() {
      // console.log(2)
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "",
            address: ""
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  },
  mounted() {

  },
}
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
  margin-left: 120px;
}
.arrow {
  color: whitesmoke;
  margin-left: 12px;
  margin-top: 12px;
}
</style>