<template>
    <Sidebar active_route="/dashboard/admin/mentors">
        <div class="container">
            <AdminHeader name="Добавить нового курса"></AdminHeader>
            <div class="w-full">
                <!-- Course -->
                <div v-if="section === 1" class="flex items-start space-x-20 pb-10">
                    <div class="flex-1 flex flex-col space-y-6">
                        <!-- Image -->
                        <div class="flex flex-col space-y-6">
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
                        </div>
                        <!-- Category -->
                        <div class="mt-10">
                            <h4 class="font-sf_pro font-medium text-lg text-white pb-4">Категория</h4>
                            <!-- Multi Select -->
                            <div class="flex flex-col items-center relative">
                                <!-- Input Box -->
                                <div class="w-full">
                                    <div class="my-2 p-1 flex bg-m_black-700 rounded">
                                        <div class="flex flex-auto flex-wrap">
                                            <div v-for="(tag, index) in selectedTags" :key="index"
                                                class="flex justify-center items-center m-1 font-medium py-1 px-2 bg-yellow-200 text-yellow-600 rounded-full">
                                                <div class="text-xs font-normal leading-none max-w-full flex-initial">
                                                    {{ tag.name }}
                                                </div>
                                                <div class="flex flex-auto flex-row-reverse">
                                                    <div @click="removeTag(index)">
                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                            class="w-4 h-4 ml-1 cursor-pointer hover:text-m_yellow-100"
                                                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                                            stroke-width="2">
                                                            <line x1="18" y1="6" x2="6" y2="18" />
                                                            <line x1="6" y1="6" x2="18" y2="18" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex-1">
                                                <input v-model="searchQuery"
                                                    class="bg-transparent py-4 px-2 appearance-none outline-none h-full w-full text-white" />
                                            </div>
                                        </div>
                                        <div
                                            class="text-gray-300 w-10 py-1 pl-3 pr-2 flex items-center">
                                            <button @click="toggleDropdown"
                                                class="w-6 h-6 text-gray-600 focus:outline-none">
                                                <svg class="w-[14px]"
                                                    :class="{ 'rotate-180': isDropdownOpen, 'transition-transform duration-200': true }"
                                                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M13.0694 5.15687L8.38444 9.76787C8.28221 9.86899 8.14423 9.92572 8.00044 9.92572C7.85664 9.92572 7.71866 9.86899 7.61644 9.76787L2.93144 5.15787C2.82858 5.05679 2.69014 5.00015 2.54594 5.00015C2.40173 5.00015 2.26329 5.05679 2.16044 5.15787C2.10979 5.20724 2.06954 5.26626 2.04205 5.33144C2.01457 5.39661 2.00041 5.46663 2.00041 5.53737C2.00041 5.6081 2.01457 5.67812 2.04205 5.7433C2.06954 5.80847 2.10979 5.86749 2.16044 5.91687L6.84444 10.5269C7.15296 10.8298 7.56806 10.9995 8.00044 10.9995C8.43281 10.9995 8.84791 10.8298 9.15644 10.5269L13.8404 5.91687C13.8912 5.86747 13.9316 5.8084 13.9592 5.74313C13.9868 5.67786 14.001 5.60772 14.001 5.53687C14.001 5.46601 13.9868 5.39588 13.9592 5.33061C13.9316 5.26534 13.8912 5.20626 13.8404 5.15687C13.7376 5.05579 13.5991 4.99915 13.4549 4.99915C13.3107 4.99915 13.1723 5.05579 13.0694 5.15687Z"
                                                        fill="white" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                 <!-- Dropdown Menu -->
                                <div v-if="isDropdownOpen"
                                    class="absolute shadow top-full bg-m_gray-500 text-white z-40 w-full left-0 rounded max-h-select overflow-y-auto">
                                    <div class="flex flex-col w-full">
                                        <div v-for="(item, index) in filteredOptions" :key="index"
                                            class="cursor-pointer w-full hover:bg-m_black-100" @click="selectTag(item)">
                                            <div class="flex w-full items-center py-4 px-2 pl-2 relative">
                                                <div class="w-full items-center flex">
                                                    <div class="mx-2 leading-6">{{ item.name }}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Price -->
                        <div class="w-full">
                            <h4 class="font-sf_pro font-medium text-lg text-white pb-5">Цена</h4>
                            <AdminTextInput v-model="post.price" :type="'number'" />
                        </div>
                    </div>
                    <div class="flex-1 flex flex-col space-y-6">
                        <!-- Name -->
                        <div class="flex flex-col space-y-6">
                            <h4 class="font-sf_pro font-medium text-lg text-white">Название курса</h4>
                            <AdminTextInput v-model="post.name" />
                        </div>
                        <!-- Description -->
                        <div class="flex flex-col space-y-6">
                            <h4 class="font-sf_pro font-medium text-lg text-white">Описание</h4>
                            <textarea v-model="post.description"
                                class="w-full bg-m_black-700 rounded-lg p-4 outline-none text-white resize-none" name=""
                                id="" cols="30" rows="7"></textarea>
                        </div>
                        <!-- Language -->
                        <div class="!mt-9">
                            <h4 class="font-sf_pro font-medium text-lg text-white pb-[22px]">Язык</h4>
                            <AdminSelection @sendData="selectLang" :options="languages" :name="active_lang" />
                        </div>
                        <!-- Button -->
                        <div class="w-full pt-[59px] pb-10 flex justify-end">
                            <AdminButton :bold="true" name="Next" @click="section++"></AdminButton>
                        </div>
                    </div>
                </div>
                <div v-if="section === 2" class="flex items-start space-x-20 pb-10">
                    
                </div>
            </div>
        </div>
    </Sidebar>
