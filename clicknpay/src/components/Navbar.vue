<template>
  <nav class="navbar navbar-dark navbar-expand-md bg-dark sticky-top">
    <div class="container">
      <router-link class="navbar-brand text-decoration-none" :to="{name:'home'}">
        <a class="navbar-brand text-decoration-none">
          <img 
            src="../assets/logo.png"
            width="120px"
            height="20px"
            class="d-inline-block align-text-center"
            alt="logo"
          />
          GO Figure</a>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav">
          <div v-if="user" class="d-md-flex">
            <router-link to="/"><a class="nav-link">Home</a></router-link>
            <router-link to="/about"><a class="nav-link">About</a></router-link>
            <router-link to="/products"
              ><a class="nav-link">Products</a></router-link
            >
            <router-link to="/contact"
              ><a class="nav-link">Contact</a></router-link
            >
            <router-link to="/admin"><a class="nav-link">Admin</a></router-link>
            <router-link to="/users"><a class="nav-link">Users</a></router-link>
            <router-link to="/cart"><a class="nav-link">Cart</a></router-link>
            <button class="btn" @click="logout">Logout</button>
          </div>
          <div v-else class="d-sm-flex justify-content-center">
            <router-link :to="{name:'login'}"><a class="nav-link">Login</a></router-link>
            <router-link :to="{name:'register'}"><a class="nav-link">Register</a></router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  mounted() {},
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    logout() {
      this.$store.state.user = null;
      this.$store.state.cart = null;
      this.$store.state.token = null;
      document.getElementById("login").reset();
    },
  },
};
</script>

<style scoped>
/* 
.container-fluid {
  position: fixed;
  width: 100%;
  background-color: black;
  height: 90px;
  border-bottom: 3px solid blue;
  display: flex;
  justify-content: space-between;
}

img {
  right: 0;
  aspect-ratio: 1;
  border-radius: 50px;
  height: 5.5em;
  padding: 2px;
}

nav {
  right: 0;
}

nav a {
  font-size: 17px;
  color: white;
  text-decoration: none;
  padding: 10px;

}

nav a.router-link-exact-active {
  color: blue;
}

nav a:hover {
  color: lightslategrey;
}

@media (max-width: 992px){
  img{
    display: none;
  }
} */
</style>
