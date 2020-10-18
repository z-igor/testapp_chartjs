<template>
  <md-app>
    <md-app-toolbar class="md-primary">
      <span class="md-title">{{ cover }}</span>
    </md-app-toolbar>
  </md-app>
</template>

<script>
export default {
  name: "Title",
  props: {
    cover: String
  }
};
</script>
