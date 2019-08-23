<template>
  <div id="box">
        <van-nav-bar class="sportshoes"
            title="运动鞋"
            left-arrow
            @click-left="onClickLeft"
            />
        <section>
            <van-tabs v-model="active">
            <van-tab title="默认">
                <div>
                    <van-card 
                    v-for="(item,i) in list"
                    :key="i"
                    :centered="true"
                    :price="item.price"
                    :desc="item.descriptions"  
                    :thumb="item.coverImg"
                    />
                </div>
            </van-tab>
            <van-tab title="销量">内容 2</van-tab>
            <van-tab title="价格">内容 3</van-tab>
            <van-tab title="折扣">内容 4</van-tab>
        </van-tabs>
        </section>
       
  </div>
</template>

<script>
import api from '../api/api_try'
export default {
    data(){
        return{
            active: 0,
            list:[]
        }
    },
    methods:{
        onClickLeft() {
            console.log('fanhui')
            this.$router.go(-1)
        }
    },
    mounted(){
        api.getProList({name:'运动鞋'}).then(res=>{
            console.log(res)
            this.list = res.data.products
        })
    }
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
    /* .van-card{
        width:50%;
        height:250px ;
        display: block;
    }
    .van-card__content{
        display: block;
    }
    .van-card__thumb{
        display: block;
    } */
    .van-card__header{
        flex-direction: column;
        width:49%;
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
</style>