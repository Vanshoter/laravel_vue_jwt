<template>
<div>
    <router-link :to="{ name: 'fruit.index'}"></router-link>
    <sidebar></sidebar>
    <router-view class="w-25"></router-view>
    </div>
</template>

<script>
import sidebar from "./sidebar/sidebar";
import Home from "./Home";
export default {
    components:{Home, sidebar },
    name: "Index",

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
