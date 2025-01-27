<template>
    <div class="px-8 py-4 bg-m_black-700 rounded-lg w-full flex items-center justify-between cursor-pointer relative select-none"
        @click="handleOpenDropdown">
        <p class="font-sf_pro font-medium text-lg text-white">{{ name }}</p>
        <svg :class="{ 'rotate-180': openDropdown, 'transition-transform duration-200': true }" width="12" height="8"
            viewBox="0 0 10 6" fill="#fff" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M0.646447 0.659675C0.841709 0.446775 1.15829 0.446775 1.35355 0.659675L4.64645 4.25C4.84171 4.4629 5.15829 4.4629 5.35355 4.25L8.64645 0.659676C8.84171 0.446776 9.15829 0.446776 9.35355 0.659676C9.54882 0.872575 9.54882 1.21775 9.35355 1.43065L6.06066 5.02098C5.47487 5.65967 4.52513 5.65968 3.93934 5.02098L0.646447 1.43065C0.451184 1.21775 0.451184 0.872574 0.646447 0.659675Z"
                fill="#fff" fill-opacity="0.8" />
        </svg>
        <div v-if="openDropdown" class="w-full h-[500px] flex flex-col absolute top-16 left-0">
            <div v-for="(item, index) in options" :key="index" @click="sendData(item)" class="px-8 py-4 bg-m_black-700 w-full hover:bg-m_black-600 duration-300">
                <p class="font-sf_pro font-medium text-lg text-white">{{ item.name }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        options: {
            type: Array,
            required: true
        },
    },
    data() {
        return {
            openDropdown: false,
        }
    },
    methods: {
        sendData(item) {
            this.$emit('sendData', item)
        },
        handleOpenDropdown() {
            this.openDropdown = !this.openDropdown
        }
    }
}
</script>