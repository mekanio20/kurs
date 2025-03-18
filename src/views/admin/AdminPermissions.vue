<template>
    <Sidebar active_route="/dashboard/admin/permissions">
        <div class="container">
            <AdminHeader name="Доступ">
                <!-- <AdminButton name="Дать доступ" @click="addPermission"></AdminButton> -->
            </AdminHeader>
            <div class="flex space-x-6">
                <div class="flex-1 flex flex-col space-y-4">
                    <div class="pb-4 border-m_black-300">
                        <input type="text" placeholder="Поиск пользователей"
                            class="py-3 px-6 rounded-lg bg-m_black-600 text-gray-300 focus:outline-none w-96" />
                    </div>
                    <div class="px-6 bg-m_black-700 rounded-lg">
                        <table class="w-full text-left text-gray-200">
                            <thead>
                                <tr class="text-base font-bold uppercase border-b border-m_black-800">
                                    <th class="px-4 py-6"></th>
                                    <th class="px-4 py-6">ID</th>
                                    <th class="px-4 py-6 text-nowrap">Имя, Фамилия</th>
                                    <th class="px-4 py-6">Э-почта</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in users" :key="item.id"
                                    class="border-b border-m_black-800 hover:bg-m_black-800">
                                    <td v-if="users?.length > 0" class="pt-2 text-base text-center font-medium">
                                        <div class="inline-flex items-center">
                                            <label class="flex items-center cursor-pointer relative">
                                                <input :ref="`checkboxRef-${item.id}`" type="checkbox"
                                                    :checked="selectUser === item.id" @click="getPermissions(item.id)"
                                                    class="peer rounded-full h-5 w-5 cursor-pointer transition-all appearance-none border border-white shadow hover:shadow-md checked:border-m_yellow-100 checked:bg-m_yellow-100" />
                                                <span
                                                    class="absolute text-black opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5"
                                                        viewBox="0 0 20 20" fill="currentColor" stroke="currentColor"
                                                        stroke-width="1">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd"></path>
                                                    </svg>
                                                </span>
                                            </label>
                                        </div>
                                    </td>
                                    <td class="px-3 py-4 text-base font-medium">#{{ item.id }}</td>
                                    <td class="px-3 py-4 text-base">{{ item.full_name }}</td>
                                    <td class="px-3 py-4 text-base">{{ item.email }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <Pagination :totalPages="user_totalPages" v-model:currentPage="user_currentPage"
                        @update:currentPage="handlePageChangeUser" />
                </div>
                <div class="flex-1 flex flex-col space-y-4">
                    <div class="pb-4 border-m_black-300">
                        <input type="text" placeholder="Поиск курсов"
                            class="py-3 px-6 rounded-lg bg-m_black-600 text-gray-300 focus:outline-none w-96" />
                    </div>
                    <div class="px-6 bg-m_black-700 rounded-lg">
                        <table class="w-full text-left text-gray-200 ">
                            <thead>
                                <tr class="text-base font-bold uppercase border-b border-m_black-800">
                                    <th class="px-4 py-6"></th>
                                    <th class="px-4 py-6">ID</th>
                                    <th class="px-4 py-6 text-nowrap">Название</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in courses" :key="item.id"
                                    class="border-b border-m_black-800 hover:bg-m_black-800">
                                    <td class="pt-2 text-base font-medium">
                                        <div class="inline-flex items-center">
                                            <label class="flex items-center cursor-pointer relative">
                                                <input :ref="`course-${item.id}`" type="checkbox"
                                                    @change="changePermisson(item.id)"
                                                    class="peer rounded-full h-5 w-5 cursor-pointer transition-all appearance-none border border-white shadow hover:shadow-md checked:border-m_yellow-100 checked:bg-m_yellow-100" />
                                                <span
                                                    class="absolute text-black opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5"
                                                        viewBox="0 0 20 20" fill="currentColor" stroke="currentColor"
                                                        stroke-width="1">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd"></path>
                                                    </svg>
                                                </span>
                                            </label>
                                        </div>
                                    </td>
                                    <td class="px-3 py-4 text-base font-medium">#{{ item.id }}</td>
                                    <td class="px-3 py-4 text-base">{{ item?.name }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <Pagination :totalPages="permission_totalPages" v-model:currentPage="permission_currentPage"
                        @update:currentPage="handlePageChangePermission" />
                </div>
            </div>
        </div>
    </Sidebar>
</template>

<script>
import api from '@/api/index';
import Sidebar from '@/components/admin/Sidebar.vue';
import AdminHeader from '@/components/admin/Header.vue';
import AdminButton from '@/components/base/AdminButton.vue';
import Pagination from '@/components/Pagination.vue';
import { useToast } from "vue-toastification";
export default {
    name: "AdminPermissions",
    components: {
        Sidebar,
        AdminHeader,
        AdminButton,
        Pagination,
    },
    data() {
        return {
            user_offset: 0,
            permission_offset: 0,
            user_currentPage: 1,
            permission_currentPage: 1,
            user_totalPages: 0,
            permission_totalPages: 0,
            selectUser: null,
            users: [],
            courses: [],
            permissions: []
        }
    },
    created() {
        this.getUsers()
    },
    methods: {
        handlePageChangeUser(newPage) {
            this.user_currentPage = newPage;
            this.user_offset = (this.user_currentPage - 1) * 10
            this.getUsers()
        },
        handlePageChangePermission(newPage) {
            this.permission_currentPage = newPage;
            this.permission_offset = (this.permission_currentPage - 1) * 10
            this.getPermissions()
        },
        async getUsers() {
            const users = await api.get(`/users/?is_teacher=false&offset=${this.user_offset}&limit=10`)
            this.user_totalPages = Math.ceil(users.data.count / 10)
            this.users = users.data.results
        },
        async getPermissions(id) {
            this.selectUser = id
            const isChecked = await this.$refs[`checkboxRef-${id}`][0]
            const courses = await api.get(`/courses/?offset=${this.permission_offset}&limit=10`)
            this.permission_totalPages = Math.ceil(courses.data.count / 10)
            this.courses = await courses.data.results
            if (isChecked.checked) {
                const permissions = await api.get(`/course-users/?user=${id}`)
                this.permissions = await permissions.data.results
                let isChecked = false
                for (let i = 0; i < this.courses.length; i++) {
                    for (let j = 0; j < this.permissions.length; j++) {
                        if (this.courses[i].id === this.permissions[j].course.id) {
                            isChecked = true
                            this.$refs[`course-${this.courses[i].id}`][0].checked = true
                        }
                    }
                    if (!isChecked) { this.$refs[`course-${this.courses[i].id}`][0].checked = false }
                    isChecked = false
                }
            }
        },
        async changePermisson(id) {
            const toast = useToast();
            const isChecked = await this.$refs[`course-${id}`][0]
            if (isChecked.checked) {
                const permission = await api.post('/course-users/', { course: id, user: this.selectUser })
                if (permission.status === 201) { toast.success('Успешно добавлено') }
                else { toast.error('Произошла ошибка') }
            } else {
                const permissionId = await api.get(`/course-users/?user=${this.selectUser}&course=${id}`)
                const permission = await api.delete(`/course-users/${permissionId.data.results[0].id}/`)
                if (permission.status === 204) { toast.success('Успешно удалено') }
                else { toast.error('Произошла ошибка') }
            }
        }
    }
}
</script>