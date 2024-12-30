<template>
    <Sidebar active_route="/dashboard/admin/mentors">
        <div class="container">
            <AdminHeader name="Добавить нового курса"></AdminHeader>
            <form @submit.prevent="saveCourse" class="w-full">
                <div class="flex items-start space-x-20">
                    <div class="flex-1 flex flex-col space-y-6">
                        <h4 class="font-sf_pro font-medium text-lg text-white">Обложка</h4>
                        <div class="relative bg-m_black-700 rounded-lg">
                            <label for="imageUpload" :class="[imageFile ? 'py-5 px-5' : 'py-32 px-40']"
                                class="cursor-pointer border-dashed rounded-lg flex items-center justify-center text-gray-500">
                                <div v-if="!imageFile" class="text-center">
                                    <svg class="h-20 w-20 mx-auto mb-2" viewBox="0 0 72 72" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M60.75 11.25H11.25C10.0565 11.25 8.91193 11.7241 8.06802 12.568C7.22411 13.4119 6.75 14.5565 6.75 15.75V56.25C6.75 57.4435 7.22411 58.5881 8.06802 59.432C8.91193 60.2759 10.0565 60.75 11.25 60.75H60.75C61.9435 60.75 63.0881 60.2759 63.932 59.432C64.7759 58.5881 65.25 57.4435 65.25 56.25V15.75C65.25 14.5565 64.7759 13.4119 63.932 12.568C63.0881 11.7241 61.9435 11.25 60.75 11.25ZM60.75 15.75V44.6484L53.4178 37.3191C52.9999 36.9011 52.5038 36.5695 51.9578 36.3433C51.4118 36.1171 50.8265 36.0007 50.2355 36.0007C49.6444 36.0007 49.0592 36.1171 48.5132 36.3433C47.9671 36.5695 47.471 36.9011 47.0531 37.3191L41.4281 42.9441L29.0531 30.5691C28.2093 29.7258 27.0651 29.2521 25.8722 29.2521C24.6792 29.2521 23.5351 29.7258 22.6912 30.5691L11.25 42.0103V15.75H60.75ZM11.25 48.375L25.875 33.75L48.375 56.25H11.25V48.375ZM60.75 56.25H54.7397L44.6147 46.125L50.2397 40.5L60.75 51.0131V56.25ZM40.5 28.125C40.5 27.4575 40.6979 26.805 41.0688 26.25C41.4396 25.6949 41.9667 25.2624 42.5834 25.0069C43.2001 24.7515 43.8787 24.6846 44.5334 24.8148C45.1881 24.9451 45.7895 25.2665 46.2615 25.7385C46.7335 26.2105 47.0549 26.8119 47.1852 27.4666C47.3154 28.1213 47.2485 28.7999 46.9931 29.4166C46.7376 30.0333 46.3051 30.5604 45.75 30.9312C45.195 31.3021 44.5425 31.5 43.875 31.5C42.9799 31.5 42.1215 31.1444 41.4885 30.5115C40.8556 29.8786 40.5 29.0201 40.5 28.125Z"
                                            fill="#B3B3B3" />
                                    </svg>
                                </div>
                                <div v-if="imageFile">
                                    <img class="w-[400px] object-cover" crossorigin="anonymous" :src="`${imageFile}`">
                                </div>
                            </label>
                            <input id="imageUpload" type="file" class="hidden" @change="handleFileUpload"
                                accept="image/*">
                        </div>
                        <div class="mt-10">
                            <AdminSelection @sendData="selectCategory" :options="categories" :name="active_category" />
                        </div>
                    </div>
                    <div class="flex-1 flex flex-col space-y-6">
                        <h4 class="font-sf_pro font-medium text-lg text-white">Название курса</h4>
                        <AdminTextInput v-model="post.name" />
                        <h4 class="font-sf_pro font-medium text-lg text-white">Описание</h4>
                        <textarea class="w-full bg-m_black-700 rounded-lg p-4 outline-none text-white resize-none"
                            name="" id="" cols="30" rows="7"></textarea>
                        <div class="!mt-9">
                            <AdminSelection @sendData="selectLang" :options="langs" :name="active_lang" />
                        </div>
                    </div>
                </div>
                <div class="w-full my-10">
                    <h4 class="font-sf_pro font-medium text-lg text-white pb-6">Чему вы научитесь</h4>
                    <div class="grid grid-cols-2 gap-6">
                        <AdminTextInput v-for="(item, index) in fields" :key="index" v-model="item.value" />
                    </div>
                    <button @click="addField" class="w-full font-sf_pro font-normal text-m_yellow-100 text-lg py-8">
                        + Добавить еще
                    </button>
                </div>
                <div class="w-full my-10">
                    <h4 class="font-sf_pro font-medium text-lg text-white pb-6">Чему вы научитесь</h4>
                    <div v-for="(item, index) in videoFields" :key="index"
                        class="py-6 px-6 bg-m_black-700 rounded-lg mb-4">
                        <h5 class="font-sf_pro font-medium text-lg text-m_gray-100 pb-5">Урок: {{ index + 1 }}</h5>
                        <div class="flex items-center space-x-6">
                            <!-- Video input -->
                            <div class="relative">
                                <label :for="'videoInput' + index" class="cursor-pointer">
                                    <div v-if="!item.thumbnail"
                                        class="flex items-center space-x-4 bg-m_black-400 rounded-lg px-10 py-3 text-nowrap">
                                        <!-- Play svg -->
                                        <svg width="25" height="25" viewBox="0 0 29 29" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_1270_12575)">
                                                <mask id="mask0_1270_12575" style="mask-type:luminance"
                                                    maskUnits="userSpaceOnUse" x="0" y="0" width="29" height="29">
                                                    <path
                                                        d="M14.5013 26.5827C21.1749 26.5827 26.5846 21.173 26.5846 14.4993C26.5846 7.82572 21.1749 2.41602 14.5013 2.41602C7.82768 2.41602 2.41797 7.82572 2.41797 14.4993C2.41797 21.173 7.82768 26.5827 14.5013 26.5827Z"
                                                        fill="white" stroke="white" stroke-width="4"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M12.0859 14.4982V10.3125L15.7109 12.4053L19.3359 14.4982L15.7109 16.591L12.0859 18.6838V14.4982Z"
                                                        fill="black" stroke="black" stroke-width="4"
                                                        stroke-linejoin="round" />
                                                </mask>
                                                <g mask="url(#mask0_1270_12575)">
                                                    <path d="M0 0H29V29H0V0Z" fill="#B3B3B3" />
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1270_12575">
                                                    <rect width="29" height="29" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p class="font-sf_pro font-medium text-lg text-white">Добавить видео</p>
                                    </div>
                                    <div v-if="item.thumbnail" class="w-[255px] h-[150px] rounded-xl relative">
                                        <img class="w-full h-full object-cover rounded-xl" :src="item.thumbnail">
                                        <div
                                            class="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                                            <!-- Play svg -->
                                            <svg v-if="!isLoading[index]" width="40" height="40" viewBox="0 0 29 29" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_1270_12575)">
                                                    <mask id="mask0_1270_12575" style="mask-type:luminance"
                                                        maskUnits="userSpaceOnUse" x="0" y="0" width="29" height="29">
                                                        <path
                                                            d="M14.5013 26.5827C21.1749 26.5827 26.5846 21.173 26.5846 14.4993C26.5846 7.82572 21.1749 2.41602 14.5013 2.41602C7.82768 2.41602 2.41797 7.82572 2.41797 14.4993C2.41797 21.173 7.82768 26.5827 14.5013 26.5827Z"
                                                            fill="white" stroke="white" stroke-width="4"
                                                            stroke-linejoin="round" />
                                                        <path
                                                            d="M12.0859 14.4982V10.3125L15.7109 12.4053L19.3359 14.4982L15.7109 16.591L12.0859 18.6838V14.4982Z"
                                                            fill="black" stroke="black" stroke-width="4"
                                                            stroke-linejoin="round" />
                                                    </mask>
                                                    <g mask="url(#mask0_1270_12575)">
                                                        <path d="M0 0H29V29H0V0Z" fill="#B3B3B3" />
                                                    </g>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1270_12575">
                                                        <rect width="29" height="29" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </label>
                                <div v-if="isLoading[index]"
                                    class="absolute inset-0 flex flex-col items-center justify-center mt-2">
                                    <div
                                        class="w-10 h-10 border-4 border-gray-200 border-t-[#FFCC02] rounded-full animate-spin">
                                    </div>
                                    <p class="mt-2 text-white">{{ uploadProgress[index] }}%</p>
                                </div>
                                <input :id="'videoInput' + index" accept="video/*"
                                    @change="handleVideoUpload($event, index)" type="file" class="hidden">
                            </div>
                            <!-- Image input -->
                            <div class="relative">
                                <label :for="'imageInput' + index" class="cursor-pointer">
                                    <div v-if="!item.imagePreview"
                                        class="flex items-center space-x-4 bg-m_black-400 rounded-lg px-12 py-3 text-nowrap">
                                        <!-- Image svg -->
                                        <svg width="25" height="25" viewBox="0 0 37 37" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M31.2188 5.78125H5.78125C5.16794 5.78125 4.57974 6.02489 4.14607 6.45857C3.71239 6.89224 3.46875 7.48044 3.46875 8.09375V28.9062C3.46875 29.5196 3.71239 30.1078 4.14607 30.5414C4.57974 30.9751 5.16794 31.2188 5.78125 31.2188H31.2188C31.8321 31.2188 32.4203 30.9751 32.8539 30.5414C33.2876 30.1078 33.5312 29.5196 33.5312 28.9062V8.09375C33.5312 7.48044 33.2876 6.89224 32.8539 6.45857C32.4203 6.02489 31.8321 5.78125 31.2188 5.78125ZM31.2188 8.09375V22.9443L27.4508 19.1779C27.2361 18.9631 26.9811 18.7927 26.7005 18.6764C26.4199 18.5602 26.1192 18.5003 25.8155 18.5003C25.5117 18.5003 25.211 18.5602 24.9304 18.6764C24.6498 18.7927 24.3948 18.9631 24.1801 19.1779L21.2895 22.0685L14.9301 15.7091C14.4964 15.2758 13.9085 15.0323 13.2954 15.0323C12.6824 15.0323 12.0944 15.2758 11.6608 15.7091L5.78125 21.5886V8.09375H31.2188ZM5.78125 24.8594L13.2969 17.3438L24.8594 28.9062H5.78125V24.8594ZM31.2188 28.9062H28.1301L22.927 23.7031L25.8176 20.8125L31.2188 26.2151V28.9062ZM20.8125 14.4531C20.8125 14.1101 20.9142 13.7748 21.1048 13.4896C21.2954 13.2043 21.5662 12.982 21.8832 12.8508C22.2001 12.7195 22.5488 12.6852 22.8852 12.7521C23.2217 12.819 23.5307 12.9842 23.7733 13.2267C24.0158 13.4693 24.181 13.7783 24.2479 14.1148C24.3148 14.4512 24.2805 14.7999 24.1492 15.1168C24.018 15.4338 23.7957 15.7046 23.5104 15.8952C23.2252 16.0858 22.8899 16.1875 22.5469 16.1875C22.0869 16.1875 21.6457 16.0048 21.3205 15.6795C20.9952 15.3543 20.8125 14.9131 20.8125 14.4531Z"
                                                fill="#B3B3B3" />
                                        </svg>
                                        <p class="font-sf_pro font-medium text-lg text-white">Обложка</p>
                                    </div>
                                    <div v-if="item.imagePreview" class="w-[255px] h-[150px] rounded-xl relative">
                                        <img class="w-full h-full object-cover rounded-xl" :src="item.imagePreview">
                                    </div>
                                </label>
                                <input :id="'imageInput' + index" accept="image/*"
                                    @change="handleImageUpload($event, index)" type="file" class="hidden">
                            </div>
                            <!-- Name input -->
                            <input v-model="item.lessonName"
                                class="w-full bg-m_black-400 rounded-lg px-8 py-3 font-sf_pro font-medium text-lg placeholder:text-m_gray-100 text-m_gray-100 outline-none"
                                type="text" placeholder="Название урока">
                        </div>
                    </div>
                    <button @click="addVideField"
                        class="w-full font-sf_pro font-normal text-m_yellow-100 text-lg pt-10">
                        + Добавить еще
                    </button>
                    <div class="w-fit py-10 mx-auto">
                        <AdminButton :bold="true" name="Загрузить" @click="saveCourse"></AdminButton>
                    </div>
                </div>
            </form>
        </div>
    </Sidebar>
