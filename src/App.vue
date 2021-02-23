<template>
  <div id="main-app">
    <v-card class="mx-auto overflow-hidden" height="400">
      <v-app>
        <Header />
        <Menu />
        <v-main>
          <router-view></router-view>
        </v-main>
        <Footer />
      </v-app>
    </v-card>
  </div>
</template>

<script>
import Header from '@/template/header';
import Menu from '@/template/menu';
import Footer from '@/template/footer';

export default {
  data: () => ({}),
  components: {
    Header,
    Menu,
    Footer
  },
  methods: {
    logoff: function () {
      this.$store.commit('logoff');
      this.$router.push('login');
    }
  }
};
</script>

<style>
.router-link {
  color: transparent !important;
}
</style>
