<template>
    <main class="edit">
        <h1 class="text-center my-2">Edit user #{{ $route.params.id }}</h1>

        <div class="container">
            <div class="row justify-content-center mt-4">
                <div class="col-md-6">
                    <form action="POST" class="d-flex justify-content-center flex-column">
                        <label for="name">Name:</label>
                        <input type="text" ref="name" id="name" name="name" :value="getUser != undefined ? getUser.name : user.name">

                        <label class="mt-3" for="surname">Surname:</label>
                        <input type="text" ref="surname" id="surname" name="surname" :value="getUser != undefined ? getUser.surname : user.surname">

                        <label class="mt-3" for="email">E-mail:</label>
                        <input type="text" ref="email" id="email" name="email" :value="getUser != undefined ? getUser.email : user.email">

                        <label class="mt-3" for="city">City:</label>
                        <input type="text" ref="city" id="city" name="city" :value="getUser != undefined ? getUser.city : user.city">

                        <label class="mt-3" for="notes">Notes:</label>
                        <input type="text" ref="notes" id="notes" name="notes" :value="getUser != undefined ? getUser.notes : user.notes">

                        <button class="mt-3 btn btn-primary" type="submit" @click.prevent="editUser()">Submit</button>
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
        editUser() {
            this.user.name = this.$refs.name.value;
            this.user.surname = this.$refs.surname.value;
            this.user.email = this.$refs.email.value;
            this.user.city = this.$refs.city.value;
            this.user.notes = this.$refs.notes.value;

            axios.put(`${this.$store.state.url}/${this.$route.params.id}`, this.user)
            .then(response => console.log(response))
            .catch(error => console.log(error));

            this.$router.push('/');
        }
    },

    created() {
        if (this.getUser == undefined) {
            axios.get(`${this.$store.state.url}/${this.$route.params.id}`)
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