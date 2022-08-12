<template>
  <div class="container-fluid">
    <!-- <div id="hello">
      <h1>Hello I am products</h1>
    </div> -->
    <div v-if="user">
      <h2 id="welcome">Welcome {{ user.firstname }}</h2>
    </div>
      <!-- <h3>Click on products to view</h3> -->
    <div id="products" v-if="products">
      <div class="container">
        <div id="rrow" class="row mx-auto">
          <div v-for="product in products" :key="product" class="card p-3 m-auto" style="width: 18rem; height: 450px">
            <h2>{{ product.prodname }}</h2>
            <router-link :to="{ name: 'product', params: { id: product.id } }">
            <img :src="product.prodimg" class="card-img-top" alt="" />
            </router-link>
              <!-- <button class="btn btn-primary">Single</button> -->
          </div>
        </div>
      </div>
    </div>
  </div>

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
.container-fluid {
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
  /* z-index: -1; */
}

#rrow {
  gap: 20px;
}
a:hover{
  cursor: pointer;
}
</style>