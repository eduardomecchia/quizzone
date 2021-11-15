<template>
    <div class="card">
        <div class="card-header">
            <div class="uuid">User #{{ getUser.id }}</div>
        </div>

        <div class="card-body">
            <div class="d-flex align-items-center">
                <span class="label fw-bold me-2">Name:</span>
                <div class="name">{{ getUser.name }}</div>
            </div>

            <div class="d-flex align-items-center">
                <span class="label fw-bold me-2">Surname:</span>
                <div class="surname">{{ getUser.surname }}</div>
            </div>

            <div class="d-flex align-items-center">
                <span class="label fw-bold me-2">E-mail:</span>
                <div class="email">{{ getUser.email }}</div>
            </div>

            <div class="d-flex align-items-center">
                <span class="label fw-bold me-2">City:</span>
                <div class="city">{{ getUser.city }}</div>
            </div>

            <div class="d-flex align-items-center">
                <span class="label fw-bold me-2">Notes:</span>
                <div class="notes">{{ getUser.notes }}</div>
            </div>
        </div>

        <router-link :to="{ name: 'User', params: { id: getUser.id } }" class="btn btn-primary">
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