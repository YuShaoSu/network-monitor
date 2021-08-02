import Vue from "vue";
import Vuex from "vuex";
import util from "./modules/util";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    util
  }
});

export default store;
