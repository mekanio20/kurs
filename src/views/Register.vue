<template>
    <div class="w-full h-full relative">
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
            <div class="container bg-transparent flex items-start">
                <form class="flex-1 flex flex-col items-center space-y-4 mt-40 mr-40">
                    <h1 class="font-sf_pro font-bold text-4xl text-white mb-10">Зарегистрироваться</h1>
                    <input type="text"
                        class="w-full bg-m_black-500 placeholder:text-m_gray-100 text-m_gray-100 px-8 py-4 text-lg rounded-lg outline-none"
                        placeholder="Полное имя">
                    <input type="email"
                        class="w-full bg-m_black-500 placeholder:text-m_gray-100 text-m_gray-100 px-8 py-4 text-lg rounded-lg outline-none"
                        placeholder="Электронная почта">
                    <input type="password"
                        class="w-full bg-m_black-500 placeholder:text-m_gray-100 text-m_gray-100 px-8 py-4 text-lg rounded-lg outline-none"
                        placeholder="Пароль">
                    <div class="w-full flex items-center space-x-6 select-none">
                        <div class="checkbox-wrapper-46 ml-1">
                            <input class="inp-cbx" id="cbx-46" type="checkbox" />
                            <label class="cbx" for="cbx-46">
                                <span>
                                    <svg width="16px" height="13px" viewbox="0 0 16 13">
                                        <polyline points="1.5 8 5 12 14 2"></polyline>
                                    </svg>
                                </span>
                            </label>
                        </div>
                        <p class="font-sf_pro font-normal text-base text-m_black-400 w-4/5">Продолжая, вы соглашаетесь с
                            нашими условиями и политикой конфиденциальности.</p>
                    </div>
                    <button type="submit"
                        class="w-full bg-m_yellow-200 text-center py-4 rounded-lg font-sf_pro font-bold text-lg !mt-10">Создать
                        аккаунт</button>
                    <div class="bg-transparent flex items-center space-x-1 font-sf_pro font-normal text-lg !mt-40">
                        <p class="text-m_gray-100">Уже есть аккаунт?</p>
                        <router-link to="/login" class="text-m_yellow-200 hover:underline">Войти</router-link>
                    </div>
                </form>
                <div class="flex-1 flex flex-col items-center space-y-6">
                    <div class="w-[600px] h-[700px] overflow-y-scroll no-scrollbar relative">
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
    name: "Register",
    data() {
        return {
            galleryItems: [
                {
                    img: 'https://via.placeholder.com/400x400',
                    title: 'Я таргетолог',
                    description: 'Targeting Specialist',
                },
                {
                    img: 'https://via.placeholder.com/400x400',
                    title: 'Кем же работать?',
                    description: 'Career Options',
                },
                {
                    img: 'https://via.placeholder.com/400x600',
                    title: 'Точка Б',
                    description: '150,000 Сом',
                },
                {
                    img: 'https://via.placeholder.com/400x600',
                    title: 'Пример работы',
                    description: 'Work Example',
                },
                {
                    img: 'https://via.placeholder.com/400x400',
                    title: 'Кем же работать?',
                    description: 'Career Options',
                },
                {
                    img: 'https://via.placeholder.com/400x600',
                    title: 'Точка Б',
                    description: '150,000 Сом',
                },
                {
                    img: 'https://via.placeholder.com/400x600',
                    title: 'Пример работы',
                    description: 'Work Example',
                },
                {
                    img: 'https://via.placeholder.com/400x400',
                    title: 'Кем же работать?',
                    description: 'Career Options',
                },
                {
                    img: 'https://via.placeholder.com/400x600',
                    title: 'Точка Б',
                    description: '150,000 Сом',
                },
                {
                    img: 'https://via.placeholder.com/400x600',
                    title: 'Пример работы',
                    description: 'Work Example',
                },
            ],
        }
    },
}
</script>

<style scoped>
.checkbox-wrapper-46 input[type="checkbox"] {
    display: none;
    visibility: hidden;
}

.checkbox-wrapper-46 .cbx {
    margin: auto;
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
}

.checkbox-wrapper-46 .cbx span {
    display: inline-block;
    vertical-align: middle;
    transform: translate3d(0, 0, 0);
}

.checkbox-wrapper-46 .cbx span:first-child {
    position: relative;
    width: 25px;
    height: 25px;
    border-radius: 3px;
    transform: scale(1);
    vertical-align: middle;
    border: 1px solid #9098A9;
    transition: all 0.2s ease;
}

.checkbox-wrapper-46 .cbx span:first-child svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    fill: none;
    stroke: #FFFFFF;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 22px;
    stroke-dashoffset: 22px;
    transition: all 0.3s ease;
    transition-delay: 0.1s;
}

.checkbox-wrapper-46 .cbx span:first-child:before {
    content: "";
    width: 100%;
    height: 100%;
    background: #FFCC02;
    display: block;
    transform: scale(0);
    opacity: 1;
    border-radius: 50%;
}

.checkbox-wrapper-46 .cbx span:last-child {
    padding-left: 8px;
}

.checkbox-wrapper-46 .cbx:hover span:first-child {
    border-color: #FFCC02;
}

.checkbox-wrapper-46 .inp-cbx:checked+.cbx span:first-child {
    background: #FFCC02;
    border-color: #FFCC02;
    animation: wave-46 0.4s ease;
}

.checkbox-wrapper-46 .inp-cbx:checked+.cbx span:first-child svg {
    stroke-dashoffset: 0;
}

.checkbox-wrapper-46 .inp-cbx:checked+.cbx span:first-child:before {
    transform: scale(3.5);
    opacity: 0;
    transition: all 0.6s ease;
}

@keyframes wave-46 {
    50% {
        transform: scale(0.9);
    }
}

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