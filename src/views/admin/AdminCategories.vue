<template>
    <Sidebar active_route="/dashboard/admin/categories">
        <div class="container">
            <AdminHeader name="Категории">
                <AdminButton name="Добавить категорию" @click="addCategory"></AdminButton>
            </AdminHeader>
            <div class="p-6 bg-m_black-700 rounded-lg">
                <table class="w-full text-left text-gray-200">
                    <thead>
                        <tr class="text-base font-bold uppercase border-b border-m_black-800">
                            <th class="px-4 py-6">ID</th>
                            <th class="px-4 py-6">фото</th>
                            <th class="px-4 py-6">название</th>
                            <th class="px-4 py-6">Количество видео</th>
                            <th class="px-4 py-6">Статус</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in categories" :key="item.id"
                            class="border-b border-m_black-800 hover:bg-m_black-800">
                            <td class="px-3 py-4 text-base font-medium">#{{ item.id }}</td>
                            <td class="px-3 py-4">
                                <img class="w-14 h-14 rounded-lg object-cover" :src="item.image"></td>
                            <td class="px-3 py-4 text-base">{{ item.name }}</td>
                            <td class="px-3 py-4 text-base pl-24">{{ item.courses_count }}</td>
                            <td class="px-3 py-4 text-base">
                                <span :class="['px-3 py-2 rounded-lg text-xs font-semibold',
                                    item.is_active === true ? 'bg-m_yellow-400 text-m_yellow-500' : 'bg-m_red-100 text-m_red-200']">
                                    {{ item.is_active === true ? 'Активный' : 'Не активен' }}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="mt-10 flex justify-end">
                    <Pagination 
                        :totalPages="totalPages" 
                        v-model:currentPage="currentPage" 
                        @update:currentPage="handlePageChange"
                    />
                </div>
            </div>
        </div>
    </Sidebar>
</template>

<script>
import api from '@/api/index';
import Sidebar from '@/components/admin/Sidebar.vue';
import AdminHeader from '@/components/admin/Header.vue'
import AdminButton from '@/components/base/AdminButton.vue';
import Pagination from '@/components/Pagination.vue';
export default {
    name: "AdminCategories",
    components: {
        Sidebar,
        AdminHeader,
        AdminButton,
        Pagination
    },
    data() {
        return {
            offset: 0,
            currentPage: 1,
            totalPages: null,
            categories: null
        }
    },
    created() {
        this.getCategories()
    },
    methods: {
        handlePageChange(newPage) {
            this.currentPage = newPage;
            this.offset = (this.currentPage - 1) * 10
            this.getUsers()
        },
        addCategory() {
            this.$router.push('/dashboard/admin/add/category')
        },
        // --------------
        async getCategories() {
            const response = await api.get(`/categories/?offset=${this.offset}&limit=10`)
            this.totalPages = Math.ceil(response.data.count / 10)
            this.categories = response.data.results
        }
    }
}
</script>