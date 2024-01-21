<template>
  <section>
    <div class="container px-4">
      <div class="container p-4">
        <form class="row" v-on:submit.prevent="createArtist">
          <div class="mb-3 col-5">
            <label for="name" class="form-label">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              aria-describedby="name"
              v-model="artist.name"
            />
          </div>
          <div class="mb-3 col-4">
            <label for="country" class="form-label">Country</label>
            <input
              type="text"
              class="form-control"
              id="country"
              aria-describedby="country"
              v-model="artist.country"
            />
          </div>
          <div class="mb-3 col-3">
            <label for="year" class="form-label">Year</label>
            <input
              type="text"
              class="form-control"
              id="year"
              aria-describedby="year"
              v-model="artist.formationYear"
            />
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea
              class="form-control"
              id="description"
              rows="3"
              v-model="artist.description"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <p>{{ artist.name }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import api from "@/http";

export default defineComponent({
  name: "AdminView",
  data() {
    return {
      artist: {
        name: "",
        description: "",
        country: "",
        formationYear: "",
      },
    };
  },
  methods: {
    createArtist() {
      api
        .post("/artists", this.artist)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
  },
});
</script>
