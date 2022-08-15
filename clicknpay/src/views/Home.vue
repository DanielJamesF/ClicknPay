<template>
  <div class="container-fluid">
    <div class="row">
      <div id="logo" class="col flex-wrap">
        <img id="go" class="img-fluid" src="../assets/go.png" alt="go" /><span>F</span><span><img class="img-fluid" id="I" src="../assets/ittsreallyani.png" alt="I" /></span><span>G</span><span>U</span><span>R</span><span>E</span>
      </div>
      <div id="loginregister" class="row">
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
  background-image: url("../assets/wow.gif");
  background-position: center;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
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
#logo{
  border-radius: 180px;
  background-color: #fff;
}
#loginregister{
  padding: 10px;
}
@media (min-width: 775px) and (max-width: 886px) {
  span{
    font-size: unset;
  }
}
@media (min-width: 369px) and (max-width: 775px){
  #go{
    height: 50px;
    padding: 10px;
  }
  #I{
    height: 30px;
  }
  span{
    font-size: unset;
    padding: 0;
  }
}
@media (max-width: 369px) {
  #go{
    height: 30px;
    padding: 5px;
  }
  #I{
    height: 20px;
  }
  span{
    font-size: unset;
    padding: 5px;
  }
}
</style>