<template>
    <div class="w-full min-h-100vh relative overflow-hidden">
        <div class="absolute right-0 top-40 z-10 hidden lg:block">
            <img class="w-[200px] object-cover" src="/imgs/group-2.webp">
        </div>
        <div class="absolute left-0 top-40 z-10 hidden lg:block">
            <img class="w-[200px] object-cover" src="/imgs/group-1.webp">
        </div>
        <div class="absolute -left-96 right-0 -top-80">
            <svg width="2288" height="1742" viewBox="0 0 2288 1742" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.6">
                    <circle cx="1150.5" cy="942.5" r="631.5" fill="url(#paint0_radial_2511_5260)" fill-opacity="0.28" />
                    <circle cx="1702" cy="700" r="586" fill="url(#paint1_radial_2511_5260)" fill-opacity="0.23" />
                    <circle cx="1138" cy="1156" r="586" fill="url(#paint2_radial_2511_5260)" fill-opacity="0.1" />
                    <circle cx="586" cy="700" r="586" fill="url(#paint3_radial_2511_5260)" fill-opacity="0.25" />
                    <circle cx="633" cy="1128" r="586" fill="url(#paint4_radial_2511_5260)" fill-opacity="0.2" />
                    <circle cx="924" cy="633" r="586" transform="rotate(-90 924 633)"
                        fill="url(#paint5_radial_2511_5260)" fill-opacity="0.23" />
                    <circle cx="1352" cy="586" r="586" transform="rotate(-90 1352 586)"
                        fill="url(#paint6_radial_2511_5260)" fill-opacity="0.2" />
                    <circle cx="1658" cy="1134" r="586" fill="url(#paint7_radial_2511_5260)" fill-opacity="0.2" />
                </g>
                <defs>
                    <radialGradient id="paint0_radial_2511_5260" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(1150.5 942.5) rotate(90.0484) scale(592.5)">
                        <stop stop-color="#FFCC02" />
                        <stop offset="1" stop-color="#181C27" stop-opacity="0" />
                    </radialGradient>
                    <radialGradient id="paint1_radial_2511_5260" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(1702 700) rotate(88.4263) scale(637.24)">
                        <stop stop-color="#FFC300" />
                        <stop offset="1" stop-color="#181C27" stop-opacity="0" />
                    </radialGradient>
                    <radialGradient id="paint2_radial_2511_5260" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(1138 1156) rotate(90) scale(458)">
                        <stop stop-color="#FFC300" />
                        <stop offset="1" stop-color="#181C27" stop-opacity="0" />
                    </radialGradient>
                    <radialGradient id="paint3_radial_2511_5260" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(586 700) rotate(90) scale(507)">
                        <stop stop-color="#FFC300" />
                        <stop offset="1" stop-color="#181C27" stop-opacity="0" />
                    </radialGradient>
                    <radialGradient id="paint4_radial_2511_5260" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(633 1128) rotate(90) scale(368)">
                        <stop stop-color="#FFCC02" />
                        <stop offset="1" stop-color="#181C27" stop-opacity="0" />
                    </radialGradient>
                    <radialGradient id="paint5_radial_2511_5260" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(924 633) rotate(90) scale(507)">
                        <stop stop-color="#FFC300" />
                        <stop offset="1" stop-color="#181C27" stop-opacity="0" />
                    </radialGradient>
                    <radialGradient id="paint6_radial_2511_5260" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(1352 586) rotate(90) scale(368)">
                        <stop stop-color="#FFCC02" />
                        <stop offset="1" stop-color="#181C27" stop-opacity="0" />
                    </radialGradient>
                    <radialGradient id="paint7_radial_2511_5260" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(1658 1134) rotate(90) scale(501)">
                        <stop stop-color="#FFCC02" />
                        <stop offset="1" stop-color="#181C27" stop-opacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
        <div class="w-full h-full relative z-50">
            <Navbar />
            <div class="container bg-transparent my-20">
                <div class="mt-80">
                    <div class="flex flex-col items-center">
                        <p class="font-sf_pro font-medium lg:text-xl md:text-lg text-base text-white text-center">
                            Доверяют более
                            <span class="text-m_yellow-100">800K+</span> фрилансеров и <span
                                class="text-m_yellow-100">20K+</span> команд
                        </p>
                        <h1
                            class="sm:w-4/5 w-full font-sf_pro font-bold lg:text-6xl sm:text-5xl text-4xl text-white text-center lg:!leading-[65px] mt-10">
                            Осваивайте новые горизонты, становитесь лучшей версией себя</h1>
                    </div>
                </div>
                <div class="lg:mt-[400px] mt-80">
                    <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                        <div v-for="item in statistics" :key="item.id"
                            class="flex flex-col items-center px-4 py-10 bg-m_black-200 rounded-lg">
                            <h1 class="font-sf_pro font-bold lg:text-4xl sm:text-3xl text-2xl text-m_yellow-200">
                                {{ item.title }}
                            </h1>
                            <p class="font-sf_pro font-bold lg:text-lg sm:text-base text-sm text-white">{{ item.subtitle
                                }}</p>
                        </div>
                    </div>
                    <div class="lg:mt-40 mt-20">
                        <h2 class="font-sf_pro font-bold lg:text-3xl sm:text-2xl text-xl text-white text-center pb-10">О
                            нас
                        </h2>
                        <p
                            class="w-3/4 mx-auto font-sf_pro font-normal lg:text-xl sm:text-lg text-base text-m_gray-100 text-center">
                            В 0-100 мы верим в раскрытие вашего полного потенциала. Наша миссия — помочь вам стать
                            лучшей версией себя через качественные онлайн-курсы, направленные на развитие, приобретение
                            навыков и личную трансформацию.
                            <br><br>
                            Независимо от того, хотите ли вы улучшить карьеру, освоить что-то новое или развить
                            позитивное мышление, мы предоставим вам все необходимые инструменты и ресурсы для достижения
                            успеха. С экспертными наставниками и сообществом единомышленников, 0-100 станет вашим
                            партнером в пути к совершенству. Начнем путь к вашей лучшей версии прямо сейчас.
                        </p>
                    </div>
                    <div class="lg:my-40 my-20">
                        <h2 class="font-sf_pro font-bold lg:text-3xl sm:text-2xl text-xl text-white text-center">Почему
                            вам стоит выбрать <span class="text-m_yellow-100 font-bold">0 -> 100</span> ?</h2>
                        <div class="mt-20 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
                            <div v-for="item in info" :key="item.id"
                                class="flex flex-col bg-m_black-500 py-8 px-14 rounded-lg">
                                <div class="flex items-start space-x-2 pb-4">
                                    <img class="w-7 h-7 object-cover" :src="item.icon">
                                    <h3 class="font-sf_pro font-bold lg:text-xl sm:text-lg text-base text-white">
                                        {{ item.title }}
                                    </h3>
                                </div>
                                <p class="font-sf_pro font-normal lg:text-lg sm:text-base text-sm text-m_gray-600 mt-4">
                                    {{ item.subtitle }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
export default {
    name: "About",
    components: {
        Navbar,
        Footer,
    },
    data() {
        return {
            statistics: [
                {
                    id: 1,
                    title: '500+',
                    subtitle: 'выпускников'
                },
                {
                    id: 2,
                    title: '15+',
                    subtitle: 'менторов'
                },
                {
                    id: 3,
                    title: '4+',
                    subtitle: 'года опыта'
                },
                {
                    id: 4,
                    title: '12K+',
                    subtitle: 'пользователей'
                },
            ],
            info: [
                {
                    id: 1,
                    icon: '/svgs/icon-1.svg',
                    title: 'Обучение под руковод-ством экспертов',
                    subtitle: 'Connect with a diverse community of learners worldwide.'
                },
                {
                    id: 2,
                    icon: '/svgs/icon-2.svg',
                    title: 'Гибкое планирование',
                    subtitle: 'Learn from industry professionals with real-world experience. Courses designed and taught.'
                },
                {
                    id: 3,
                    icon: '/svgs/icon-3.svg',
                    title: 'Интерактивное обучение',
                    subtitle: 'Interactive lessons designed to keep you engaged. Flexible course access to fit your busy life.'
                },
                {
                    id: 4,
                    icon: '/svgs/icon-4.svg',
                    title: 'Аккредитованная сер-тификация',
                    subtitle: 'Gain a certificate that enhances your professional credibility.'
                },
                {
                    id: 5,
                    icon: '/svgs/icon-5.svg',
                    title: 'Доступ 24/7',
                    subtitle: 'Learn from industry professionals with real-world experience. Apply your knowledge with practical.'
                },
                {
                    id: 6,
                    icon: '/svgs/icon-6.svg',
                    title: 'Карьерный рост',
                    subtitle: 'Enhance your resume with our accredited certification.'
                },
            ]
        }
    },
}
</script>