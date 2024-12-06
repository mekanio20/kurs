<template>
    <Sidebar active_route="/dashboard/admin/mentors">
        <div class="container">
            <AdminHeader name="Наставники">
                <AdminButton name="Добавить нового наставника" @click="addMentor"></AdminButton>
            </AdminHeader>
            <div class="w-full grid grid-cols-4 gap-6">
                <Mentor v-for="(item, index) in mentors" :key="index" :name="item.name" :email="item.email" :rating="item.ratin" :img="item.img" />
            </div>
        </div>
    </Sidebar>
</template>

<script>
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
            mentors: [
                { id: 1, name: 'Jukkoe Sisao', img: '/imgs/person4.png', email: 'sibyl_kozey@gmail.com', ratin: 4.8 },
                { id: 2, name: 'Jukkoe Sisao', img: '/imgs/person4.png', email: 'sibyl_kozey@gmail.com', ratin: 4.8 },
                { id: 3, name: 'Jukkoe Sisao', img: '/imgs/person4.png', email: 'sibyl_kozey@gmail.com', ratin: 4.8 },
                { id: 4, name: 'Jukkoe Sisao', img: '/imgs/person4.png', email: 'sibyl_kozey@gmail.com', ratin: 4.8 },
                { id: 5, name: 'Jukkoe Sisao', img: '/imgs/person4.png', email: 'sibyl_kozey@gmail.com', ratin: 4.8 },
                { id: 6, name: 'Jukkoe Sisao', img: '/imgs/person4.png', email: 'sibyl_kozey@gmail.com', ratin: 4.8 },
            ]
        }
    },
    methods: {
        addMentor() {
            this.$router.push('/dashboard/admin/add/mentor')
        }
    }
}
</script>