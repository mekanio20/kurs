<template>
    <div class="fixed w-full top-0 z-50 mx-auto bg-black select-none no-scrollbar">
        <div class="container py-6 flex items-center justify-between">
            <div class="w-full flex items-center justify-start">
                <!-- Burger -->
                <div @click="openBurger" class="cursor-pointer lg:hidden block mr-5">
                    <div class="w-10 flex flex-col justify-between space-y-2">
                        <div class="h-0.5 bg-white duration-500"
                            :class="[isBurger ? 'w-6 transform translate-y-[10px] -rotate-45' : 'w-6']"></div>
                        <div class="w-6 h-0.5 bg-white duration-500" :class="[isBurger ? 'opacity-0' : '']"></div>
                        <div class="h-0.5 bg-white duration-500"
                            :class="[isBurger ? 'w-6 transform translate-y-[-10px] rotate-45' : 'w-6']"></div>
                    </div>
                </div>
                <!-- Logo -->
                <router-link to="/" class="lg:w-24 w-20 cursor-pointer mr-10">
                    <logoIcon />
                </router-link>
                <!-- Category -->
                <div @click="openCategory" class="lg:flex hidden items-center space-x-3 cursor-pointer">
                    <div class="font-sf_pro font-bold text-lg text-white">
                        Категории
                    </div>
                    <svg class="w-[14px]" :class="{ 'rotate-180': rotate, 'transition-transform duration-200': true }"
                        viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.0694 5.15687L8.38444 9.76787C8.28221 9.86899 8.14423 9.92572 8.00044 9.92572C7.85664 9.92572 7.71866 9.86899 7.61644 9.76787L2.93144 5.15787C2.82858 5.05679 2.69014 5.00015 2.54594 5.00015C2.40173 5.00015 2.26329 5.05679 2.16044 5.15787C2.10979 5.20724 2.06954 5.26626 2.04205 5.33144C2.01457 5.39661 2.00041 5.46663 2.00041 5.53737C2.00041 5.6081 2.01457 5.67812 2.04205 5.7433C2.06954 5.80847 2.10979 5.86749 2.16044 5.91687L6.84444 10.5269C7.15296 10.8298 7.56806 10.9995 8.00044 10.9995C8.43281 10.9995 8.84791 10.8298 9.15644 10.5269L13.8404 5.91687C13.8912 5.86747 13.9316 5.8084 13.9592 5.74313C13.9868 5.67786 14.001 5.60772 14.001 5.53687C14.001 5.46601 13.9868 5.39588 13.9592 5.33061C13.9316 5.26534 13.8912 5.20626 13.8404 5.15687C13.7376 5.05579 13.5991 4.99915 13.4549 4.99915C13.3107 4.99915 13.1723 5.05579 13.0694 5.15687Z"
                            fill="white" />
                    </svg>
                </div>
                <!-- Search -->
                <form @submit.prevent="performSearch" class="w-[500px] ml-20 lg:block hidden">
                    <div class="relative">
                        <div class="absolute inset-y-0 end-6 flex items-center pointer-events-none">
                            <svg class="md:w-5 w-4 text-m_gray-100" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text" v-model="searchQuery" @keydown.enter="performSearch"
                            class="block w-full p-4 pr-16 pl-6 md:text-sm text-xs text-m_gray-100 border-none rounded-lg placeholder:text-m_gray-100 bg-m_black-100 outline-none"
                            placeholder="Search for courses, teachers, skills" required />
                        <div v-if="searchQuery"
                            class="absolute top-16 left-0 right-0 z-10 bg-m_black-500 px-10 py-6 rounded-lg flex flex-col space-y-6">
                            <div class="flex items-start space-x-6">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z"
                                        stroke="#B3B3B3" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M15.7498 15.7498L12.4873 12.4873" stroke="#B3B3B3" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <div class="font-sf_pro font-medium text-base leading-5 text-white">Do Things, Tell
                                    People: The Power of Personal Branding</div>
                            </div>
                            <div class="flex items-start space-x-6">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z"
                                        stroke="#B3B3B3" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M15.7498 15.7498L12.4873 12.4873" stroke="#B3B3B3" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <div class="font-sf_pro font-medium text-base leading-5 text-white">Daphne Daniels</div>
                            </div>
                            <div class="flex items-start space-x-6">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z"
                                        stroke="#B3B3B3" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M15.7498 15.7498L12.4873 12.4873" stroke="#B3B3B3" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <div class="font-sf_pro font-medium text-base leading-5 text-white">Do Things, Tell
                                    People: The Personal Branding</div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div v-if="isRegistered" class="flex items-center space-x-8">
                <router-link to="/notification" class="font-sf_pro font-bold lg:text-lg text-base text-white text-nowrap sm:block hidden">
                    Мое обучение
                </router-link>
                <router-link to="/notification" class="text-white relative">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18.75 8.3335C18.75 6.67589 18.0915 5.08618 16.9194 3.91408C15.7473 2.74198 14.1576 2.0835 12.5 2.0835C10.8424 2.0835 9.25268 2.74198 8.08058 3.91408C6.90848 5.08618 6.25 6.67589 6.25 8.3335C6.25 15.6252 3.125 17.7085 3.125 17.7085H21.875C21.875 17.7085 18.75 15.6252 18.75 8.3335Z"
                            stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M14.3024 21.875C14.1193 22.1907 13.8564 22.4528 13.5401 22.6349C13.2239 22.8171 12.8653 22.913 12.5003 22.913C12.1353 22.913 11.7768 22.8171 11.4605 22.6349C11.1442 22.4528 10.8814 22.1907 10.6982 21.875"
                            stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div v-if="hasNotification" class="absolute top-0 right-1 w-2 h-2 bg-m_red-200 rounded-full"></div>
                </router-link>
                <router-link to="/profile" class="w-[40px]">
                    <img class="w-full h-full object-cover rounded-l-full" src="/imgs/person4.png">
                </router-link>
            </div>
            <div v-else class="flex items-center space-x-8">
                <router-link to="/login"
                    class="font-sf_pro font-bold lg:text-lg text-base text-white cursor-pointer text-nowrap sm:block hidden">Sign
                    in</router-link>
                <router-link to="/register"
                    class="px-8 py-2 rounded-lg bg-m_yellow-100 font-sf_pro font-bold lg:text-lg text-base cursor-pointer text-nowrap">Sign
                    Up</router-link>
            </div>
        </div>
        <!-- All category -->
        <div v-if="rotate" class="w-full bg-black container">
            <div class="w-full flex items-start justify-between pt-5 pb-10">
                <div class="flex flex-col space-y-8">
                    <router-link to="/category/1"
                        class=" font-sf_pro font-medium text-white text-lg">Маркетинг</router-link>
                    <router-link to="/category/1" class=" font-sf_pro font-medium text-white text-lg">Искусство и
                        дизайн</router-link>
                    <router-link to="/category/1" class=" font-sf_pro font-medium text-white text-lg">Бизнес и
                        предпринимательство</router-link>
                    <router-link to="/category/1" class=" font-sf_pro font-medium text-white text-lg">Сообщество и
                        правительство</router-link>
                    <router-link to="/category/1" class=" font-sf_pro font-medium text-white text-lg">Музыка</router-link>
                </div>
                <div class="flex flex-col space-y-8">
                    <router-link to="/category/1"
                        class=" font-sf_pro font-medium text-white text-lg">Маркетинг</router-link>
                    <router-link to="/category/1" class=" font-sf_pro font-medium text-white text-lg">Искусство и
                        дизайн</router-link>
                    <router-link to="/category/1" class=" font-sf_pro font-medium text-white text-lg">Бизнес и
                        предпринимательство</router-link>
                    <router-link to="/category/1" class=" font-sf_pro font-medium text-white text-lg">Сообщество и
                        правительство</router-link>
                </div>
                <div class="flex flex-col space-y-8">
                    <router-link to="/category/1"
                        class=" font-sf_pro font-medium text-white text-lg">Маркетинг</router-link>
                    <router-link to="/category/1" class=" font-sf_pro font-medium text-white text-lg">Искусство и
                        дизайн</router-link>
                    <router-link to="/category/1" class=" font-sf_pro font-medium text-white text-lg">Бизнес и
                        предпринимательство</router-link>
                </div>
            </div>
        </div>
    </div>
    <!-- Mobile -->
    <div class="select-none w-full fixed z-20 top-0 overflow-hidden duration-200 bg-black"
        :class="[isBurger ? 'h-full' : 'h-0']">
        <div class="w-full h-full mt-28 px-4">
            <!-- Search -->
            <div class="relative">
                <svg class="absolute left-8 top-1/2 -translate-y-1/2" width="18" height="18" viewBox="0 0 24 24"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="7" stroke="white" stroke-width="2" />
                    <path d="M20 20L17 17" stroke="white" stroke-width="2" stroke-linecap="round" />
                </svg>
                <form @submit.prevent="performSearch">
                    <input v-model="searchQuery"
                        class="w-full py-6 pl-16 pr-12 outline-none rounded font-inter font-normal text-sm placeholder:text-white text-white bg-m_black-100"
                        type="text" placeholder="Search" />
                </form>
            </div>
            <!-- All category -->
            <div class="w-full flex flex-col items-start overflow-y-scroll scrollbar space-y-6 px-1 mt-10 max-h-[50vh]">
                <router-link v-for="item in cats" :key="item.id" :to="item.url"
                    class="text-lg text-white font-sf_pro hover:font-bold duration-500 cursor-pointer pr-4">
                    {{ item.name }}
                </router-link>
            </div>
            <div class="my-10 flex flex-col space-y-4">
                <router-link v-if="isRegistered" to="/notification" class="font-sf_pro font-bold lg:text-lg text-base text-white bg-m_black-400 w-fit py-3 px-6 rounded-lg text-nowrap sm:hidden block">
                    Мое обучение
                </router-link>
                <router-link v-else to="/login"
                    class="font-sf_pro font-bold lg:text-lg text-base text-white bg-m_black-400 w-fit py-3 px-6 rounded-lg cursor-pointer text-nowrap sm:hidden block">
                    Sign in
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import logoIcon from '@/components/icons/logo.vue';
export default {
    name: "Navbar",
    data() {
        return {
            isBurger: false,
            rotate: false,
            searchQuery: null,
            hasNotification: false,
            cats: [
                { id: 1, name: 'Маркетинг', url: '/category' },
                { id: 2, name: 'Искусство и дизайн', url: '/category' },
                { id: 3, name: 'Бизнес и предпринимательство', url: '/category' },
                { id: 4, name: 'Сообщество и правительство', url: '/category' },
                { id: 5, name: 'Сообщество и правительство', url: '/category' },
                { id: 6, name: 'Музыка', url: '/category' },
                { id: 7, name: 'Кино и ТВ', url: '/category' },
                { id: 8, name: 'Еда и напитки', url: '/category' },
                { id: 9, name: 'Игры и цифровые медиа', url: '/category' },
                { id: 10, name: 'Актерское мастерство и искусство', url: '/category' },
                { id: 11, name: 'Здоровье и благополучие', url: '/category' },
                { id: 12, name: 'Наука и технологии', url: '/category' },
                { id: 13, name: 'Спорт и легкая атлетика', url: '/category' },
            ],
        }
    },
    components: {
        logoIcon
    },
    computed: {
        ...mapState(['isRegistered']),
    },
    methods: {
        performSearch() { },
        openBurger() {
            this.isBurger = !this.isBurger
        },
        openCategory() {
            this.rotate = !this.rotate
        }
    },
    props: {
        name: {
            type: String
        }
    }
}
</script>

<style scoped>
.scrollbar {
    scrollbar-width: thin;
    /* Firefox */
    scrollbar-color: white transparent;
    /* Firefox */
}

.scrollbar::-webkit-scrollbar {
    width: 8px;
}

.scrollbar::-webkit-scrollbar-track {
    background: transparent;
}

.scrollbar::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 8px;
}
</style>