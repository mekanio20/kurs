<template>
    <input class="w-full bg-m_black-700 rounded-lg p-4 outline-none text-white no-arrows"
        :type="type" 
        @input="$emit('update:modelValue', $event.target.value)"
        :value="modelValue"
        :placeholder="placeholder"
    >
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'text'
        },
        value: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        modelValue: {
            type: String,
            default: ''
        },
    },
    emits: ['update:modelValue'],
}
</script>