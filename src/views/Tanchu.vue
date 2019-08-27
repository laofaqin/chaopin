<template>
    <van-sku
        v-model="show"
        :sku="sku"
        :goods="goods"
        :close-on-click-overlay='true'
        @buy-clicked="onBuyClicked"
        @add-cart="onAddCartClicked"
        @close-preview='close'
    />
</template>

<script>

import api from '../api/api_try'
import {mapState} from 'vuex'
export default {
    data() {
        return {
            sku: {
                // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
                // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
                tree: [
                    {
                    k: '尺寸', // skuKeyName：规格类目名称
                    v: [
                        {
                        id: '30349', // skuValueId：规格值 id
                        name: '37', // skuValueName：规格值名称
                        },
                        {
                        id: '1215',
                        name: '38',
                        },
                        {
                        id: '1193',
                        name: '39',
                        },
                        {
                        id: '1217',
                        name: '40',
                        },
                        {
                        id: '1218',
                        name: '41   ',
                        }
                    ],
                    k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                    }
                ],
                // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
                list: [
                    {
                    id: 2259, // skuId，下单时后端需要
                    price: 103230, // 价格（单位分）
                    s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
                    s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
                    s3: '0', // 最多包含3个规格值，为0表示不存在该规格
                    stock_num: 110 // 当前 sku 组合对应的库存
                    }
                ],
                price: '1.00', // 默认价格（单位元）
                stock_num: 227, // 商品总库存
                collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
                none_sku: false, // 是否无规格商品
                
                hide_stock: false // 是否隐藏剩余库存
            },
            goods: {
                // 数据结构见下方文档
                // 商品标题
                title: '测试商品',
                // 默认商品 sku 缩略图
                picture: 'https://img.yzcdn.cn/1.jpg'
            },
            skuData: {
                // 商品 id
                goodsId: '946755',
                // 留言信息
                messages: {
                    message_0: '12',
                    message_1: ''
                },
                // 选择的商品数量
                selectedNum: 1,
                // 选择的 sku 组合
                selectedSkuComb: {
                    id: 2257,
                    price: 100,
                    s1: '30349',
                    s2: '1193',
                    s3: '0',
                    stock_num: 111
                }
            }
        };
    },
    computed:{
        ...mapState(['show'])
    },
    methods:{
        onBuyClicked(){
            console.log('立即购买')
            this.$router.push('/PayOrder')
        },
        onAddCartClicked(){
            console.log('加入购物车')
            let data = {
                product:localStorage.getItem('detail') ,  //商品id
                quantity:this.skuData.selectedNum        //数量(默认值1)
            }
            console.log(this.skuData.selectedNum)
            api.addCart(data).then(res=>{
                console.log(res)
            this.$store.commit('change')
            })
        },
        close(){
            // this.$store.commit('change')
            console.log('关闭')
        }
    },
    mounted(){
        api.getDetail(localStorage.getItem("detail")).then(res => {
            console.log(res)
            this.goods.picture = res.data.coverImg;
            this.sku.price = res.data.price;
            this.sku.stock_num  = res.data.quantity;
            this.sku.list[0].price = res.data.price*100;

            this.$store.state.orderDetail = [{
                quantity:1,  
                product:res.data._id,  
                price: res.data.price
            }]

            this.$store.state.order = [{
                title:res.data.descriptions,
                num:1,
                price:res.data.price*100,
                thumb:res.data.coverImg
            }]

            this.$store.state.sum = res.data.price*100

        })
    },
}
</script>

<style>

</style>