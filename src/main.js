import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './routes/router.js';

Vue.use(Vuex);
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    globalError: '',
    user: {
      authenticated: false
    }
  },
  mutations: {
    setGlobalError (state, error) {
    state.globalError = error
    }
  }
});

new Vue({
  el: '#app',
  store: store,
  router,
  render: h => h(App),
}).$mount('#app')
