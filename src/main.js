import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import preloader from "@/mixins/preloader";
import Notifications from 'vue-notification';
import VueAnalytics from 'vue-analytics';

Vue.use(VueAnalytics, {
  id: 'G-6RP35JNPBY',
  router
});

Vue.mixin(preloader);
Vue.use(Notifications)

Vue.config.productionTip = false
axios.defaults.headers.common["Content-Type"] = "application/json";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
