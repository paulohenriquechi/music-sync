<template>
  <div class="container pt-4">
    <div class="row">
      <h3>{{ title }}</h3>
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "SectionContainer",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
