<template>
<section id="footer" class="p-2">
<div class="container">
    <div class="row">
        <div id="links2" class="col-md-6">
            <h1>Social links</h1>
            <a href="https://www.facebook.com/"><i class="bi bi-facebook"></i></a>
            <br>
            <a href="https://www.instagram.com/accounts/login/"><i class="bi bi-instagram"></i></a>
            <br>
            <a href="https://www.linkedin.com/home"><i class="bi bi-linkedin"></i></a>
            <br>
            <a href="https://github.com/"><i class="bi bi-github"></i></a>
            <br>
            <a href="https://twitter.com/i/flow/login"><i class="bi bi-twitter"></i></a>
        </div>
        <div id="links" class="col-md-6">
          <h1>Quick links</h1>
          <router-link to="/">- Home page</router-link>
          <br />
          <router-link to="/about">- About us</router-link>
          <br />
          <router-link to="/login">- Login page</router-link>
          <br />
          <router-link to="/register">- Register page</router-link>
          <br />
          <router-link to="/contact">- Contact us</router-link>
        </div>
      <!-- </div> -->
    </div>
    <p>Copyright &copy; All Rights Reserved by ClicknPay.</p>
  </div>
</section>
  
</template>

<script>
export default {

};
</script>

<style scoped>
#footer {
  min-height: 10vh;
  background-color: black;
}
/* .container-fluid {
  position: sticky;
  background-color: black;
  color: white;
}
a {
  text-decoration: none;
  color: white;
}
#links {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#links2 {
    display: flex;
    flex-direction: column;
    font-size: 15px;
} */
</style>