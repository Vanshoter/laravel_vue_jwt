<template>
<div>
    <router-link :to="{ name: 'fruit.index'}"> List </router-link>
    <router-link v-if="!accessToken" :to="{ name: 'user.login'}"> login </router-link>
    <router-link v-if="!accessToken" :to="{ name: 'user.registration'}"> registration </router-link>
    <router-link v-if="accessToken" :to="{ name: 'user.personal'}"> Admin panel </router-link>
    <a v-if="accessToken" href="#" @click.prevent="logout">Logout</a>
    <router-view></router-view>
</div>
</template>

<script>
import api from "../api";
export default {
    name: "Index",

    data() {
        return {
            accessToken: null
        }
    },

    mounted() {
        this.getAccessToken()
    },

    updated() {
        this.getAccessToken()
    },

    methods: {
        getAccessToken() {
            this.accessToken = localStorage.getItem('access_token')
        },

        logout() {
            api.post('/api/auth/logout')
                .then( res => {
                    localStorage.removeItem('access_token');
                    this.$router.push({ name: 'user.login'})
                })
        }
    }
}
</script>

<style scoped>

</style>
