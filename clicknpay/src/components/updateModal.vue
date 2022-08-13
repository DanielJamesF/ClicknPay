<template>
  <div :id="'update'+product.id" class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Update Product</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <!-- <div class=""> -->
            <!-- name -->
            <div class="mb-3">
              <label for="updateName" class="form-label">Name:</label>
              <input class="form-control" type="text" v-model="product.prodname"
                placeholder="Enter Name:" required />
            </div>

            <!-- Image URL -->
            <div class="mb-3">
              <label for="updateimg" class="form-label">Image URL</label>
              <input class="form-control" type="text" name="updateimg" id="updateimg" v-model="product.prodimg"
                placeholder="episode count" />
            </div>

            <!-- Price -->
            <div class="mb-3">
              <label for="updatePrice" class="form-label">Product Price</label>
              <input class="form-control" type="number" name="updatePrice" id="updatePrice"
                v-model="product.price" placeholder="Enter Price" required />
            </div>
            <!-- genre, status, studio, aired -->
            <!-- quantity -->
            <div class="mb-3">
              <label for="updateQuantity" class="form-label">Quantity</label>
              <input class="form-control" type="text" name="updateQuantity" id="updateQuantity" v-model="product.quantity"
                placeholder="update Genres" />
            </div>

            <!-- user id -->
            <!-- <div class="mb-3">
              <label for="updateUserID" class="form-label">UserID</label>
              <input class="form-control" type="text" name="updateUserID" id="updateUserID" v-model="product.userid"
                placeholder="Status" />
            </div> -->
            <!-- </div> -->
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="update">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],

  methods: {
    update() {
      return this.$store.dispatch("updateProduct", this.product)
    }
  }
}


</script>

<style>
</style>
