<template>
  <div class="container text-center">
    <div class="row d-flex justify-content-center align-content-center">
      <form class="w-50 mx-auto bg-white p-5 form" @submit.prevent="login">
        <h2 style="font-size: 3vw">Login</h2>

        <div class="form-group mb-3">
          <input
            type="email"
            class="form-control my-3"
            placeholder="Enter Email Address"
            id="email"
            v-model="email"
          />
          <!-- </div>

        <div class="mb-3"> -->
          <input
            type="password"
            class="form-control my-3"
            id="password"
            placeholder="Enter Password"
            v-model="password"
          />
        </div>

        <button type="submit" class="btn btn-dark">Submit</button>
        <button type="button" @click="verify()" class="btn btn-dark">Verify</button>
      </form>

      <router-link :to="{ name: 'register' }">
        <a style="font-size: 30px" class="nav-link"> Register</a>
      </router-link>
    </div>

    <div v-if="user">
      <h2>{{ user.firstname }} Login Successful</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    // checks if user exists in db
    login() {
      return this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
    verify() {
      return this.$store.dispatch("verify")
    },
  },

  computed: {
    // returns userData if exists
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style></style>
