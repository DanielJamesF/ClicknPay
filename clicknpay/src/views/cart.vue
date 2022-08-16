<template>
  <section id="cart">
      <div v-if="cart" class="p-4 m-3">
        <div class="row mx-auto">
<!-- <<<<<<< HEAD -->
          <button class="btn btn-warning" @click="removeAll"><span> Remove all</span></button>
          <div class="col-md-9">
            <div v-for="item in cart" :key="item" :item="item" class="card m-3 p-3"
              style="width: 18rem; height: fit-content">
              <h2>{{ item.prodname }}</h2>
              <img :src="item.prodimg" alt="" />
              <h2>{{ item.prodid }}</h2>
              <button class="btn btn-warning" @click="$store.dispatch('removeOne', item.prodid)"><span> Delete</span></button>
<!-- =======
          <button class="btn btn-warning" @click="removeAll">Remove all</button>
          <div class="col-md-7">
            <div v-for="item in cart" :key="item" :item="item" class="card m-3 p-3 shadow"
              style="width: fit-content; height: fit-content">
              <div class="row">
                <div class="col-md-3">
                  <img :src="item.prodimg" class="img-fluid" />
                </div>
                <div class="col-md-9 d-flex justify-content-space-between">
                  <h4 class="text-center"
                  >{{ item.prodname }}</h4>
                  <button id="delete" class="btn btn-warning" @click="$store.dispatch('removeOne', item.prodid)">Delete</button>
                </div>
              </div> -->
              <!-- <h2>{{ item.prodid }}</h2> -->
<!-- >>>>>>> bfa3f2806d495dea1451ee8b955f5d00d8e852f7 -->
            </div>
          </div>
          <div class="col-md-5">
            <div class="row">
              <div class="col">
                <div class="card m-3 p-3 shadow">
                  <h2 id="total1"><span>Cart Summary</span></h2>
                  <div v-for="item in cart" :key="item" :item="item" class="row">
                    <div class="col-md-7">
                      <p><span class="">{{ item.prodname }}</span></p>
                    </div>
                    <div class="col-md-5">
                      <p><span>R{{ item.price }}</span></p>
                    </div>
                  </div>
                <p id="total"><span class="fw-bolder">Total:</span>( <span>{{ num }} item</span> ) <span>R{{ total }}.00</span></p>
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>
      <div id="else" v-else>
        <h2>Cart Empty ...</h2>
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
    total() {
      let prices = this.$store.state.cart
      let sum = prices.reduce((x, cart) => {
        // return console.log(x)
        return x + cart.price
      }, 0)
      return sum
    },
        num: function() {
    let Cnum = this.$store.state.cart;
    if ((Cnum === null) || (Cnum === undefined)){
      Cnum = 0;
      return Cnum;
    } else {
      // Cnum.length
      let i = Cnum.length
      return i;
    }
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

img{
  aspect-ratio: 1;
}

#total1 {
  border-bottom: solid 1px black;
}

#total {
  border-top: solid 1px black;
  border-bottom: solid 1px black;
}
/* 
<<<<<<< HEAD
@media (max-width: 300px){
  .card{

  }
=======
#delete{
    align-self: end;
>>>>>>> bfa3f2806d495dea1451ee8b955f5d00d8e852f7
} */
</style>
