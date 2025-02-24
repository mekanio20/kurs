<template>
    <Sidebar active_route="/dashboard/admin/home">
        <div class="container">
            <AdminHeader name="Обзор">
                <div @click="isOpen = !isOpen" class="relative flex items-center space-x-2 cursor-pointer select-none">
                    <div class="font-sf_pro font-normal text-sm text-white">{{ currentDate }}</div>
                    <svg :class="[isOpen ? 'rotate-180' : '']" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0.646447 0.659675C0.841709 0.446775 1.15829 0.446775 1.35355 0.659675L4.64645 4.25C4.84171 4.4629 5.15829 4.4629 5.35355 4.25L8.64645 0.659676C8.84171 0.446776 9.15829 0.446776 9.35355 0.659676C9.54882 0.872575 9.54882 1.21775 9.35355 1.43065L6.06066 5.02098C5.47487 5.65967 4.52513 5.65968 3.93934 5.02098L0.646447 1.43065C0.451184 1.21775 0.451184 0.872574 0.646447 0.659675Z"
                            fill="white" fill-opacity="0.4" />
                    </svg>
                    <div v-if="isOpen" class="absolute top-8 right-0 bg-m_black-100 rounded-lg">
                        <p v-for="item in dates" :key="item" @click="sendDate(item)" v-show="item != currentDate" class="font-sf_pro font-normal text-sm text-white text-nowrap px-4 py-3 hover:bg-m_black-200 rounded-lg">
                            {{ item }}
                        </p>
                    </div>
                </div>
            </AdminHeader>
            <div class="flex items-center space-x-6">
                <div class="flex-1 p-6 rounded-xl bg-m_green-100 text-black">
                    <div class="font-sf_pro font-bold text-sm pb-10">Просмотры</div>
                    <div class="flex items-center justify-between">
                        <div class="font-sf_pro text-3xl tracking-widest">7,265</div>
                        <div class="flex items-center space-x-2">
                            <div class="font-sf_pro text-base tracking-widest">+11.02%</div>
                            <svg width="20" height="20" viewBox="0 0 17 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M8.95488 5.60777L14.5 4L13.1198 9.6061L11.398 7.9532L8.62069 10.8463C8.52641 10.9445 8.39615 11 8.26 11C8.12385 11 7.99359 10.9445 7.89931 10.8463L5.86 8.72199L2.86069 11.8463C2.66946 12.0455 2.35294 12.0519 2.15373 11.8607C1.95453 11.6695 1.94807 11.3529 2.13931 11.1537L5.49931 7.65373C5.59359 7.55552 5.72385 7.5 5.86 7.5C5.99615 7.5 6.12641 7.55552 6.22069 7.65373L8.26 9.77801L10.6766 7.26067L8.95488 5.60777Z"
                                    fill="#1C1C1C" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="flex-1 p-6 rounded-xl bg-m_blue-100 text-black">
                    <div class="font-sf_pro font-bold text-sm pb-10">Новые пользователи</div>
                    <div class="flex items-center justify-between">
                        <div class="font-sf_pro text-3xl tracking-widest">156</div>
                        <div class="flex items-center space-x-2">
                            <div class="font-sf_pro text-base tracking-widest">+15.02%</div>
                            <svg width="20" height="20" viewBox="0 0 17 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M8.95488 5.60777L14.5 4L13.1198 9.6061L11.398 7.9532L8.62069 10.8463C8.52641 10.9445 8.39615 11 8.26 11C8.12385 11 7.99359 10.9445 7.89931 10.8463L5.86 8.72199L2.86069 11.8463C2.66946 12.0455 2.35294 12.0519 2.15373 11.8607C1.95453 11.6695 1.94807 11.3529 2.13931 11.1537L5.49931 7.65373C5.59359 7.55552 5.72385 7.5 5.86 7.5C5.99615 7.5 6.12641 7.55552 6.22069 7.65373L8.26 9.77801L10.6766 7.26067L8.95488 5.60777Z"
                                    fill="#1C1C1C" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Sidebar>
</template>

<script>
import Sidebar from '@/components/admin/Sidebar.vue';
import AdminHeader from '@/components/admin/Header.vue'
export default {
    name: "AdminHome",
    components: {
        Sidebar,
        AdminHeader
    },
    data() {
        return {
            isOpen: false,
            currentDate: 'Сегодня',
            dates: ['Сегодня', 'Последний месяц', 'Последний год']
        }
    },
    methods: {
        sendDate(item) {
            this.currentDate = item
        }
    }
}
</script>