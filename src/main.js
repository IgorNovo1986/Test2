import apiService from "@/services/api/api.service.js";
import Vue from 'vue'
import App from './App.vue'

apiService.init()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
