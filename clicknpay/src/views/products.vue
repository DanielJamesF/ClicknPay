<template>
  <div class="container-fluid">
    <div v-if="user">
      <h2 id="welcome">Welcome {{ user.firstname }}</h2>
    </div>
    <div id="products" v-if="products">
        <div id="row" class="row mx-auto">
          <div v-for="product in products" :key="product" class="card p-3 m-auto" style="width: 18rem; height: 450px">
            <h2 id="name">{{ product.prodname }}</h2>
            <router-link :to="{ name: 'product', params: { id: product.id } }">
            <img :src="product.prodimg" class="card-img-top" alt="" />
            </router-link>
          </div>
        </div>
      </div>
              <!-- <button class="btn btn-primary">Single</button> -->
    </div>

</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getProducts");
  },
  computed: {
    products() {
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
  min-height: 100vh;
  padding-top: 100px;
  padding-bottom: 10px;
  background-image: url('../assets/wow.gif');
  background-blend-mode: multiply;
  background-color: red;
  /* display: flex;
  justify-content: center; */
}

/* #products {

} */

#row {
  gap: 20px;
}
/* a:hover{
  cursor: pointer;
} */
#name{
  /* border: solid; */
  height: 45px;
  font-size: 15px;
  text-align: center;
}
.card-img-top{
  /* border: solid; */
  aspect-ratio: 1;
  height: 300px;
}
</style>