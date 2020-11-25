<template>
  <nav-bar/>
  <div class="sm:pl-16">
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
