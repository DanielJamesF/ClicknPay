<template>
  <div :id="'update'+product.id" class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Update Anime</h5>
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

            <!-- episodes -->
            <div class="mb-3">
              <label for="updateEp" class="form-label">Episodes</label>
              <input class="form-control" type="number" name="updateEp" id="updateEp" v-model="product.prodimg"
                placeholder="episode count" />
            </div>

            <!-- season -->
            <div class="mb-3">
              <label for="updateSeason" class="form-label">Seasons</label>
              <input class="form-control" type="number" name="updateSeason" id="updateSeason"
                v-model="product.seasonCount" placeholder="Enter Price" required />
            </div>
            <!-- genre, status, studio, aired -->
            <!-- genre -->
            <div class="mb-3">
              <label for="updateGenre" class="form-label">Genre</label>
              <input class="form-control" type="text" name="updateGenre" id="updateGenre" v-model="product.price"
                placeholder="update Genres" />
            </div>

            <!-- status -->
            <div class="mb-3">
              <label for="updateStatus" class="form-label">UserID</label>
              <input class="form-control" type="text" name="updateStatus" id="updateStatus" v-model="product.userid"
                placeholder="Status" />
            </div>
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
