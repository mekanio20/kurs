<template>
    <div class="w-full min-h-100vh relative overflow-hidden">
        <div class="absolute left-0 -bottom-40">
            <svg width="580" height="861" viewBox="0 0 580 861" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="-33.5267" cy="899.913" rx="613.473" ry="899.913" fill="url(#paint0_radial_585_4648)"
                    fill-opacity="0.13" />
                <defs>
                    <radialGradient id="paint0_radial_585_4648" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(-33.5267 899.913) rotate(90) scale(899.913 613.473)">
                        <stop stop-color="#FFC300" />
                        <stop offset="1" stop-color="#181C27" stop-opacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
        <div class="absolute right-0 top-0">
            <svg width="538" height="1024" viewBox="0 0 538 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="613.473" cy="590.913" rx="613.473" ry="899.913" fill="url(#paint0_radial_585_4649)"
                    fill-opacity="0.13" />
                <defs>
                    <radialGradient id="paint0_radial_585_4649" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(613.473 590.913) rotate(90) scale(899.913 613.473)">
                        <stop stop-color="#FFC300" />
                        <stop offset="1" stop-color="#181C27" stop-opacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
        <div class="w-full relative z-50">
            <Navbar />
            <div class="container bg-transparent my-44">
                <div class="w-full flex md:flex-row flex-col items-stretch">
                    <div class="md:w-[550px] w-full lg:p-10 md:p-8 p-6 bg-m_black-500 rounded-xl lg:mr-10 md:mr-5 mb-2">
                        <h1 class="font-sf_pro font-bold lg:text-2xl text-xl text-white md:block hidden">Личный кабинет
                        </h1>
                        <div class="flex md:flex-col flex-row justify-evenly md:space-y-8 md:space-x-0 space-x-6 md:my-20">
                            <router-link to="#" class="flex items-center space-x-6">
                                <svg class="md:w-[25px] w-[20px]" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.16699 3.33325H3.33366C2.89163 3.33325 2.46771 3.50885 2.15515 3.82141C1.84259 4.13397 1.66699 4.55789 1.66699 4.99992V16.6666C1.66699 17.1086 1.84259 17.5325 2.15515 17.8451C2.46771 18.1577 2.89163 18.3333 3.33366 18.3333H15.0003C15.4424 18.3333 15.8663 18.1577 16.1788 17.8451C16.4914 17.5325 16.667 17.1086 16.667 16.6666V10.8333"
                                        stroke="white" stroke-width="1.2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M15.417 2.08344C15.7485 1.75192 16.1982 1.56567 16.667 1.56567C17.1358 1.56567 17.5855 1.75192 17.917 2.08344C18.2485 2.41496 18.4348 2.8646 18.4348 3.33344C18.4348 3.80228 18.2485 4.25192 17.917 4.58344L10.0003 12.5001L6.66699 13.3334L7.50033 10.0001L15.417 2.08344Z"
                                        stroke="white" stroke-width="1.2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                <div class="font-sf_pro font-medium lg:text-lg text-base text-white md:block hidden">
                                    Редактировать профиль
                                </div>
                            </router-link>
                            <router-link to="#" class="flex items-center space-x-6">
                                <svg class="md:w-[25px] w-[20px]" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_585_5094)">
                                        <path
                                            d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                                            stroke="white" stroke-width="1.2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M16.1663 12.4999C16.0554 12.7513 16.0223 13.0301 16.0713 13.3004C16.1204 13.5707 16.2492 13.8202 16.4413 14.0166L16.4913 14.0666C16.6463 14.2214 16.7692 14.4052 16.8531 14.6075C16.937 14.8098 16.9802 15.0267 16.9802 15.2458C16.9802 15.4648 16.937 15.6817 16.8531 15.884C16.7692 16.0863 16.6463 16.2701 16.4913 16.4249C16.3366 16.5799 16.1527 16.7028 15.9504 16.7867C15.7481 16.8706 15.5312 16.9137 15.3122 16.9137C15.0931 16.9137 14.8763 16.8706 14.6739 16.7867C14.4716 16.7028 14.2878 16.5799 14.133 16.4249L14.083 16.3749C13.8866 16.1828 13.6372 16.0539 13.3668 16.0049C13.0965 15.9559 12.8177 15.989 12.5663 16.0999C12.3199 16.2056 12.1097 16.381 11.9616 16.6045C11.8135 16.8281 11.7341 17.0901 11.733 17.3583V17.4999C11.733 17.9419 11.5574 18.3659 11.2449 18.6784C10.9323 18.991 10.5084 19.1666 10.0663 19.1666C9.62431 19.1666 9.20039 18.991 8.88783 18.6784C8.57527 18.3659 8.39967 17.9419 8.39967 17.4999V17.4249C8.39322 17.1491 8.30394 16.8816 8.14343 16.6572C7.98293 16.4328 7.75862 16.2618 7.49967 16.1666C7.24833 16.0557 6.96951 16.0226 6.69918 16.0716C6.42885 16.1206 6.17941 16.2495 5.98301 16.4416L5.93301 16.4916C5.77822 16.6465 5.5944 16.7695 5.39207 16.8533C5.18974 16.9372 4.97287 16.9804 4.75384 16.9804C4.53481 16.9804 4.31794 16.9372 4.11561 16.8533C3.91328 16.7695 3.72946 16.6465 3.57467 16.4916C3.41971 16.3368 3.29678 16.153 3.21291 15.9507C3.12903 15.7483 3.08586 15.5314 3.08586 15.3124C3.08586 15.0934 3.12903 14.8765 3.21291 14.6742C3.29678 14.4719 3.41971 14.288 3.57467 14.1332L3.62467 14.0833C3.81679 13.8869 3.94566 13.6374 3.99468 13.3671C4.04369 13.0967 4.0106 12.8179 3.89967 12.5666C3.79404 12.3201 3.61864 12.1099 3.39506 11.9618C3.17149 11.8138 2.9095 11.7343 2.64134 11.7333H2.49967C2.05765 11.7333 1.63372 11.5577 1.32116 11.2451C1.0086 10.9325 0.833008 10.5086 0.833008 10.0666C0.833008 9.62456 1.0086 9.20063 1.32116 8.88807C1.63372 8.57551 2.05765 8.39992 2.49967 8.39992H2.57467C2.8505 8.39347 3.11801 8.30418 3.34242 8.14368C3.56684 7.98317 3.73777 7.75886 3.83301 7.49992C3.94394 7.24857 3.97703 6.96976 3.92801 6.69943C3.879 6.4291 3.75012 6.17965 3.55801 5.98325L3.50801 5.93325C3.35305 5.77846 3.23012 5.59465 3.14624 5.39232C3.06237 5.18999 3.0192 4.97311 3.0192 4.75408C3.0192 4.53506 3.06237 4.31818 3.14624 4.11585C3.23012 3.91352 3.35305 3.72971 3.50801 3.57492C3.6628 3.41996 3.84661 3.29703 4.04894 3.21315C4.25127 3.12928 4.46815 3.08611 4.68717 3.08611C4.9062 3.08611 5.12308 3.12928 5.32541 3.21315C5.52774 3.29703 5.71155 3.41996 5.86634 3.57492L5.91634 3.62492C6.11274 3.81703 6.36219 3.94591 6.63252 3.99492C6.90285 4.04394 7.18166 4.01085 7.43301 3.89992H7.49967C7.74615 3.79428 7.95635 3.61888 8.10442 3.39531C8.25248 3.17173 8.33194 2.90974 8.33301 2.64159V2.49992C8.33301 2.05789 8.5086 1.63397 8.82116 1.32141C9.13372 1.00885 9.55765 0.833252 9.99967 0.833252C10.4417 0.833252 10.8656 1.00885 11.1782 1.32141C11.4907 1.63397 11.6663 2.05789 11.6663 2.49992V2.57492C11.6674 2.84307 11.7469 3.10506 11.8949 3.32864C12.043 3.55221 12.2532 3.72762 12.4997 3.83325C12.751 3.94418 13.0298 3.97727 13.3002 3.92826C13.5705 3.87924 13.8199 3.75037 14.0163 3.55825L14.0663 3.50825C14.2211 3.35329 14.4049 3.23036 14.6073 3.14649C14.8096 3.06261 15.0265 3.01944 15.2455 3.01944C15.4645 3.01944 15.6814 3.06261 15.8837 3.14649C16.0861 3.23036 16.2699 3.35329 16.4247 3.50825C16.5796 3.66304 16.7026 3.84685 16.7864 4.04918C16.8703 4.25151 16.9135 4.46839 16.9135 4.68742C16.9135 4.90644 16.8703 5.12332 16.7864 5.32565C16.7026 5.52798 16.5796 5.7118 16.4247 5.86658L16.3747 5.91658C16.1826 6.11298 16.0537 6.36243 16.0047 6.63276C15.9557 6.90309 15.9887 7.1819 16.0997 7.43325V7.49992C16.2053 7.74639 16.3807 7.9566 16.6043 8.10466C16.8279 8.25272 17.0899 8.33218 17.358 8.33325H17.4997C17.9417 8.33325 18.3656 8.50885 18.6782 8.82141C18.9907 9.13397 19.1663 9.55789 19.1663 9.99992C19.1663 10.4419 18.9907 10.8659 18.6782 11.1784C18.3656 11.491 17.9417 11.6666 17.4997 11.6666H17.4247C17.1565 11.6677 16.8945 11.7471 16.671 11.8952C16.4474 12.0432 16.272 12.2534 16.1663 12.4999V12.4999Z"
                                            stroke="white" stroke-width="1.2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_585_5094">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div class="font-sf_pro font-medium lg:text-lg text-base text-white md:block hidden">
                                    Настройки учетной записи
                                </div>
                            </router-link>
                            <router-link to="#" class="flex items-center space-x-6">
                                <svg class="md:w-[25px] w-[20px]" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.0003 18.3334C14.6027 18.3334 18.3337 14.6025 18.3337 10.0001C18.3337 5.39771 14.6027 1.66675 10.0003 1.66675C5.39795 1.66675 1.66699 5.39771 1.66699 10.0001C1.66699 14.6025 5.39795 18.3334 10.0003 18.3334Z"
                                        stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M1.66699 10H18.3337" stroke="white" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M10.0003 1.66675C12.0847 3.94871 13.2693 6.91011 13.3337 10.0001C13.2693 13.0901 12.0847 16.0515 10.0003 18.3334C7.91593 16.0515 6.73136 13.0901 6.66699 10.0001C6.73136 6.91011 7.91593 3.94871 10.0003 1.66675V1.66675Z"
                                        stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <div class="font-sf_pro font-medium lg:text-lg text-base text-white md:block hidden">
                                    Язык
                                </div>
                            </router-link>
                            <router-link to="#" class="flex items-center space-x-6">
                                <svg class="md:w-[25px] w-[20px]" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.0003 18.3334C14.6027 18.3334 18.3337 14.6025 18.3337 10.0001C18.3337 5.39771 14.6027 1.66675 10.0003 1.66675C5.39795 1.66675 1.66699 5.39771 1.66699 10.0001C1.66699 14.6025 5.39795 18.3334 10.0003 18.3334Z"
                                        stroke="white" stroke-width="1.3" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M10 13.3333V10" stroke="white" stroke-width="1.3" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M10 6.66675H10.0083" stroke="white" stroke-width="1.3"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <div class="font-sf_pro font-medium lg:text-lg text-base text-white md:block hidden">
                                    Поддержка и помощь
                                </div>
                            </router-link>
                        </div>
                    </div>
                    <div class="w-full p-10 bg-m_black-500 rounded-xl">
                        <div class="w-full flex-col md:space-y-10 space-y-5">
                            <div class="md:flex hidden items-center space-x-6">
                                <svg class="lg:w-[30px] w-[20px]" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.16699 3.33325H3.33366C2.89163 3.33325 2.46771 3.50885 2.15515 3.82141C1.84259 4.13397 1.66699 4.55789 1.66699 4.99992V16.6666C1.66699 17.1086 1.84259 17.5325 2.15515 17.8451C2.46771 18.1577 2.89163 18.3333 3.33366 18.3333H15.0003C15.4424 18.3333 15.8663 18.1577 16.1788 17.8451C16.4914 17.5325 16.667 17.1086 16.667 16.6666V10.8333"
                                        stroke="white" stroke-width="1.2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M15.417 2.08344C15.7485 1.75192 16.1982 1.56567 16.667 1.56567C17.1358 1.56567 17.5855 1.75192 17.917 2.08344C18.2485 2.41496 18.4348 2.8646 18.4348 3.33344C18.4348 3.80228 18.2485 4.25192 17.917 4.58344L10.0003 12.5001L6.66699 13.3334L7.50033 10.0001L15.417 2.08344Z"
                                        stroke="white" stroke-width="1.2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                <div class="font-sf_pro font-bold lg:text-2xl text-xl text-white">
                                    Редактировать профиль
                                </div>
                            </div>
                            <div class="flex md:flex-row flex-col md:space-y-0 space-y-6 items-center lg:space-x-16 md:space-x-10 md:pt-10 pb-4">
                                <div class="w-24 rounded-full">
                                    <img src="/imgs/person4.png">
                                </div>
                                <div
                                    class="flex items-center md:space-x-6 space-x-3 lg:px-8 px-6 py-3 font-sf_pro font-medium lg:text-lg sm:text-base text-sm rounded-xl text-white border border-white cursor-pointer">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M17.4167 2.75H4.58333C3.57081 2.75 2.75 3.57081 2.75 4.58333V17.4167C2.75 18.4292 3.57081 19.25 4.58333 19.25H17.4167C18.4292 19.25 19.25 18.4292 19.25 17.4167V4.58333C19.25 3.57081 18.4292 2.75 17.4167 2.75Z"
                                            stroke="white" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M19.2497 13.7501L14.6663 9.16675L4.58301 19.2501" stroke="white"
                                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M7.79199 9.16675C8.55138 9.16675 9.16699 8.55114 9.16699 7.79175C9.16699 7.03236 8.55138 6.41675 7.79199 6.41675C7.0326 6.41675 6.41699 7.03236 6.41699 7.79175C6.41699 8.55114 7.0326 9.16675 7.79199 9.16675Z"
                                            stroke="white" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                    <div>Изменить</div>
                                </div>
                            </div>
                            <div class="flex flex-col space-y-2">
                                <label class="font-sf_pro font-normal text-m_gray-100 sm:text-base text-sm">Имя</label>
                                <input
                                    class="lg:w-2/3 w-full bg-m_black-300 px-8 py-4 rounded-lg font-sf_pro font-normal sm:text-lg text-sm text-white focus:outline-none focus:ring-1 focus:ring-m_yellow-200 focus:border-transparent"
                                    type="text" value="Мария">
                            </div>
                            <div class="flex flex-col space-y-2">
                                <label
                                    class="font-sf_pro font-normal text-m_gray-100 sm:text-base text-sm">Фамилия</label>
                                <input
                                    class="lg:w-2/3 w-full bg-m_black-300 px-8 py-4 rounded-lg font-sf_pro font-normal sm:text-lg text-sm text-white focus:outline-none focus:ring-1 focus:ring-m_yellow-200 focus:border-transparent"
                                    type="text" value="Смирнова">
                            </div>
                            <div class="flex flex-col space-y-2 lg:w-2/3 w-full">
                                <label
                                    class="font-sf_pro font-normal text-m_gray-100 sm:text-base text-sm">Информация</label>
                                <textarea v-model="infoText"
                                    class="w-full bg-m_black-300 px-8 py-4 rounded-lg font-sf_pro font-normal sm:text-lg text-sm text-white focus:outline-none focus:ring-1 focus:ring-m_yellow-200 focus:border-transparent"
                                    rows="5" placeholder="Write your information here..."></textarea>
                            </div>
                            <div class="flex items-center space-x-6 pt-5">
                                <div
                                    class="w-fit flex items-center space-x-6 px-8 py-3 font-sf_pro font-normal sm:text-base text-sm rounded-lg text-m_yellow-100 border border-m_yellow-100 cursor-pointer">
                                    Отмена
                                </div>
                                <div
                                    class="w-fit flex items-center space-x-6 px-8 py-3 font-sf_pro font-normal sm:text-base text-sm rounded-lg text-black bg-m_yellow-100 cursor-pointer">
                                    Обновить
                                </div>
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
    name: "Profile",
    components: {
        Navbar,
    },
    data() {
        return {
            infoText: "With a deep commitment to lifelong learning, I have dedicated my career to helping others achieve their goals through accessible and engaging online courses 😊💜 I specialize in, where I’ve helped countless students develop the skills they need to excel in their careers.",
        }
    },
}
</script>