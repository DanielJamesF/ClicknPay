<template>
  <div class="container-fluid">
    <img src="../assets/logo.png" alt="logo" />
    <nav class="navbar navbar-expand-sm sticky-top">
      <button class="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/products">Products</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/admin">Admin</router-link>
        <router-link to="/users">Users</router-link> |
        <router-link to="/cart">Cart</router-link>
        <div v-if="user">
          <button class="btn" @click="logout">Logout</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  mounted() {

  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  methods: {
    logout() {
      this.$store.state.user = null
      this.$store.state.cart = null
      this.$store.state.token = null
      document.getElementById("login").reset()
    }
  },
};
</script>

<style scoped>
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
  z-index: 100;
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
}
</style>