<template>
  <div class="flex items-center gap-2">
    <div class="flex gap-2">
      <svg v-for="n in 5" :key="n" class="w-[24px]" :class="n <= stars ? 'text-m_yellow-600' : 'fill-m_gray-500'"
        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path
          d="M12 .587l3.668 7.431 8.332 1.209-6.041 5.872 1.428 8.319-7.387-3.881-7.387 3.881 1.428-8.319-6.041-5.872 8.332-1.209z" />
      </svg>
    </div>
    <div class="mx-4 flex-1 bg-white h-2 rounded-full overflow-hidden">
      <div :style="{ width: `${(count / 70) * 100}%` }" class="h-full bg-yellow-500"></div>
    </div>
    <div class="text-white text-sm">{{ count }}</div>
  </div>
</template>

<script>
export default {
  props: {
    stars: {
      type: Number,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
  },
};
</script>