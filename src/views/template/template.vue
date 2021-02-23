<template>
  <v-container>
    <v-row>
      <v-col md="4">
        <v-row v-for="color in colors" :key="color.color" align="center">
          <v-col md="6">
            <v-btn  v-bind:class="color.name" @click="changeColorTheme()">{{ color.name }}</v-btn>
          </v-col>
          <v-col md="6">
            <v-btn class="ma-2" outlined :color="color.name">{{ color.name }}</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>



    <v-row align="center">
      <v-col
        cols="12"
        sm="6"
      >
        <div class="text-center">
          <div class="my-2">
            <v-btn x-small color="secondary" dark >Extra small Button</v-btn>
          </div>
          <div class="my-2">
            <v-btn
              small
              color="primary"
              dark
            >
              Small Button
            </v-btn>
          </div>
          <div class="my-2">
            <v-btn
              color="warning"
              dark
            >
              Normal Button
            </v-btn>
          </div>
          <div class="my-2">
            <v-btn
              color="error"
              dark
              large
            >
              Large Button
            </v-btn>
          </div>
          <div class="my-2">
            <v-btn
              x-large
              color="success"
              dark
            >
              Extra large Button
            </v-btn>
          </div>
        </div>
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <div class="text-center">
          <div class="my-2">
            <v-btn
              color="secondary"
              fab
              x-small
              dark
            >
              <v-icon>mdi-television</v-icon>
            </v-btn>
          </div>
          <div class="my-2">
            <v-btn
              color="primary"
              fab
              small
              dark
            >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </div>
          <div class="my-2">
            <v-btn
              color="warning"
              fab
              dark
            >
              <v-icon>mdi-account-circle</v-icon>
            </v-btn>
          </div>
          <div class="my-2">
            <v-btn
              color="error"
              fab
              large
              dark
            >
              <v-icon>mdi-alarm</v-icon>
            </v-btn>
          </div>
          <div class="my-2">
            <v-btn
              color="success"
              fab
              x-large
              dark
            >
              <v-icon>mdi-domain</v-icon>
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    colors: [
      { name: "primary", color: "#14C6FF" },
      { name: "secondary", color: "#424242" },
      { name: "accent", color: "#82B1FF" },
      { name: "error", color: "#FF5252" },
      { name: "info", color: "#2196F3" },
      { name: "success", color: "#4CAF50" },
      { name: "warning", color: "#FFC107" }
    ]
  }),
  methods: {
    changeColorTheme: function() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
}
</script>

<style>
</style>