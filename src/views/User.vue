<template>
    <main class="user">
        <h1 class="text-center my-2">Details for user #{{ $route.params.id }}</h1>

        <div class="container">
            <div class="row justify-content-center mt-4">
                <div class="col-md-6">
                    <form action="" class="d-flex justify-content-center flex-column">
                        <label for="name">Name:</label>
                        <input readonly type="text" id="name" name="name" :value="getUser != undefined ? getUser.name : user.name">

                        <label class="mt-3" for="surname">Surname:</label>
                        <input readonly type="text" id="surname" name="surname" :value="getUser != undefined ? getUser.surname : user.surname">

                        <label class="mt-3" for="email">E-mail:</label>
                        <input readonly type="email"  id="email" name="email" :value="getUser != undefined ? getUser.email : user.email">

                        <label class="mt-3" for="city">City:</label>
                        <input readonly type="text" id="city" name="city" :value="getUser != undefined ? getUser.city : user.city">

                        <label class="mt-3" for="notes">Notes:</label>
                        <input readonly type="text" id="notes" name="notes" :value="getUser != undefined ? getUser.notes : user.notes">

                        <router-link :to="{ name: 'Edit', params: { id: $route.params.id } }" class="mt-3 btn btn-info">
                            <div>Edit</div>
                        </router-link>

                        <button class="mt-3 btn btn-danger" @click="deleteUser()">Delete</button>
                    </form>
                </div>
            </div>
        </div>
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

    methods: {
        deleteUser() {
             axios.delete(`${this.$store.state.url}/${this.$route.params.id}`)
            .then(response => console.log(response))
            .catch(error => console.error(error));

            this.$router.push('/');
        }
    },

    created() {
        if (this.$route.params.id > this.$store.state.users.length) {
            this.$router.push('/');
        }

        if (this.getUser == undefined) {
            axios.get(`${this.$store.state.url}/${this.$route.params.id}`)
            .then(response => {
                this.user = response.data;
            })
            .catch(error => console.error(error));
        }
    },

    computed: {
        getUser() {
            return this.$store.state.users[this.$route.params.id - 1];
        }
    }
}
</script>

<style scoped>
input {
    border: 0;
}
input:focus-visible {
    outline: 0;
}
</style>