<template>
    <Sidebar active_route="/dashboard/admin/courses">
        <div class="container">
            <AdminHeader name="Добавить нового курса"></AdminHeader>
            <div v-show="!sectionLoad" class="w-full">
                <!-- Course -->
                <div v-if="section === 1" class="flex items-start space-x-20 pb-10">
                    <div class="flex-1 flex flex-col space-y-6">
                        <!-- Course Banner -->
                        <div class="flex flex-col space-y-6">
                            <InputName name="Обложка" />
                            <div class="relative bg-m_black-700 rounded-lg">
                                <label for="courseBanner" :class="[courseBanner ? 'py-5 px-5' : 'py-32 px-40']"
                                    class="cursor-pointer border-dashed rounded-lg flex items-center justify-center text-gray-500">
                                    <div v-if="!courseBanner" class="text-center">
                                        <imageIcon />
                                    </div>
                                    <div v-if="courseBanner">
                                        <img class="w-[400px] object-cover" crossorigin="anonymous"
                                            :src="`${courseBannerPreview}`">
                                    </div>
                                </label>
                                <input id="courseBanner" type="file" class="hidden" required @change="handleCourseBanner"
                                    accept="image/*">
                            </div>
                        </div>
                        <!-- Course Category -->
                        <div class="mt-10">
                            <InputName name="Категория" class="pb-4" />
                            <!-- Multi Select -->
                            <div class="flex flex-col items-center relative">
                                <!-- Input Box -->
                                <div class="w-full">
                                    <div class="my-2 p-1 flex bg-m_black-700 rounded">
                                        <div class="flex flex-auto flex-wrap">
                                            <div v-for="(categoryName, index) in selectedCategories" :key="index"
                                                class="flex justify-center items-center m-1 font-medium py-1 px-2 bg-yellow-200 text-yellow-600 rounded-full">
                                                <div class="text-xs font-normal leading-none max-w-full flex-initial">
                                                    {{ categoryName.name }}
                                                </div>
                                                <div class="flex flex-auto flex-row-reverse">
                                                    <div @click="removeCategory(index)">
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
                                                <input v-model="searchCategory"
                                                    class="bg-transparent py-4 px-2 appearance-none outline-none h-full w-full text-white" />
                                            </div>
                                        </div>
                                        <div class="text-gray-300 w-10 py-1 pl-3 pr-2 flex items-center">
                                            <button @click="dropdownCategory = !dropdownCategory"
                                                class="w-6 h-6 text-gray-600 focus:outline-none">
                                                <svg class="w-[14px]"
                                                    :class="{ 'rotate-180': dropdownCategory, 'transition-transform duration-200': true }"
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
                                <div v-if="dropdownCategory"
                                    class="absolute shadow top-full bg-m_gray-500 text-white z-40 w-full left-0 rounded max-h-select overflow-y-auto">
                                    <div class="flex flex-col w-full">
                                        <div v-for="(item, index) in filteredCategories" :key="index"
                                            class="cursor-pointer w-full hover:bg-m_black-100"
                                            @click="selectCategory(item)">
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
                        <!-- Course Price -->
                        <div class="w-full">
                            <InputName name="Цена" class="pb-5" />
                            <AdminTextInput v-model="coursePrice" :type="'number'" />
                        </div>
                    </div>
                    <div class="flex-1 flex flex-col space-y-6">
                        <!-- Course Video Preview -->
                        <div class="flex flex-col space-y-6">
                            <InputName name="Предварительный просмотр" />
                            <div class="relative bg-m_black-700 rounded-lg">
                                <label for="videoUpload" :class="[courseVideoFile ? 'py-5 px-5' : 'py-32 px-40']"
                                    class="cursor-pointer border-dashed rounded-lg flex items-center justify-center text-gray-500">
                                    <div v-if="!courseVideoFile" class="text-center">
                                        <imageIcon />
                                    </div>
                                    <div v-if="courseVideoFile">
                                        <img class="w-[400px] object-cover" crossorigin="anonymous"
                                            :src="`${courseVideoPreview}`">
                                    </div>
                                </label>
                                <input id="videoUpload" type="file" class="hidden" required
                                    @change="handleCourseVideo" accept="video/*">
                            </div>
                        </div>
                        <!-- Course Name -->
                        <div class="flex flex-col space-y-6">
                            <InputName name="Название курса" />
                            <AdminTextInput v-model="courseName" />
                        </div>
                        <!-- Course Description -->
                        <div class="flex flex-col space-y-6">
                            <InputName name="Описание" />
                            <textarea v-model="courseDescription" required
                                class="w-full bg-m_black-700 rounded-lg p-4 outline-none text-white resize-none"
                                cols="30" rows="7"></textarea>
                        </div>
                        <!-- Next Button -->
                        <NextButton @nextSection="nextSection" />
                    </div>
                </div>
                <!-- Course modules -->
                <div v-if="section === 2" class="flex items-start space-x-20 pb-10">
                    <div class="w-full flex flex-col space-y-6">
                        <InputName name="Модули" />
                        <div class="grid grid-cols-2 gap-4">
                            <AdminTextInput v-for="(item, index) in courseModules" :key="index" v-model="item.name" />
                        </div>
                        <button @click="addCourseModules"
                            class="w-full font-sf_pro font-normal text-m_yellow-100 text-lg py-8">
                            + Добавить еще
                        </button>
                        <!-- Next Button -->
                        <NextButton @nextSection="nextSection" />
                    </div>
                </div>
                <!-- Course Lessons -->
                <div v-if="section === 3" class="flex items-start space-x-20 pb-10">
                    <!-- Video -->
                    <div class="w-full mb-10">
                        <InputName name="Уроки" class="pb-6" />
                        <div v-for="(item, index) in courseLessons" :key="index"
                            class="w-full py-6 px-6 bg-m_black-700 rounded-lg mb-4">
                            <div class="w-full flex items-start flex-col">
                                <h5 class="font-sf_pro font-medium text-lg text-m_gray-100 pb-5">Урок: {{ index + 1 }}
                                </h5>
                                <div class="w-full flex items-center space-x-6 mb-5">
                                    <!-- Video input -->
                                    <div class="relative">
                                        <label :for="'videoInput' + index" class="cursor-pointer">
                                            <div v-if="!item.videoPreview"
                                                class="flex items-center space-x-4 bg-m_black-400 rounded-lg px-8 py-3 text-nowrap">
                                                <!-- Play svg -->
                                                <playIcon :w="25" :h="25" />
                                                <InputName name="Добавить видео" />
                                            </div>
                                            <div v-if="item.videoPreview" class="w-[255px] h-[150px] rounded-xl relative">
                                                <img class="w-full h-full object-cover rounded-xl"
                                                    :src="item.videoPreview">
                                                <div
                                                    class="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                                                    <!-- Play svg -->
                                                    <playIcon v-if="!isLoading[index]" :w="32" :h="32" />
                                                </div>
                                            </div>
                                        </label>
                                        <div v-if="isLoading[index]"
                                            class="absolute inset-0 flex flex-col items-center justify-center mt-2">
                                            <div v-if="item.videoPreview"
                                                class="w-10 h-10 border-4 border-gray-200 border-t-[#FFCC02] rounded-full animate-spin">
                                            </div>
                                            <p class="mt-2 text-white">{{ uploadProgress[index] }}%</p>
                                        </div>
                                        <input :id="'videoInput' + index" accept="video/*"
                                            @change="handleLessonVideoUpload($event, index)" type="file" class="hidden">
                                    </div>
                                    <!-- Image input -->
                                    <div class="relative">
                                        <label :for="'imageInput' + index" class="cursor-pointer">
                                            <div v-if="!item.bannerFile"
                                                class="flex items-center space-x-4 bg-m_black-400 rounded-lg px-8 py-3 text-nowrap">
                                                <!-- Image svg -->
                                                <imageIcon :w="'30'" :h="'30'" />
                                                <InputName name="Обложка" />
                                            </div>
                                            <div v-else-if="item.bannerFile"
                                                class="w-[255px] h-[150px] rounded-xl relative">
                                                <img class="w-full h-full object-cover rounded-xl"
                                                    :src="item.bannerPreview">
                                            </div>
                                        </label>
                                        <input :id="'imageInput' + index" accept="image/*"
                                            @change="handleLessonImageUpload($event, index)" type="file" class="hidden">
                                    </div>
                                    <!-- Select Module -->
                                    <div class="w-full bg-m_black-400 rounded-lg px-6 py-[13px]">
                                        <select v-model="item.module"
                                            class="w-full bg-m_black-400 text-white outline-none">
                                            <option selected disabled value="Модуль">Модуль</option>
                                            <option v-for="option in courseModuleOptions" :value="option.id">
                                                {{ option.name }}
                                            </option>
                                        </select>
                                    </div>
                                    <!-- Select Status -->
                                    <div class="w-full bg-m_black-400 rounded-lg px-6 py-[13px]">
                                        <select v-model="item.locked"
                                            class="w-full bg-m_black-400 text-white outline-none">
                                            <option :value="true">Открыто</option>
                                            <option selected :value="false">Закрыто</option>
                                        </select>
                                    </div>

                                </div>
                                <div class="w-full flex items-center space-x-6 mb-5">
                                    <!-- Name input -->
                                    <input v-model="item.name"
                                        class="w-full bg-m_black-400 rounded-lg px-8 py-3 font-sf_pro font-medium text-lg placeholder:text-m_gray-100 text-m_gray-100 outline-none"
                                        type="text" placeholder="Название урока">
                                    <!-- Description input -->
                                    <input v-model="item.desc"
                                        class="w-full bg-m_black-400 rounded-lg px-8 py-3 font-sf_pro font-medium text-lg placeholder:text-m_gray-100 text-m_gray-100 outline-none"
                                        type="text" placeholder="Описание урока">
                                </div>
                                <div class="w-full flex items-center space-x-6">
                                    <!-- Task file input -->
                                    <div class="relative">
                                        <label :for="'taskInput' + index" class="cursor-pointer">
                                            <div
                                                class="flex items-center space-x-4 bg-m_black-400 rounded-lg px-8 py-3 text-nowrap">
                                                <!-- File svg -->
                                                <fileIcon />
                                                <InputName v-if="!item.taskFile" name="Задание" />
                                                <InputName v-else :name="item.taskFile.name" />
                                            </div>
                                        </label>
                                        <input :id="'taskInput' + index" @change="handleTaskUpload($event, index)"
                                            type="file" class="hidden">
                                    </div>
                                    <!-- Task description input -->
                                    <input v-model="item.taskDesc"
                                        class="w-full bg-m_black-400 rounded-lg px-8 py-3 font-sf_pro font-medium text-lg placeholder:text-m_gray-100 text-m_gray-100 outline-none"
                                        type="text" placeholder="Описание задания">
                                </div>
                            </div>
                        </div>
                        <button @click="addVideField"
                            class="w-full font-sf_pro font-normal text-m_yellow-100 text-lg pt-10">
                            + Добавить еще
                        </button>
                        <!-- Next Button -->
                        <NextButton @nextSection="nextSection" />
                    </div>
                </div>
            </div>
            <div v-show="sectionLoad" class="w-full flex justify-center items-center h-screen text-white">
                Loading...
            </div>
        </div>
    </Sidebar>
