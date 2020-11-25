<template>
  <nav-bar/>
  <div class="pb-16 sm:pl-16 sm:pb-0">
    <router-view/>
  </div>
</template>
<script>

import NavBar from "./components/NavBar";
export default {
  name: 'App',
  components: {NavBar},
}
</script>
