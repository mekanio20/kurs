<template>
    <div class="px-8 py-8 bg-m_black-700 rounded-xl flex flex-col items-center space-y-4 relative">
        <div class="absolute right-4 top-4">
            <div class="flex items-center">
                <span class="text-lg text-m_yellow-100">★</span>
                <span class="ml-1 text-white text-sm font-semibold">{{ rating }}</span>
            </div>
        </div>
        <div class="w-[80px] rounded-full">
            <img class="w-full h-full object-cover" :src="img">
        </div>
        <h2 class="font-sf_pro font-bold text-base text-white">{{ name }}</h2>
        <p class="font-sf_pro font-normal text-sm text-white opacity-70">{{ email }}</p>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        img: {
            type: String,
            required: true
        }
    }
}
</script>