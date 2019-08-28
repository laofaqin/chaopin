<template>
  <div id="box">
        <van-nav-bar class="sportshoes"
            title="饰品"
            left-arrow
            @click-left="onClickLeft"
            />
        <section>
            <van-tabs v-model="active">
                <van-tab title="默认">
                        <van-card 
                        :id="item._id"
                        v-tap="{methods:goDetail}"
                        v-for="(item,i) in list"
                        :key="i"
                        :centered="true"
                        :price="item.price"
                        :desc="item.descriptions"  
                        :thumb="item.coverImg"
                        >
                        <span slot='origin-price'>￥10000</span>
                        </van-card>
                </van-tab>
                <van-tab title="销量">
                    <van-card 
                        :id="item._id"
                        v-tap="{methods:goDetail}"
                        v-for="(item,i) in list"
                        :key="i"
                        :centered="true"
                        :price="item.price"
                        :desc="item.descriptions"  
                        :thumb="item.coverImg"
                        >
                        <span slot='origin-price'>￥10000</span>
                        </van-card>
                </van-tab>
                <van-tab title="价格">
                    <van-card 
                        :id="item._id"
                        v-tap="{methods:goDetail}"
                        v-for="(item,i) in list"
                        :key="i"
                        :centered="true"
                        :price="item.price"
                        :desc="item.descriptions"  
                        :thumb="item.coverImg"
                        >
                        <span slot='origin-price'>￥10000</span>
                        </van-card>
                </van-tab>
                <van-tab title="折扣">
                    <van-card 
                        :id="item._id"
                        v-tap="{methods:goDetail}"
                        v-for="(item,i) in list"
                        :key="i"
                        :centered="true"
                        :price="item.price"
                        :desc="item.descriptions"  
                        :thumb="item.coverImg"
                        >
                        <span slot='origin-price'>￥10000</span>
                        </van-card>
                </van-tab>
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
            // console.log('fanhui')
            this.$router.go(-1)
        },
        goDetail(res){
            // console.log(res.event.currentTarget.id)
            localStorage.setItem('detail',res.event.currentTarget.id)
            this.$router.push('/ProDetail')
        }
    },
    mounted(){
        api.getProList({name:'饰品类+',per:100}).then(res=>{
            // console.log(res)
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
    .van-card{
        width:50%;
        height:250px ;
        display: block;
        margin-top:8px;
    }
   /*  .van-card__content{
        display: block;
    }
    .van-card__thumb{
        display: block;
    } */
    
    
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
    .van-tab__pane{
        display:flex;
        justify-content: space-around;
        flex-direction: inherit;
        flex-wrap: wrap;
    }
    .van-card__header{
        flex-direction: column;
        /* align-items: center; */
    }
    .van-card__thumb{
        width:100%;
        height: 100%;  
    }
</style>