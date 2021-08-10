import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
var event = new Vue({})
new Vue({
  data:{
    event
  },
  render: h => h(App),
}).$mount('#app')
