<template>
  <main class="home">
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
    axios.get('http://localhost:3000/users')
      .then(response => {
        this.$store.dispatch('loadUsers', response.data);
      })
      .catch(error => {
        console.log(error);
      })
  },

  computed: {
    users() {
      return this.$store.state.users;
    }
  }
}
</script>
