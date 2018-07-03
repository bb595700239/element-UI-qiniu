import * as types from './mutation-types.js'

import {
  setStore,
  getStore
} from '../config/mUtils'

export default {

  //设置滚动条位置
  [types.SET_POSITION](state, routeName) {
    state.arrPageName=routeName
    for(const attr in state.position){
      if(routeName==attr){
        setTimeout(()=>{state.position[attr].scroller.scrollTo(state.position[attr].pos.left,state.position[attr].pos.top)},10)
      }
    }
  },
  //设置滚动条位置
  [types.SAVE_PAGE](state,{pos, scroller}) {
    state.position[state.arrPageName]={pos:pos,scroller:scroller}
  }
}
