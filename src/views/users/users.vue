<template>
  <v-container>
    <v-data-table
        :headers="headers"
        :items="users"
        sort-by="nome"
        class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar
            flat
        >
          <v-toolbar-title>Usuários</v-toolbar-title>
          <v-divider
              class="mx-4"
              inset
              vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-dialog
              v-model="dialog"
              max-width="500px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
              >
                <v-icon
                    small
                >
                  mdi-plus
                </v-icon>
                Cadastrar
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="8">
                      <v-text-field
                          v-model="editedItem.name"
                          label="Nome"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-select
                          v-model="editedItem.isAdmin"
                          :items="selectIsAdmin"
                          item-text="name"
                          item-value="value"
                          label="Administrador"
                      ></v-select>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                          type="email"
                          v-model="editedItem.email"
                          label="Email"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                          type="password"
                          v-model="editedItem.password"
                          label="Senha"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                          type="password"
                          v-model="editedItem.passwordConfirm"
                          label="Confirme sua senha"
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <p v-if="errors.length">
                    <b>Por favor corrija os seguintes erros:</b>
                    <v-alert
                        v-for="error in errors" v-bind:key="error"
                        dense
                        outlined
                        type="error"
                    >
                      {{ error }}
                    </v-alert>
                  </p>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="default"
                    @click="close"
                >
                  Cancelar
                </v-btn>
                <v-btn
                    color="success"
                    @click="save"
                >
                  Salvar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="350px !important">
            <v-card>
              <v-card-title class="headline">Tem certeza de que deseja excluir este item?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="default" @click="closeDelete">Cancelar</v-btn>
                <v-btn color="success" @click="deleteItemConfirm">Sim</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn
            color="info"
            dark
            small
            @click="editItem(item)"
        >
          <v-icon small>
            mdi-pencil
          </v-icon>
        </v-btn>
        <v-btn
            color="red"
            dark
            small
            @click="deleteItem(item)"
        >
          <v-icon small>
            mdi-delete
          </v-icon>
        </v-btn>
      </template>

      <template v-slot:item.isAdmin="{ item }">
        {{ item.isAdmin ? 'Sim' : 'Não' }}
      </template>
      <template v-slot:no-data>
        <v-btn
            color="primary"
            @click="initialize"
        >
          Recarregar
        </v-btn>
      </template>
    </v-data-table>

    <v-dialog
        v-model="dialogMessage"
        hide-overlay
        persistent
        width="400"
    >
      <v-alert
          dense
          :type="typeMessage"
          style="margin: 0;"
      >
        {{ textMessage }}
      </v-alert>
    </v-dialog>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    dialogMessage: false,
    typeMessage: 'success',
    textMessage: '',
    headers: [
      {text: 'Nome', value: 'name'},
      {text: 'Email', value: 'email'},
      {text: 'Administrador', value: 'isAdmin'},
      {text: 'Ações', value: 'actions', sortable: false},
    ],
    users: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      email: '',
      isAdmin: 0,
      password: '',
      passwordConfirm: '',
    },
    defaultItem: {
      name: '',
      email: '',
      isAdmin: 0,
      password: '',
      passwordConfirm: '',
    },
    selectIsAdmin: [
      {name: 'Não', value: false},
      {name: 'Sim', value: true},
    ],
    errors: []
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Novo usuário' : 'Editar usuário'
    },
  },

  watch: {
    dialog(val) {
      this.errors = [];
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
    dialogMessage(val) {
      if (!val) return

      setTimeout(() => (
          this.dialogMessage = false, this.textMessage = '', this.typeMessage = 'success'
      ), 2500)
    },
  },

  created() {
    this.initialize()
  },

  methods: {
    initialize() {
      this.axios.get('42c697d9-f77b-4e70-83f6-8c0d901ce9a2', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'JWT fefege...'
        }
      })
          .then((response) => {
            this.users = response.data;
          })
          .catch((error) => {
            this.dialogMessage = true
            this.textMessage = error
            this.typeMessage = 'error'

            this.close()
          })
    },

    editItem(item) {
      this.editedIndex = this.users.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.users.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm() {
      // console.log(this.editedItem.id)
      this.axios.delete('8aad6510-ea35-47d7-8a3e-1f98f974dec7', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'JWT fefege...'
        }
      })
          .then((response) => {
            this.users.splice(this.editedIndex, 1)
            this.closeDelete()

            this.dialogMessage = true
            this.textMessage = response.data.message
            this.typeMessage = 'success'
          })
          .catch((error) => {
            this.dialogMessage = true
            this.textMessage = error
            this.typeMessage = 'error'

            this.close()
          })
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save() {
      if (this.validateForm()) {
        if (this.isEdition()) {
          this.editUser()
        } else {
          this.createUser()
        }
      }
    },

    validateForm() {
      this.errors = []

      if (!this.editedItem.name) {
        this.errors.push('O campo nome é obrigatório')
      }

      if (!this.editedItem.email) {
        this.errors.push('O campo email é obrigatório');
      } else if (!this.validEmail(this.editedItem.email)) {
        this.errors.push('Informe um email válido')
      }

      if (this.isEdition()) {
        if (this.editedItem.password) {
          this.validPassword()
        }
      } else {
        this.validPassword()
      }

      return !this.errors.length
    },

    validPassword() {
      if (!this.editedItem.password) {
        this.errors.push('O campo senha é obrigatório')
      }

      if (!this.editedItem.passwordConfirm) {
        this.errors.push('O campo de confirmação de senha é obrigatório')
      } else if (this.editedItem.password !== this.editedItem.passwordConfirm) {
        this.errors.push('As senhas não conferem')
      }
    },

    validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },

    isEdition() {
      return this.editedIndex > -1
    },

    createUser() {
      this.axios.post('b34903e8-5a89-409a-8e93-4d30b9a1e47b',
          {
            "name": this.editedItem.name,
            "email": this.editedItem.email,
            "isAdmin": this.editedItem.isAdmin,
            "password": this.editedItem.password,
            "passwordConfirm": this.editedItem.passwordConfirm
          }, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'JWT fefege...'
            }
          })
          .then((response) => {
            this.dialogMessage = true
            this.textMessage = response.data.message
            this.typeMessage = 'success'

            this.users.push(response.data.user)

            this.close()
          })
          .catch((error) => {
            this.dialogMessage = true
            this.textMessage = error
            this.typeMessage = 'error'

            this.close()
          })
    },

    editUser() {
      // console.log(this.editedItem.id)
      this.axios.put('7cda35af-2128-4a89-8385-b092e62a8a3f',
          {
            "name": this.editedItem.name,
            "email": this.editedItem.email,
            "isAdmin": this.editedItem.isAdmin,
            "password": this.editedItem.password,
            "passwordConfirm": this.editedItem.passwordConfirm
          }, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'JWT fefege...'
            }
          })
          .then((response) => {
            this.dialogMessage = true
            this.textMessage = response.data.message
            this.typeMessage = 'success'

            Object.assign(this.users[this.editedIndex], response.data.user)
            this.close()
          })
          .catch((error) => {
            this.dialogMessage = true
            this.textMessage = error
            this.typeMessage = 'error'

            this.close()
          })
    },

  },
}
</script>

<style>
.v-dialog.v-dialog--active {
  max-width: 1000px !important;
}
</style>
