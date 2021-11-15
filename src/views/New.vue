<template>
    <main class="user">
        <div class="container">
            <div class="row justify-content-center mt-4">
                <div class="col-md-6">
                    <form action="POST" class="d-flex justify-content-center flex-column">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name">

                        <label class="mt-3" for="surname">Surname:</label>
                        <input type="text" id="surname" name="surname">

                        <label class="mt-3" for="email">E-mail:</label>
                        <input type="text"  id="email" name="email">

                        <label class="mt-3" for="city">City:</label>
                        <input type="text" id="city" name="city">

                        <label class="mt-3" for="notes">Notes:</label>
                        <input type="text" id="notes" name="notes">

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
          axios
        }
    }
}
</script>