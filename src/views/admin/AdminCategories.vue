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
                                <img class="w-14 h-14 rounded-lg object-cover" :src="item.foto"></td>
                            <td class="px-3 py-4 text-base">{{ item.name }}</td>
                            <td class="px-3 py-4 text-base">{{ item.kal }}</td>
                            <td class="px-3 py-4 text-base">
                                <span :class="[
                            'px-3 py-2 rounded-lg text-xs font-semibold',
                            item.status === 'Активный' ? 'bg-m_yellow-400 text-m_yellow-500' : 'bg-m_red-100 text-m_red-200'
                        ]">
                                    {{ item.status }}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </Sidebar>
</template>

<script>
import Sidebar from '@/components/admin/Sidebar.vue';
import AdminHeader from '@/components/admin/Header.vue'
import AdminButton from '@/components/base/AdminButton.vue';
export default {
    name: "AdminCategories",
    components: {
        Sidebar,
        AdminHeader,
        AdminButton
    },
    data() {
        return {
            categories: [
                { id: 123, foto: '/imgs/bitmap.png', name: 'Маркетинг', kal: 32, status: 'Активный' },
                { id: 124, foto: '/imgs/bitmap.png', name: 'Искусство и дизайн', kal: 32, status: 'Не активен' },
                { id: 125, foto: '/imgs/bitmap.png', name: 'Бизнес и предпринимательство', kal: 32, status: 'Активный' },
                { id: 126, foto: '/imgs/bitmap.png', name: 'Сообщество и правительство', kal: 32, status: 'Активный' },
            ]
        }
    },
    methods: {
        addCategory() {
            this.$router.push('/dashboard/admin/add/category')
        }
    }
}
</script>