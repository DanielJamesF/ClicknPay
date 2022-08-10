<template>
    <nav>
    <img src="../assets/logo.png" alt="" />
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/products">Products</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/admin">Admin</router-link> |
      <router-link to="/contact">Contact</router-link>
    </nav>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  height: 5.5em;
  position: fixed;
  left: 0;
  aspect-ratio: 1;
  border-radius: 50px;
}
nav {
  position: fixed;
  border-left: solid blue 1px;
  border-bottom: solid blue 3px;
  background-color: white;
  height: 90px;
  width: 100vw;
  display: flex;
  justify-content: end;
  align-items: center;
  right: 10px;
}

nav a {
  font-weight: bold;
  font-size: 17px;
  color: black;
  text-decoration: none;
  padding: 10px;
}

nav a.router-link-exact-active {
  color: blue;
}
</style>