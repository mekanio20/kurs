<template>
    <div class="w-full h-full relative overflow-hidden">
        <div class="absolute left-0 top-0">
            <svg width="634" height="765" viewBox="0 0 634 765" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="0.5" cy="-153.5" rx="633.5" ry="918.5" fill="url(#paint0_radial_471_1430)"
                    fill-opacity="0.2" />
                <defs>
                    <radialGradient id="paint0_radial_471_1430" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(0.5 -153.5) rotate(90) scale(918.5 633.5)">
                        <stop stop-color="#FFC300" />
                        <stop offset="1" stop-color="#181C27" stop-opacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
        <div class="absolute left-0 bottom-0">
            <svg width="623" height="636" viewBox="0 0 623 636" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="-10.5" cy="918.5" rx="633.5" ry="918.5" fill="url(#paint0_radial_471_1432)"
                    fill-opacity="0.23" />
                <defs>
                    <radialGradient id="paint0_radial_471_1432" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(-10.5 918.5) rotate(90) scale(918.5 633.5)">
                        <stop stop-color="#FFC300" />
                        <stop offset="1" stop-color="#181C27" stop-opacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
        <div class="absolute right-0 bottom-0">
            <svg width="601" height="803" viewBox="0 0 601 803" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="633.5" cy="918.5" rx="633.5" ry="918.5" fill="url(#paint0_radial_471_1431)"
                    fill-opacity="0.18" />
                <defs>
                    <radialGradient id="paint0_radial_471_1431" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(633.5 918.5) rotate(90) scale(918.5 633.5)">
                        <stop stop-color="#FFC300" />
                        <stop offset="1" stop-color="#181C27" stop-opacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
        <div class="w-full relative z-50">
            <div class="container bg-transparent flex lg:items-start items-center">
                <form @submit.prevent="handleRegister"
                    class="lg:flex-1 w-full flex flex-col items-center space-y-4 mt-40 lg:mr-40 lg:mx-0 sm:mx-40">
                    <h1 class="font-sf_pro font-bold lg:text-4xl sm:text-3xl text-2xl text-white mb-10">
                        Зарегистрироваться</h1>
                    <input type="text" v-model="fullName"
                        class="w-full bg-m_black-500 placeholder:text-m_gray-100 text-m_gray-100 px-8 py-4 lg:text-lg sm:text-base text-sm rounded-lg outline-none"
                        placeholder="Полное имя">
                    <input type="email" v-model="email"
                        class="w-full bg-m_black-500 placeholder:text-m_gray-100 text-m_gray-100 px-8 py-4 lg:text-lg sm:text-base text-sm rounded-lg outline-none"
                        placeholder="Электронная почта">
                    <input type="password" v-model="password"
                        class="w-full bg-m_black-500 placeholder:text-m_gray-100 text-m_gray-100 px-8 py-4 lg:text-lg sm:text-base text-sm rounded-lg outline-none"
                        placeholder="Пароль">
                    <p class="w-full font-sf_pro font-normal text-sm text-yellow-600 opacity-80 pt-2"> - Пароль должен
                        содержать не
                        менее 8
                        символов</p>
                    <div class="w-full flex items-center space-x-4 select-none">
                        <label class="relative inline-flex items-center cursor-pointer ml-2">
                            <input type="checkbox" v-model="checked" class="sr-only peer" />
                            <div
                                class="w-5 h-5 bg-black border-[1px] border-m_black-400 rounded-sm flex items-center justify-center transition-all peer-checked:bg-yellow-500 peer-checked:border-yellow-500 peer-checked:text-white peer-checked:scale-110">
                                <svg v-if="checked" class="w-4 h-4" xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M16.293 5.293a1 1 0 0 0-1.414 0L8 11.586 5.121 8.707a1 1 0 0 0-1.415 1.414l3.535 3.536a1 1 0 0 0 1.415 0l8-8a1 1 0 0 0 0-1.414z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                        </label>
                        <p class="font-sf_pro font-normal text-sm text-m_black-400 w-4/5 inline-block ">
                            Продолжая, вы соглашаетесь
                            с нашими условиями и политикой конфиденциальности.</p>

                    </div>
                    <button :disabled="!fullName || !email || !password || userLoading" type="submit"
                        class="w-full bg-m_yellow-200 text-center py-4 rounded-lg font-sf_pro font-bold sm:text-base text-sm !mt-10">
                        <span v-if="!userLoading">
                            Создать аккаунт
                        </span>
                        <span v-else>
                            <Spinner />
                        </span>
                    </button>
                    <div
                        class="bg-transparent flex items-center space-x-1 font-sf_pro font-normal sm:text-base text-sm !mt-28">
                        <p class="text-m_gray-100">Уже есть аккаунт?</p>
                        <router-link to="/login" class="text-m_yellow-200 hover:underline">Войти</router-link>
                    </div>
                </form>
                <div class="flex-1 lg:flex hidden flex-col items-center space-y-6">
                    <div class="w-[500px] h-[600px] overflow-y-scroll no-scrollbar relative">
                        <div class="columns-2 gap-8 animate-scroll">
                            <div v-for="(item, index) in galleryItems" :key="index" class="w-full mb-5 overflow-hidden">
                                <img class="w-full object-cover mb-3 rounded-xl" :src="item.img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Spinner from '@/components/base/Spinner.vue';
import { useUserStore } from "@/store/user.store";
import { mapActions, mapState } from 'pinia';
export default {
    name: "Register",
    components: {
        Spinner
    },
    data() {
        return {
            email: '',
            password: '',
            fullName: '',
            checked: false,
            galleryItems: [
                { id: 1, img: '/imgs/home-1.webp' },
                { id: 2, img: '/imgs/home-2.webp' },
                { id: 3, img: '/imgs/home-3.webp' },
                { id: 4, img: '/imgs/home-4.webp' },
                { id: 5, img: '/imgs/home-1.webp' },
                { id: 6, img: '/imgs/home-2.webp' },
                { id: 7, img: '/imgs/home-3.webp' },
                { id: 8, img: '/imgs/home-1.webp' },
                { id: 9, img: '/imgs/home-2.webp' },
                { id: 10, img: '/imgs/home-3.webp' },
                { id: 11, img: '/imgs/home-4.webp' },
                { id: 12, img: '/imgs/home-3.webp' },
            ],
        }
    },
    computed: {
        ...mapState(useUserStore, {
            userLoading: "loading",
        }),
    },
    methods: {
        ...mapActions(useUserStore, ['registerEmail']),
        async handleRegister() {
            await this.registerEmail({
                email: this.email,
                password: this.password,
                fullName: this.fullName
            });
        },
    },
}
</script>