<template>
  <div class="video-upload flex items-center gap-4 bg-gray-900 p-4 rounded-lg">
    <!-- Video Önizleme -->
    <div class="video-preview relative w-48 h-32 rounded-md overflow-hidden">
      <video v-if="videoPreview" :src="videoPreview" class="w-full h-full object-cover"></video>

      <!-- Yükleme İlerlemesi -->
      <div v-if="isLoading" class="absolute inset-0 flex flex-col items-center justify-center">
        <div class="w-14 h-14 border-4 border-gray-200 border-t-[#FFCC02] rounded-full animate-spin"></div>
        <p class="mt-2 text-white">{{ uploadProgress }}%</p>
      </div>
    </div>

    <!-- Yükleme Kontrolleri -->
    <div class="flex flex-col gap-2 flex-grow">
      <label class="bg-gray-700 text-white px-4 py-2 rounded-md cursor-pointer text-center">
        <input type="file" accept="video/*" @change="handleFileUpload" class="hidden" />
        📷 Обложка
      </label>
      <input type="text" placeholder="Название урока" v-model="lessonTitle"
        class="px-4 py-2 rounded-md bg-gray-700 text-white" />
      <button @click="uploadVideo" :disabled="!selectedFile || isLoading"
        class="bg-blue-500 text-white px-4 py-2 rounded-md disabled:bg-gray-400">
        Videoyu Yükle
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedFile = ref(null);
const videoPreview = ref(null);
const isLoading = ref(false);
const uploadProgress = ref(0);
const lessonTitle = ref('');

// Dosya Seçme İşlemi
const handleFileUpload = async (event) => {
  const file = event.target.files[0];
  if (file) {
    selectedFile.value = file;
    videoPreview.value = URL.createObjectURL(file);
  }
  if (!selectedFile.value) return;

  isLoading.value = true;
  uploadProgress.value = 0;

  const formData = new FormData();
  formData.append('path', selectedFile.value);

  try {
    await uploadWithProgress('https://0-100.community/api/videos/', formData);
  } catch (error) {
    console.error('Yükleme Hatası:', error);
  } finally {
    isLoading.value = false;
  }
};

// Gerçek Yükleme İlerlemesi
const uploadWithProgress = (url, formData) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);

    // Authorization Header Ekleme
    xhr.setRequestHeader('Authorization', `Bearer ${localStorage.getItem('access')}`);

    // Yükleme İlerlemesini İzleme
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        uploadProgress.value = Math.round((event.loaded / event.total) * 100);
      }
    };

    // Yükleme Başarıyla Tamamlandığında
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(new Error(`HTTP Error: ${xhr.status}`));
      }
    };

    // Hata Durumu
    xhr.onerror = () => reject(new Error('Yükleme sırasında bir hata oluştu.'));

    // Yüklemeyi Başlat
    xhr.send(formData);
  });
};
</script>

<style scoped>
.video-preview {
  min-width: 12rem;
  min-height: 8rem;
}

button:disabled {
  cursor: not-allowed;
}

.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>