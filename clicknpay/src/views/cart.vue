<template>
  <section id="cart">
    <div class="container">
      <div v-if="cart" class="p-4 m-3">
        <div class="row mx-auto">
          <button class="btn btn-warning" @click="removeAll">Remove all</button>
          <div
            v-for="item in cart"
            :key="item"
            :item="item"
            class="card m-3 p-3"
            style="width: 18rem; height: fit-content"
          >
            <h2>{{ item.prodname }}</h2>
            <img :src="item.prodimg" alt="" />
            <h2>{{item.prodid}}</h2>
            <button class="btn btn-warning" @click="$store.dispatch('removeOne', item.prodid)">Delete</button>
          </div>
        </div>
      </div>

      <div id="else" v-else>
        <h2>Cart Empty ...</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    // this.$store.dispatch("getuser")
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  methods: {
    removeAll() {
      this.$store.dispatch("deleteCart");
    },
  },
};
</script>

<style scoped>
#cart {
  min-height: 100vh;
}

#else {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
