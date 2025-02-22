<script setup>
import { computed } from "vue";

const props = defineProps({
  totalPages: { type: Number, required: true },
  currentPage: { type: Number, required: true },
});
const emit = defineEmits(["update:currentPage"]);

const pages = computed(() => {
  const { totalPages, currentPage } = props;
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages];
  }
  if (currentPage >= totalPages - 2) {
    return [1, "...", totalPages - 2, totalPages - 1, totalPages];
  }
  return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
});

const changePage = (page) => {
  if (page !== "..." && page >= 1 && page <= props.totalPages && page !== props.currentPage) {
    emit("update:currentPage", page);
  }
};
</script>

<template>
  <div class="select-none">
    <ul class="flex items-center -space-x-px h-10 text-base">
      <li>
        <a
          href="#"
          @click.prevent="changePage(currentPage - 1)"
          :class="['flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-m_black-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white', { 'pointer-events-none opacity-50': currentPage === 1 }]"
        >
          <span class="sr-only">Previous</span>
          <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
          </svg>
        </a>
      </li>
      <li v-for="page in pages" :key="page">
        <a
          href="#"
          @click.prevent="changePage(page)"
          :class="['flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-m_black-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white', { 'z-10 text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white': page === currentPage, 'pointer-events-none': page === '...' }]"
        >
          {{ page }}
        </a>
      </li>
      <li>
        <a
          href="#"
          @click.prevent="changePage(currentPage + 1)"
          :class="['flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-m_black-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white', { 'pointer-events-none opacity-50': currentPage === totalPages }]"
        >
          <span class="sr-only">Next</span>
          <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
          </svg>
        </a>
      </li>
    </ul>
  </div>
</template>