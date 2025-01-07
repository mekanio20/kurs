<template>
    <div class="w-full min-h-100vh relative overflow-hidden">
        <div class="absolute top-0 right-0">
            <svg width="591" height="1735" viewBox="0 0 591 1735" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="613.473" cy="834.913" rx="613.473" ry="899.913" fill="url(#paint0_radial_553_5476)"
                    fill-opacity="0.17" />
                <defs>
                    <radialGradient id="paint0_radial_553_5476" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(613.473 834.913) rotate(90) scale(899.913 613.473)">
                        <stop stop-color="#FFC300" />
                        <stop offset="1" stop-color="#181C27" stop-opacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
        <div class="absolute top-[2200px] left-0">
            <svg width="599" height="1800" viewBox="0 0 599 1800" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="-14.5267" cy="899.913" rx="613.473" ry="899.913" fill="url(#paint0_radial_553_5474)"
                    fill-opacity="0.17" />
                <defs>
                    <radialGradient id="paint0_radial_553_5474" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(-14.5267 899.913) rotate(90) scale(899.913 613.473)">
                        <stop stop-color="#FFC300" />
                        <stop offset="1" stop-color="#181C27" stop-opacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
        <div class="absolute top-[2800px] right-0">
            <svg width="591" height="1800" viewBox="0 0 591 1800" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="613.473" cy="899.913" rx="613.473" ry="899.913" fill="url(#paint0_radial_553_5475)"
                    fill-opacity="0.17" />
                <defs>
                    <radialGradient id="paint0_radial_553_5475" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(613.473 899.913) rotate(90) scale(899.913 613.473)">
                        <stop stop-color="#FFC300" />
                        <stop offset="1" stop-color="#181C27" stop-opacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
        <div class="w-full relative z-50">
            <Navbar />
            <div class="container bg-transparent sm:mt-44 mt-36">
                <div class="flex lg:flex-row flex-col lg:space-y-0 space-y-6 items-center mb-20">
                    <div class="lg:w-[540px] sm:w-[600px] w-full lg:mr-20">
                        <img class="lg:flex-1 w-full h-full object-cover rounded-xl" :src="course?.banner">
                    </div>
                    <div class="lg:w-[540px] sm:w-[600px] w-full  flex lg:items-start items-center flex-col space-y-10">
                        <h1 class="font-sf_pro font-bold lg:text-4xl sm:text-3xl text-2xl text-white lg:text-start text-center">{{ course?.name }}</h1>
                        <p class="lg:w-3/4 w-full font-sf_pro font-normal lg:text-lg sm:text-base text-sm text-m_gray-100 lg:text-start text-center">
                            {{ course?.description }}
                        </p>
                        <div class="flex flex-wrap sm:flex-row flex-col sm:space-y-0 space-y-4 items-center sm:gap-x-6 sm:gap-y-6">
                            <div v-for="item in course?.categories" :key="item.id"
                                class="px-6 py-3 rounded-3xl bg-m_black-300 font-sf_pro font-normal lg:text-base text-sm text-m_gray-100 text-nowrap">
                                {{ item.name }}</div>
                            <div
                                class="px-6 py-3 rounded-3xl bg-m_black-300 font-sf_pro font-normal lg:text-base text-sm text-m_gray-100 text-nowrap">
                                {{ course?.lessons_count || 0 }} уроков</div>
                            <div
                                class="px-6 py-3 rounded-3xl bg-m_black-300 font-sf_pro font-normal lg:text-base text-sm text-m_gray-100 text-nowrap">
                                {{ course?.total_duration || 0 }}</div>
                        </div>
                        <div class="flex items-center space-x-8">
                            <div class="flex items-center">
                                <span class="lg:text-base text-sm text-m_yellow-100">★</span>
                                <span class="ml-1 text-white lg:text-base text-sm font-medium">{{ course?.rating || 0 }}</span>
                                <span class="ml-2 text-m_gray-100 lg:text-base text-sm font-medium">({{ course?.total_ratings || 0 }} отзывов)</span>
                            </div>
                            <div class="flex items-center font-sf_pro font-medium lg:text-base text-sm text-white">
                                {{ course?.students_count || 0 }} студентов
                            </div>
                        </div>
                        <button
                            class="w-fit px-10 py-3 rounded-lg bg-m_yellow-100 font-helvetica font-bold lg:text-xl sm:text-lg text-base">Купить
                            сейчас</button>
                    </div>
                </div>
                <div v-if="course?.themes.length > 0" class="text-center">
                    <h2 class="font-sf_pro font-bold lg:text-[40px] text-[30px] lg:leading-[60px] leading-[50px] text-white">Чему вы научитесь</h2>
                    <div class="my-10 flex items-center justify-center flex-wrap gap-x-6 gap-y-4">
                        <div v-for="item in course?.themes" :key="item.id"
                            class="w-fit px-6 py-3 rounded-3xl bg-m_black-300 font-sf_pro font-normal lg:text-base text-sm text-white">
                            {{ item.name }}
                        </div>
                    </div>
                </div>
                <div class="sm:pb-20 mt-20 text-center">
                    <h2 class="font-sf_pro font-bold lg:text-[40px] text-[30px] lg:leading-[60px] leading-[50px] text-white">Программа курса</h2>
                    <div class="flex lg:flex-row flex-col items-center lg:space-x-20 lg:my-20 my-14 space-y-6">
                        <div class="lg:flex-1 w-full flex flex-col space-y-6">
                            <div v-for="item in course?.lessons" class="p-4 bg-m_black-500 rounded-xl flex items-center">
                                <img :src="item.banner" class="w-28 rounded-xl object-cover mr-8">
                                <p class="font-sf_pro font-medium text-start lg:text-xl text-lg text-white">{{ item.name }}</p>
                            </div>
                        </div>
                        <!-- <div class="lg:flex-1 w-full flex flex-col space-y-6">
                            <div class="p-4 bg-m_black-500 rounded-xl flex items-center">
                                <img src="/imgs/person5.png" class="w-28 rounded-xl object-cover mr-8">
                                <div class="flex items-start flex-col space-y-2">
                                    <p class="font-sf_pro font-medium lg:text-base text-sm text-m_gray-100">Урок: 1</p>
                                    <p class="font-sf_pro font-medium text-start lg:text-xl text-lg text-white">Определите своих клиентов</p>
                                </div>
                            </div>
                            <div class="p-4 bg-m_black-500 rounded-xl flex items-center">
                                <img src="/imgs/person5.png" class="w-28 rounded-xl object-cover mr-8">
                                <div class="flex items-start flex-col space-y-2">
                                    <p class="font-sf_pro font-medium lg:text-base text-sm text-m_gray-100">Урок: 1</p>
                                    <p class="font-sf_pro font-medium text-start lg:text-xl text-lg text-white">Определите своих клиентов</p>
                                </div>
                            </div>
                            <div class="p-4 bg-m_black-500 rounded-xl flex items-center">
                                <img src="/imgs/person5.png" class="w-28 rounded-xl object-cover mr-8">
                                <div class="flex items-start flex-col space-y-2">
                                    <p class="font-sf_pro font-medium lg:text-base text-sm text-m_gray-100">Урок: 1</p>
                                    <p class="font-sf_pro font-medium text-start lg:text-xl text-lg text-white">Определите своих клиентов</p>
                                </div>
                            </div>
                        </div> -->
                    </div>
                    <router-link to="#"
                        class="px-7 py-3 rounded-lg border border-white font-sf_pro font-medium text-white lg:text-base text-sm">
                        Посмотреть все
                    </router-link>
                </div>
                <div class="w-full flex lg:flex-row flex-col lg:space-y-0 space-y-10 py-20">
                    <div class="lg:flex-1 w-full lg:mr-20">
                        <h2 class="lg:w-3/4 font-sf_pro font-bold lg:text-[44px] lg:leading-[60px] text-3xl leading-[50px] text-white">Этот курс включает в себя:</h2>
                    </div>
                    <div class="lg:flex-1 w-full flex flex-col space-y-8">
                        <div class="flex items-center space-x-4">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7 10L12 15L17 10" stroke="white" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M12 15V3" stroke="white" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                            <p class="font-sf_pro font-medium lg:text-xl sm:text-lg text-base text-white">Скачивайте и смотрите оффлайн</p>
                        </div>
                        <div class="flex items-center space-x-4">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20 9H11C9.89543 9 9 9.89543 9 11V20C9 21.1046 9.89543 22 11 22H20C21.1046 22 22 21.1046 22 20V11C22 9.89543 21.1046 9 20 9Z"
                                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M5 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V5"
                                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p class="font-sf_pro font-medium lg:text-xl sm:text-lg text-base text-white">Доступ на мобильном телефоне и
                                телевизоре</p>
                        </div>
                        <div class="flex items-center space-x-4">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M22 11.0801V12.0001C21.9988 14.1565 21.3005 16.2548 20.0093 17.9819C18.7182 19.7091 16.9033 20.9726 14.8354 21.584C12.7674 22.1954 10.5573 22.122 8.53447 21.3747C6.51168 20.6274 4.78465 19.2462 3.61096 17.4372C2.43727 15.6281 1.87979 13.4882 2.02168 11.3364C2.16356 9.18467 2.99721 7.13643 4.39828 5.49718C5.79935 3.85793 7.69279 2.71549 9.79619 2.24025C11.8996 1.76502 14.1003 1.98245 16.07 2.86011"
                                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M22 4L12 14.01L9 11.01" stroke="white" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                            <p class="font-sf_pro font-medium lg:text-xl sm:text-lg text-base text-white">Доступ на 3 месяца</p>
                        </div>
                        <div class="flex items-center space-x-4">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p class="font-sf_pro font-medium lg:text-xl sm:text-lg text-base text-white">Сертификат об окончании</p>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:py-20">
                    <h2 class="font-sf_pro font-bold lg:text-[40px] text-3xl lg:leading-[60px] leading-[50px] text-white text-center">Ментор</h2>
                    <div class="flex lg:flex-row flex-col items-center lg:space-x-10 lg:space-y-0 space-y-10 sm:my-28 my-20">
                        <div class="sm:w-[400px] w-full h-[200px] rounded-lg bg-m_black-500 relative">
                            <img class="w-full absolute bottom-0 left-1/2 -translate-x-1/2 object-cover h-[250px]"
                                :src="course?.mentor?.avatar">
                            <div class="absolute top-4 right-4">
                                <div class="flex items-center">
                                    <span class="lg:text-base text-sm text-m_yellow-100">★</span>
                                    <span class="ml-1 text-white lg:text-base text-sm font-bold font-sf_pro">{{ course?.owner?.rating || 0 }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex-1 flex lg:items-start items-center flex-col space-y-3">
                            <h3 class="font-sf_pro font-bold lg:text-2xl text-xl text-white">{{ course?.owner?.full_name }}</h3>
                            <p class="font-sf_pro font-normal lg:text-base text-sm text-m_yellow-200">{{ course?.owner?.profession }}</p>
                            <div class="text-m_gray-100 lg:text-start text-center">
                                <p class="lg:text-base text-sm leading-relaxed mb-4">
                                    {{ course?.owner?.bio }}
                                    <a v-if="course?.owner?.bio.length > 200" href="#" class="text-m_yellow-100 hover:underline">Читать далее</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full text-center">
                    <h2 class="font-sf_pro font-bold lg:text-[40px] text-3xl lg:leading-[60px] leading-[50px] text-white text-center pb-20">Отзывы
                        пользователей</h2>
                    <div class="md:columns-3 mobile:columns-2 columns-1 gap-6 sm:pb-20 pb-10">
                        <div class="bg-m_black-500 rounded-lg p-8 mb-6">
                            <div class="w-full flex space-x-6 items-center">
                                <div class="w-16 rounded-full">
                                    <img src="/imgs/person4.png">
                                </div>
                                <div class="flex flex-col items-start space-y-1">
                                    <p class="font-sf_pro font-medium lg:text-xl text-lg text-start text-white">Мария Смирнова</p>
                                    <div class="flex items-center space-x-2">
                                        <span class="text-sm text-m_yellow-100">★</span>
                                        <span class="text-sm text-m_yellow-100">★</span>
                                        <span class="text-sm text-m_yellow-100">★</span>
                                        <span class="text-sm text-m_yellow-100">★</span>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full pt-6 font-sf_pro font-normal lg:text-base text-sm text-white">
                                Курсы предоставляют отличную возможность для расширения знаний и навыков в различных
                                областях. 💜 Они структурированы так, чтобы обеспечить понимание материала.
                            </div>
                        </div>
                        <div class="bg-m_black-500 rounded-lg p-8 mb-6">
                            <div class="w-full flex space-x-6 items-center">
                                <div class="w-16 rounded-full">
                                    <img src="/imgs/person4.png">
                                </div>
                                <div class="flex- flex-col space-y-1">
                                    <p class="font-sf_pro font-medium lg:text-xl text-lg text-start text-white">Мария Смирнова</p>
                                    <div class="flex items-center space-x-2">
                                        <span class="text-sm text-m_yellow-100">★</span>
                                        <span class="text-sm text-m_yellow-100">★</span>
                                        <span class="text-sm text-m_yellow-100">★</span>
                                        <span class="text-sm text-m_yellow-100">★</span>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full pt-6 font-sf_pro font-normal lg:text-base text-sm text-white">
                                Курсы предоставляют отличную возможность для расширения знаний и навыков в различных
                                областях. 💜 Они структурированы так, чтобы обеспечить понимание материала.
                            </div>
                        </div>
                        <div class="bg-m_black-500 rounded-lg p-8 mb-6">
                            <div class="w-full flex space-x-6 items-center">
                                <div class="w-16 rounded-full">
                                    <img src="/imgs/person4.png">
                                </div>
                                <div class="flex- flex-col space-y-1">
                                    <p class="font-sf_pro font-medium lg:text-xl text-lg text-start text-white">Мария Смирнова</p>
                                    <div class="flex items-center space-x-2">
                                        <span class="text-sm text-m_yellow-100">★</span>
                                        <span class="text-sm text-m_yellow-100">★</span>
                                        <span class="text-sm text-m_yellow-100">★</span>
                                        <span class="text-sm text-m_yellow-100">★</span>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full pt-6 font-sf_pro font-normal lg:text-base text-sm text-white">
                                Опытные наставники и качественные материалы делают обучение Курсы предоставляют отличную
                                возможность для расширения знаний и навыков в различных областях 😀🩷 Они
                                структурированы так, чтобы обеспечить понимание материала, с интерактивными и
                                практическими заданиями.
                            </div>
                        </div>
                        <div class="bg-m_black-500 rounded-lg p-8 mb-6">
                            <div class="w-full flex space-x-6 items-center">
                                <div class="w-16 rounded-full">
                                    <img src="/imgs/person4.png">
                                </div>
                                <div class="flex- flex-col space-y-1">
                                    <p class="font-sf_pro font-medium lg:text-xl text-lg text-start text-white">Мария Смирнова</p>
                                    <div class="flex items-center space-x-2">
                                        <span class="text-sm text-m_yellow-100">★</span>
                                        <span class="text-sm text-m_yellow-100">★</span>
                                        <span class="text-sm text-m_yellow-100">★</span>
                                        <span class="text-sm text-m_yellow-100">★</span>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full pt-6 font-sf_pro font-normal lg:text-base text-sm text-white">
                                Курсы предоставляют отличную возможность для расширения знаний и навыков в различных
                                областях. 💜 Они структурированы так, чтобы обеспечить понимание материала.
                            </div>
                        </div>
                        <div class="bg-m_black-500 rounded-lg p-8 mb-6">
                            <div class="w-full flex space-x-6 items-center">
                                <div class="w-16 rounded-full">
                                    <img src="/imgs/person4.png">
                                </div>
                                <div class="flex- flex-col space-y-1">
                                    <p class="font-sf_pro font-medium lg:text-xl text-lg text-start text-white">Мария Смирнова</p>
                                    <div class="flex items-center space-x-2">
                                        <span class="text-sm text-m_yellow-100">★</span>
                                        <span class="text-sm text-m_yellow-100">★</span>
                                        <span class="text-sm text-m_yellow-100">★</span>
                                        <span class="text-sm text-m_yellow-100">★</span>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full pt-6 font-sf_pro font-normal lg:text-base text-sm text-white">
                                Курсы предоставляют отличную возможность для расширения знаний и навыков в различных
                                областях. 💜 Они структурированы так, чтобы обеспечить понимание материала.
                            </div>
                        </div>
                        <div class="bg-m_black-500 rounded-lg p-8 mb-6">
                            <div class="w-full flex space-x-6 items-center">
                                <div class="w-16 rounded-full">
                                    <img src="/imgs/person4.png">
                                </div>
                                <div class="flex- flex-col space-y-1">
                                    <p class="font-sf_pro font-medium lg:text-xl text-lg text-start text-white">Мария Смирнова</p>
                                    <div class="flex items-center space-x-2">
                                        <span class="text-sm text-m_yellow-100">★</span>
                                        <span class="text-sm text-m_yellow-100">★</span>
                                        <span class="text-sm text-m_yellow-100">★</span>
                                        <span class="text-sm text-m_yellow-100">★</span>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full pt-6 font-sf_pro font-normal lg:text-base text-sm text-white">
                                Опытные наставники и качественные материалы делают обучение Курсы предоставляют отличную
                                возможность для расширения знаний и навыков в различных областях 😀🩷 Они
                                структурированы так, чтобы обеспечить понимание материала, с интерактивными и
                                практическими заданиями.
                            </div>
                        </div>
                    </div>
                    <router-link to="/"
                        class="px-7 py-3 mt-20 rounded-lg border border-white font-sf_pro font-medium text-white lg:text-base text-sm">
                        Посмотреть все
                    </router-link>
                </div>
                <div class="w-full sm:pb-40 pb-20 pt-10">
                    <h2
                        class="text-center font-sf_pro font-bold lg:text-[50px] sm:text-[40px] text-3xl text-white lg:w-2/3 w-full lg:leading-[60px] sm:leading-[50px] leading-[40px] mx-auto my-20">
                        Похожие курсы
                    </h2>
                    <div class="flex flex-col items-center space-y-20">
                        <swiper :slides-per-view="slidesPerView" :breakpoints="cource_breakpoints" :spaceBetween="30"
                            :modules="modules" :loop="true" :speed="1000"
                            :autoplay="{ delay: 2000, duration: 2000, disableOnInteraction: false }"
                            class="w-full flex items-center space-x-20 select-none">
                            <swiper-slide v-for="item in courses" :key="item.id">
                                <router-link :to="`/course/detail/${item.id}`">
                                    <Card :course="item" />
                                </router-link>
                            </swiper-slide>
                        </swiper>
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
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
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
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            course: null,
            courses: null,
            modules: [Pagination, Navigation, Autoplay],
            slidesPerView: 1,
            cource_breakpoints: {
                200: { slidesPerView: 1 },
                500: { slidesPerView: 2 },
                950: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
            },
        }
    },
    created() {
        this.getCourse(),
        this.allCourses()
    },
    methods: {
        async getCourse() {
            const response = await api.get(`/courses/${this.$route.params.id}`);
            console.log(response.data);
            this.course = response.data
        },
        async allCourses() {
            const response = await api.get('/courses/')
            this.courses = response.data.results
        }
    },
}
</script>