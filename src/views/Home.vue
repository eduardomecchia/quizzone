<template>
  <div class="home">
    <Card v-for="user in users" :key="user.uuid"></Card>
  </div>
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
