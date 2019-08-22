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
    onSave() {
      Toast("save");
    },
    onDelete() {
      Toast("delete");
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
  }
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