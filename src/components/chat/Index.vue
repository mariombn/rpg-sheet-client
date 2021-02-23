<template>
  <v-row justify="center">
    <v-dialog
            v-model="dialog"
            class="modal-chat"
            fullscreen
            hide-overlay
            transition="dialog-left-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
                class="btn-chat"
                color="primary"
                fab
                v-bind="attrs"
                v-on="on"
        >
          <v-icon>mdi-forum-outline</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-toolbar
                dark
                color="primary"
        >
          <v-btn
                  icon
                  dark
                  @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
                    dark
                    text
                    @click="dialog = false"
            >
              Save
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <chat></chat>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
    import Chat from "@/components/chat/Chat"
    export default {
        components: {
            Chat,
        },
        data: () => ({
            dialog: false,
            notifications: false,
            sound: true,
            widgets: false,
        }),
        methods: {}
    }
</script>
<style lang="scss">

  .btn-chat {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 50;
  }

  .v-dialog.v-dialog--active {
    max-width: 9000px !important;
  }

</style>
