<template>
    <div class="bg-m_black-300 rounded-xl overflow-x-auto cursor-pointer shadow-lg p-4">
        <div class="relative">
            <img class="w-full h-[180px] object-cover rounded-lg" :src="course.banner">
            <span class="absolute top-2 left-2 bg-white text-black px-2 py-1 text-xs rounded-md font-bold">
                Новое
            </span>
        </div>

        <div class="mt-4">
            <h3 class="text-white text-lg font-semibold">
                {{ course.name }}
            </h3>
            <p class="text-m_gray-100 py-2 text-sm">{{ course.owner.full_name }}</p>

            <div class="flex items-center space-x-4 mt-3 text-m_gray-100 text-sm">
                <span class="bg-m_black-400 px-2 py-1 rounded-xl">17 Lessons</span>
                <span class="bg-m_black-400 px-2 py-1 rounded-xl">2h 10m</span>
            </div>

            <div class="flex justify-between items-center mt-4">
                <div class="flex items-center">
                    <span class="text-lg text-m_yellow-100">★</span>
                    <span class="ml-1 text-m_gray-100 text-sm font-semibold">4.8</span>
                    <span class="ml-1 text-m_gray-100 text-xs">(5.8k+)</span>
                </div>
                <div class="bg-m_yellow-100 text-black px-3 py-1 rounded-lg text-sm font-medium">
                    $75.99
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        course: {
            type: Object,
            required: true
        }
    },
}
</script>