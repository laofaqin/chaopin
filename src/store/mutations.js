import { stat } from "fs";

var mutations={
	change(state){
        // state.show = !state.show;
        if(!state.show){
            state.show=true
        }
        console.log(1)
    },
    nike(state){
        state.title = '耐克'
    },
    conver(state){
        state.title = '匡威'
    },
    adidas(state){
        state.title = '阿迪达斯'
    },
    vans(state){
        state.title = 'vans'
    },
    sport(state){
        state.proSortName = '鞋靴类+'
    },
    bag(state){
        state.proSortName = '箱包'
    },
    coach(state){
        state.title = '蔻驰'
    },
    mcm(state){
        state.title = 'MCM'
    },
    maike(state){
        state.title = '迈克.科尔斯'
    },
    furla(state){
        state.title = '芙拉'
    },
    
}
export default mutations;