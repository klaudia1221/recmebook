import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);
import state from "./state";
import * as mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";

export default new Vuex.Store({
  plugins: [createPersistedState()],

  debug: false,
  state,
  actions,
  mutations,
  getters,
});
