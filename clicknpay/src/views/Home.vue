<template>
  <div class="container-fluid">
    <div id="row1" class="row">
      <h2 class="display-1 text-black">Welcome to</h2>
      <div id="logo" class="col ">
        <!-- <img id="go" src="../assets/go.png" alt="go" />
        <span>F</span>
        <span><img src="../assets/ittsreallyani.png" alt="I" /></span
        ><span>G</span>
        <span>U</span>
        <span>R</span>
        <span>E</span> -->
        <img class="img-fluid" src="https://i.postimg.cc/SR1CkbHM/figure1.png" alt="">
      </div>
      <!-- <div id="loginregister" class="row">
          <div class="col">
            <router-link id="login" to="/login">Login</router-link>
          </div>
          <div class="col">
            <router-link id="register" to="/register">Register</router-link>
          </div>
        </div> -->
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
  min-height: 100vh;
  /* background-image: url("https://i.postimg.cc/Hn3N4nR7/animesher-com-tumblr-autumn-backgrounds-tumblr-fall-1923587.gif"); */
  background-image: url("https://i.postimg.cc/3RkjbRkv/6aeeea24e8fd4023a349e354eefa33ed.gif");
  background-repeat: no-repeat;
  background-size: cover;
  /* background-color: darkorange; */
  background-blend-mode: multiply;
  background-position: center;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
span {
  font-size: 60px;
}
a {
  text-decoration: none;
  font-size: 60px;
  border-radius: 50px;
  padding: 5px;
  font-size: 25px;
}
#go {
  padding: 22px;
}
#login {
  border: solid white 1px;
  color: white;
  background-color: blue;
}
#login:hover {
  border: solid blue 1px;
  color: blue;
  background-color: white;
}
#register {
  border: solid blue 1px;
  color: blue;
  background-color: white;
}
#register:hover {
  border: solid white 1px;
  color: white;
  background-color: blue;
}
span {
  font-size: 50px;
  padding: 20px;
}
#logo {
  border-radius: 180px;
  /* background-color: #fff; */
}

/* #logo img {
  opacity: 1;
} */

#loginregister{
  padding: 10px;
}
</style>