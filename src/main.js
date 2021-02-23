import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import axios from './plugins/axios';
import router from '@/router';

Vue.use(Vuex);
Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    user: {
      authenticated: false,
      data: {}
    }
  },
  mutations: {
    login(state, userData) {
      state.user.authenticated = true;
      state.user.data = userData;
      window.localStorage.state = state;
    },
    logoff(state) {
      state.user.authenticated = false;
      window.localStorage.state = state;
    }
  },
  getters: {
    login: state => {
      return state.user.authenticated;
    },
    userAuth: state => {
      return state.user.data;
    },
    userAdmin: state => {
      return state.user.data.isAdmin;
    }
  },
  plugins: [createPersistedState()],
});

const publicPages = ['/login', '/'];

router.beforeEach((to, from, next) => {
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = store.getters.login;

  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
})

new Vue({
  router,
  store: store,
  vuetify,
  axios,
  render: h => h(App)
}).$mount('#app')
