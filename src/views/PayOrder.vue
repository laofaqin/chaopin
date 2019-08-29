<template>
  <div id="box">
        <van-nav-bar class="sportshoes"
            title="结算订单"
            left-arrow
            @click-left="onClickLeft"
            />
        <section>
            <van-address-list
                :list="list"
                @edit="onEdit"
                
            />
            <div>
                <p style="width:100%;border-bottom:1px solid black;height:24px;padding-left:10px;   ">商品详情</p>
                <van-card 
                        v-for='(item,i) in order'
                        :key='i'
                        :num="item.num"
                        :price="(item.price / 100).toFixed(2)"
                        :desc="item.title"  
                        :thumb="item.thumb"
                    />
            </div>
            <van-submit-bar
                :price="this.$store.state.sum"
                button-text="提交订单"
                @submit="onSubmit"
            />
        </section>
       <footer></footer>
  </div>
</template>

<script>
import api from '../api/api_try'
import api2 from '../api/api_zhang'
import {Toast} from 'vant'

export default {
    data(){
        return{
            chosenAddressId: '1',
            list: [
                // {
                // id: '1',
                // name: '张三',
                // tel: '13000000000',
                // address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
                // }
            ],
            order:[],
            orderData:[],
            orderDetail:''
           
        }
    },
    methods:{
        onClickLeft() {
            // console.log('fanhui')
            this.$router.go('-1')
        },
      

        onEdit(item, index) {
            // console.log('跳转到地址')
            this.$router.push('/MyAddress')
        },
        onSubmit(){
            // console.log('提交订单')
            let data = {
                receiver: this.$store.state.orderData.receiver,    
                regions:this.$store.state.orderData.regions   ,
                address:this.$store.state.orderData.address     ,
                orderDetails:this.$store.state.orderDetail
                
            }
            // console.log(data)
            api.newOrder(data).then(res=>{
                // console.log(res)
                if(res.data.code=='success'){
                    alert(res.data.message)
                }
            })
        }
    },
    mounted(){
        
        let orderList = JSON.parse(localStorage.getItem('orderList'))
            this.order = this.$store.state.order
            // console.log(this.order)

        
        this.$store.state.orderDetail = this.order.map(function(item,i){
            return {
                quantity:Number(item.num),  
                product:`${item.pid}`,  
                price:Number((item.price / 100).toFixed(2))   
            }
        })
        
        if(this.$store.state.defaultAddress){
            // console.log('1')
            api2.getOneAddress(this.$store.state.defaultAddress).then(res=>{
                // console.log(res.data)
                this.list = [{
                    id: '1',
                    name: `${res.data.receiver}`,
                    tel:`${res.data.mobile}`,
                    address: `${res.data.regions}${res.data.address}`
                }]
                this.$store.state.orderData = {
                receiver:`${res.data.receiver}`,      //收货人
                regions:`${res.data.regions}`,       //收货的省市区县
                address: `${res.data.address}`, 
                }  
            })
        }else{
            // console.log(2)
            api.getAdress().then(res=>{
                this.list = [{
                    id: '1',
                    name: `${res.data.addresses[0].receiver}`,
                    tel:`${res.data.addresses[0].mobile}`,
                    address: `${res.data.addresses[0].regions}${res.data.addresses[0].address}`
                }]
                this.$store.state.orderData = {
                receiver:`${res.data.addresses[0].receiver}`,      //收货人
                regions:`${res.data.addresses[0].regions}`,       //收货的省市区县
                address: `${res.data.addresses[0].address}`, 
                }     //收货地址
            })
        }
        
        

    },  
    
}
</script>

<style scoped>
    .van-nav-bar{
        height:60px;
        line-height: 60px;
        background:rgba(0, 0, 0, 0.8);
        
    }
    .van-nav-bar__title{
        color:white;
    }
    .van-nav-bar .van-icon{
        color:white;
    }
    .tab{
        margin:0;
        padding:0;
    }
   .van-tabs__line{
        display: none;

    }
    .van-address-list{
        height:auto;
        padding:0;
    }
   
    
    #box{
        display:flex;
        height: 100vh;
        width:100%;
        flex-direction: column; 
    }
    .sportshoes{
        height: 60px;
    }
    section{
        flex:1;
        overflow: auto;
        /* margin-top: 60px; */
    }
    footer{
        height: 50px;
        background:rgba(0, 0, 0, .2)
    }
    .van-address-list__add{
        display:none;
    }
    .van-radio__icon--round .van-icon{
        display:none
    }
    .van-radio-group{
        border-bottom: 1px solid red;
    }

</style>