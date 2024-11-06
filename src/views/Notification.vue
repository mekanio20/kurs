<template>
    <div class="w-full h-full relative">
        <div class="absolute bottom-0">
            <svg width="580" height="861" viewBox="0 0 580 861" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="-33.5267" cy="899.913" rx="613.473" ry="899.913" fill="url(#paint0_radial_885_14464)"
                    fill-opacity="0.1" />
                <defs>
                    <radialGradient id="paint0_radial_885_14464" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(-33.5267 899.913) rotate(90) scale(899.913 613.473)">
                        <stop stop-color="#FFC300" />
                        <stop offset="1" stop-color="#181C27" stop-opacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
        <div class="absolute right-0">
            <svg width="538" height="1024" viewBox="0 0 538 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="613.473" cy="590.913" rx="613.473" ry="899.913" fill="url(#paint0_radial_885_14465)"
                    fill-opacity="0.1" />
                <defs>
                    <radialGradient id="paint0_radial_885_14465" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(613.473 590.913) rotate(90) scale(899.913 613.473)">
                        <stop stop-color="#FFC300" />
                        <stop offset="1" stop-color="#181C27" stop-opacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
        <div class="w-full relative z-50">
            <Navbar />
            <div class="container bg-transparent mt-44">
                <h2 class="font-sf_pro font-bold text-[35px] text-white leading-[60px] mx-auto mt-32 mb-10">
                    Мое обучение
                </h2>
                <div class="flex items-center space-x-4">
                    <div :class="[true ? 'bg-m_yellow-100 text-black' : 'bg-m_black-200 text-m_gray-200']"
                        class="px-8 py-3 rounded-3xl font-sf_pro font-medium text-lg hover:bg-m_yellow-100 hover:text-black duration-300 cursor-pointer">
                        Все
                    </div>
                    <div
                        class="flex items-center space-x-3 px-8 py-3 rounded-3xl bg-m_black-200 font-sf_pro font-medium text-lg text-m_gray-200 hover:bg-m_yellow-100 hover:text-black duration-300 cursor-pointer group">
                        <svg class="w-[20px] stroke-m_gray-200 group-hover:stroke-black" viewBox="0 0 21 21" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18.375 13.125V16.625C18.375 17.0891 18.1906 17.5342 17.8624 17.8624C17.5342 18.1906 17.0891 18.375 16.625 18.375H4.375C3.91087 18.375 3.46575 18.1906 3.13756 17.8624C2.80937 17.5342 2.625 17.0891 2.625 16.625V13.125"
                                stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6.125 8.75L10.5 13.125L14.875 8.75" stroke-width="1.8" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M10.5 13.125V2.625" stroke-width="1.8" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <p>Загрузки</p>
                    </div>
                    <div
                        class="flex items-center space-x-3 px-8 py-3 rounded-3xl bg-m_black-200 font-sf_pro font-medium text-lg text-m_gray-200 hover:bg-m_yellow-100 hover:text-black duration-300 cursor-pointer group">
                        <svg class="w-[20px] stroke-m_gray-200 group-hover:stroke-black" viewBox="0 0 20 21" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.8327 18.375L9.99935 14L4.16602 18.375V4.375C4.16602 3.91087 4.34161 3.46575 4.65417 3.13756C4.96673 2.80937 5.39065 2.625 5.83268 2.625H14.166C14.608 2.625 15.032 2.80937 15.3445 3.13756C15.6571 3.46575 15.8327 3.91087 15.8327 4.375V18.375Z"
                                stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p>Сохраненные</p>
                    </div>
                    <div
                        class="flex items-center space-x-3 px-8 py-3 rounded-3xl bg-m_black-200 font-sf_pro font-medium text-lg text-m_gray-200 hover:bg-m_yellow-100 hover:text-black duration-300 cursor-pointer group">
                        <svg class="w-[20px] stroke-m_gray-200 group-hover:stroke-black" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_885_14911)">
                                <path
                                    d="M18.3327 9.2333V9.99997C18.3317 11.797 17.7498 13.5455 16.6738 14.9848C15.5978 16.4241 14.0854 17.477 12.3621 17.9866C10.6389 18.4961 8.79707 18.4349 7.11141 17.8121C5.42575 17.1894 3.98656 16.0384 3.00848 14.5309C2.0304 13.0233 1.56584 11.24 1.68408 9.4469C1.80232 7.65377 2.49702 5.94691 3.66458 4.58086C4.83214 3.21482 6.41 2.26279 8.16284 1.86676C9.91568 1.47073 11.7496 1.65192 13.391 2.3833"
                                    stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18.3333 3.33325L10 11.6749L7.5 9.17492" stroke-width="1.8"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_885_14911">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p>Пройденные</p>
                    </div>
                    <div
                        class="flex items-center space-x-3 px-8 py-3 rounded-3xl bg-m_black-200 font-sf_pro font-medium text-lg text-m_gray-200 hover:bg-m_yellow-100 hover:text-black duration-300 cursor-pointer group">
                        <svg class="w-[20px] stroke-m_gray-200 group-hover:stroke-black" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_885_14913)">
                                <path
                                    d="M9.99935 18.3334C14.6017 18.3334 18.3327 14.6025 18.3327 10.0001C18.3327 5.39771 14.6017 1.66675 9.99935 1.66675C5.39698 1.66675 1.66602 5.39771 1.66602 10.0001C1.66602 14.6025 5.39698 18.3334 9.99935 18.3334Z"
                                    stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10 5V10L13.3333 11.6667" stroke-width="1.8" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_885_14913">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p>История просмотра</p>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-y-8 py-20">
                    <div class="w-[650px] flex items-start space-x-6 bg-m_black-500 rounded-lg p-4">
                        <div class="w-[120px] rounded-lg">
                            <img src="/imgs/person5.png">
                        </div>
                        <div class="flex flex-col space-y-2">
                            <h4 class="font-sf_pro font-medium text-xl text-white">Do Things, Tell People: The Power of
                                Personal Branding</h4>
                            <p class="font-sf_pro font-normal text-lg text-m_gray-100">Anthony Wade</p>
                            <div class="relative pt-2">
                                <div class="absolute w-full border-b-2 border-m_black-300"></div>
                                <div class="absolute w-16 border-b-2 border-yellow-500"></div>
                            </div>
                        </div>
                    </div>
                    <div class="w-[650px] flex items-start space-x-6 bg-m_black-500 rounded-lg p-4">
                        <div class="w-[120px] rounded-lg">
                            <img src="/imgs/person5.png">
                        </div>
                        <div class="flex flex-col space-y-2">
                            <h4 class="font-sf_pro font-medium text-xl text-white">Do Things, Tell People: The Power of
                                Personal Branding</h4>
                            <p class="font-sf_pro font-normal text-lg text-m_gray-100">Anthony Wade</p>
                            <div class="relative pt-2">
                                <div class="absolute w-full border-b-2 border-m_black-300"></div>
                                <div class="absolute w-16 border-b-2 border-yellow-500"></div>
                            </div>
                        </div>
                    </div>
                    <div class="w-[650px] flex items-start space-x-6 bg-m_black-500 rounded-lg p-4">
                        <div class="w-[120px] rounded-lg">
                            <img src="/imgs/person5.png">
                        </div>
                        <div class="flex flex-col space-y-2">
                            <h4 class="font-sf_pro font-medium text-xl text-white">Do Things, Tell People: The Power of
                                Personal Branding</h4>
                            <p class="font-sf_pro font-normal text-lg text-m_gray-100">Anthony Wade</p>
                            <div class="relative pt-2">
                                <div class="absolute w-full border-b-2 border-m_black-300"></div>
                                <div class="absolute w-16 border-b-2 border-yellow-500"></div>
                            </div>
                        </div>
                    </div>
                    <div class="w-[650px] flex items-start space-x-6 bg-m_black-500 rounded-lg p-4">
                        <div class="w-[120px] rounded-lg">
                            <img src="/imgs/person5.png">
                        </div>
                        <div class="flex flex-col space-y-2">
                            <h4 class="font-sf_pro font-medium text-xl text-white">Do Things, Tell People: The Power of
                                Personal Branding</h4>
                            <p class="font-sf_pro font-normal text-lg text-m_gray-100">Anthony Wade</p>
                            <div class="relative pt-2">
                                <div class="absolute w-full border-b-2 border-m_black-300"></div>
                                <div class="absolute w-16 border-b-2 border-yellow-500"></div>
                            </div>
                        </div>
                    </div>
                    <div class="w-[650px] flex items-start space-x-6 bg-m_black-500 rounded-lg p-4">
                        <div class="w-[120px] rounded-lg">
                            <img src="/imgs/person5.png">
                        </div>
                        <div class="flex flex-col space-y-2">
                            <h4 class="font-sf_pro font-medium text-xl text-white">Do Things, Tell People: The Power of
                                Personal Branding</h4>
                            <p class="font-sf_pro font-normal text-lg text-m_gray-100">Anthony Wade</p>
                            <div class="relative pt-2">
                                <div class="absolute w-full border-b-2 border-m_black-300"></div>
                                <div class="absolute w-16 border-b-2 border-yellow-500"></div>
                            </div>
                        </div>
                    </div>
                    <div class="w-[650px] flex items-start space-x-6 bg-m_black-500 rounded-lg p-4">
                        <div class="w-[120px] rounded-lg">
                            <img src="/imgs/person5.png">
                        </div>
                        <div class="flex flex-col space-y-2">
                            <h4 class="font-sf_pro font-medium text-xl text-white">Do Things, Tell People: The Power of
                                Personal Branding</h4>
                            <p class="font-sf_pro font-normal text-lg text-m_gray-100">Anthony Wade</p>
                            <div class="relative pt-2">
                                <div class="absolute w-full border-b-2 border-m_black-300"></div>
                                <div class="absolute w-16 border-b-2 border-yellow-500"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default {
    name: "Notification",
    components: {
        Navbar,
    },
}
</script>