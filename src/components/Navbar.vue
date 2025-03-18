<template>
    <nav class="fixed w-full top-0 z-50 mx-auto bg-black select-none">
        <div class="container p-6 flex items-center justify-between">
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
                            <searchIcon />
                        </div>
                        <input type="text" v-model="searchQuery" @keydown.enter="performSearch"
                            class="block w-full p-4 pr-16 pl-6 md:text-sm text-xs text-m_gray-100 border-none rounded-lg placeholder:text-m_gray-100 bg-m_black-100 outline-none"
                            placeholder="Search for courses" required />
                        <!-- <div v-if="searchQuery"
                            class="absolute top-16 left-0 right-0 z-10 bg-m_black-500 px-10 py-6 rounded-lg flex flex-col space-y-6">
                            <div class="flex items-start space-x-6">
                                <searchIcon />
                                <div class="font-sf_pro font-medium text-base leading-5 text-white">Do Things, Tell
                                    People: The Power of Personal Branding</div>
                            </div>
                        </div> -->
                    </div>
                </form>
            </div>
            <div v-if="isRegistered" class="flex items-center space-x-8">
                <router-link to="/notification"
                    class="font-sf_pro font-bold lg:text-lg text-base text-white text-nowrap sm:block hidden">
                    Мое обучение
                </router-link>
                <router-link to="/dashboard/teacher/chat" class="text-white relative">
                    <commentIcon />
                    <div v-if="hasComment" class="absolute top-0 right-1 w-2 h-2 bg-m_red-200 rounded-full"></div>
                </router-link>
                <router-link :to="`/profile`" class="w-[40px] h-[40px]">
                    <img class="w-full h-full object-cover rounded-full" :src="user?.avatar || '/imgs/person6.png'">
                </router-link>
            </div>
            <div v-else class="flex items-center space-x-8">
                <router-link to="/login"
                    class="font-sf_pro font-bold lg:text-lg text-base text-white cursor-pointer text-nowrap sm:block hidden">
                    Войти
                </router-link>
                <router-link to="/register"
                    class="px-8 py-2 rounded-lg bg-m_yellow-100 font-sf_pro font-bold lg:text-lg text-base cursor-pointer text-nowrap">
                    Регистрация
                </router-link>
            </div>
        </div>
        <!-- All category -->
        <div v-if="rotate" class="w-full bg-black container">
            <div class="w-full grid grid-flow-col grid-rows-4 gap-4 pt-4 pb-8">
                <router-link v-for="item in cats" :key="item.id" :to="`/category/${item.id}`"
                    class=" font-sf_pro font-medium text-white text-lg py-2 hover:text-m_yellow-100 duration-300">{{ item.name }}
                </router-link>
            </div>
        </div>
    </nav>
    <!-- Mobile -->
    <nav class="select-none w-full fixed z-20 top-0 overflow-hidden duration-200 bg-black"
        :class="[isBurger ? 'h-full' : 'h-0']">
        <div class="w-full h-full mt-28 px-4">
            <!-- Search -->
            <div class="relative">
                <svg class="absolute left-6 top-1/2 -translate-y-1/2" width="18" height="18" viewBox="0 0 24 24"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="7" stroke="white" stroke-width="2" />
                    <path d="M20 20L17 17" stroke="white" stroke-width="2" stroke-linecap="round" />
                </svg>
                <form @submit.prevent="performSearch">
                    <input v-model="searchQuery"
                        class="w-full py-5 pl-14 pr-8 outline-none rounded font-inter font-normal text-sm placeholder:text-white text-white bg-m_black-100"
                        type="text" placeholder="Search" />
                </form>
            </div>
            <!-- All category -->
            <div class="w-full flex flex-col items-start overflow-y-scroll scrollbar space-y-6 px-1 mt-10 max-h-[50vh]">
                <router-link v-for="item in cats" :key="item.id" :to="`/category/${item.id}`"
                    class="text-lg text-white font-sf_pro hover:font-bold hover:text-m_yellow-100 duration-300 cursor-pointer pr-4">
                    {{ item.name }}
                </router-link>
            </div>
            <div class="my-10 flex flex-col space-y-4">
                <router-link v-if="isRegistered" to="/notification"
                    class="font-sf_pro font-bold lg:text-lg text-base text-white bg-m_black-400 w-fit py-3 px-6 rounded-lg text-nowrap sm:hidden block">
                    Мое обучение
                </router-link>
                <router-link v-else to="/login"
                    class="font-sf_pro font-bold lg:text-lg text-base text-white bg-m_black-400 w-fit py-3 px-6 rounded-lg cursor-pointer text-nowrap sm:hidden block">
                    Sign in
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script>
import api from '@/api/index';
import logoIcon from '@/components/icons/logo.vue';
import searchIcon from '@/components/icons/search.vue';
import commentIcon from '@/components/icons/comment.vue';
import { useUserStore } from "@/store/user.store";
import { mapState, mapActions } from 'pinia';
export default {
    name: "Navbar",
    data() {
        return {
            rotate: false,
            isBurger: false,
            searchQuery: null,
            hasComment: false,
            cats: [],
        }
    },
    components: {
        logoIcon,
        searchIcon,
        commentIcon
    },
    created() {
        this.getCategories()
    },
    methods: {
        async getCategories() {
            const response = await api.get('/categories/')
            this.cats = await response.data.results
        },
        performSearch() {
            this.$router.push({
                name: 'Search',
                query: {
                    name: this.searchQuery
                }
            })
        }
    },
    computed: {
        ...mapState(useUserStore, ['user', 'isRegistered']),
        openCategory() {
            this.rotate = !this.rotate
        },
        openBurger() {
            this.isBurger = !this.isBurger
        }
    },
    props: {
        name: {
            type: String
        }
    },
    watch: {
        $route() {
            this.rotate = false
            this.isBurger = false
        }
    }
}
</script>

<style scoped>
.scrollbar {
    scrollbar-width: thin;
    scrollbar-color: white transparent;
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