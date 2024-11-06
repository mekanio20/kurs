<template>
    <div class="px-14 py-3 font-sf_pro text-base rounded-lg cursor-pointer"
        :class="[bold ? 'font-bold' : 'font-medium', bg_color ? 'bg-m_black-900' : 'bg-m_yellow-100', color ? 'text-m_gray-300' : 'text-black',]">
        {{ name }}
    </div>
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
    }
}
</script>