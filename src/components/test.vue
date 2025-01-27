<template>
    <!-- Video -->
    <div class="w-full my-10">
        <h4 class="font-sf_pro font-medium text-lg text-white pb-6">Чему вы научитесь</h4>
        <div v-for="(item, index) in videoFields" :key="index" class="py-6 px-6 bg-m_black-700 rounded-lg mb-4">
            <h5 class="font-sf_pro font-medium text-lg text-m_gray-100 pb-5">Урок: {{ index + 1 }}</h5>
            <div class="flex items-center space-x-6">
                <!-- Video input -->
                <div class="relative">
                    <label :for="'videoInput' + index" class="cursor-pointer">
                        <div v-if="!item.thumbnail"
                            class="flex items-center space-x-4 bg-m_black-400 rounded-lg px-10 py-3 text-nowrap">
                            <!-- Play svg -->
                            <playIcon :w="25" :h="25" />
                            <p class="font-sf_pro font-medium text-lg text-white">Добавить видео</p>
                        </div>
                        <div v-if="item.thumbnail" class="w-[255px] h-[150px] rounded-xl relative">
                            <img class="w-full h-full object-cover rounded-xl" :src="item.thumbnail">
                            <div class="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                                <!-- Play svg -->
                                <playIcon v-if="!isLoading[index]" :w="32" :h="32" />
                            </div>
                        </div>
                    </label>
                    <div v-if="isLoading[index]"
                        class="absolute inset-0 flex flex-col items-center justify-center mt-2">
                        <div class="w-10 h-10 border-4 border-gray-200 border-t-[#FFCC02] rounded-full animate-spin">
                        </div>
                        <p class="mt-2 text-white">{{ uploadProgress[index] }}%</p>
                    </div>
                    <input :id="'videoInput' + index" accept="video/*" @change="handleVideoUpload($event, index)"
                        type="file" class="hidden">
                </div>
                <!-- Image input -->
                <div class="relative">
                    <label :for="'imageInput' + index" class="cursor-pointer">
                        <div v-if="!item.imagePerview"
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
                        <div v-if="item.imagePerview" class="w-[255px] h-[150px] rounded-xl relative">
                            <img class="w-full h-full object-cover rounded-xl" :src="item.imagePerview">
                        </div>
                    </label>
                    <input :id="'imageInput' + index" accept="image/*" @change="handleImageUpload($event, index)"
                        type="file" class="hidden">
                </div>
                <!-- Name input -->
                <input v-model="item.name"
                    class="w-full bg-m_black-400 rounded-lg px-8 py-3 font-sf_pro font-medium text-lg placeholder:text-m_gray-100 text-m_gray-100 outline-none"
                    type="text" placeholder="Название урока">
            </div>
        </div>
        <button @click="addVideField" class="w-full font-sf_pro font-normal text-m_yellow-100 text-lg pt-10">
            + Добавить еще
        </button>

        <div class="w-fit py-10 mx-auto">
            <AdminButton :bold="true" name="Next" @click="saveCourse"></AdminButton>
        </div>
    </div>
    <!-- Themes -->
    <div class="w-full my-10">
        <h4 class="font-sf_pro font-medium text-lg text-white pb-6">Чему вы научитесь</h4>
        <div class="grid grid-cols-2 gap-6">
            <AdminTextInput v-for="(item, index) in fields" :key="index" v-model="item.name" />
        </div>
        <button @click="addField" class="w-full font-sf_pro font-normal text-m_yellow-100 text-lg py-8">
            + Добавить еще
        </button>
    </div>
    <!-- Status -->
    <div class="flex-1">
        <h4 class="font-sf_pro font-medium text-lg text-white pb-5">Статус</h4>
        <AdminSelection @sendData="selectOption" :options="['Открыто', 'Закрыто']" :name="'Закрыто'" />
    </div>
</template>