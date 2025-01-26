<template>
    <div class="w-full min-h-100vh relative overflow-hidden">
        <div class="absolute right-0 top-40">
            <img class="w-[200px] object-cover" src="/imgs/group-2.webp">
        </div>
        <div class="absolute left-0 top-40">
            <img class="w-[200px] object-cover" src="/imgs/group-1.webp">
        </div>
        <div class="w-full h-full relative z-50">
            <Navbar />
            <div class="container bg-transparent my-20">
                <div class="mt-80">
                    <div class="flex flex-col items-center">
                        <p class="font-sf_pro font-medium lg:text-xl text-lg text-white text-center">Доверяют более
                            <span class="text-m_yellow-100">800K+</span> фрилансеров и <span
                                class="text-m_yellow-100">20K+</span> команд
                        </p>
                        <h1
                            class="w-4/5 font-sf_pro font-bold lg:text-6xl sm:text-5xl text-4xl text-white text-center !leading-[65px] mt-10">
                            Осваивайте новые горизонты, становитесь лучшей версией себя</h1>
                    </div>
                </div>
                <div class="mt-[400px]">
                    <div class="grid grid-cols-4 gap-10">
                        <div v-for="item in statistics" :key="item.id"
                            class="flex flex-col items-center px-4 py-10 bg-m_black-200 rounded-lg">
                            <h1 class="font-sf_pro font-bold lg:text-4xl sm:text-3xl text-2xl text-m_yellow-200">
                                {{ item.title }}
                            </h1>
                            <p class="font-sf_pro font-bold lg:text-lg sm:text-base text-sm text-white">{{ item.subtitle
                                }}</p>
                        </div>
                    </div>
                    <div class="mt-40">
                        <h2 class="font-sf_pro font-bold lg:text-3xl sm:text-2xl text-xl text-white text-center pb-10">О нас
                        </h2>
                        <p class="w-3/4 mx-auto font-sf_pro font-normal lg:text-xl sm:text-lg text-base text-m_gray-100 text-center">
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
                    <div class="my-40">
                        <h2 class="font-sf_pro font-bold lg:text-3xl sm:text-2xl text-xl text-white text-center">Почему вам стоит выбрать <span class="text-m_yellow-100 font-bold">0 -> 100</span> ?</h2>
                        <div class="mt-20 grid grid-cols-3 gap-8">
                            <div v-for="item in info" :key="item.id" class="flex flex-col bg-m_black-500 py-8 px-14 rounded-lg">
                                <div class="flex items-start space-x-2 pb-4">
                                    <img class="w-7 h-7 object-cover" :src="item.icon">
                                    <h3 class="font-sf_pro font-bold lg:text-2xl sm:text-xl text-lg text-white">
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