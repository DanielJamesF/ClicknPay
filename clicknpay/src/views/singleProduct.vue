<template>
  <div class="container-fluid" v-if="product">
    <div>
      <router-link to="/products">return</router-link>
    </div>
    <h2>{{ product[0].prodname }}</h2>
    <img :src="product[0].prodimg" alt="" />
    <button @click="add">add to cart</button>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      id: this.id,
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
        //                 prodid: this.product.id,
        //                 prodname: this.product,
        // prodimg: this.product,
        //                 quantity: this.product,
        //                 price: this.product,
        //                 totalamount: this.product,
        //                 userid: this.product,
      });
    },
  },
};
</script>

<style scoped>
.container-fluid {
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
}
</style>