<template>
  <div class="container-fluid">
    <p> <span>this really is an</span> 約 <span>page</span> </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container-fluid {
  height: 100vh;
  background-image: url('../assets/wall.jpg');
  background-position: center;
}
p {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 200px;
  color: whitesmoke;
}
span{
  font-size: 50px;
}
</style>