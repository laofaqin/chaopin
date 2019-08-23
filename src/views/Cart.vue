<template>
  <div>
    <header>
      <div class="header">
        <p>购物车</p>
        <van-icon name="delete" class="icon-del"/>
      </div>
    </header>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header{
  height:60px;
  background: black;
  display: flex;
}
.header p{
  color:whitesmoke;
  margin-left:165px;
  margin-top:20px;
}
.icon-del{
  color:whitesmoke;
  margin-left:125px;
  margin-top: 25px;
}
</style>