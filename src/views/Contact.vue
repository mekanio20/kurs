<template>
    <div class="w-full min-h-100vh relative overflow-hidden">
        <div class="absolute left-0 -top-60">
            <svg width="636" height="1659" viewBox="0 0 636 1659" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse opacity="0.8" cx="2.5" cy="740.5" rx="633.5" ry="918.5" fill="url(#paint0_radial_2522_5297)"
                    fill-opacity="0.18" />
                <defs>
                    <radialGradient id="paint0_radial_2522_5297" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(2.5 740.5) rotate(90) scale(918.5 633.5)">
                        <stop stop-color="#FFC300" />
                        <stop offset="1" stop-color="#181C27" stop-opacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
        <div class="absolute right-0 bottom-80">
            <svg width="665" height="1837" viewBox="0 0 665 1837" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse opacity="0.9" cx="633.5" cy="918.5" rx="633.5" ry="918.5" fill="url(#paint0_radial_2522_5564)"
                    fill-opacity="0.18" />
                <defs>
                    <radialGradient id="paint0_radial_2522_5564" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(633.5 918.5) rotate(90) scale(918.5 633.5)">
                        <stop stop-color="#FFC300" />
                        <stop offset="1" stop-color="#181C27" stop-opacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
        <div class="w-full relative z-50">
            <Navbar />
            <div class="container bg-transparent">
                <div class="w-full flex md:flex-row flex-col items-start justify-between pt-40 lg:pb-20 pb-10">
                    <div class="md:flex-1 w-full flex flex-col space-y-10 lg:pr-20 sm:pr-10">
                        <div class="pb-16">
                            <p class="font-sf_pro font-bold lg:text-xl sm:text-lg text-base text-m_yellow-100 pb-10">
                                Связаться с нами
                            </p>
                            <h1
                                class="font-sf_pro font-bold lg:text-[40px] sm:text-[30px] text-[20px] lg:leading-[50px] sm:leading-[40px] leading-[30px] text-white">
                                Мы будем рады услышать ваше мнение!
                            </h1>
                        </div>
                        <div class="grid grid-cols-2 gap-x-24 gap-y-10 mr-10">
                            <div class="flex flex-col space-y-4 border-b border-m_black-300 pb-10">
                                <h4 class="mb-4 font-sf_pro font-bold text-base text-white">поддержка</h4>
                                <a href="#"
                                    class="font-sf_pro font-medium text-sm text-m_yellow-100 underline">0100support@gmail.com</a>
                                <a href="#" class="font-sf_pro font-medium text-sm text-white">1-801-784-9007</a>
                                <a href="#" class="font-sf_pro font-medium text-sm text-white">North America</a>
                            </div>
                            <div class="flex flex-col space-y-4 border-b border-m_black-300 pb-10">
                                <h4 class="mb-4 font-sf_pro font-bold text-base text-white">Запросы СМИ</h4>
                                <a href="#"
                                    class="font-sf_pro font-medium text-sm text-m_yellow-100 underline">pr-team@gmail.com</a>
                            </div>
                            <div class="flex flex-col space-y-4 border-b border-m_black-300 pb-10">
                                <h4 class="mb-4 font-sf_pro font-bold text-base text-white">поддержка</h4>
                                <a href="#"
                                    class="font-sf_pro font-medium text-sm text-m_yellow-100 underline">0100support@gmail.com</a>
                                <a href="#" class="font-sf_pro font-medium text-sm text-white">1-801-784-9007</a>
                                <a href="#" class="font-sf_pro font-medium text-sm text-white">North America</a>
                            </div>
                            <div class="flex flex-col space-y-4 border-b border-m_black-300 pb-10">
                                <h4 class="mb-4 font-sf_pro font-bold text-base text-white">Запросы СМИ</h4>
                                <a href="#"
                                    class="font-sf_pro font-medium text-sm text-m_yellow-100 underline">pr-team@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <form action="#" class="md:flex-1 md:pt-0 pt-20 md:pb-0 pb-20 w-full flex flex-col space-y-8 md:pl-10">
                        <div class="w-full flex flex-col">
                            <h4 class="font-sf_pro font-normal text-base text-m_gray-100 pb-4">Full name</h4>
                            <input type="text"
                                class="w-full bg-m_black-500 placeholder:text-m_gray-100 text-m_gray-100 px-8 py-4 lg:text-base sm:text-sm text-xs rounded-lg outline-none">
                        </div>
                        <div class="w-full flex flex-col">
                            <h4 class="font-sf_pro font-normal text-base text-m_gray-100 pb-4">Phone number</h4>
                            <input type="text"
                                class="w-full bg-m_black-500 placeholder:text-m_gray-100 text-m_gray-100 px-8 py-4 lg:text-base sm:text-sm text-xs rounded-lg outline-none"
                                placeholder="+993">
                        </div>
                        <div class="w-full flex flex-col">
                            <h4 class="font-sf_pro font-normal text-base text-m_gray-100 pb-4">Tell us about what you’re
                                looking to accomplish:</h4>
                            <textarea rows="4"
                                class="w-full bg-m_black-500 placeholder:text-m_gray-100 text-m_gray-100 px-8 py-4 lg:text-base sm:text-sm text-xs rounded-lg outline-none resize-none"></textarea>
                        </div>
                        <button type="submit"
                            class="w-full bg-m_yellow-200 text-center py-4 rounded-lg font-sf_pro font-bold lg:text-lg sm:text-base text-sm !mt-12">Send</button>
                    </form>
                </div>
                <div class="w-full pb-5">
                    <h2
                        class="text-center font-sf_pro font-bold lg:text-[40px] sm:text-[30px] text-[20px] lg:leading-[50px] sm:leading-[40px] leading-[30px] text-white md:w-2/3 w-full mx-auto mb-20">
                        Наши офисы
                    </h2>
                    <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-x-10 gap-x-4 gap-y-4">
                        <div class="p-6 rounded-lg bg-m_black-500 flex flex-col" v-for="item in ofices" :key="item.id">
                            <div class="h-[200px]">
                                <img class="w-full h-full object-cover rounded-lg" :src="item.img"
                                    :alt="`ofice-${item.id}`">
                            </div>
                            <h2 class="font-sf_pro font-bold lg:text-lg sm:text-base text-sm text-white mt-4">{{ item.name }}</h2>
                            <div class="w-full pt-10">
                                <span v-for="span in item.spans"
                                    class="fon-sf_pro font-normal block lg:text-base sm:text-sm text-xs text-m_gray-600">{{ span }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full pt-20 pb-5 md:px-28">
                    <h2
                        class="text-center font-sf_pro font-bold lg:text-[40px] sm:text-[30px] text-[20px] lg:leading-[50px] sm:leading-[40px] leading-[30px] text-white md:w-2/3 w-full mx-auto mb-20">
                        Добро пожаловать в нашу компанию!
                    </h2>
                    <video controls class="w-full md:h-[600px] object-contain rounded-lg">
                        <!-- <source v-if="'/videos/a_semseddin.mp4'" src="/videos/a_semseddin.mp4"> -->
                    </video>
                </div>
                <!-- FAQ -->
                <div class="w-full pb-5 sm:px-28">
                    <h2
                        class="text-center font-sf_pro font-bold lg:text-[50px] sm:text-[40px] text-[30px] lg:leading-[60px] sm:leading-[50px] leading-[40px] text-white md:w-2/3 w-full mx-auto sm:mt-20 mt-10 mb-20">
                        Часто задаваемые вопросы
                    </h2>
                    <div class="sm:p-6 text-white">
                        <div v-for="(item, index) in qas" :key="index" class="mb-4 bg-m_black-200 rounded-lg">
                            <button @click="toggleAccordion(index)"
                                class="w-full text-left py-4 px-6 rounded-lg flex justify-between items-center focus:outline-none">
                                <span class="sm:text-lg text-base">{{ item.question }}</span>
                                <span
                                    :class="{ 'transform rotate-45': activeIndex === index, 'transform rotate-0': activeIndex !== index }">
                                    +
                                </span>
                            </button>
                            <div v-if="activeIndex === index"
                                class="text-gray-300 sm:text-base text-sm p-6 rounded-lg mt-2" v-html="item.answer">
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
import api from '@/api/index';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Card from '@/components/Card.vue';
import RatingBar from '@/components/RatingBar.vue';
import StarRating from '@/components/StarRating.vue';
import playIcon from '@/components/icons/play.vue';
import bookmarkIcon from '@/components/icons/bookmark.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
export default {
    name: "CourseDetail",
    components: {
        Navbar,
        Footer,
        Card,
        playIcon,
        RatingBar,
        StarRating,
        bookmarkIcon,
        SwiperSlide,
        Swiper,
    },
    data() {
        return {
            activeIndex: null,
            qas: null,
            ofices: [
                {
                    id: 1,
                    name: 'Austin',
                    img: '/imgs/ofice-1.png',
                    spans: [
                        '800 Brazos St',
                        'Austin, TX 78701',
                        'Suites 320/340'
                    ]
                },
                {
                    id: 2,
                    name: 'Austin',
                    img: '/imgs/ofice-2.png',
                    spans: [
                        '800 Brazos St',
                        'Austin, TX 78701',
                        'Suites 320/340'
                    ]
                },
                {
                    id: 3,
                    name: 'Austin',
                    img: '/imgs/ofice-3.png',
                    spans: [
                        '800 Brazos St',
                        'Austin, TX 78701',
                        'Suites 320/340'
                    ]
                },
            ]
        }
    },
    created() {
        this.getQaz()
    },
    methods: {
        toggleAccordion(index) {
            this.activeIndex = this.activeIndex === index ? null : index;
        },
        async getQaz() {
            const response = await api.get('/qas/')
            this.qas = await response.data
        },
    },
}
</script>