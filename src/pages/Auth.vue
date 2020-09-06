<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">

                <form>
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">E-mail</span>
                            </div>
                            <input type="text" aria-label="First name" class="form-control" placeholder="Seu e-mail">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Senha</span>
                            </div>
                            <input type="text" aria-label="First name" class="form-control" placeholder="Sua senha">
                        </div>
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Lembrar de Mim</label>
                    </div>


                    <div class="btn-group btn-block" role="group">
                        <button v-on:click="signin" type="button" class="btn btn-success">Entrar</button>
                        <button v-on:click="signup" type="button" class="btn btn-primary">Cadastrar</button>
                    </div>

                    <a class="link-pass" href="#">Esqueci minha Senha</a>

                    
                </form>



            </div>
            <div class="col-md-4"></div>
        </div>
    </div>
</template>

<script>
export default {
    "name": "Auth",
    methods: {
        signin: function () {
            this.$router.push('home');
        },
        signup: function () {
            console.log(this);
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


</style>