<template>
  <div class="!w-full !h-full overflow-x-hidden">
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