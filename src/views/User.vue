<template>
    <main class="user">
        <div class="container">
            <div class="row justify-content-center mt-4">
                <div class="col-md-6">
                    <form action="" class="d-flex justify-content-center flex-column">
                        <label for="name"></label>
                        <input readonly type="text" id="name" name="name" :value="getUser != undefined ? getUser.name : user.name">

                        <label for="surname"></label>
                        <input readonly type="text" id="surname" name="surname" :value="getUser != undefined ? getUser.surname : user.surname">

                        <label for="email"></label>
                        <input readonly type="text"  id="email" name="email" :value="getUser != undefined ? getUser.email : user.email">

                        <label for="city"></label>
                        <input readonly type="text" id="city" name="city" :value="getUser != undefined ? getUser.city : user.city">

                        <label for="notes"></label>
                        <input readonly type="text" id="notes" name="notes" :value="getUser != undefined ? getUser.notes : user.notes">

                        <router-link :to="{ name: 'Edit', params: { id: $route.params.id } }" class="btn btn-info">
                            <div>Edit</div>
                        </router-link>

                        <router-link :to="{ name: 'User', params: { id: $route.params.id } }" class="btn btn-danger">
                            <div>Delete</div>
                        </router-link>
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