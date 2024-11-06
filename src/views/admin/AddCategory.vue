<template>
    <Sidebar active_route="/admin/categories">
        <div class="container">
            <AdminHeader name="Добавить категорию"></AdminHeader>
            <form @submit.prevent="saveCategory" class="w-full">
                <h4 class="font-sf_pro font-medium text-lg text-white pb-6 pt-3">Обложка</h4>
                <div class="flex items-start space-x-20">
                    <div class="flex flex-col space-y-6">
                        <div class="relative w-fit bg-m_black-700 rounded-lg">
                            <label for="imageUpload" :class="[imageFile && local ? 'py-5 px-5' : 'py-32 px-44']"
                                class="cursor-pointer border-dashed rounded-lg flex items-center justify-center text-gray-500">
                                <div v-if="!imageFile" class="text-center">
                                    <svg class="h-20 w-20 mx-auto mb-2" viewBox="0 0 72 72" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M60.75 11.25H11.25C10.0565 11.25 8.91193 11.7241 8.06802 12.568C7.22411 13.4119 6.75 14.5565 6.75 15.75V56.25C6.75 57.4435 7.22411 58.5881 8.06802 59.432C8.91193 60.2759 10.0565 60.75 11.25 60.75H60.75C61.9435 60.75 63.0881 60.2759 63.932 59.432C64.7759 58.5881 65.25 57.4435 65.25 56.25V15.75C65.25 14.5565 64.7759 13.4119 63.932 12.568C63.0881 11.7241 61.9435 11.25 60.75 11.25ZM60.75 15.75V44.6484L53.4178 37.3191C52.9999 36.9011 52.5038 36.5695 51.9578 36.3433C51.4118 36.1171 50.8265 36.0007 50.2355 36.0007C49.6444 36.0007 49.0592 36.1171 48.5132 36.3433C47.9671 36.5695 47.471 36.9011 47.0531 37.3191L41.4281 42.9441L29.0531 30.5691C28.2093 29.7258 27.0651 29.2521 25.8722 29.2521C24.6792 29.2521 23.5351 29.7258 22.6912 30.5691L11.25 42.0103V15.75H60.75ZM11.25 48.375L25.875 33.75L48.375 56.25H11.25V48.375ZM60.75 56.25H54.7397L44.6147 46.125L50.2397 40.5L60.75 51.0131V56.25ZM40.5 28.125C40.5 27.4575 40.6979 26.805 41.0688 26.25C41.4396 25.6949 41.9667 25.2624 42.5834 25.0069C43.2001 24.7515 43.8787 24.6846 44.5334 24.8148C45.1881 24.9451 45.7895 25.2665 46.2615 25.7385C46.7335 26.2105 47.0549 26.8119 47.1852 27.4666C47.3154 28.1213 47.2485 28.7999 46.9931 29.4166C46.7376 30.0333 46.3051 30.5604 45.75 30.9312C45.195 31.3021 44.5425 31.5 43.875 31.5C42.9799 31.5 42.1215 31.1444 41.4885 30.5115C40.8556 29.8786 40.5 29.0201 40.5 28.125Z"
                                            fill="#B3B3B3" />
                                    </svg>
                                </div>
                                <div v-if="imageFile && local">
                                    <img class="w-[400px] object-cover" crossorigin="anonymous" :src="`${imageFile}`">
                                </div>
                                <div v-if="imageFile && !local">
                                    <img class="w-[400px] object-cover" crossorigin="anonymous"
                                        :src="`${$uploadUrl}/${imageFile}`">
                                </div>
                            </label>
                            <input id="imageUpload" type="file" class="hidden" @change="handleFileUpload"
                                accept="image/*">
                        </div>
                        <div class="mt-10">
                            <div class="px-8 py-4 bg-m_black-700 rounded-lg w-[430px] flex items-center justify-between cursor-pointer relative"
                                @click="handleOpenDropdown">
                                <p v-if="active_status" class="font-sf_pro font-medium text-lg text-m_yellow-500">
                                    Активный</p>
                                <p v-else class="font-sf_pro font-medium text-lg text-m_red-200">Без активный</p>
                                <svg :class="{ 'rotate-180': openDropdown, 'transition-transform duration-200': true }"
                                    width="12" height="8" viewBox="0 0 10 6" fill="#fff"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M0.646447 0.659675C0.841709 0.446775 1.15829 0.446775 1.35355 0.659675L4.64645 4.25C4.84171 4.4629 5.15829 4.4629 5.35355 4.25L8.64645 0.659676C8.84171 0.446776 9.15829 0.446776 9.35355 0.659676C9.54882 0.872575 9.54882 1.21775 9.35355 1.43065L6.06066 5.02098C5.47487 5.65967 4.52513 5.65968 3.93934 5.02098L0.646447 1.43065C0.451184 1.21775 0.451184 0.872574 0.646447 0.659675Z"
                                        fill="#fff" fill-opacity="0.8" />
                                </svg>
                                <div v-if="openDropdown"
                                    class="w-full flex flex-col absolute top-16 left-0 select-none">
                                    <div class="px-8 py-4 bg-m_black-700 w-[430px] hover:bg-m_black-600 duration-300"
                                        @click="active_status = true">
                                        <p class="font-sf_pro font-medium text-lg text-m_yellow-500">Активный</p>
                                    </div>
                                    <div class="px-8 py-4 bg-m_black-700 w-[430px] rounded-bl-lg rounded-br-lg hover:bg-m_black-600 duration-300"
                                        @click="active_status = false">
                                        <p class="font-sf_pro font-medium text-lg text-m_red-200">Без активный</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex flex-col gap-y-8">
                        <div class="flex flex-col">
                            <h4 class="font-sf_pro font-medium text-lg text-white pb-6">Название</h4>
                            <input class="w-3/4 bg-m_black-700 rounded-lg p-4 outline-none text-white" type="text"
                                name="" id="">
                        </div>
                        <div class="flex flex-col">
                            <h4 class="font-sf_pro font-medium text-lg text-white pb-6 pt-3">Name</h4>
                            <input class="w-3/4 bg-m_black-700 rounded-lg p-4 outline-none text-white" type="text"
                                name="" id="">
                        </div>
                        <div class="mt-[87px] flex items-center space-x-6">
                            <AdminButton :color="true" :bg_color="true" name="Отмена"></AdminButton>
                            <AdminButton :bold="true" name="Сохранить"></AdminButton>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </Sidebar>
</template>

<script>
import Sidebar from '@/components/admin/Sidebar.vue';
import AdminHeader from '@/components/admin/Header.vue'
import AdminButton from '@/components/base/AdminButton.vue';
export default {
    name: "AddCategory",
    components: {
        Sidebar,
        AdminHeader,
        AdminButton
    },
    data() {
        return {
            imageFile: null,
            img: null,
            local: false,
            openDropdown: false,
            active_status: true
        }
    },
    methods: {
        handleFileUpload(event) {
            this.local = true
            this.imageFile = URL.createObjectURL(event.target.files[0])
            this.img = event.target.files[0]
        },
        handleOpenDropdown() {
            this.openDropdown = !this.openDropdown
        },
        async saveCategory() {

        },

    }
}
</script>