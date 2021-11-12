<template>
    <main class="user">
        <div class="name">{{ getUser != undefined ? getUser.name : user.name }}</div>
        <div class="surname">{{ getUser != undefined ? getUser.surname : user.surname }}</div>
        <div class="email">{{ getUser != undefined ? getUser.email : user.email }}</div>
        <div class="city">{{ getUser != undefined ? getUser.city : user.city }}</div>
        <div class="notes">{{ getUser != undefined ? getUser.notes : user.notes }}</div>
    </main>
</template>

<script>
import axios from 'axios'

export default {
    name: 'User',

    data() {
        return {
            user: {
                id: 0,
                name: '',
                surname: '',
                email: '',
                city: '',
                notes: ''
            }
        }
    },

    created() {
        if (this.getUser == undefined) {
            axios.get(`http://localhost:3000/users/${this.$route.params.id}`)
            .then(response => {
                this.user = response.data;
            })
            .catch(error => console.log(error));
        }
    },

    computed: {
        getUser() {
            console.log(this.$store.state.users[this.$route.params.id - 1]);
            return this.$store.state.users[this.$route.params.id - 1];
        }
    }
}
</script>