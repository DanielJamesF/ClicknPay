<template>
  <div class="container-fluid">
    <div v-if="user">
      <div v-if="users">
        <div class="container text-center">
          <h2 class="text-black">User: {{ user.firstname }}</h2>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">User Name</th>
                <th scope="col">User Title</th>
                <th scope="col">User Email Address</th>
                <!-- <th scope="col">
                <a data-bs-toggle="modal" data-bs-target="#addnew" class="btn">
                  <i class="fa-regular fa-square-plus"></i>
                </a>
              </th> -->
              </tr>
            </thead>
            <tr v-for="user in users" :key="user">
              <td>{{ user.id }}</td>
              <td>{{ user.firstname }}</td>
              <td>{{ user.usertype }}</td>
              <td>{{ user.email }}</td>

              <!-- icons -->
              <td>
                <!-- Update -->
                <a
                  type="button"
                  class="btn"
                  data-bs-toggle="modal"
                  :data-bs-target="'#update' + user.id"
                  ><i class="fa-solid fa-pen-to-square"></i
                ></a>

                <!-- Delete -->
                <a
                  class="btn"
                  id="delete"
                  @click="$store.dispatch('deleteuser', user.id)"
                  ><i class="fa-solid fa-trash-can"></i
                ></a>
              </td>
              <UpdateUserModal :user="user" />
            </tr>
          </table>
          
        </div>
      </div>
    </div>

    <div v-else class="text-center">
      <h1>Please Login to view Data</h1>
    </div>
    <!--  -->
    <CreateModal />
    <!--  -->
  </div>
</template>

<script>
import CreateModal from "@/components/createModal.vue";
import UpdateUserModal from "@/components/updateUserModal.vue";

export default {
  components: { CreateModal, UpdateUserModal },
  mounted() {
    this.$store.dispatch("getusers");
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    // returns value from store
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style scoped>
.container-fluid {
  height: 100vh;
}
th {
  color: red;
}
i {
  color: red;
}
</style>
