<template>
    <svg :width="w" :height="h" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 8L8 24" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8 8L24 24" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
</template>

<script>
export default {
    props: {
        w: {
            type: String,
            default: "32"
        },
        h: {
            type: String,
            default: "32"
        },
    }
}
</script>