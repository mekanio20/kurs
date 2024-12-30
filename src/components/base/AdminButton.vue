<template>
    <button @click="handleClick" class="px-14 py-3 font-sf_pro text-base rounded-lg cursor-pointer" :disabled="disabled"
        :class="[bold ? 'font-bold' : 'font-medium', bg_color ? 'bg-m_black-900' : 'bg-m_yellow-100', color ? 'text-m_gray-300' : 'text-black']">
        {{ name }}
    </button>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        bold: {
            type: Boolean,
            default: false
        },
        bg_color: {
            type: Boolean,
            default: false
        },
        color: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleClick() {
            this.$emit('button-clicked');
        }
    }
}
</script>