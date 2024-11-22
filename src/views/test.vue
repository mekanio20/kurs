<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div class="w-96 p-4 bg-white shadow-md rounded-md">
      <label
        for="videoInput"
        class="block text-sm font-medium text-gray-700 mb-2"
      >
        Video Yükle
      </label>
      <input
        id="videoInput"
        type="file"
        accept="video/*"
        @change="handleVideoUpload"
        class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
      <div v-if="videoPreview" class="mt-4">
        <p class="text-sm font-medium text-gray-700 mb-2">Önizleme:</p>
        <img
          :src="videoPreview"
          alt="Video önizleme"
          class="w-full h-56 object-cover rounded-md border"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoPreview: null, // Video önizleme için URL
    };
  },
  methods: {
    handleVideoUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const videoElement = document.createElement("video");

        videoElement.src = URL.createObjectURL(file);
        videoElement.currentTime = 1; // Videonun 1. saniyesini alalım

        videoElement.addEventListener("loadeddata", () => {
          const canvas = document.createElement("canvas");
          canvas.width = videoElement.videoWidth;
          canvas.height = videoElement.videoHeight;

          const context = canvas.getContext("2d");
          context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

          this.videoPreview = canvas.toDataURL("image/png"); // Görüntüyü Base64 olarak al
          URL.revokeObjectURL(videoElement.src); // Hafızayı temizle
        });
      }
    },
  },
};
</script>

<style scoped>
/* Tailwind CSS varsayılan tasarımı yeterli olduğu için ek stil gerekmiyor. */
</style>
