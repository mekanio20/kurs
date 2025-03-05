<template>
  <div class="w-full pt-[59px] pb-10 flex justify-end">
    <AdminButton :bold="true" name="Next" @click="handleClick" />
  </div>
</template>

<script>
import AdminButton from './AdminButton.vue';
export default {
  components: {
    AdminButton
  },
  methods: {
    handleClick() {
      this.$emit('nextSection');
    },
  },
};
</script>