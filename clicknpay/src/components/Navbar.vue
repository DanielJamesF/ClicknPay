<template>
  <nav
    class="navbar navbar-expand-md sticky-top"
    style="background-color: #e3f2fd"
  >
    <div class="container-fluid">
      <div id="div" class="nav-item">
        <router-link :to="{ name: 'home' }">
          <img id="go" src="../assets/go.png" alt="go" />
          <span class="text-dark">F</span>
          <span><img src="../assets/ittsreallyani.png" alt="I" /></span>
          <span class="text-dark">G</span>
          <span class="text-dark">U</span>
          <span class="text-dark">R</span>
          <span class="text-dark">E</span>
        </router-link>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <div class="navbar-nav">
          <div v-if="user" class="d-md-flex">
            <router-link to="/">
              <a class="nav-link">Home</a>
            </router-link>
            <router-link to="/about">
              <a class="nav-link">About</a>
            </router-link>
            <router-link to="/products">
              <a class="nav-link">Products</a>
            </router-link>
            <router-link to="/contact">
              <a class="nav-link">Contact</a>
            </router-link>

            <router-link to="/cart">
              <button class="btn rounded-pill">
                <i class="fs-4 fa-solid fa-cart-shopping"><span>{{num}}</span></i>
                <!-- <p class="text-black">{{num}}</p> -->
              </button>
              <!-- <a class="nav-link">Cart</a> -->
            </router-link>
          </div>

          <div v-if="admin" class="d-md-flex">
            <router-link to="/admin">
              <a class="nav-link">Admin</a>
            </router-link>
            <router-link to="/users">
              <a class="nav-link">Users</a>
            </router-link>
          </div>

          <div v-if="user">
            <button class="btn" @click="logout">Logout</button>
          </div>

          <div v-else class="d-md-flex">
            <router-link to="/login">
              <a class="nav-link">Login</a>
            </router-link>
            <router-link to="/register">
              <a class="nav-link">Register</a>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  mounted() {

},
  computed: {
    user() {
      return this.$store.state.user;
    },
    admin() {
      return this.$store.state.admin;
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
    logout() {
      this.$store.state.user = null;
      this.$store.state.cart = null;
      this.$store.state.token = null;
      this.$store.state.admin = false;
    },
  },
};
</script>

<style scoped>
img {
  right: 0;
  height: 5em;
  padding: 2px;
}
/* .container-fluid {
  position: fixed;
  width: 100%;
  height: 90px;
  border-bottom: 3px solid blue;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  z-index: 100;
}


nav {
  right: 0;
  z-index: 100;
}

nav a {
  font-size: 17px;
  color: black;
  text-decoration: none;
  padding: 10px;
}

nav a.router-link-exact-active {
  color: blue;
}

nav a:hover {
  color: lightslategrey;
}

span{
  padding: 5px;
}
@media (max-width: 992px) {
  #div {
    display: none;
  }
} */
</style>
