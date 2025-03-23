<template>
    <Sidebar active_route="/dashboard/admin/categories">
        <div class="container">
            <AdminHeader name="Добавить категорию"></AdminHeader>
            <div class="w-full">
                <h4 class="font-sf_pro font-medium text-lg text-white pb-6 pt-3">Обложка</h4>
                <div class="flex items-start space-x-20">
                    <div class="flex flex-col space-y-6">
                        <div class="relative w-fit bg-m_black-700 rounded-lg">
                            <label for="imageUpload" :class="[imageFile ? 'py-5 px-5' : 'py-32 px-44']"
                                class="cursor-pointer border-dashed rounded-lg flex items-center justify-center text-gray-500">
                                <div v-if="!imageFile" class="text-center">
                                    <image_icon />
                                </div>
                                <div v-if="imageFile">
                                    <img class="w-[400px] object-cover" crossorigin="anonymous" :src="`${imageFile}`">
                                </div>
                            </label>
                            <input id="imageUpload" type="file" class="hidden" @change="handleFileUpload"
                                accept="image/*">
                        </div>
                    </div>
                    <div class="w-full flex flex-col gap-y-8">
                        <div class="flex flex-col">
                            <h4 class="font-sf_pro font-medium text-lg text-white pb-6">Название</h4>
                            <input class="w-3/4 bg-m_black-700 rounded-lg p-4 outline-none text-white" type="text" v-model="name">
                        </div>
                        <div class="px-8 py-4 bg-m_black-700 rounded-lg w-3/4 flex items-center justify-between cursor-pointer relative"
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
                                    <div class="px-8 py-4 bg-m_black-700 w-full hover:bg-m_black-600 duration-300"
                                        @click="active_status = true">
                                        <p class="font-sf_pro font-medium text-lg text-m_yellow-500">Активный</p>
                                    </div>
                                    <div class="px-8 py-4 bg-m_black-700 w-full rounded-bl-lg rounded-br-lg hover:bg-m_black-600 duration-300"
                                        @click="active_status = false">
                                        <p class="font-sf_pro font-medium text-lg text-m_red-200">Без активный</p>
                                    </div>
                                </div>
                            </div>
                        <div class="mt-[65px] flex items-center space-x-6">
                            <button @click="saveCategory" class="px-14 py-3 font-sf_pro font-bold text-base rounded-lg cursor-pointer bg-m_yellow-100">
                                <span v-if="loading">
                                    <Spinner />
                                </span>
                                <span v-else>
                                    Сохранить
                                </span>
                            </button>
                        </div>
                    </div>
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
import Spinner from '@/components/base/Spinner.vue';
import image_icon from '@/components/icons/image.vue';
import { useToast } from "vue-toastification";
export default {
    name: "AddCategory",
    components: {
        Sidebar,
        AdminHeader,
        AdminButton,
        Spinner,
        image_icon
    },
    data() {
        return {
            img: null,
            imageFile: null,
            openDropdown: false,
            active_status: true,
            name: null,
            loading: false,
        }
    },
    methods: {
        handleFileUpload(event) {
            this.imageFile = URL.createObjectURL(event.target.files[0])
            this.img = event.target.files[0]
        },
        handleOpenDropdown() {
            this.openDropdown = !this.openDropdown
        },
        async saveCategory() {
            this.loading = true
            const toast = useToast();
            const formData = new FormData();
            formData.append('name', this.name)
            formData.append('image', this.img)
            formData.append('is_active', this.active_status)
            try {
                const response = await api.post('/categories/', formData)
                if (response.status === 201) { toast.success('Категория успешно создана') } 
            } catch (error) {
                console.error('Error occurred: ', error);
                const errorMessage = error.message;
                toast.error(errorMessage);
            } finally {
                this.loading = false
            }
        },
    },
}
</script>