<script setup>
    import Navbar from './components/Navbar.vue';
</script>

<template>
<Navbar />
<router-view />
</template>

<style scoped lang="scss">
    .parent{
        h1{
            color:red;
        }
        button{
            color:yellow;
        }
    }
</style>
