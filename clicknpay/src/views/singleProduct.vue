<template>
  <section id="single" class="p-5">
    <div class="container" v-if="product">
      <div class="row mx-auto">
        <div class="text-start">
        <router-link to="/products">
        <button v-bind:onclick="back" class="btn btn-warning">back</button>   
        </router-link>
      </div>
        <div class="col-md-6 mx-auto">
          <img :src="product[0].prodimg" class="mx-auto img-fluid" alt="" />
        </div>
        <div class="col-md-6 d-flex flex-column justify-content-around text-start">
          <h2>{{ product[0].prodname }}</h2>
          <h2 >{{ product[0].category }}</h2>
          <h2 class="fw-bolder">Price: R{{ product[0].price }}.00</h2>
          <h2>{{ product[0].stock }}</h2>
          <button @click="add" class="btn btn-warning fs-3 text-black w-100">Add to cart</button>
        </div>
      </div>
    </div>
    <div v-else>
      <h2>Loading ...</h2>
    </div>
  </section>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      // id: this.id,
    };
  },

  mounted() {
    // Call function created in store
    this.$store.dispatch("getProduct", this.id);
  },
  computed: {
    // returns item from function that was called
    product() {
      return this.$store.state.product;
    },
  },

  methods: {
    add() {
      this.$store.dispatch("addToCart", {
        id: this.id,
      });
    },
    back() {
      this.$store.state.product = null;
    },
  },
};
</script>

<style scoped>
#single {
  min-height: fit-content;
}
/* .container-fluid {
  height: 68.5vh;
  padding-top: 100px;
}
img {
  height: 550px;
}
a {
  border: solid 1px;
  text-decoration: none;
  color: black;
  padding: 5px;
  background-color: lightgrey;
} */
</style>
