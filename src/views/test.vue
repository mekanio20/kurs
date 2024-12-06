<template>
  <div @click="openBurger" class="cursor-pointer laptop:hidden">
    <div class="w-10 flex flex-col justify-between space-y-2">
      <div class="h-0.5 bg-white duration-500"
        :class="[isBurger ? 'w-6 transform translate-y-[10px] -rotate-45' : 'w-6']"></div>
      <div class="w-6 h-0.5 bg-white duration-500" :class="[isBurger ? 'opacity-0' : '']"></div>
      <div class="h-0.5 bg-white duration-500"
        :class="[isBurger ? 'w-6 transform translate-y-[-10px] rotate-45' : 'w-6']"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      isBurger: false,
    };
  },
  methods: {
    openBurger() {
      this.isBurger = !this.isBurger
    },
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style>
/* Tailwind CSS kullanıldığı için ekstra stil gerekmez */
</style>
