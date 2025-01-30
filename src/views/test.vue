<template>
    <div @click="isOpen = false">
      <!-- Popup'u açan buton -->
      <button @click.stop="isOpen = true" class="px-4 py-2 bg-blue-500 text-white rounded">Popup Aç</button>
      
      <!-- Popup -->
      <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" @click.self="isOpen = false">
        <div class="bg-white p-6 rounded-lg shadow-lg w-96" @click.stop>
          <h2 class="text-lg font-semibold">Popup Başlığı</h2>
          <p class="mt-2">Bu bir Vue.js ve Tailwind CSS popup bileşenidir.</p>
          
          <!-- Rating Input -->
          <div class="flex space-x-1 mt-4">
            <span v-for="star in 5" :key="star" @click="rating = star" class="cursor-pointer text-2xl" :class="rating >= star ? 'text-yellow-400' : 'text-gray-300'">
              ★
            </span>
          </div>
          <p class="mt-2">Seçilen Puan: {{ rating }}</p>
          
          <!-- Kapat Butonu -->
          <button @click="isOpen = false" class="mt-4 px-4 py-2 bg-red-500 text-white rounded">Kapat</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false,
        rating: 0,
      };
    },
  };
  </script>
  
  <style>
  /* Opsiyonel: Ekstra animasyonlar eklenebilir */
  </style>
  