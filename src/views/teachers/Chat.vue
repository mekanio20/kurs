<template>
    <div class="container pt-6 h-full">
        <div class="flex items-center space-x-6 h-full">
            <div class="py-6 pl-8 pr-10 bg-m_black-700 h-full rounded-lg flex flex-col space-y-6">
                <h1 class="font-sf_pro font-bold text-base text-white">Социальные</h1>
                <div class="flex space-x-16 items-center justify-between pt-2">
                    <div class="flex items-center space-x-2">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.81315 16.5C4.02303 16.5 3.26526 16.1861 2.70656 15.6274C2.14786 15.0687 1.83398 14.311 1.83398 13.5208V5.72917C1.83398 4.93904 2.14786 4.18128 2.70656 3.62258C3.26526 3.06388 4.02303 2.75 4.81315 2.75H17.1882C17.5794 2.75 17.9668 2.82706 18.3282 2.97678C18.6897 3.12649 19.0181 3.34594 19.2947 3.62258C19.5714 3.89922 19.7908 4.22764 19.9405 4.58909C20.0903 4.95054 20.1673 5.33794 20.1673 5.72917V13.5208C20.1673 13.9121 20.0903 14.2995 19.9405 14.6609C19.7908 15.0224 19.5714 15.3508 19.2947 15.6274C19.0181 15.9041 18.6897 16.1235 18.3282 16.2732C17.9668 16.4229 17.5794 16.5 17.1882 16.5H11.9283L7.33398 19.9375C7.16375 20.0649 6.96141 20.1424 6.74962 20.1614C6.53783 20.1804 6.32493 20.14 6.13476 20.0449C5.94459 19.9498 5.78464 19.8036 5.67282 19.6227C5.56099 19.4419 5.5017 19.2335 5.50157 19.0208V16.5H4.81315ZM11.4718 15.125H17.1882C17.6136 15.125 18.0216 14.956 18.3225 14.6552C18.6233 14.3543 18.7923 13.9463 18.7923 13.5208V5.72917C18.7923 5.30372 18.6233 4.89569 18.3225 4.59485C18.0216 4.29401 17.6136 4.125 17.1882 4.125H4.81315C4.3877 4.125 3.97967 4.29401 3.67883 4.59485C3.37799 4.89569 3.20898 5.30372 3.20898 5.72917V13.5208C3.20898 14.4063 3.92765 15.125 4.81315 15.125H6.87473V18.5625L11.4718 15.125Z"
                                fill="white" />
                        </svg>
                        <h2 class="font-sf_pro font-medium text-sm text-white">
                            Комментарии
                        </h2>
                    </div>
                    <p class="font-sf_pro font-bold text-sm text-m_yellow-100">1235</p>
                </div>
                <h2 class="font-sf_pro font-bold text-base text-white py-4">Чат</h2>
                <div class="flex flex-col overflow-y-auto !mt-2 -ml-2 no-scrollbar">
                    <router-link v-for="(item, index) in users" :key="index" to="#"
                        class="flex items-center space-x-4 pl-2 pr-20 py-3 hover:bg-m_black-400 rounded-lg">
                        <div class="w-12 h-12 rounded-full bg-m_black-400">
                            <img src="/imgs/person5.png" class="w-full h-full object-cover rounded-full">
                        </div>
                        <h2 class="font-sf_pro font-bold text-base text-white">Алиса Иванова</h2>
                    </router-link>
                </div>
            </div>
            <div class="flex-1 h-full flex flex-col bg-m_black-700 rounded-lg text-white">
                <!-- Header -->
                <div class="py-4 px-8 border-b border-m_gray-400 border-opacity-10 flex items-center justify-between">
                    <div class="flex items-center space-x-4">
                        <svg class="px-2 py-3 w-[23px] cursor-pointer" viewBox="0 0 7 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.8">
                                <path
                                    d="M6.78832 10.4066L2.80142 6.00023L6.78832 1.59383L5.56091 0.240234L0.337891 6.00023L5.56091 11.7602L6.78832 10.4066Z"
                                    fill="white" />
                            </g>
                        </svg>
                        <h2 class="font-sf_pro text-lg font-medium">Маркес Браунли</h2>
                    </div>
                    <button class="text-gray-400 hover:text-red-500">
                        <svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M8.1247 0.833379H10.8329V2.50014H0V0.833379H2.70823L3.48201 0H7.35092L8.1247 0.833379ZM2.321 15C1.46984 15 0.773438 14.25 0.773438 13.3332V3.3327H10.0588V13.3332C10.0588 14.25 9.36241 15 8.51125 15H2.321Z"
                                fill="white" />
                        </svg>
                    </button>
                </div>

                <!-- Chat Messages -->
                <div class="flex-1 overflow-y-auto p-4 space-y-6">
                    <!-- Incoming Message -->
                    <div class="flex items-end space-x-2">
                        <img src="/imgs/person5.png" alt="user" class="w-10 h-10 rounded-full">
                        <div class="bg-m_black-1000 py-4 px-3 rounded-tl-lg rounded-tr-lg rounded-br-lg max-w-md">
                            <p class="font-sf_pro font-normal text-sm leading-[25px]">
                                It is a long established fact that a reader will be distracted by the readable
                                content of a page when looking at its layout.
                            </p>
                            <p class="text-xs text-gray-400 text-right mt-1">6:30 pm</p>
                        </div>
                    </div>

                    <!-- Outgoing Message -->
                    <div class="flex justify-end">
                        <div
                            class="bg-yellow-400 text-black py-4 px-3 rounded-tl-lg rounded-tr-lg rounded-bl-lg max-w-md">
                            <p class="font-sf_pro font-normal text-sm leading-[25px]">
                                There are many variations of passages of Lorem Ipsum available, but the majority
                                have suffered alteration in some form.
                            </p>
                            <p class="text-xs text-right mt-1">6:34 pm</p>
                        </div>
                    </div>

                    <!-- Incoming Message -->
                    <div class="flex items-end space-x-2">
                        <img src="/imgs/person5.png" alt="user" class="w-10 h-10 rounded-full">
                        <div class="bg-m_black-1000 py-4 px-3 rounded-tl-lg rounded-tr-lg rounded-br-lg max-w-md">
                            <p class="font-sf_pro font-normal text-sm leading-[25px]">
                                Contrary to popular belief, Lorem Ipsum is not simply random text.
                            </p>
                            <p class="text-xs text-gray-400 text-right mt-1">6:38 pm</p>
                        </div>
                    </div>
                </div>

                <!-- Message Input -->
                <div class="p-4 border-t border-m_gray-400 border-opacity-10 flex items-center space-x-2">
                    <input v-model="message" type="text" placeholder="Write message"
                        class="flex-1 bg-transparent text-white rounded-lg p-2 focus:outline-none" />
                    <div class="flex items-center space-x-6">
                        <svg class="cursor-pointer" width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.14095 17.668C0.0667286 15.5234 0.101885 12.1133 2.1761 10.0039L9.55892 2.44531C11.1058 0.863281 13.637 0.863281 15.2191 2.44531C16.7308 4.02734 16.7659 6.59375 15.2191 8.17578L8.78548 14.75C7.73079 15.8047 6.00813 15.8047 4.9886 14.7148C3.96907 13.6602 4.00423 11.9727 5.02376 10.9531L10.0863 5.78516C10.2972 5.57422 10.6488 5.53906 10.8949 5.78516L11.6683 6.55859C11.9144 6.76953 11.9144 7.12109 11.7034 7.36719L6.64095 12.5C6.46517 12.6758 6.46517 12.9922 6.60579 13.168C6.78157 13.3086 7.02767 13.3086 7.16829 13.168L13.6019 6.59375C14.2699 5.89062 14.2699 4.73047 13.6019 4.02734C12.9339 3.35938 11.8441 3.35938 11.1761 4.02734L3.79329 11.5859C2.56282 12.8164 2.56282 14.8555 3.75813 16.0859C4.95345 17.3164 6.88704 17.3164 8.08235 16.0859L14.1292 9.89844C14.3402 9.6875 14.6917 9.6875 14.9027 9.89844L15.7113 10.707C15.9574 10.918 15.9574 11.2695 15.7464 11.4805L9.69954 17.668C7.59017 19.8125 4.21517 19.7773 2.14095 17.668Z"
                                fill="#D9D9D9" />
                        </svg>
                        <svg class="cursor-pointer" width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.4234 4.53906V4.75H9.92338V0.25H10.1343C10.3453 0.25 10.5562 0.355469 10.732 0.53125L14.1421 3.94141C14.3179 4.11719 14.4234 4.32812 14.4234 4.53906ZM9.64213 5.875H14.4234V17.4062C14.4234 17.8984 14.0367 18.25 13.5796 18.25H1.76713C1.27494 18.25 0.923379 17.8984 0.923379 17.4062V1.09375C0.923379 0.636719 1.27494 0.25 1.76713 0.25H8.79838V5.03125C8.79838 5.52344 9.14994 5.875 9.64213 5.875ZM4.86088 6.4375C3.94682 6.4375 3.17338 7.21094 3.17338 8.125C3.17338 9.07422 3.94682 9.8125 4.86088 9.8125C5.8101 9.8125 6.54838 9.07422 6.54838 8.125C6.54838 7.21094 5.8101 6.4375 4.86088 6.4375ZM12.1734 14.875V10.9375L10.8023 9.56641C10.6265 9.39062 10.3453 9.39062 10.2046 9.56641L6.54838 13.1875L5.17729 11.8164C5.0015 11.6406 4.75541 11.6406 4.57963 11.7812L3.20854 13.1875L3.17338 14.875H12.1734Z"
                                fill="#D9D9D9" />
                        </svg>
                        <button @click="sendMessage"
                            class="bg-yellow-400 text-black py-2 px-4 rounded-lg hover:bg-yellow-500 flex items-center space-x-2">
                            <span>Send</span> 
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.239 0.59375C12.6374 0.359375 13.1531 0.6875 13.0593 1.15625L11.3718 11.2812C11.3249 11.6562 10.9265 11.8672 10.5984 11.7266L7.69214 10.4844L6.19214 12.3125C5.86401 12.7109 5.20776 12.5 5.20776 11.9375V10.0391L10.8328 3.17188C10.9499 3.03125 10.7624 2.86719 10.6453 2.98438L3.9187 8.91406L1.41089 7.85938C0.989012 7.69531 0.942137 7.08594 1.36401 6.85156L12.239 0.59375Z"
                                    fill="black" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/api/index';
import Sidebar from '@/components/admin/Sidebar.vue';
import AdminHeader from '@/components/admin/Header.vue'
export default {
    name: "Chat",
    components: {
        Sidebar,
        AdminHeader
    },
    data() {
        return {
            users: [
                {
                    id: 1,
                    name: 'Jukkoe Sisao',
                    img: '/imgs/person4.png',
                    email: 'sibyl_kozey@gmail.com',
                    ratin: 4.8
                },
                {
                    id: 2,
                    name: 'Jukkoe Sisao',
                    img: '/imgs/person4.png',
                    email: 'sibyl_kozey@gmail.com',
                    ratin: 4.8
                },
                {
                    id: 3,
                    name: 'Jukkoe Sisao',
                    img: '/imgs/person4.png',
                    email: 'sibyl_kozey@gmail.com',
                    ratin: 4.8
                },
            ]
        }
    },
    created() {
        this.getUsers()
    },
    methods: {
        async getUsers() {

        }
    }
}
</script>