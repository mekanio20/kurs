<template>
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.75 15.8335V11.0835" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M14.25 15.8332V7.9165" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M9.5 15.8332V3.1665" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
</template>

<script>
export default {
    props: {
        color: {
            type: [String, Array],
            default: '#fff'
        }
    }
}
</script>