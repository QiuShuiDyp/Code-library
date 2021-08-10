import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    count:0
  },
  mutations:{

  },
  actions:{

  },
  getters:{
    getCount:state=>state.count
  }
})
export default store