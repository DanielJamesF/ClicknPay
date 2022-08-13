<template>
  <div class="container-fluid">
    <br>
    <div class="row">
      <!-- <div class="col">
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          suscipit in fuga eum nesciunt. Tempore deserunt, qui repellat quas
          delectus ipsa sequi repellendus voluptatem quis, fugit, aliquid harum
          modi dolore.
        </p>
      </div>
      <br>
      <div class="row"> -->
        <div id="links2" class="col">
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
        <div id="links" class="col">
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
</template>

<script>
export default {};
</script>

<style scoped>
.container-fluid {
  position: sticky;
  background-color: #fff;
  border-top: solid black 1px;
  z-index: 100;
}
a {
  text-decoration: none;
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
}
</style>