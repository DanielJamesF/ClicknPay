<template>
  <div v-if="user">
    <div v-if="products">
      <div class="container text-center">
        <h2 class="text-black">User: {{ user.firstname }}</h2>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Anime Title</th>
              <th scope="col">Genres</th>
              <th scope="col">User ID</th>
              <th scope="col">
                <a data-bs-toggle="modal" data-bs-target="#addnew" class="btn">
                  <i class="fa-regular fa-square-plus"></i>
                </a>
              </th>
            </tr>
          </thead>
          <tr v-for="product in products" :key="product">
            <td>{{ product.id }}</td>
            <td>{{ product.prodname }}</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.userid }}</td>

            <!-- icons -->
            <td>
              <!-- Update -->
              <a
                type="button"
                class="btn"
                data-bs-toggle="modal"
                :data-bs-target="'#update' + product.id"
                ><i class="fa-solid fa-pen-to-square"></i
              ></a>

              <!-- Delete -->
              <a
                class="btn"
                id="delete"
                @click="$store.dispatch('deleteProduct', product.id)"
                ><i class="fa-solid fa-trash-can"></i
              ></a>
            </td>
            <UpdateModal :product="product" />
          </tr>
        </table>
      </div>
    </div>
  </div>

  <div id="else" v-else class="text-center">
    <h1>Please Login to view Data</h1>
  </div>
  <!--  -->
  <CreateModal />
  <!--  -->
</template>

<script>
import CreateModal from "@/components/createModal.vue";
import UpdateModal from "@/components/updateModal.vue";

export default {
  components: { CreateModal, UpdateModal },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    // returns value from store
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
}
#else {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
th {
  color: red;
}
/* td {
  color: white;
} */

i {
  color: red;
}
</style>