</template>

<script>
import api from '@/api/index';
import Sidebar from '@/components/admin/Sidebar.vue';
import AdminHeader from '@/components/admin/Header.vue';
import AdminButton from '@/components/base/AdminButton.vue';
import AdminSelection from '@/components/base/AdminSelection.vue';
import AdminTextInput from '@/components/base/AdminTextInput.vue';
export default {
    name: "AddMentor",
    components: {
        Sidebar,
        AdminHeader,
        AdminButton,
        AdminSelection,
        AdminTextInput
    },
    data() {
        return {
            img: null,
            imageFile: null,
            videoPreview: null,
            imagePerview: null,
            videoFile: null,
            active_category: 'Категория',
            active_lang: 'Язык',
            categories: null,
            isLoading: [false],
            uploadProgress: [0],
            langs: [
                { id: 1, name: 'Русский' },
                { id: 2, name: 'Английский' },
                { id: 3, name: 'Кыргызский' },
            ],
            post: {
                name: '',
                description: ''
            },
            fields: [
                { value: '' },
                { value: '' },
            ],
            videoFields: [
                {
                    videoPreview: null,
                    imagePreview: null,
                    lessonName: "",
                },
            ],
        }
    },
    methods: {
        async getCategories() {
            const response = await api.get('/categories')
            this.categories = response.data.results
        },
        // ---------------
        handleFileUpload(event) {
            this.imageFile = URL.createObjectURL(event.target.files[0])
        },
        handleImageUpload(event, index) {
            this.videoFields[index].imagePreview = URL.createObjectURL(event.target.files[0])
        },
        async handleVideoUpload(event, index) {
            const file = event.target.files[0];
            if (!file) return;

            this.isLoading[index] = true;
            this.uploadProgress[index] = 0;

            const videoURL = URL.createObjectURL(file);

            this.videoFields[index].videoFile = file;
            this.videoFields[index].videoPreview = videoURL;

            this.generateThumbnail(videoURL, index);

            const formData = new FormData();
            formData.append('path', this.videoFields[index].videoFile);

            try {
                await this.uploadWithProgress('https://0-100.community/api/videos/', formData, index);
            } catch (error) {
                console.error('Error occurred: ', error);
            } finally {
                this.isLoading[index] = false;
            }
        },
        async uploadWithProgress (url, formData, index) {
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', url, true);

                xhr.setRequestHeader('Authorization', `Bearer ${localStorage.getItem('access')}`);

                xhr.upload.onprogress = (event) => {
                    if (event.lengthComputable) {
                        this.uploadProgress[index] = Math.round((event.loaded / event.total) * 100);
                    }
                };

                xhr.onload = () => {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject(new Error(`HTTP Error: ${xhr.status}`));
                    }
                };

                xhr.onerror = () => reject(new Error('Error occurred'));

                xhr.send(formData);
            });
        },
        generateThumbnail(videoURL, index) {
            const videoElement = document.createElement("video");
            const canvas = document.createElement("canvas");
            videoElement.src = videoURL;

            videoElement.addEventListener("loadeddata", () => {
                videoElement.currentTime = 1;
            });

            videoElement.addEventListener("seeked", () => {
                canvas.width = videoElement.videoWidth;
                canvas.height = videoElement.videoHeight;

                const context = canvas.getContext("2d");
                context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

                const thumbnailURL = canvas.toDataURL("image/png");
                this.videoFields[index].thumbnail = thumbnailURL;

                videoElement.remove();
                canvas.remove();
            });
        },
        addField() {
            this.fields.push({ value: '' });
        },
        addVideField() {
            this.isLoading.push(false);
            this.uploadProgress.push(0);
            this.videoFields.push({
                videoPreview: null,
                imagePreview: null,
                lessonName: "",
            });
        },
        async selectCategory(option) {
            console.log(option);
            this.active_category = option.name
        },
        async selectLang(option) {
            console.log(option);
            this.active_lang = option.name
        },
        async saveCourse() {
            console.log(this.post);
        },

    },
    async created() {
        await this.getCategories()
    }
}
</script>