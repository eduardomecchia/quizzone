<template>
    <div class="card">
        <div class="card-header">
            <div class="uuid">Utente numero {{ getUser.uuid }}</div>
        </div>
        
        <div class="card-body">
            <div class="name">{{ getUser.nome }}</div>
            <div class="surname">{{ getUser.cognome }}</div>
            <div class="email">{{ getUser.email }}</div>
            <div class="city">{{ getUser.citta }}</div>
            <div class="notes">{{ getUser.note }}</div>
        </div>
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