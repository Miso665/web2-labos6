<script setup>
import { RouterLink, RouterView } from "vue-router";
// <HelloWorld msg="You did it!" />
</script>

<template>
  <header>

    <div class="navbar navbar-light bg-light">
      <h2 class="font-weight-bold">
        USED CARS
      </h2>
      <nav class="">
        <RouterLink to="/">Browse cars</RouterLink>
        <RouterLink to="/converter">Convert currency</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav a {
  font-size: 1.2rem;
  margin-left: 1rem;
  margin-right: 1rem;
}

nav a.router-link-exact-active {
  text-decoration-line: underline;
}
</style>
