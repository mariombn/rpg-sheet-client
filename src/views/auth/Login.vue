<template>
  <v-container>
    <v-row v-if="this.error">
      <v-col cols="12">
        <p>
          <v-alert
              dense
              outlined
              type="error"
          >
            {{ error }}
          </v-alert>
        </p>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col md="6">
        <div class="mx-auto text-left div-login pa-2">
          <v-card class="mx-auto text-right card-login">
            <v-form ref="form" class="col-md-12">
              <v-text-field
                  v-model="form.email"
                  label="E-mail"
                  required
              ></v-text-field>

              <v-text-field
                  v-model="form.password"
                  label="Senha"
                  required
              ></v-text-field>

              <p>
                <a href="">Esqueceu a senha?</a>
              </p>

              <v-btn color="success" @click="signinSubmit">
                Entrar
              </v-btn>
            </v-form>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    "name": "Login",
    data() {
      return {
        form: {
          email: "",
          password: ""
        },
        mock: {
          id: 1,
          name: "Mario de Moraes Barros Neto",
          email: "mariombn@gmail.com",
          isAdmin: false
        },
        valid: false,
        error: false
      }
    },
    methods: {
      signinSubmit: function () {
        this.$store.commit('login', this.mock);
        this.$router.push('/home');
      }
    }
  }
</script>

<style>
.div-login {
  margin-top: 10vh;
}

.card-login {
  padding: 20px;
}

.divisor-login {
  margin-bottom: 3vh;
  border-bottom: 3px solid #FFB700;
  width: 14%;
}
</style>
