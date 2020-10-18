<template>
  <div id="app">
    <component :is="layout">
      <router-view :layout.sync="layout" />
    </component>
  </div>
</template>

<script>
import "@/styles/App.scss";

export default {
  name: "App",
  computed: {
    layout() {
      return (this.$route.meta.layout || "auth") + "-layout";
    }
  }
};
</script>
