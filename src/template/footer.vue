<template>
  <v-footer padless color="footer">
    <v-container>
      <v-row>
        <v-col cols="auto" class="mr-auto">
          <span class="itext--text">Via Varejo S.A, - CNPJ: 33.041.260/0652.90 Rua Samuel Klein, n 83, Centro, São Caetano do Sul, SP</span>
        </v-col>
        <v-col cols="auto">
          <v-img
            alt="Logo Via Varejo"
            class="shrink mr-2"
            contain
            src="/logo.png"
            transition="scale-transition"
            width="220"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>


export default {
  name: 'Footer',
  data: () => ({}),
  methods: {}
};
</script>