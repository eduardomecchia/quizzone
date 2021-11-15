<template>
    <main class="user">
        <div class="container">
            <div class="row justify-content-center mt-4">
                <div class="col-md-6">
                    <form action="" class="d-flex justify-content-center flex-column">
                        <label for="name">Name:</label>
                        <input readonly type="text" id="name" name="name" :value="getUser != undefined ? getUser.name : user.name">

                        <label class="mt-3" for="surname">Surname:</label>
                        <input readonly type="text" id="surname" name="surname" :value="getUser != undefined ? getUser.surname : user.surname">

                        <label class="mt-3" for="email">E-mail:</label>
                        <input readonly type="text"  id="email" name="email" :value="getUser != undefined ? getUser.email : user.email">

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
             axios.delete(`http://localhost:3000/users/${this.$route.params.id}`)
            .then(response => console.log(response))
            .catch(error => console.log(error));

            this.$router.push('/');
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