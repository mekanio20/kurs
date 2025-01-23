<template>
    <svg
      class="w-[40px] cursor-pointer"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      @click="handleClick"
    >
      <path
        :fill="isTrue ? 'white' : 'none'"
        d="M17.4167 19.25L11 14.6667L4.58337 19.25V4.58333C4.58337 4.0971 4.77653 3.63079 5.12034 3.28697C5.46416 2.94315 5.93048 2.75 6.41671 2.75H15.5834C16.0696 2.75 16.5359 2.94315 16.8797 3.28697C17.2236 3.63079 17.4167 4.0971 17.4167 4.58333V19.25Z"
        stroke="white"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </template>
  
  <script>
  export default {
    props: {
      isTrue: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      handleClick() {
        // Emit an event to the parent to update the state
        this.$emit("update:isTrue", !this.isTrue);
      },
    },
  };
  </script>