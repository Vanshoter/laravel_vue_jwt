<template>
<div>
    <div class="w-auto">
            <router-link :to="{ name: 'fruit.index'}">dfgfgd</router-link>
            <router-link v-if="!accessToken" :to="{ name: 'user.login'}">lllll</router-link>
            <router-link v-if="!accessToken" :to="{ name: 'user.registration'}">jjjjj</router-link>
            <router-link v-if="accessToken" :to="{ name: 'user.personal'}">jjjjjhjgj</router-link>
            <a v-if="accessToken" href="#" @click.prevent="logout">log</a>
    </div>
    <sidebar></sidebar>
    <router-view class="w-25"></router-view>
    </div>
</template>

<script>
import sidebar from "./sidebar/sidebar";
import api from "../api";
export default {
    components:{ sidebar },
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
                .then(res => {
                    localStorage.removeItem('access_token');
                    this.$router.push({name: 'user.login'})
                })
        }
    }
}
</script>

<style scoped>
.w-25 {
    margin: auto;
    position: absolute;
    top: 30%;
    right: 650px
}

.w-auto {
    margin: auto;
}

</style>
