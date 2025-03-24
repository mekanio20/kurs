<template>
  <div class="flex gap-2">
    <template v-for="n in 5" :key="n">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-[26px] cursor-pointer transition-all duration-200"
        :class="n <= localRating ? 'text-m_yellow-600 scale-110' : 'text-m_gray-500'" fill="currentColor"
        viewBox="0 0 24 24" @click="selectStars(n)">
        <path
          d="M12 .587l3.668 7.431 8.332 1.209-6.041 5.872 1.428 8.319-7.387-3.881-7.387 3.881 1.428-8.319-6.041-5.872 8.332-1.209z" />
      </svg>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      localRating: this.modelValue,
    };
  },
  watch: {
    modelValue(newValue) {
      this.localRating = newValue;
    },
  },
  methods: {
    selectStars(stars) {
      this.localRating = stars;
      this.$emit("update:modelValue", stars);
    },
  },
};
</script>