<template>
    <div class="z-50 flex justify-around sm:justify-center sm:flex-col bg-white border-r border-gray-200 items-center h-16 sm:h-full sm:w-16 w-full fixed left-0 bottom-0 shadow border-t">
        <router-link to="/" class="nav-link">
            <font-awesome-icon icon="home"/>
        </router-link>
        <router-link to="/search" class="nav-link">
            <font-awesome-icon icon="search"/>
        </router-link>
        <router-link to="/beers" class="nav-link">
            <font-awesome-icon icon="beer"/>
        </router-link>
        <router-link to="/favorites" class="nav-link">
            <font-awesome-icon icon="heart"/>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
    }
</script>

<style>
    .nav-link.router-link-active  {
        @apply text-green-500 text-2xl m-3
    }
    .nav-link {
        @apply  text-gray-500 text-lg  m-3
    }
</style>
