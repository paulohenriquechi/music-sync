<template>
  <section>
    <div class="container px-4">
      <div v-for="artist in artists">
        <p>{{ artist.name }}</p>
        <p>{{ artist.description }}</p>
        <p>{{ artist.country }}</p>
        <p>{{ artist.formation_year }}</p>
        <hr>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import api from "@/http";

export default defineComponent({
  name: "ArtistsView",
  data() {
    return {
      artists: []
    }
  },
  methods: {
    getArtists() {
      api
        .get("/artists")
        .then((res) => {
          console.log(res.data.data)
          this.artists = res.data.data
        })
        .catch((err) => console.log(err));
    },
  },
  created() {
      this.getArtists()
  },
});
</script>
<style></style>
