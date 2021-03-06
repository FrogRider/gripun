import Vue from "vue";
import Vuex from "vuex";

import modules from "@/store/modules";
// import plugins from "@/store/plugins";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules
});

export default store;
