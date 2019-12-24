import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
 export default new Vuex.Store({
     state:{
         list:[],
         list1:[]
     },
     mutations:{
         addList(state,v){
             this.state.list.push(v);
         },
         showdetail(state,i){
            //  list1数组只是存一个元素，显示每次点击的详情文章的相关数据
             this.state.list1[0]=this.state.list[i]  
         }
     }
 })
