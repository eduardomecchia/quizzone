<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/new">Add new page</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
  nav {
    background-color: red;
  }
</style>
