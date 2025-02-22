<template>
    <Sidebar active_route="/dashboard/admin/permissions">
        <div class="container">
            <AdminHeader name="Доступ">
                <AdminButton name="Доступ" @click="addMentor"></AdminButton>
            </AdminHeader>
            
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
import AdminHeader from '@/components/admin/Header.vue';
import AdminButton from '@/components/base/AdminButton.vue';
import Pagination from '@/components/Pagination.vue';
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
            currentPage: 1,
            totalPages: 10,
        }
    },
    created() {
        this.getPermissions()
    },
    methods: {
        handlePageChange(newPage) {
            this.currentPage = newPage;
            console.log('Sahypa:', newPage);
        },
        async getPermissions() {

        }
    }
}
</script>