<template>
  <div class="col-4">
    <div class="card text-bg-dark mb-3">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">
            {{ subtitle }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
    name: "TextCard",
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        }
    }
}
</script>
