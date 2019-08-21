<template>
  <div>
    <h2>Try</h2>
    <button @click="tap()">anniu</button>
  </div>
</template>

<script>
import api from '../api/api_pro'
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    tap() {
      let data = {
        userName:    "nihaomama",
  password :   "12312jjjj",
  nickName :   "昵称",
  avatar  :    "124"
      }
      api.postUserInfo(data).then(res=>{
        console.log(res)
      })
      
    }
  },
  mounted() {
    

  }
};
</script>

<style scoped>
</style>