<template>
  <div class="p-4">
    <Pagination 
      :totalPages="totalPages" 
      v-model:currentPage="currentPage" 
      @update:currentPage="handlePageChange"
    />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';
export default {
    components: {
        Pagination,
    },
    data() {
        return {
            totalPages: 10,
            currentPage: 1,
        };
    },
    methods: {
        handlePageChange(newPage) {
            this.currentPage = newPage;
            console.log('Seçilen Sayfa:', newPage);
        },
    },
}
</script>