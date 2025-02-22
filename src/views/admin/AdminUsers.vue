<template>
    <Sidebar active_route="/dashboard/admin/users">
        <div class="container">
            <AdminHeader name="Пользователи">
                <div class="flex items-center space-x-2 cursor-pointer">
                    <div class="font-sf_pro font-normal text-sm text-white">Все</div>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0.646447 0.659675C0.841709 0.446775 1.15829 0.446775 1.35355 0.659675L4.64645 4.25C4.84171 4.4629 5.15829 4.4629 5.35355 4.25L8.64645 0.659676C8.84171 0.446776 9.15829 0.446776 9.35355 0.659676C9.54882 0.872575 9.54882 1.21775 9.35355 1.43065L6.06066 5.02098C5.47487 5.65967 4.52513 5.65968 3.93934 5.02098L0.646447 1.43065C0.451184 1.21775 0.451184 0.872574 0.646447 0.659675Z"
                            fill="white" fill-opacity="0.4" />
                    </svg>
                </div>
            </AdminHeader>
            <div class="p-6 bg-m_black-700 rounded-lg">
                <table class="w-full text-left text-gray-200">
                    <thead>
                        <tr class="text-sm font-semibold uppercase border-b border-m_black-800">
                            <th class="px-4 py-6">ID</th>
                            <th class="px-4 py-6">Имя, Фамилия</th>
                            <th class="px-4 py-6">Э-почта</th>
                            <th class="px-4 py-6">Дата добав.</th>
                            <th class="px-4 py-6">Тип пользователя</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.id" class="border-b border-m_black-800 hover:bg-m_black-800">
                            <td class="px-4 py-6 text-sm font-medium">#{{ user.id }}</td>
                            <td class="px-4 py-6 text-sm">{{ user.full_name }}</td>
                            <td class="px-4 py-6 text-sm">{{ user.email }}</td>
                            <td class="px-4 py-6 text-sm">{{ user.date_joined }}</td>
                            <td class="px-4 py-6 text-sm">
                                <span :class="['px-4 py-2 rounded-lg text-xs font-semibold',
                                    user.is_teacher == true ? 'bg-m_yellow-300 text-m_yellow-100' : user.is_staff ? 'bg-green-600 text-green-100' : 'bg-m_blue-200 text-m_blue-300']">
                                    {{ user.is_teacher == true ? 'Наставник' : user.is_staff ? 'Администратор' : 'Пользователь' }}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="mt-10 flex justify-end">
                    <Pagination :totalPages="totalPages" v-model:currentPage="currentPage"
                        @update:currentPage="handlePageChange" />
                </div>
            </div>
        </div>
    </Sidebar>
</template>

<script>
import api from '@/api/index';
import Sidebar from '@/components/admin/Sidebar.vue';
import Pagination from '@/components/Pagination.vue';
import AdminHeader from '@/components/admin/Header.vue'
export default {
    name: "AdminUsers",
    components: {
        Sidebar,
        AdminHeader,
        Pagination,
    },
    data() {
        return {
            currentPage: 1,
            totalPages: 10,
            users: null
        }
    },
    created() {
        this.getUsers()
    },
    methods: {
        handlePageChange(newPage) {
            this.currentPage = newPage;
            console.log('Sahypa:', newPage);
        },
        async getUsers() {
            const response = await api.get('/users/')
            this.users = response.data.results
        }
    }
}
</script>