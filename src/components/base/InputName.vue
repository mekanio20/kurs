<template>
    <h4 class="font-sf_pro font-medium text-lg text-white">{{ name }}</h4>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        }
    }
}
</script>