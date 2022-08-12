<template>
  <div class="container-fluid">

    <form
      id="form"
      action="https://formspree.io/f/xdobpjrz"
      method="post"
      class="form-control"
    >
    <h1>Get in touch...</h1>
      <label for="name">Name</label>
      <input type="text" name="name" class="form-control" placeholder="Enter Name" required />
      <br />
      <br />
      <label for="surname" class="pt-1">Surname </label>
      <input
        class="form-control"
        name="surname"
        type="text"
        maxlength="15"
        placeholder="Enter Surname"
        required
      />
      <br />
      <br />
      <label for="email">Email</label>
      <input type="text" class="form-control" placeholder="Enter email address" required>
      <br>
      <br>
      <label for="subject">Subject </label>
      <input class="form-control" type="text" maxlength="15" required placeholder="What would you like to talk about?" />
      <br />
      <br />
      <label for="message">Message </label
      ><textarea
        class="form-control"
        name="message"
        id="message"
        cols="30"
        rows="2"
        placeholder="Leave a message to let us know how we can improve our services &#128512;"
      ></textarea>
      <br />
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container-fluid {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('../assets/wall.jpg');
  background-position: center;
}
#form {
  width: 30%;
  text-align: center;
  background-image: url('../assets/wall.jpg');
  color: white;
}
</style>