</template>

<script>
import api from '@/api/index';
import Sidebar from '@/components/admin/Sidebar.vue';
import AdminHeader from '@/components/admin/Header.vue';
import AdminSelection from '@/components/base/AdminSelection.vue';
import AdminTextInput from '@/components/base/AdminTextInput.vue';
import NextButton from '@/components/base/NextButton.vue';
import InputName from '@/components/base/InputName.vue';
import MultiSelect from '@/components/MultiSelect.vue';
import playIcon from '@/components/icons/play.vue';
import imageIcon from '@/components/icons/image.vue';
import fileIcon from '@/components/icons/file.vue';
import { useToast } from 'vue-toastification';
export default {
    name: "AddCourse",
    components: {
        Sidebar,
        AdminHeader,
        AdminSelection,
        InputName,
        NextButton,
        MultiSelect,
        AdminTextInput,
        playIcon,
        imageIcon,
        fileIcon
    },
    mounted() {
        window.addEventListener('beforeunload', this.handleBeforeUnload);
    },
    beforeDestroy() {
        window.removeEventListener('beforeunload', this.handleBeforeUnload);
    },
    data() {
        return {
            section: 1,
            sectionLoad: false,

            // Course Banner
            courseBanner: null,
            courseBannerPreview: null,

            // Course Category
            searchCategory: '',
            selectedCategories: [],
            dropdownCategory: false,

            // Course info
            courseName: '',
            courseDescription: '',
            coursePrice: null,

            // Course Video
            courseVideoFile: null,
            courseVideoPreview: null,

            // Course modules
            courseModules: [{ name: '' }],
            courseModuleOptions: [],

            // Loading
            uploadProgress: [0],
            isLoading: [false],

            // Couse lessons
            courseLessons: [
                {
                    name: "",
                    desc: "",
                    video: 0,
                    module: 0,
                    taskFile: null,
                    taskDesc: null,
                    bannerFile: null,
                    bannerPreview: null,
                    videoFile: null,
                    videoPreview: null,
                    locked: false,
                },
            ],
            options: [],
            courseId: null
        }
    },
    computed: {
        filteredCategories() {
            return this.options.filter(
                (option) =>
                    option.name.toLowerCase().includes(this.searchCategory.toLowerCase()) &&
                    !this.selectedCategories.includes(option.name)
            );
        }
    },
    methods: {
        // Refresh page
        handleBeforeUnload(event) {
            event.preventDefault();
        },
        // Task file upload
        handleTaskUpload(event, index) {
            this.courseLessons[index].taskFile = event.target.files[0]
        },
        // Multi Select
        selectCategory(categoryName) {
            if (this.selectedCategories.includes(categoryName)) return;
            this.selectedCategories.push(categoryName);
            this.searchCategory = "";
        },
        removeCategory(index) {
            this.selectedCategories.splice(index, 1);
        },
        // Request Api
        async getCategories() {
            const response = await api.get('/categories')
            this.options = response.data.results
        },
        async getCourseModuleOptions() {
            const response = await api.get(`/modules/?course=${this.courseId}`)
            this.courseModuleOptions = response.data.results
        },
        // File Upload
        handleCourseBanner(event) {
            this.courseBannerPreview = URL.createObjectURL(event.target.files[0])
            this.courseBanner = event.target.files[0]
        },
        handleCourseVideo(event) {
            this.generateCourseVideoPreview(URL.createObjectURL(event.target.files[0]))
            this.courseVideoFile = event.target.files[0]
        },
        handleLessonImageUpload(event, index) {
            this.courseLessons[index].bannerPreview = URL.createObjectURL(event.target.files[0])
            this.courseLessons[index].bannerFile = event.target.files[0]
        },
        async handleLessonVideoUpload(event, index) {
            const file = event.target.files[0];
            if (!file) return;

            this.isLoading[index] = true;
            this.uploadProgress[index] = 0;

            this.courseLessons[index].videoFile = file;
            const videoUrl = URL.createObjectURL(file);
            this.generateLessonVideoPreview(videoUrl, index);

            const formData = new FormData();
            formData.append('path', this.courseLessons[index].videoFile);

            try {
                await this.uploadWithProgress('https://0-100.community/api/files/', formData, index);
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
                        this.courseLessons[index].video = JSON.parse(xhr.responseText).id
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject(new Error(`HTTP Error: ${xhr.status}`));
                    }
                };

                xhr.onerror = () => reject(new Error('Error occurred'));

                xhr.send(formData);
            });
        },
        generateLessonVideoPreview(videoURL, index) {
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

                const videoPreview = canvas.toDataURL("image/png");
                this.courseLessons[index].videoPreview = videoPreview;

                videoElement.remove();
                canvas.remove();
            });
        },
        generateCourseVideoPreview(videoURL) {
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
                this.courseVideoPreview = thumbnailURL;

                videoElement.remove();
                canvas.remove();
            });
        },
        // Add Modules
        addCourseModules() {
            this.courseModules.push({ name: '' });
        },
        addVideField() {
            this.isLoading.push(false);
            this.uploadProgress.push(0);
            this.courseLessons.push({
                name: "",
                desc: "",
                video: 0,
                module: 0,
                taskFile: null,
                taskDesc: null,
                bannerFile: null,
                bannerPreview: null,
                videoFile: null,
                videoPreview: null,
                locked: false,
            });
        },
        // Sections
        async nextSection() {
            const toast = useToast();
            if (this.courseBanner && this.courseName && this.courseDescription && this.coursePrice && this.section === 1) {
                this.sectionLoad = true
                try {
                    const formData = new FormData();
                    formData.append('name', this.courseName);
                    formData.append('price', this.coursePrice);
                    formData.append('banner', this.courseBanner);
                    formData.append('description', this.courseDescription);
                    formData.append('preview_video', this.courseVideoFile)
                    formData.append('categories', [...this.selectedCategories.map(item => item.id)]);
                    const response = await api.post('/courses/', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
                    if (response.status === 201) {
                        this.courseId = response.data.id
                        this.section = 2
                    } else throw new Error('Request failed')
                } catch (error) {
                    console.error('Error occurred: ', error);
                    const errorMessage = error.response?.message || 'Request failed';
                    toast.error(errorMessage);
                } finally {
                    this.sectionLoad = false
                }
            } else if (this.courseModules[0].name && this.section === 2) {
                this.sectionLoad = true
                try {
                    this.courseModules.forEach(async (item) => { await api.post('/modules/', { course: this.courseId, name: item.name, }) })
                    this.section = 3
                } catch (error) {
                    console.error('Error occurred: ', error);
                    const errorMessage = error.response?.message || 'Request failed';
                    toast.error(errorMessage);
                } finally {
                    this.getCourseModuleOptions()
                    this.sectionLoad = false
                }
            } else if (this.courseLessons[0].name && this.section === 3) {
                this.sectionLoad = true
                try {
                    this.courseLessons.forEach(async (item) => {
                        const formData = new FormData();
                        formData.append('module', item.module);
                        formData.append('name', item.name);
                        formData.append('banner', item.bannerFile);
                        formData.append('description', item.desc);
                        formData.append('task_file', item.taskFile);
                        formData.append('task_desc', item.taskDesc);
                        formData.append('video', item.video);
                        const lesson = await api.post('/lessons/', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
                        console.log(lesson);
                    })
                } catch (error) {
                    console.error('Error occurred: ', error);
                    const errorMessage = error.response?.message || 'Request failed';
                    toast.error(errorMessage);
                } finally {
                    this.clearFields()
                    toast.success('Курс успешно создан!')
                    this.sectionLoad = false
                }
            }
        },
        clearFields() {
            this.courseName = ''
            this.courseBanner = null
            this.courseBannerPreview = null
            this.coursePrice = null
            this.courseVideoFile = null
            this.courseBannerPreview = null,
            this.courseDescription = ''
            this.selectedCategories = []
            this.courseModules = [{ name: '' }]
            this.courseLessons = [{
                name: "",
                desc: "",
                video: 0,
                module: 0,
                taskFile: null,
                taskDesc: null,
                bannerFile: null,
                bannerPreview: null,
                videoFile: null,
                videoPreview: null,
                locked: false,
            }]
            this.uploadProgress = [0]
            this.isLoading = [false]
            this.courseId = null
            this.section = 1
        }

    },
    async created() {
        await this.getCategories()
    },
    watch: {
        searchCategory() {
            this.dropdownCategory = true
        }
    }
}
</script>