<template>
  <div>
    <header>
      <div class="wddd">
        <van-icon name="arrow-left" class="arrow" v-tap='{methods:goSetting}'/>
        <p>我的地址</p>
      </div>
    </header>
    <section>
        <!-- <button v-tap='{methods:getAddress}'>获取地址</button> -->
        <van-address-list
            v-model="chosenAddressId"
            :list="list"
            @add="onAdd"
            @edit="onEdit"
            @click-item='go'
        />

    </section>
    <footer>
        <div class="footer" v-tap='{methods:goNewAddress}'>
            <p>添加新地址</p>
        </div>
    </footer>
  </div>
</template>

<script>
import api from '../api/api_zhang'
export default {
    name:'MyAddress',
    data(){
        return{
            addresses:'',
            chosenAddressId: '1',
      list: [
        // {
        //   id: '1',
        //   name: '张三',
        //   tel: '13000000000',
        //   address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        // },
        // {
        //   id: '2',
        //   name: '李四',
        //   tel: '1310000000',
        //   address: '浙江省杭州市拱墅区莫干山路 50 号'
        // }
      ]
       
        }
    },
    methods: {
        goSetting(){ 
            this.$router.go(-1)
        },
        goNewAddress(){
            this.$router.push('/NewAddress')
        },
        onAdd() {
            Toast('新增地址');
        },
        go(e){
            console.log(e.id)
            this.$store.state.defaultAddress = e.id
            
        },
        onEdit(event) {
            this.$router.push('/EditAddress')
            let address_id = event.id
            // console.log(address_id)
            localStorage.setItem('address-id',address_id)
            // api.getOneAddress(address_id).then(res=>{
            //     console.log(res)
            // })
        },
    },
    mounted() {
        let params = {
            per:10,
            page:1
        }
        api.getAddress(params).then(res=>{
            //console.log(res.data.addresses)
            let addressList = res.data.addresses.map(function(item,i){
                return {
                    id: `${item._id}`,
                    name: `${item.receiver}`,
                    tel: `${item.mobile}`,
                    address: `${item.regions}${item.address}`
                }
            })
            //console.log(arr)
            this.list = addressList
            // console.log(this.list)
        })
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
.van-button--danger{
    display: none;
}
.van-icon-delete{
    color:whitesmoke;
    font-size: 16px;
    margin-left:135px;
    margin-top:12px;
}
.wddd {
  height: 40px;
  background: black;
  display: flex;
}
.wddd p {
  color: whitesmoke;
  margin-top: 10px;
  margin-left: 133px;
}
.arrow {
  color: whitesmoke;
  margin-left: 12px;
  margin-top: 12px;
}
.grxx{
    height:80px;
    display: flex;
    border-bottom: 1px solid #cecece;
}
.grxx p{
    margin-top:30px;
    margin-left:12px;
    color: grey;
}
.van-image{
    margin-top:10px;
    margin-left:10px;
}
.arrow0{
    margin-left:170px;
    margin-top: 35px;
    color: grey;
}
.gywm{
    height:40px;
    border-top: 1px solid #cecece;
    margin-top:15px;
    display: flex;
    flex-direction: column;
}
.gywm p{
    margin-left:5px;
}
.tsyj{
    height:40px;
    border-top: 1px solid #cecece;
    border-bottom: 1px solid #cecece;
}
.tsyj p{
    margin-left:5px;
}
.arrow1{
    margin-left:268px;
    color:grey;
}
.arrow2{
    margin-left:268px;
    color:grey;
}
.footer{
    height:50px;
    width:100%;
    background: black;
    position: fixed;
    bottom: 0;
}
.footer p{
    color:whitesmoke;
    text-align: center;
    line-height: 20px;
}


</style>