<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/products">Products</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/admin">Admin</router-link> |
    <router-link to="/users">Users</router-link> |
    <router-link to="/cart">Cart</router-link> 
    <div v-if="user">
    <button class="btn" @click="logout">Logout</button>
    </div>
  </nav>
  <router-view/>
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
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
