<template>
  <main class="home">
    <h1 class="text-center my-2">List of users</h1>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <Card class="mt-4" v-for="user in users" :key="user.id"></Card>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
import Card from '@/components/Card.vue'

export default {
  name: 'Home',

  components: {
    Card
  },

  mounted() {
    axios.get(this.$store.state.url)
      .then(response => {
        this.$store.dispatch('loadUsers', response.data);
      })
      .catch(error => {
        console.error(error);
      })
  },

  computed: {
    users() {
      return this.$store.state.users;
    }
  }
}
</script>
