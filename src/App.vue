<template>
  <div class="!w-full !h-full no-scrollbar">
    <!-- <div v-if="loading" class="loading-overlay"></div> -->
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from 'vue-router'

export default {
  name: "App",
  components: {
    RouterView,
  }
}
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  z-index: 9999;
}
</style>