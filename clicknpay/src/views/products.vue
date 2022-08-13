<template>
  <section id="products" class="p-3">
    <div class="container">
      <div v-if="user">
        <h2 id="welcome">Welcome {{ user.firstname }}</h2>
      </div>
      <div v-if="products">
      <div class="container">
        <div class="row mx-auto">
          <div
            v-for="product in products"
            :key="product"
            class="card mx-auto m-3 p-1"
            style="width: 20rem"
          >
          <div class="my-auto">
            <img :src="product.prodimg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ product.prodname }}</h5>
              <p class="card-text">Price: R{{ product.price }}.00</p>
              <router-link
                :to="{ name: 'product', params: { id: product.id } }"
              >
                <a href="#" class="btn btn-primary">View Item</a>
              </router-link>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getProducts");
  },
  computed: {
    products() {
      // console.log(this.$store.state.products)
      return this.$store.state.products;
    },
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style scoped>
#products {
  min-height: 100vh;
}

.card img{

}
/* .container-fluid {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

#products {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 100px;
  z-index: -1;
}

#rrow {
  gap: 20px;
}
a:hover{
  cursor: pointer;
} */
</style>
