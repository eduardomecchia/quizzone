<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"

export default {
  components: {
    Navbar
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  main {
    padding-bottom: 35px;
  }
</style>
