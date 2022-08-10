<template>
  <div class="container text-center">
    <div class="row h-75 d-flex justify-content-center align-content-center">
      <form id="register"
        class="w-50 mx-auto p-5 text-black rounded-5"
        @submit.prevent="register"
      >
        <h2 style="font-size: 3vw">Register</h2>
        <div class="form-group m-3">
          <!-- firstName -->
          <label for="name"></label>
          <input
            id="name"
            v-model="name"
            class="form-control"
            type="text"
            placeholder="Enter Name"
            required
          />

          <!-- lastname -->
          <label for="lastname"></label>
          <input
            id="lastname"
            v-model="lastname"
            class="form-control"
            type="text"
            placeholder="Enter Lastname"
            required
          />

          <!-- email -->
          <label for="email"></label>
          <input
            id="email"
            v-model="email"
            class="form-control"
            type="email"
            placeholder="Enter Email Address"
            required
          />

          <!-- Contact -->
          <label for="contact"></label>
          <input
            id="contact"
            v-model="contact"
            class="form-control"
            type="text"
            placeholder="Add Contact Number"
            required
          />

          <!-- Address -->
          <label for="address"></label>
          <input
            id="address"
            v-model="address"
            class="form-control"
            type="text"
            placeholder="Enter Address"
            required
          />

          <!-- password -->
          <label for="password"></label>
          <input
            id="password"
            v-model="password"
            class="form-control"
            type="password"
            placeholder="Choose password"
            required
          />
        </div>
        <button type="submit" class="btn btn-dark">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      lastname: "",
      email: "",
      usertype: "",
      contact: "",
      address: "",
      password: "",
    };
  },
  methods: {
    register() {
      // Fetches register function in store and passes values to it
      return this.$store.dispatch("register", {
        firstname: this.name,
        lastname: this.lastname,
        email: this.email,
        usertype: this.usertype,
        contact: this.contact,
        address: this.address,
        password: this.password,
      });
    },
  },

  computed: {
    // returns value from store
    user() {
      return this.$store.state.user;
    },
  },
};
</script>
<style></style>
