<template>
    <Sidebar active_route="/dashboard/admin/mentors">
        <div class="container">
            <AdminHeader name="Наставники">
                <AdminButton name="Добавить нового наставника" @click="addMentor"></AdminButton>
            </AdminHeader>
            <div class="w-full grid grid-cols-4 gap-6">
                <Mentor v-for="(item, index) in mentors" :key="index" :name="item.full_name" :email="item.email" :rating="item.rating" :img="item.avatar" />
            </div>
        </div>
    </Sidebar>
</template>

<script>
import api from '@/api/index';
import Sidebar from '@/components/admin/Sidebar.vue';
import AdminHeader from '@/components/admin/Header.vue'
import AdminButton from '@/components/base/AdminButton.vue';
import Mentor from '@/components/admin/Mentor.vue';
export default {
    name: "AdminMentors",
    components: {
        Sidebar,
        AdminHeader,
        AdminButton,
        Mentor
    },
    data() {
        return {
            mentors: null
        }
    },
    created() {
        this.getMentors()
    },
    methods: {
        async getMentors() {
            const response = await api.get('/users/?is_teacher=true')
            this.mentors = response.data.results
        },
        addMentor() {
            this.$router.push('/dashboard/admin/add/mentor')
        }
    }
}
</script>