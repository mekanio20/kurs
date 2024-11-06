<template>
    <div class="w-full py-8 flex items-center justify-between">
        <div class="font-sf_pro font-bold text-lg text-white">{{ name }}</div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "AdminHeader",
    props: {
        name: {
            type: String,
            required: true
        }
    }
}
</script>