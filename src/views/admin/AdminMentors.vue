<template>
    <Sidebar active_route="/dashboard/admin/mentors">
        <div class="container">
            <AdminHeader name="Наставники">
                <AdminButton name="Добавить нового наставника" @click="addMentor"></AdminButton>
            </AdminHeader>
            <div class="w-full grid grid-cols-4 gap-6">
                <Mentor v-for="(item, index) in mentors" :key="index" :name="item.full_name" :email="item.email"
                    :rating="item.rating" :img="item.avatar" />
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
import AdminHeader from '@/components/admin/Header.vue';
import AdminButton from '@/components/base/AdminButton.vue';
import Pagination from '@/components/Pagination.vue';
import Mentor from '@/components/admin/Mentor.vue';
export default {
    name: "AdminMentors",
    components: {
        Sidebar,
        AdminHeader,
        AdminButton,
        Pagination,
        Mentor
    },
    data() {
        return {
            offset: 0,
            currentPage: 1,
            totalPages: null,
            mentors: null
        }
    },
    created() {
        this.getMentors()
    },
    methods: {
        handlePageChange(newPage) {
            this.currentPage = newPage;
            this.offset = (this.currentPage - 1) * 10
            this.getMentors()
        },
        async getMentors() {
            const response = await api.get(`/users/?is_teacher=true&offset=${this.offset}&limit=10`)
            this.totalPages = Math.ceil(response.data.count / 10)
            this.mentors = response.data.results
        },
        addMentor() {
            this.$router.push('/dashboard/admin/add/mentor')
        }
    }
}
</script>