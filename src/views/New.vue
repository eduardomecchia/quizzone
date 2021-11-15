<template>
    <main class="new">
        <h1 class="text-center my-2">Add a new user</h1>

        <div class="container">
            <div class="row justify-content-center mt-4">
                <div class="col-md-6">
                    <form action="POST" class="d-flex justify-content-center flex-column">
                        <label for="name">Name:</label>
                        <input ref="name" type="text" id="name" name="name">

                        <label class="mt-3" for="surname">Surname:</label>
                        <input ref="surname" type="text" id="surname" name="surname">

                        <label class="mt-3" for="email">E-mail:</label>
                        <input ref="email" type="email"  id="email" name="email">

                        <label class="mt-3" for="city">City:</label>
                        <input ref="city" type="text" id="city" name="city">

                        <label class="mt-3" for="notes">Notes:</label>
                        <input ref="notes" type="text" id="notes" name="notes">

                        <button class="mt-3 btn btn-success" @click="createUser()">Create</button>
                    </form>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import axios from 'axios'

export default {
    name: 'New',

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
        createUser() {
            this.user.name = this.$refs.name.value;
            this.user.surname = this.$refs.surname.value;
            this.user.email = this.$refs.email.value;
            this.user.city = this.$refs.city.value;
            this.user.notes = this.$refs.notes.value;

            axios.post(this.$store.state.url, this.user)
            .then(response => console.log(response))
            .catch(error => console.error(error));

            this.$router.push('/');
        }
    }
}
</script>