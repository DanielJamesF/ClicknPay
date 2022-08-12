<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <button
        class="navbar-toggler navbar-dark"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/products">Products</router-link>
        <!-- <router-link to="/login">Login</router-link>  -->
        <!-- <router-link to="/register">Register</router-link>  -->
        <router-link to="/contact">Contact</router-link>
        <router-link to="/admin">Admin</router-link>
      </div>
    </div>
  <img src="../assets/logo.png" alt="" />
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  height: 5.5em;
  padding: 2px;
  position: fixed;
  right: 0;
  aspect-ratio: 1;
  border-radius: 50px;
}
nav {
  position: fixed;
  border-left: solid blue 1px;
  border-bottom: solid blue 3px;
  background-color: black;
  height: 90px;
  width: 100vw;
}
nav a {
  font-weight: bold;
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
</style>