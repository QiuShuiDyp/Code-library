import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import storeConfig from './store/store'

Vue.use(Vuex)
// 创建一个store实例
const store = new Vuex.Store(storeConfig)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store  //在根实例中注册store，所有的子组件都可以通过this.$store访问， 这里用了ES6的缩写，等价于store:store
}).$mount('#app')
