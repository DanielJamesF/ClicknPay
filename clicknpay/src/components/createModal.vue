<template>
  <div
    class="modal fade"
    id="addnew"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add Anime</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row w-100">
            <div class="col-4">
              <!-- name -->
              <div class="mb-3">
                <label for="addName" class="form-label">Name:</label>
                <input
                  class="form-control"
                  type="text"
                  v-model="name"
                  name="addName"
                  id="addName"
                  placeholder="Enter Name:"
                  required
                />
              </div>

              <!-- image -->
              <div class="mb-3">
                <label for="addImage" class="form-label">Image</label>
                <input
                  class="form-control"
                  type="text"
                  name="addImage"
                  id="addType"
                  v-model="image"
                  placeholder="Add image url"
                />
              </div>

              <!-- Alternate title -->
              <div class="mb-3">
                <label for="addAlternate" class="form-label">Alternate</label>
                <input
                  class="form-control"
                  type="text"
                  name="addAlternate"
                  id="addAlternate"
                  v-model="alternate"
                  placeholder="Alternate Titles"
                />
              </div>

              <!-- desc-image -->
              <div class="mb-3">
                <label for="addImage_desc" class="form-label"
                  >Image Description</label
                >
                <input
                  class="form-control"
                  type="text"
                  name="addImage_desc"
                  id="addImage_desc"
                  v-model="desc_image"
                  placeholder="Add Image"
                />
              </div>
            </div>

            <div class="col-4">
              <!-- image gif -->
              <div class="mb-3">
                <label for="addGif" class="form-label">Image Gif</label>
                <input
                  class="form-control"
                  type="text"
                  name="addImage"
                  id="addType"
                  v-model="gif"
                  placeholder="Add Image Gif"
                />
              </div>

              <!-- desc -->
              <div class="mb-3">
                <label for="addDesc" class="form-label">Description</label>
                <textarea
                  class="form-control"
                  name="addDesc"
                  id="addDesc"
                  cols="30"
                  rows="10"
                  v-model="desc"
                ></textarea>
              </div>

              <!-- episodes -->
              <div class="mb-3">
                <label for="addEp" class="form-label">Episodes</label>
                <input
                  class="form-control"
                  type="number"
                  name="addEp"
                  id="addEp"
                  v-model="episodes"
                  placeholder="episode count"
                />
              </div>

              <!-- season -->
              <div class="mb-3">
                <label for="addSeason" class="form-label">Seasons</label>
                <input
                  class="form-control"
                  type="number"
                  name="addSeason"
                  id="addSeason"
                  v-model="season"
                  placeholder="Enter Price"
                  required
                />
              </div>
            </div>
            <!-- genre, status, studio, aired -->
            <div class="col-4">
              <!-- genre -->
              <div class="mb-3">
                <label for="addGenre" class="form-label">Add Genre</label>
                <input
                  class="form-control"
                  type="text"
                  name="addGenre"
                  id="addGenre"
                  v-model="genre"
                  placeholder="Add Genres"
                />
              </div>

              <!-- status -->
              <div class="mb-3">
                <label for="addStatus" class="form-label">Status</label>
                <input
                  class="form-control"
                  type="text"
                  name="addStatus"
                  id="addStatus"
                  v-model="status"
                  placeholder="Status"
                />
              </div>

              <!-- studio -->
              <div class="mb-3">
                <label for="addStudio" class="form-label">Studio</label>
                <input
                  class="form-control"
                  type="text"
                  name="addStudio"
                  id="addStudio"
                  v-model="studio"
                  placeholder="Studio"
                />
              </div>

              <!-- aired -->
              <div class="mb-3">
                <label for="addDate" class="form-label">Date:</label>
                <input
                  class="form-control"
                  type="text"
                  name="addDate"
                  id="addDate"
                  v-model="aired"
                  placeholder="Enter Date"
                  required
                />
              </div>

              <!-- trailer -->
              <div class="mb-3">
                <label for="addTrailer" class="form-label">Date:</label>
                <input
                  class="form-control"
                  type="text"
                  name="addTrailer"
                  id="addTrailer"
                  v-model="trailer"
                  placeholder="Enter Trailer"
                  required
                />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              @click="add"
            >
              Add Anime
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      alternate: "",
      image: "",
      desc_image: "",
      gif: "",
      desc: "",
      episodes: "",
      season: "",
      genre: "",
      status: "",
      studio: "",
      aired: "",
      trailer: "",
    };
  },
  methods: {
    add() {
      return this.$store.dispatch("addAnime", {
        name: this.name,
        alternative: this.alternate,
        image: this.image,
        desc_image: this.desc_image,
        anime_Gif: this.gif,
        description: this.desc,
        Episodes: this.episodes,
        seasonCount: this.season,
        genre: this.genre,
        status: this.status,
        studio: this.studio,
        dateAired: this.aired,
        trailer: this.trailer,
      });
    },
  },
};
</script>

<style></style>
