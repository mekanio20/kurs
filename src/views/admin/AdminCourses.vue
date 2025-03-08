<template>
    <Sidebar active_route="/dashboard/admin/courses">
        <div class="container">
            <AdminHeader name="Курсы"></AdminHeader>
            <div class="p-10 flex items-center justify-between bg-m_black-700 rounded-xl">
                <h1 class="font-sf_pro font-bold text-2xl text-white">Создавай, обучай и вдохновляй!</h1>
                <AdminButton name="Создать новый курс" :bold="true" @click="addCourse"></AdminButton>
            </div>
            <div class="py-8 flex items-center justify-end">
                <div @click="isOpen = !isOpen" class="relative flex items-center space-x-2 cursor-pointer select-none">
                    <div class="font-sf_pro font-normal text-base text-white">{{ currentFilter }}</div>
                    <svg :class="[isOpen ? 'rotate-180' : '']" width="10" height="6" viewBox="0 0 10 6" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0.646447 0.659675C0.841709 0.446775 1.15829 0.446775 1.35355 0.659675L4.64645 4.25C4.84171 4.4629 5.15829 4.4629 5.35355 4.25L8.64645 0.659676C8.84171 0.446776 9.15829 0.446776 9.35355 0.659676C9.54882 0.872575 9.54882 1.21775 9.35355 1.43065L6.06066 5.02098C5.47487 5.65967 4.52513 5.65968 3.93934 5.02098L0.646447 1.43065C0.451184 1.21775 0.451184 0.872574 0.646447 0.659675Z"
                            fill="white" fill-opacity="0.4" />
                    </svg>
                    <div v-if="isOpen" class="absolute z-50 top-8 right-0 bg-m_black-100 rounded-lg">
                        <p v-for="item in filters" :key="item" @click="sendFilter(item)"
                            v-show="item != currentFilter"
                            class="font-sf_pro font-normal text-sm text-white text-nowrap px-4 py-3 hover:bg-m_black-200 rounded-lg">
                            {{ item }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-3 gap-8 py-4 relative">
                <Card v-for="item in courses" :key="item.id" :course="item" />
            </div>
            <div class="mt-10 flex justify-end">
                <Pagination :totalPages="totalPages" v-model:currentPage="currentPage"
                    @update:currentPage="handlePageChange" />
            </div>
        </div>
    </Sidebar>
</template>

<script>
import api from '@/api/index';
import Sidebar from '@/components/admin/Sidebar.vue';
import Pagination from '@/components/Pagination.vue';
import AdminHeader from '@/components/admin/Header.vue';
import AdminButton from '@/components/base/AdminButton.vue';
import Card from '@/components/Card.vue';
export default {
    name: "AdminCourses",
    components: {
        Sidebar,
        AdminHeader,
        AdminButton,
        Pagination,
        Card
    },
    data() {
        return {
            offset: 0,
            currentPage: 1,
            totalPages: null,
            courses: null,
            isOpen: false,
            currentFilter: "Все",
            filters: [
                "Все",
                "Цена курса по убыванию",
                "Цена курса по возрастанию",
                "Рейтинг по убыванию",
                "Рейтинг по возрастанию",
                "Количество участников по убыванию",
                "Количество участников по возрастанию"
            ]
        }
    },
    created() {
        this.getCourses()
    },
    methods: {
        sendFilter(item) {
            this.currentFilter = item
        },
        handlePageChange(newPage) {
            this.currentPage = newPage;
            this.offset = (this.currentPage - 1) * 10
            this.getCourses()
        },
        async getCourses() {
            const response = await api.get(`/courses/?offset=${this.offset}&limit=10`)
            this.totalPages = Math.ceil(response.data.count / 10)
            this.courses = response.data.results
        },
        addCourse() {
            this.$router.push('/dashboard/admin/add/course')
        },
    }
}
</script>