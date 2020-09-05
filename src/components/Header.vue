<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <Logo />
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="/video">Vídeos</a></li>
                        <li class="nav-item"><a class="nav-link" href="/sobre">Sobre</a></li>
                        <li class="nav-item"><a class="nav-link" href="/contato">Contato</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
import Logo from './Header/Logo.vue';

export default {
    name: 'Header',
    components: {
        Logo
    }
}
</script>

<style scoped>
    #logo {
        width:130px;
    }
</style>