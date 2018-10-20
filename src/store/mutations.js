/*
直接更新state的多个方法的对象
 */
import {
  RECIVE_ADDRESS,
  RECIVE_Categorys,
  RECIVE_SHOPS
} from './mutation-types'


export default {
  [RECIVE_ADDRESS](state,{address}){
    state.address = address
  },
  [RECIVE_Categorys](state,{categorys}){
    state.categorys = categorys
  },
  [RECIVE_SHOPS](state,{shops}){
    state.shops = shops
  },
}
