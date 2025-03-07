<template>
  <div class="relative w-full max-w-md mx-auto">
    <!-- Video Elementi -->
    <video ref="videoPlayer" class="w-full rounded-lg">
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      Tarayıcınız video etiketini desteklemiyor.
    </video>

    <!-- Play/Pause Butonu -->
    <button @click="togglePlay"
      class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
      <svg v-if="!isPlaying" class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 4l12 6-12 6V4z" />
      </svg>
      <svg v-else class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path d="M6 4h4v12H6V4zm4 0h4v12h-4V4z" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const videoPlayer = ref(null);
const isPlaying = ref(false);

const togglePlay = () => {
  if (!videoPlayer.value) return;

  if (videoPlayer.value.paused) {
    videoPlayer.value.play();
    isPlaying.value = true;
  } else {
    videoPlayer.value.pause();
    isPlaying.value = false;
  }
};
</script>

<style scoped>
button {
  transition: background 0.3s ease-in-out;
}

button:hover {
  background: rgba(0, 0, 0, 0.7);
}
</style>