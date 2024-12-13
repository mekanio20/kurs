<template>
  <div class="!w-full !h-full no-scrollbar">
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