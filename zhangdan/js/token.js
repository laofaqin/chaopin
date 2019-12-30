saveToken = function (token) {
    localStorage.setItem('reportToken', JSON.stringify(token))
}
getToken = function () {
    let aa = JSON.parse(localStorage.getItem('reportToken'))
    return aa
}

getreport = function () {
    return axios({
        method: 'post',
        url: "",
        headers: {
            "Authorization": getToken()
        },
        data: {

        }
    }).then(res => res.data)
}

login = function (phone, password) {
    return axios({
        method: 'post',
        url: "https://api.xy999888.com/api/user/login",
        data: {
            userName: phone,
            password: password
        }
    }).then(res => res.data)
}
// test = function () {
//     return axios({
//         method: 'post',
//         url: "https://api.xy226688.com/api/groupbuygoodscart/save",
       
//         data: {
//             goodsCount: 5,
//             groupBuyGoodsId: 7185,
//             groupBuyingListId: 54581228154230
//         }
//     })
// }