</template>

<script>
import api from '@/api/index';
import Sidebar from '@/components/admin/Sidebar.vue';
import AdminHeader from '@/components/admin/Header.vue';
import AdminButton from '@/components/base/AdminButton.vue';
import AdminSelection from '@/components/base/AdminSelection.vue';
import MultiSelect from '@/components/MultiSelect.vue';
import AdminTextInput from '@/components/base/AdminTextInput.vue';
import playIcon from '@/components/icons/play.vue';
export default {
    name: "AddMentor",
    components: {
        Sidebar,
        AdminHeader,
        AdminButton,
        AdminSelection,
        MultiSelect,
        AdminTextInput,
        playIcon
    },
    data() {
        return {
            section: 1,
            img: null,
            imageFile: null,
            videoPreview: null,
            imagePerview: null,
            videoFile: null,
            locked: false,
            active_category: 'Категория',
            active_lang: 'Язык',
            isLoading: [false],
            uploadProgress: [0],
            post: {
                name: '',
                description: '',
                price: 0,
            },
            fields: [
                { name: '' },
                { name: '' },
            ],
            videoFields: [
                {
                    name: "",
                    video: 0,
                    banner: null,
                    imagePerview: null,
                    thumbnail: null,
                    videoFile: null,
                    videoPreview: null,
                    locked: true
                },
            ],
            languages: [
                { code: "en", name: "English" },
                { code: "tr", name: "Türkçe" },
                { code: "fr", name: "Français" },
                { code: "de", name: "Deutsch" },
                { code: "es", name: "Español" },
                { code: "ru", name: "Русский" },
                { code: "zh", name: "中文" },
                { code: "ar", name: "العربية" },
                { code: "hi", name: "हिंदी" },
                { code: "ja", name: "日本語" },
                { code: "pt", name: "Português" },
                { code: "it", name: "Italiano" },
                { code: "ko", name: "한국어" },
                { code: "pl", name: "Polski" },
                { code: "nl", name: "Nederlands" },
                { code: "sv", name: "Svenska" },
                { code: "no", name: "Norsk" },
                { code: "fi", name: "Suomi" },
                { code: "da", name: "Dansk" },
                { code: "cs", name: "Čeština" }
            ],
            options: [],
            selectedTags: [],
            isDropdownOpen: false,
            searchQuery: '',
        }
    },
    computed: {
        filteredOptions() {
            return this.options.filter(
                (option) =>
                    option.name.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
                    !this.selectedTags.includes(option.name)
            );
        }
    },
    methods: {
        // Multi Select
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        selectTag(tag) {
            if (this.selectedTags.includes(tag)) return;
            this.selectedTags.push(tag);
            this.searchQuery = "";
        },
        removeTag(index) {
            this.selectedTags.splice(index, 1);
        },
        // ---------------
        async getCategories() {
            const response = await api.get('/categories')
            this.options = response.data.results
        },
        // ---------------
        handleFileUpload(event) {
            this.imageFile = URL.createObjectURL(event.target.files[0])
            this.img = event.target.files[0]
        },
        handleImageUpload(event, index) {
            this.videoFields[index].imagePerview = URL.createObjectURL(event.target.files[0])
            this.videoFields[index].banner = event.target.files[0]
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
        async uploadWithProgress(url, formData, index) {
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
                        this.videoFields[index].video = JSON.parse(xhr.responseText).id
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
            this.fields.push({ name: '' });
        },
        addVideField() {
            this.isLoading.push(false);
            this.uploadProgress.push(0);
            this.videoFields.push({
                videoPreview: null,
                videoFile: null,
                thumbnail: null,
                banner: null,
                name: "",
                id: 0,
                video: 0,
            });
        },
        async selectLang(option) {
            this.active_lang = option.name
        },
        async selectOption(option) {
            this.locked = option == 'Открыто' ? true : false
        },
        async saveCourse() {
            // console.log({
            //     banner: this.img,
            //     name: this.post.name,
            //     description: this.post.description,
            //     language: "ru" || this.active_lang,
            //     price: 100,
            //     total_duration: 100,
            //     themes: this.fields,
            //     lessons: this.videoFields.map(item => {
            //         return {
            //             name: item.name,
            //             video: item.video,
            //             banner: item.banner
            //         }
            //     }),
            //     categories: this.selectedTags,
            //     fields: this.fields,
            // });

            // const response = await api.post('/courses/', {
            //     banner: this.img,
            //     name: this.post.name,
            //     description: this.post.description,
            //     language: "ru" || this.active_lang,
            //     price: 100,
            //     total_duration: 100,
            //     themes: this.fields,
            //     lessons: this.videoFields.map(item => {
            //         return {
            //             name: item.name,
            //             video: item.video,
            //             banner: item.banner
            //         }
            //     }),
            //     categories: [...this.selectedTags.map(item => item.id)],
            //     fields: this.fields,
            // })

            // console.log(response);
        },

    },
    async created() {
        await this.getCategories()
    },
    watch: {
        searchQuery() {
            this.isDropdownOpen = true
        }
    }
}
</script>