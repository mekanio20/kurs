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
                <form @submit.prevent="handleLogin"
                    class="lg:flex-1 w-full flex flex-col items-center space-y-4 mt-40 lg:mr-40 lg:mx-0 sm:mx-40">
                    <h1 class="font-sf_pro font-bold lg:text-4xl sm:text-3xl text-2xl text-white mb-10">Авторизоваться
                    </h1>
                    <input type="email" v-model="email"
                        class="w-full bg-m_black-500 placeholder:text-m_gray-100 text-m_gray-100 px-8 py-4 lg:text-lg sm:text-base text-sm rounded-lg outline-none"
                        placeholder="Электронная почта">
                    <input type="password" v-model="password"
                        class="w-full bg-m_black-500 placeholder:text-m_gray-100 text-m_gray-100 px-8 py-4 lg:text-lg sm:text-base text-sm rounded-lg outline-none"
                        placeholder="Пароль">
                    <router-link to="/reset"
                        class="font-sf_pro font-normal lg:text-base text-sm text-m_black-400 hover:underline self-start">Забыли
                        пароль?</router-link>
                    <button :disabled="!email || !password || userLoading"
                        class="w-full bg-m_yellow-200 text-center py-4 rounded-lg font-sf_pro font-bold lg:text-lg sm:text-base text-sm !mt-10">
                        <span v-if="!userLoading">
                            Войти
                        </span>
                        <span v-else>
                            <Spinner />
                        </span>
                    </button>
                    <div class="flex items-center space-x-1 font-sf_pro font-normal !mt-40">
                        <p class="text-m_gray-100 sm:text-base text-sm text-nowrap">У вас нет учетной записи?</p>
                        <router-link to="/register"
                            class="text-m_yellow-200 hover:underline sm:text-base text-sm text-nowrap">Зарегистрироваться</router-link>
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
import Spinner from "@/components/base/Spinner.vue";
import { useUserStore } from "@/store/user.store";
import { mapState, mapActions } from "pinia";
export default {
    name: "Login",
    components: {
        Spinner
    },
    data() {
        return {
            email: '',
            password: '',
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
        ...mapActions(useUserStore, ['loginUser']),
        async handleLogin() {
            await this.loginUser({ email: this.email, password: this.password });
        },
    },

}
</script>