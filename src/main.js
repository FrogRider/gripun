import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import preloader from "@/mixins/preloader";

Vue.mixin(preloader);

Vue.config.productionTip = false
axios.defaults.headers.common["Content-Type"] = "application/json";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
