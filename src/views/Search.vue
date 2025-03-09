<template>
    <div class="w-full min-h-100vh relative overflow-hidden">
        <div class="absolute left-0 top-0">
            <svg width="598" height="1581" viewBox="0 0 598 1581" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="-15.5267" cy="680.913" rx="613.473" ry="899.913" fill="url(#paint0_radial_1220_4612)"
                    fill-opacity="0.15" />
                <defs>
                    <radialGradient id="paint0_radial_1220_4612" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(-15.5267 680.913) rotate(90) scale(899.913 613.473)">
                        <stop stop-color="#FFC300" />
                        <stop offset="1" stop-color="#181C27" stop-opacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
        <div class="absolute right-0 top-80">
            <svg width="600" height="1800" viewBox="0 0 600 1800" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="613.473" cy="899.913" rx="613.473" ry="899.913" fill="url(#paint0_radial_1220_4611)"
                    fill-opacity="0.25" />
                <defs>
                    <radialGradient id="paint0_radial_1220_4611" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(613.473 899.913) rotate(90) scale(899.913 613.473)">
                        <stop stop-color="#FFC300" />
                        <stop offset="1" stop-color="#181C27" stop-opacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
        <div class="w-full relative z-50">
            <Navbar />
            <div class="container bg-transparent mt-44">
                <h2
                    class="font-sf_pro font-bold lg:text-[50px] sm:text-[40px] text-[30px] lg:leading-[60px] sm:leading-[50px] leading-[40px] text-white">
                    {{ searchQuery }}
                </h2>
                <p class="font-sf_pro font-normal lg:text-xl sm:text-lg text-base text-white my-5">{{ count }} результатов
                </p>
                <div
                    class="w-full flex sm:flex-row flex-col sm:items-center sm:space-y-0 space-y-4 items-start sm:space-x-6 sm:my-14 my-10 select-none">
                    <div @click="openSort"
                        class="w-fit relative flex items-center space-x-6 px-8 py-2 font-sf_pro font-medium lg:text-lg sm:text-base text-sm rounded-md cursor-pointer"
                        :class="[sortSelection ? 'bg-m_yellow-200 text-black' : 'text-white border border-m_gray-100']">
                        <div class="text-nowrap">Сортировать по: <b>{{ activeSort }}</b></div>
                        <svg :class="{ 'rotate-180': sortSelection, 'transition-transform duration-200': true }"
                            width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path :class="[sortSelection ? 'fill-black' : ' fill-white']"
                                d="M13.0694 5.15687L8.38444 9.76787C8.28221 9.86899 8.14423 9.92572 8.00044 9.92572C7.85664 9.92572 7.71866 9.86899 7.61644 9.76787L2.93144 5.15787C2.82858 5.05679 2.69014 5.00015 2.54594 5.00015C2.40173 5.00015 2.26329 5.05679 2.16044 5.15787C2.10979 5.20724 2.06954 5.26626 2.04205 5.33144C2.01457 5.39661 2.00041 5.46663 2.00041 5.53737C2.00041 5.6081 2.01457 5.67812 2.04205 5.7433C2.06954 5.80847 2.10979 5.86749 2.16044 5.91687L6.84444 10.5269C7.15296 10.8298 7.56806 10.9995 8.00044 10.9995C8.43281 10.9995 8.84791 10.8298 9.15644 10.5269L13.8404 5.91687C13.8912 5.86747 13.9316 5.8084 13.9592 5.74313C13.9868 5.67786 14.001 5.60772 14.001 5.53687C14.001 5.46601 13.9868 5.39588 13.9592 5.33061C13.9316 5.26534 13.8912 5.20626 13.8404 5.15687C13.7376 5.05579 13.5991 4.99915 13.4549 4.99915C13.3107 4.99915 13.1723 5.05579 13.0694 5.15687Z" />
                        </svg>
                        <div v-if="sortSelection"
                            class="w-full absolute top-[60px] right-0 z-10 bg-m_black-500 py-8 px-10 flex flex-col space-y-6 rounded-md">
                            <div v-for="item in sortCategories" :key="item.id" @click="activeSort = item.name" class="font-sf_pro text-base hover:text-m_yellow-100 duration-300"
                                :class="[activeSort == item.name ? 'text-m_yellow-100' : 'text-white']">{{ item.name }}</div>
                        </div>
                    </div>
                </div>
                <div class="w-full grid xl:grid-cols-4 md:grid-cols-3 mobile:grid-cols-2 grid-cols-1 gap-6 mb-40">
                    <router-link v-for="item in courses" :key="item.id" :to="`/course/detail/${item.id}`">
                        <Card :course="item" />
                    </router-link>
                </div>
            </div>
            <Footer />
        </div>
    </div>
</template>

<script>
import api from '@/api/index';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Card from '@/components/Card.vue';
export default {
    name: "Search",
    components: {
        Navbar,
        Footer,
        Card
    },
    data() {
        return {
            count: 0,
            courses: null,
            searchQuery: null,
            sortSelection: false,
            filterSelection: false,
            activeSort: 'Актуальные',
            sortCategories: [
                { id: 1, name: 'Актуальные' },
                { id: 2, name: 'Сначала новые' },
                { id: 3, name: 'Самый высокий рейтинг' },
                { id: 4, name: 'Цена: по возрастанию' },
                { id: 5, name: 'Цена: по убыванию' },
                { id: 6, name: 'Алфавит: от А до Я' },
            ]
        }
    },
    created() {
        this.getCourses()
    },
    methods: {
        async getCourses() {
            this.searchQuery = this.$route.query.name
            const response = await api.get(`/courses/?search=${this.searchQuery}`)
            this.courses = response.data.results
            this.count = response.data.count
        },
        openSort() {
            this.sortSelection = !this.sortSelection
        },
        openFilter() {
            this.filterSelection = !this.filterSelection
        },
    },
    watch: {
        $route() {
            this.getCourses()
        }
    }
}
</script>