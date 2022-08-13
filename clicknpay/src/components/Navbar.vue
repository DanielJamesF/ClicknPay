<template>
  <div class="container-fluid">
    <div id="div">
       <img id="go" src="../assets/go.png" alt="go" />
       <span class="text-dark">F</span>
       <span><img src="../assets/ittsreallyani.png" alt="I" /></span>
       <span class="text-dark">G</span>
       <span class="text-dark">U</span>
       <span class="text-dark">R</span>
       <span class="text-dark">E</span>
    </div>
    <!-- <<<<<<< HEAD -->
    <!-- <nav class="navbar navbar-expand-lg">
      <button
        class="navbar-toggler navbar-dark"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      > -->
    <!-- ======= -->
    <nav class="navbar navbar-expand-sm sticky-top">
      <button
        class="navbar-toggler navbar-dark"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <!-- >>>>>>> f8886320b4ad771917187286d403242f7e2eee24 -->
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/products">Products</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/admin">Admin</router-link>
        <router-link to="/users">Users</router-link> |
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link> |
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
.container-fluid {
  position: fixed;
  width: 100%;
  height: 90px;
  border-bottom: 3px solid blue;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  z-index: 100;
}

img {
  right: 0;
  height: 5.5em;
  padding: 2px;
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
}
</style>