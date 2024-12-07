<template>
    <div class="fixed w-full top-0 z-50 mx-auto bg-black select-none no-scrollbar">
        <div class="container lg:py-10 py-6 flex items-center justify-between">
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
                    <svg viewBox="0 0 106 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.79183 1.26896C4.24284 2.10404 1.84991 4.40053 0.913546 6.9058C0.133243 8.99352 0.289304 12.4904 1.25168 14.3694C2.24006 16.2744 3.85269 17.8141 5.82946 18.7536C7.33804 19.4582 7.83223 19.5626 9.67895 19.5365C11.4736 19.5365 12.0459 19.406 13.5024 18.7275C16.8837 17.1617 18.6784 14.3955 18.8345 10.5854C18.9646 7.74089 18.3403 5.94023 16.5456 3.98299C14.7249 1.97356 12.8522 1.11238 10.0431 1.00799C8.69057 0.955799 7.41607 1.06018 6.79183 1.26896ZM12.9562 5.54878C17.508 8.83694 15.2451 15.9091 9.65294 15.9091C4.55496 15.9091 2.00597 9.93299 5.51733 6.30558C6.89587 4.89637 7.7542 4.55711 9.96506 4.6615C11.5777 4.71369 11.9678 4.84418 12.9562 5.54878Z"
                            fill="white" />
                        <path
                            d="M74.5223 1.53015C70.4907 3.22642 68.3579 6.56677 68.618 10.7944C68.774 13.2736 69.4243 14.8133 71.0629 16.5878C73.846 19.5628 78.2417 20.3979 81.9611 18.6494C84.4841 17.449 86.9811 14.1087 87.0591 11.8122C87.0591 11.499 87.2672 11.8905 87.5273 12.7255C88.1516 14.6306 88.8538 15.7527 90.2584 17.0576C91.7409 18.4146 93.0675 19.0931 94.9922 19.4323C102.249 20.7633 108.127 13.2214 105.11 6.48848C103.68 3.30471 100.688 1.21699 97.2551 0.982119C92.7553 0.695057 89.192 3.09594 87.6574 7.48015L87.0851 9.04594L86.9031 8.08037C86.617 6.48848 85.6286 4.79221 84.198 3.46129C82.3253 1.71282 80.8947 1.1126 78.1897 1.00821C76.317 0.929926 75.7447 1.00821 74.5223 1.53015ZM81.1028 5.49681C81.8311 6.01874 82.4813 6.77554 82.9495 7.68892C84.172 10.1159 83.7819 12.3602 81.8571 14.2652C79.7243 16.3269 77.0712 16.5878 74.6263 14.9437C71.0109 12.4907 71.4531 7.19308 75.4586 5.00098C76.0308 4.68782 76.7591 4.58344 78.1117 4.66172C79.6983 4.71392 80.1404 4.8444 81.1028 5.49681ZM99.726 5.41852C102.639 7.37576 103.107 11.5512 100.714 14.1869C99.0498 16.0398 95.9286 16.4834 93.7177 15.2047C91.923 14.1348 91.0907 12.7516 90.9867 10.5856C90.8566 8.62839 91.3508 7.32357 92.6773 6.12313C94.0298 4.8444 94.8101 4.58344 96.8129 4.63563C98.2955 4.71392 98.8677 4.8444 99.726 5.41852Z"
                            fill="white" />
                        <path
                            d="M60.6848 1.37349C60.2166 1.84323 60.6068 2.18248 61.8032 2.33906L63.1037 2.52174V10.5595C63.1037 17.3967 63.0517 18.6494 62.7136 18.9364C62.5055 19.1191 62.3234 19.5106 62.3234 19.7976C62.3234 20.2935 62.4275 20.3195 64.4823 20.163C65.6527 20.0586 67.0052 19.9803 67.4734 19.9803C68.1237 19.9803 68.3057 19.8759 68.3057 19.4584C68.3057 19.0669 68.1237 18.9364 67.5515 18.9364H66.8232L66.6411 15.2046C66.5631 13.1691 66.407 9.17634 66.329 6.33183L66.1469 1.19082H63.4939C62.0373 1.19082 60.7628 1.26911 60.6848 1.37349Z"
                            fill="white" />
                        <path
                            d="M41.2551 5.75753L44.2462 8.75863H36.2351H28.25V10.5854V12.4121H36.1831C40.5528 12.4121 44.1162 12.4904 44.1162 12.5948C44.1162 12.6992 42.7896 14.1084 41.203 15.7264L38.2639 18.6753H40.8389H43.4399L47.4194 14.7086L51.399 10.742L47.4455 6.7492L43.4659 2.75643H40.8649H38.2639L41.2551 5.75753Z"
                            fill="white" />
                    </svg>
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
                <form @submit.prevent="performSearch" class="w-[500px] mx-10 lg:block hidden">
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
                    <router-link to="/category"
                        class=" font-sf_pro font-medium text-white text-lg">Маркетинг</router-link>
                    <router-link to="/category" class=" font-sf_pro font-medium text-white text-lg">Искусство и
                        дизайн</router-link>
                    <router-link to="/category" class=" font-sf_pro font-medium text-white text-lg">Бизнес и
                        предпринимательство</router-link>
                    <router-link to="/category" class=" font-sf_pro font-medium text-white text-lg">Сообщество и
                        правительство</router-link>
                    <router-link to="/category" class=" font-sf_pro font-medium text-white text-lg">Музыка</router-link>
                </div>
                <div class="flex flex-col space-y-8">
                    <router-link to="/category"
                        class=" font-sf_pro font-medium text-white text-lg">Маркетинг</router-link>
                    <router-link to="/category" class=" font-sf_pro font-medium text-white text-lg">Искусство и
                        дизайн</router-link>
                    <router-link to="/category" class=" font-sf_pro font-medium text-white text-lg">Бизнес и
                        предпринимательство</router-link>
                    <router-link to="/category" class=" font-sf_pro font-medium text-white text-lg">Сообщество и
                        правительство</router-link>
                </div>
                <div class="flex flex-col space-y-8">
                    <router-link to="/category"
                        class=" font-sf_pro font-medium text-white text-lg">Маркетинг</router-link>
                    <router-link to="/category" class=" font-sf_pro font-medium text-white text-lg">Искусство и
                        дизайн</router-link>
                    <router-link to="/category" class=" font-sf_pro font-medium text-white text-lg">Бизнес и
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
export default {
    name: "Navbar",
    data() {
        return {
            isBurger: false,
            rotate: false,
            searchQuery: null,
            hasNotification: true,
            cats: [
                { id: 1, name: 'Маркетинг', url: '#' },
                { id: 2, name: 'Искусство и дизайн', url: '#' },
                { id: 3, name: 'Бизнес и предпринимательство', url: '#' },
                { id: 4, name: 'Сообщество и правительство', url: '#' },
                { id: 5, name: 'Сообщество и правительство', url: '#' },
                { id: 6, name: 'Музыка', url: '#' },
                { id: 7, name: 'Кино и ТВ', url: '#' },
                { id: 8, name: 'Еда и напитки', url: '#' },
                { id: 9, name: 'Игры и цифровые медиа', url: '#' },
                { id: 10, name: 'Актерское мастерство и искусство', url: '#' },
                { id: 11, name: 'Здоровье и благополучие', url: '#' },
                { id: 12, name: 'Наука и технологии', url: '#' },
                { id: 13, name: 'Спорт и легкая атлетика', url: '#' },
            ],
        }
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