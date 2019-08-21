<template>
  <div>
    <h2>Home</h2>
    <button @click="tap()">anniu</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    tap() {      
      this.$axios({
        url: "http://jx.xuzhixiang.top/ap/api/productlist.php",
        params: { uid: 19802 }
      }).then(data => {
        console.log(data.data);
      });
    }
  },
  mounted() {
    this.$axios({
      url: "http://jx.xuzhixiang.top/ap/api/productlist.php",
      params: { uid: 19802 }
    }).then(data => {
      console.log(data);
    });
  }
};
</script>

<style scoped>
</style>