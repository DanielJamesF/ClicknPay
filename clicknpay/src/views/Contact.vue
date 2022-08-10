<template>
  <div class="container-fluid">
    <h1>Get in touch...</h1>

    <form
      id="form"
      action="https://formspree.io/f/xdobpjrz"
      method="post"
      class="form-control"
    >
      <label for="name">Name</label>
      <input type="text" name="name" class="form-control" required />
      <br />
      <br />
      <label for="surname" class="pt-1">Surname </label>
      <input
        class="form-control"
        name="surname"
        type="text"
        maxlength="15"
        required
      />
      <br />
      <br />
      <label for="subject">Subject </label>
      <input class="form-control" type="text" maxlength="15" required />
      <br />
      <br />
      <label for="message">Message </label
      ><textarea
        class="form-control"
        name="message"
        id="message"
        cols="30"
        rows="2"
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
}
#form {
  width: 30%;
  text-align: center;
}
</style>