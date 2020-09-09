<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">

                <form>
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">E-mail</span>
                            </div>
                            <input v-model="dataAuth.login" type="text" aria-label="First name" class="form-control" placeholder="Seu e-mail">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Senha</span>
                            </div>
                            <input v-model="dataAuth.password" type="text" aria-label="First name" class="form-control" placeholder="Sua senha">
                        </div>
                    </div>
                    <div v-if="stateLogin">
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Lembrar de Mim</label>
                        </div>
                    </div>
                    <div v-if="!stateLogin">
                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Confirmação da Senha</span>
                                </div>
                                <input v-model="dataAuth.passwordCheck" type="text" aria-label="First name" class="form-control" placeholder="Confirme sua senha">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Nome</span>
                                </div>
                                <input v-model="dataAuth.name" type="text" aria-label="First name" class="form-control" placeholder="Seu nome">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Sobrenome</span>
                                </div>
                                <input v-model="dataAuth.lastname" type="text" aria-label="First name" class="form-control" placeholder="Seu sobrenome">
                            </div>
                        </div>
                    </div>

                    <div class="btn-group btn-block" role="group" v-if="!stateLogin">
                        <button v-on:click="signupSubmit" type="button" class="btn btn-primary">Realizar seu Cadastro</button>
                        <button v-on:click="signip" type="button" class="btn btn-success">Já tenho uma conta</button>
                    </div>

                    <div class="btn-group btn-block" role="group" v-if="stateLogin">
                        <button v-on:click="signinSubmit" type="button" class="btn btn-success">Entrar</button>
                        <button v-on:click="signup" type="button" class="btn btn-primary">Cadastrar</button>
                    </div>

                    <a class="link-pass" href="#" v-if="stateLogin">Esqueci minha Senha</a>

                </form>

            </div>
            <div class="col-md-3"></div>
        </div>
    </div>
</template>

<script>
import api from '@/services/api.js';

export default {
    "name": "Auth",
    data(){
        return {
            stateLogin: true,
            dataAuth: {},
            error: {success: true} 
        }
    },
    methods: {
        signinSubmit: function () {
            api.post('auth/singin', this.dataAuth).then(response => {
                if (response.data.success) {
                    if (response.data.data.api_token) {
                        this.$store.auth = response.data.data.api_token;
                        this.$router.push('home');
                    }
                } else {
                    //TODO Tratar o erro
                }
            });
        },
        signupSubmit: function () {
            api.post('auth/singup', this.dataAuth).then(response => {
                if (response.data.success) {
                    this.$router.push('login');
                } else {
                    //TODO Tratar o erro
                }
            });
        },
        signup: function () {
            this.stateLogin = false;
        },
        signip: function () {
            this.stateLogin = true;
        }
    }
}
</script>

<style scoped>

.bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

form {
    margin-top: 100px;
}

form label {
    color: #fff;
}

.link-pass {
    clear: both;
}

.input-group-text {
    min-width:200px;
    text-align:left;
}


</style>