<template>
  <div class="col">
    <img :src="getImagePath" class="img-thumbnail" :alt="title" />
    <div class="row text-center">
      <span>{{ title }}</span>
      <span>{{ subtitle }}</span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "AlbumImageCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String
    },
    image: {
      type: String,
      required: true
    }
  },
  computed: {
    getImagePath(): string {
      return `/src/assets/images/${this.image}`;
    },
  },
};
</script>
