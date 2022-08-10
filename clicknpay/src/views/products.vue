<template>
    <h1>Hello I am products</h1>
    <div v-if="user">
    <h2>Welcome {{user.firstname}}</h2>
    </div>
    <div v-if="products">
        <div >
            <div class="container">
                <div class="row mx-auto">
                    <div v-for="product in products" :key="product" class="card p-3 m-auto" style="width: 18rem; height: 500px;">
                        <h2>{{ product.prodname }}</h2>
                        <img :src="product.prodimg" class="card-img-top" alt="">
                        <router-link :to="{ name: 'product', params: { id: product.id } }">
                            Single
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.dispatch("getProducts")
    },
    computed: {
        products() {
            // console.log(this.$store.state.products)
            return this.$store.state.products
        },
        user() {
            return this.$store.state.user
        }
    }
}
</script>

<style>
</style>