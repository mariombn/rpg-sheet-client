<template>
    <div class="container">
        <a class="socialLink"
            v-for="(socialLink, index) in socialLinks"
            :key="index"
            :href="socialLink.link"
            >
             <img :src="socialLink.icon" alt="" title="" width="32px" height="32px">
             {{ socialLink.label }}
        </a>
    </div>
</template>

<script>
    import api from '@/services/api.js';

    export default {
        name: 'Sobre',
        data(){
            return {
                socialLinks: []
            }
        },
        mounted(){
            api.get('/social-links.json').then(response => {
                this.socialLinks = response.data;
            });
        }
    }
</script>

<style scoped>

</style>