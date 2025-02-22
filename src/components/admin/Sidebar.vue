<template>
    <div class="w-full h-full">
        <aside class="w-64 h-full fixed left-0 top-0 px-10 z-50 py-8 border-r border-m_black-300">
            <div class="flex items-center space-x-4 mb-20">
                <div class="w-[40px]">
                    <img class="w-full h-full object-cover rounded-l-full" src="/imgs/person6.png">
                </div>
                <h2 class="font-sf_pro font-normal text-base text-white">Admin</h2>
            </div>
            <nav class="space-y-4">
                <router-link v-for="(item, index) in routers" :key="index" :to="item.link"
                    class="flex items-center space-x-2 p-2 rounded-lg text-gray-900">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M5.65967 12.3536C5.44678 12.1583 5.44678 11.8417 5.65967 11.6464L9.25 8.35355C9.4629 8.15829 9.4629 7.84171 9.25 7.64645L5.65968 4.35355C5.44678 4.15829 5.44678 3.84171 5.65968 3.64645C5.87257 3.45118 6.21775 3.45118 6.43065 3.64645L10.021 6.93934C10.6597 7.52513 10.6597 8.47487 10.021 9.06066L6.43065 12.3536C6.21775 12.5488 5.87257 12.5488 5.65967 12.3536Z"
                            fill="#fff" :class="[active_route === item.link ? ' fill-m_yellow-100' : 'fill-white']" />
                    </svg>
                    <component :is="item.component" :key="index"
                        :color="[active_route === item.link ? '#FFCC02' : '#FFF']"
                        />
                    <span class="font-sf_pro text-base"
                        :class="[active_route === item.link ? ' text-m_yellow-100' : 'text-white']">{{ item.name
                        }}</span>
                </router-link>
            </nav>
        </aside>
        <div class="ml-64 fixed top-0 left-0 right-0 z-50 py-6 border-b border-m_black-300 bg-black">
            <div class="container flex items-center justify-end">
                <input type="text" placeholder="Поиск"
                    class="py-2 px-4 rounded-lg bg-m_black-600 text-gray-300 focus:outline-none w-96" />
            </div>
        </div>
        <div class="pl-72 pt-[90px]">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { markRaw } from "vue"
import AbzorIcon from  '@/components/icons/abzor.vue'
import KursIcons from '@/components/icons/kurs.vue'
import MentorsIcon from '@/components/icons/mentors.vue'
import CategoryIcon from '@/components/icons/category.vue'
import UsersIcon from '@/components/icons/users.vue'
const nonReactiveAbzorIcon = markRaw(AbzorIcon)
const nonReactiveKursIcons = markRaw(KursIcons)
const nonReactiveMentorsIcon = markRaw(MentorsIcon)
const nonReactiveCategoryIcon = markRaw(CategoryIcon)
const nonReactiveUsersIcon = markRaw(UsersIcon)
export default {
    name: "Sidebar",
    components: {
        AbzorIcon,
        KursIcons,
        MentorsIcon,
        CategoryIcon,
        UsersIcon
    },
    data() {
        return {
            routers: [
                { name: 'Обзор', link: '/dashboard/admin/home', component: AbzorIcon },
                { name: 'Курсы', link: '/dashboard/admin/courses', component: KursIcons },
                { name: 'Наставники', link: '/dashboard/admin/mentors', component: MentorsIcon },
                { name: 'Категории', link: '/dashboard/admin/categories', component: CategoryIcon },
                { name: 'Пользователи', link: '/dashboard/admin/users', component: UsersIcon },
                { name: 'Доступ', link: '/dashboard/admin/permissions', component: MentorsIcon },
            ]
        }
    },
    props: {
        active_route: {
            type: String,
            required: true
        }
    }
}
</script>