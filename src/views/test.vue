<template>
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <label class="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        v-model="checked"
        class="sr-only peer"
      />
      <div
        class="w-6 h-6 bg-white border-[1px] border-[#9098A9] rounded-md flex items-center justify-center transition-all peer-checked:bg-yellow-500 peer-checked:border-yellow-500 peer-checked:text-white peer-checked:scale-110"
      >
        <svg
          v-if="checked"
          class="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M16.293 5.293a1 1 0 0 0-1.414 0L8 11.586 5.121 8.707a1 1 0 0 0-1.415 1.414l3.535 3.536a1 1 0 0 0 1.415 0l8-8a1 1 0 0 0 0-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
    };
  },
};
</script>

<style>
/* İsteğe bağlı özel stiller */
</style>
