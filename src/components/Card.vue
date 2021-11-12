<template>
    <div class="card">
        <div class="card-header">
            <div class="uuid">Utente numero {{ getUser.id }}</div>
        </div>

        <div class="card-body">
            <div class="name">{{ getUser.name }}</div>
            <div class="surname">{{ getUser.surname }}</div>
            <div class="email">{{ getUser.email }}</div>
            <div class="city">{{ getUser.city }}</div>
            <div class="notes">{{ getUser.notes }}</div>
        </div>

        <!-- <router-link :to="{ name: 'edit', params: { id: getUser.id } }" class="btn btn-primary">
            <i class="fas fa-edit"></i>
            <div>Edit</div>
        </router-link> -->

        <router-link :to="{ name: 'User', params: { id: getUser.id } }" class="btn btn-primary">
            <i class="fas fa-info-circle"></i>
            <div>Details</div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Card',

    computed: {
        getUser() {
            return this.$store.state.users[this.$vnode.key - 1];
        }
    }
}
</script>