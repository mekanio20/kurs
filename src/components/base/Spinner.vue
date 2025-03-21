<script setup>
defineProps({
    size: {
        type: String,
        default: "w-6 h-6",
    },
    color: {
        type: String,
        default: "border-black",
    },
});
</script>

<template>
    <div class="flex justify-center items-center">
        <div class="border-4 border-t-transparent rounded-full animate-spin" :class="[size, color]"></div>
    </div>
</template>