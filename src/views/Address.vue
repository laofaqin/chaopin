<template>
  <van-address-edit
  :area-list="areaList"
  name=""
  :address-info='address_info'
  show-postal
  show-delete
  show-set-default
  show-search-result
  :search-result="searchResult"
  @save="onSave"
  @delete="onDelete"
  @change-detail="onChangeDetail"
/>
</template>

<script>
import address from '../data/addressList'
export default {
    data() {
        return {
            areaList:address,
            searchResult: [],
            address_info:{
                name:'老发',
                tel:'184****3138',
                province:'广东省/',
                city:'云浮市/',
                county:'罗定市',
                addressDetail:'船步镇',

             }
        }
    },
    methods: {
        onSave() {
        Toast('save');
        },
        onDelete() {
        Toast('delete');
        },
        onChangeDetail(val) {
            if (val) {
                this.searchResult = [{
                name: '黄龙万科中心',
                address: '杭州市西湖区'
                }];
            } else {
                this.searchResult = [];
            }
        }
    }
}
</script>

<style>

</style>