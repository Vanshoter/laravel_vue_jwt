<template>
<div>
    <router-link :to="{ name: 'fruit.index'}"></router-link>
    <sidebar></sidebar>
    <home></home>
    <router-view class="w-25"></router-view>
    </div>
</template>

<script>
import sidebar from "./sidebar/sidebar";
import api from "../api";
import Home from "./Home";
export default {
    components:{Home, sidebar },
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

</style>
