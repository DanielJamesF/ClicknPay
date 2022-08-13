<template>
  <div class="container-fluid">
    <div id="row1" class="row">
      <div class="col">
        <img id="go" src="../assets/go.png" alt="go" /><span>F</span><span><img src="../assets/itsani.jpg" alt="I"></span>
        <!-- <router-link to="/loginregister">Click</router-link> -->
        <!-- <span id="n"> 'n </span><span id="pay">Pay</span> -->
      </div>
        <div class="row">
          <div class="col">
            <router-link id="login" to="/login">Login</router-link>
          </div>
          <div class="col">
            <router-link id="register" to="/register">Register</router-link>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>

<style scoped>
.container-fluid {
  height: 100vh;
  /* background-image: url("../assets/wow.gif"); */
  background-color: white;
  background-blend-mode: multiply;
  background-position: center;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* #row1 {w

} */
/* .col-6{
    border-top: solid 1px white;
    border-bottom: solid 1px white;
    border-radius: 50px;
} */
span {
  font-size: 60px;
}
#n {
  padding: 4px;
  color: white;
}
#pay {
  border-right: solid white 4px;
  border-left: solid white 4px;
  border-radius: 50px;
  padding: 5px;
  color: white;
  background-color: blue;
}
/* a {
  text-decoration: none;
  font-size: 60px;
  border-left: solid blue 4px;
  border-right: solid blue 4px;
  border-radius: 50px;
  padding: 4px;
  background-color: white;
  color: blue;
} */
#go {
  aspect-ratio: 1;
  border-radius: 190px;
  border: solid;
}
a{
  text-decoration: none;
  border-radius: 11px;
  padding: 4px;
  font-size: 20px;
}
#login{
  border: solid white 1px;
  color: white;
  background-color: blue;
}
#login:hover{
   border: solid blue 1px;
  color: blue;
  background-color: white;
}
#register{
  border: solid blue 1px;
  color: blue;
  background-color: white;
}
#register:hover{
  border: solid white 1px;
  color: white;
  background-color: blue;
}
</style>