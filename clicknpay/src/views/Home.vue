<template>
  <div class="container-fluid">
    <div id="row1" class="row">
      <div class="col-6">
        <button type="button" id="click">
          <a href="../views/LoginRegister.vue">Click </a></button
        ><span id="n">'n </span><span id="pay">Pay</span>
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
  background-image: url("../assets/wall.jpg");
  background-position: center;
  object-fit: cover;
}
#row1 {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* .col-6{
    border-top: solid 1px white;
    border-bottom: solid 1px white;
    border-radius: 50px;
} */
span {
  font-size: 60px;
}
#click{
    
}
#n {
  padding: 4px;
  color: white;
}
#pay {
  border-right: solid white 4px;
  border-radius: 50px;
  padding: 5px;
  color: white;
  background-color: blue;
}
a {
  text-decoration: none;
  font-size: 60px;
  border-left: solid blue 4px;
  border-radius: 50px;
  padding: 4px;
  color: blue;
}
</style>