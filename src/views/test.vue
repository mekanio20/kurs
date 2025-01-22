<template>
    <div class="flex items-center justify-center min-h-screen bg-black text-white">
        <div class="w-full p-8 space-y-6 text-center">
            <h1 class="text-2xl font-bold">Сбросить пароль</h1>
            <p class="text-sm text-gray-400">
                Мы отправили код подтверждения на ваш адрес электронной почты, введите его
            </p>

            <div class="flex justify-center space-x-4">
                <input v-for="(_, index) in codeInputs" :key="index" v-model="codeInputs[index]"
                    @input="handleInput(index)" @keydown.backspace="handleBackspace(index)" maxlength="1"
                    :ref="`input-${index}`"
                    class="w-12 h-12 text-center text-xl font-bold border border-gray-600 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    type="text" inputmode="numeric" />
            </div>

            <div class="flex items-center justify-between text-sm text-gray-400">
                <button @click="resetTimer" class="text-yellow-500 hover:underline"
                    :disabled="isTimerActive || isLoading">
                    Отправить еще раз
                </button>
                <span>{{ formattedTime }}</span>
            </div>

            <button @click="handleSubmit" :disabled="!isCodeComplete || isLoading"
                class="w-full py-3 mt-4 text-lg font-bold text-black bg-yellow-500 rounded-lg hover:bg-yellow-600 disabled:cursor-not-allowed">
                <span v-if="!isLoading">Продолжить</span>
                <span v-else>
                    <svg class="h-6 w-6 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
                        <circle cx="50" cy="50" r="40" stroke="currentColor" stroke-width="10" stroke-dasharray="60 20"
                            stroke-linecap="round">
                            <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50"
                                dur="1s" repeatCount="indefinite" />
                        </circle>
                    </svg>
                </span>
            </button>

            <!-- Giriş Yap Linki -->
            <p class="mt-4 text-sm">
                Уже есть аккаунт?
                <a href="#" class="text-yellow-500 hover:underline">Войти</a>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "PasswordReset",
    data() {
        return {
            codeInputs: ["", "", "", ""],
            timer: 185,
            timerInterval: null,
            isTimerActive: true,
            isLoading: false,
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
                    alert(`Kod gönderildi: ${this.codeInputs.join("")}`);
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
};
</script>