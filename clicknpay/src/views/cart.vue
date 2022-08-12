<template>
    <div v-if="cart" class="p-4 m-3">
        <div class="container">
            <div class="row mx-auto">
                <button class="btn btn-primary" @click="removeAll">Remove all</button>
                <div v-for="item in cart" :key="item" :item="item" class="card m-3 p-3" style="width: 18rem; height: fit-content;">
                    <h2>{{ item.prodname }}</h2>
                    <img :src="item.prodimg" alt="">
                </div>

            </div>
        </div>
    </div>

    <div v-else>
        <h2>Cart Empty ...</h2>
    </div>

</template>

<script>
export default {
    mounted() {
        // this.$store.dispatch("getuser")
    },
    computed: {
        cart() {
            return this.$store.state.cart
        }
    },
    methods: {
        removeAll() {
            this.$store.dispatch("deleteCart")
        }
    },
}
</script>

<style>
</style>