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
                <div class="lg:flex-1 w-full flex flex-col items-center space-y-4 mt-40 lg:mr-40 lg:mx-0 sm:mx-40">
                    <h1 class="font-sf_pro font-bold lg:text-4xl sm:text-3xl text-2xl text-white mb-10">Сбросить пароль
                    </h1>
                    <p class="font-sf_pro text-base text-center text-m_gray-600 pb-10">
                        Мы отправили код подтверждения на ваш адрес электронной почты, введите его
                    </p>

                    <div class="flex justify-center space-x-4 pb-3">
                        <input v-for="(_, index) in codeInputs" :key="index" v-model="codeInputs[index]"
                            @input="handleInput(index)" @keydown.backspace="handleBackspace(index)" maxlength="1"
                            :ref="`input-${index}`"
                            class="sm:w-[120px] w-full h-12 text-center text-base font-sf_pro font-medium text-white rounded-lg bg-m_black-500 focus:outline-none focus:ring-1 focus:ring-m_yellow-100"
                            type="text" inputmode="numeric" />
                    </div>

                    <div class="w-full flex items-center justify-between text-sm text-gray-400 pb-14">
                        <button @click="resetTimer" class="text-yellow-500 hover:underline cursor-pointer"
                            :disabled="isTimerActive || isLoading">
                            Отправить еще раз
                        </button>
                        <span class="text-white">{{ formattedTime }}</span>
                    </div>

                    <button @click="handleSubmit" :disabled="!isCodeComplete || isLoading"
                        class="w-full py-3 lg:text-lg sm:text-base text-sm font-bold text-black bg-yellow-500 rounded-lg hover:bg-yellow-600 disabled:cursor-not-allowed">
                        <span v-if="!isLoading">Продолжить</span>
                        <span v-else>
                            <svg class="h-6 w-6 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
                                fill="none">
                                <circle cx="50" cy="50" r="40" stroke="currentColor" stroke-width="10"
                                    stroke-dasharray="60 20" stroke-linecap="round">
                                    <animateTransform attributeName="transform" type="rotate" from="0 50 50"
                                        to="360 50 50" dur="1s" repeatCount="indefinite" />
                                </circle>
                            </svg>
                        </span>
                    </button>
                    <div
                        class="bg-transparent flex items-center space-x-1 font-sf_pro font-normal sm:text-base text-sm !mt-36">
                        <p class="text-m_gray-100">Уже есть аккаунт?</p>
                        <router-link to="/login" class="text-m_yellow-200 hover:underline">Войти</router-link>
                    </div>
                </div>
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
export default {
    name: "OTP",
    data() {
        return {
            timer: 185,
            codeInputs: ["", "", "", ""],
            timerInterval: null,
            isTimerActive: true,
            isLoading: false,
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
        };
    },
    computed: {
        formattedTime() {
            const minutes = Math.floor(this.timer / 60);
            const seconds = this.timer % 60;
            return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
        },
        isCodeComplete() {
            return this.codeInputs.every((digit) => digit !== "");
        },
    },
    methods: {
        startTimer() {
            this.timerInterval = setInterval(() => {
                if (this.timer > 0) {
                    this.timer--;
                } else {
                    this.isTimerActive = false;
                    clearInterval(this.timerInterval);
                }
            }, 1000);
        },
        resetTimer() {
            this.timer = 185;
            this.isTimerActive = true;
            clearInterval(this.timerInterval);
            this.startTimer();
        },
        handleInput(index) {
            const currentInput = this.codeInputs[index];
            if (!/^\d$/.test(currentInput)) {
                this.codeInputs[index] = "";
                return;
            }
            if (index < this.codeInputs.length - 1) {
                this.$refs[`input-${index + 1}`][0].focus();
            } else if (this.isCodeComplete) {
                this.handleSubmit()
            }
        },
        handleBackspace(index) {
            if (this.codeInputs[index] === "" && index > 0) {
                this.$refs[`input-${index - 1}`][0].focus();
            }
        },
        async handleSubmit() {
            if (this.isCodeComplete) {
                this.isLoading = true;
                setTimeout(() => {
                    alert(`Код отправлен: ${this.codeInputs.join("")}`);
                    this.isLoading = false;
                }, 2000);
            }
        },
    },
    mounted() {
        this.startTimer();
    },
    beforeUnmount() {
        clearInterval(this.timerInterval);
    },
}
</script>

<style scoped>
@keyframes scroll {
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(-100%);
    }
}

.animate-scroll {
    animation: scroll 80s linear infinite;
}
</style>