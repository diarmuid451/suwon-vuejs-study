import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 데이터 저장소 역할
  },
  getters: {
    // computed 역할
  },
  mutations: {
    // state값 변경
  },
  actions: {
    // method 역할
    // api 호출 + mutation 사용
    // this.$store.dispatch('LOGIN', userData)
  },
});
