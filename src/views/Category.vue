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
                    {{ categoryName }}
                </h2>
                <p class="font-sf_pro font-normal lg:text-xl sm:text-lg text-base text-white my-5">25, 785 результатов
                </p>
                <div
                    class="w-full flex sm:flex-row flex-col sm:items-center sm:space-y-0 space-y-4 items-start sm:space-x-6 sm:my-20 my-10 select-none">
                    <!-- <div @click="openFilter"
                        class="flex items-center space-x-6 px-8 py-2 font-sf_pro font-medium text-xl rounded-md cursor-pointer"
                        :class="[filterSelection ? 'bg-m_yellow-200 text-black' : 'text-white border border-m_gray-100']">
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path :class="[filterSelection ? 'stroke-black' : ' stroke-white']"
                                d="M20.3659 11.501H8.52568M4.34639 11.501H2.63672M4.34639 11.501C4.34639 10.9469 4.56649 10.4155 4.95829 10.0237C5.35008 9.63189 5.88147 9.41179 6.43555 9.41179C6.98963 9.41179 7.52102 9.63189 7.91282 10.0237C8.30461 10.4155 8.52472 10.9469 8.52472 11.501C8.52472 12.055 8.30461 12.5864 7.91282 12.9782C7.52102 13.37 6.98963 13.5901 6.43555 13.5901C5.88147 13.5901 5.35008 13.37 4.95829 12.9782C4.56649 12.5864 4.34639 12.055 4.34639 11.501ZM20.3659 17.8327H14.8574M14.8574 17.8327C14.8574 18.3869 14.6367 18.9189 14.2449 19.3107C13.853 19.7026 13.3215 19.9228 12.7673 19.9228C12.2132 19.9228 11.6818 19.7017 11.29 19.3099C10.8982 18.9181 10.6781 18.3867 10.6781 17.8327M14.8574 17.8327C14.8574 17.2785 14.6367 16.7474 14.2449 16.3555C13.853 15.9637 13.3215 15.7435 12.7673 15.7435C12.2132 15.7435 11.6818 15.9636 11.29 16.3554C10.8982 16.7472 10.6781 17.2786 10.6781 17.8327M10.6781 17.8327H2.63672M20.3659 5.16924H17.3903M13.211 5.16924H2.63672M13.211 5.16924C13.211 4.61516 13.4311 4.08378 13.8229 3.69198C14.2147 3.30019 14.7461 3.08008 15.3001 3.08008C15.5745 3.08008 15.8462 3.13412 16.0996 3.23911C16.3531 3.3441 16.5834 3.49798 16.7774 3.69198C16.9714 3.88598 17.1253 4.11629 17.2303 4.36976C17.3353 4.62322 17.3893 4.89489 17.3893 5.16924C17.3893 5.4436 17.3353 5.71526 17.2303 5.96873C17.1253 6.2222 16.9714 6.45251 16.7774 6.64651C16.5834 6.84051 16.3531 6.99439 16.0996 7.09938C15.8462 7.20437 15.5745 7.25841 15.3001 7.25841C14.7461 7.25841 14.2147 7.0383 13.8229 6.64651C13.4311 6.25471 13.211 5.72333 13.211 5.16924Z"
                                stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                        </svg>
                        <div class="font-sf_pro font-medium text-base text-white">Filters</div>
                    </div> -->
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
    name: "Category",
    components: {
        Navbar,
        Footer,
        Card
    },
    data() {
        return {
            courses: null,
            categoryName: null,
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
        this.getCategoryName()
    },
    methods: {
        async getCourses() {
            const response = await api.get(`/courses/?categories=${this.$route.params.id}`)
            this.courses = response.data.results
        },
        async getCategoryName() {
            const response = await api.get(`/categories/${this.$route.params.id}`)
            this.categoryName = response.data.name
        },
        openSort() {
            this.sortSelection = !this.sortSelection
        },
        openFilter() {
            this.filterSelection = !this.filterSelection
        },
    }
}
</script>