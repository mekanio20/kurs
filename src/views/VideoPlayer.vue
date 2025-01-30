<template>
    <div class="w-full min-h-100vh relative overflow-hidden">
        <div class="w-full h-full relative z-50">
            <!-- Navbar -->
            <div class="container pt-10 pb-5 flex items-center justify-between">
                <div class="flex items-center space-x-4">
                    <!-- Logo -->
                    <router-link to="/" class="lg:w-24 w-20 cursor-pointer mr-10">
                        <svg viewBox="0 0 106 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.79183 1.26896C4.24284 2.10404 1.84991 4.40053 0.913546 6.9058C0.133243 8.99352 0.289304 12.4904 1.25168 14.3694C2.24006 16.2744 3.85269 17.8141 5.82946 18.7536C7.33804 19.4582 7.83223 19.5626 9.67895 19.5365C11.4736 19.5365 12.0459 19.406 13.5024 18.7275C16.8837 17.1617 18.6784 14.3955 18.8345 10.5854C18.9646 7.74089 18.3403 5.94023 16.5456 3.98299C14.7249 1.97356 12.8522 1.11238 10.0431 1.00799C8.69057 0.955799 7.41607 1.06018 6.79183 1.26896ZM12.9562 5.54878C17.508 8.83694 15.2451 15.9091 9.65294 15.9091C4.55496 15.9091 2.00597 9.93299 5.51733 6.30558C6.89587 4.89637 7.7542 4.55711 9.96506 4.6615C11.5777 4.71369 11.9678 4.84418 12.9562 5.54878Z"
                                fill="white" />
                            <path
                                d="M74.5223 1.53015C70.4907 3.22642 68.3579 6.56677 68.618 10.7944C68.774 13.2736 69.4243 14.8133 71.0629 16.5878C73.846 19.5628 78.2417 20.3979 81.9611 18.6494C84.4841 17.449 86.9811 14.1087 87.0591 11.8122C87.0591 11.499 87.2672 11.8905 87.5273 12.7255C88.1516 14.6306 88.8538 15.7527 90.2584 17.0576C91.7409 18.4146 93.0675 19.0931 94.9922 19.4323C102.249 20.7633 108.127 13.2214 105.11 6.48848C103.68 3.30471 100.688 1.21699 97.2551 0.982119C92.7553 0.695057 89.192 3.09594 87.6574 7.48015L87.0851 9.04594L86.9031 8.08037C86.617 6.48848 85.6286 4.79221 84.198 3.46129C82.3253 1.71282 80.8947 1.1126 78.1897 1.00821C76.317 0.929926 75.7447 1.00821 74.5223 1.53015ZM81.1028 5.49681C81.8311 6.01874 82.4813 6.77554 82.9495 7.68892C84.172 10.1159 83.7819 12.3602 81.8571 14.2652C79.7243 16.3269 77.0712 16.5878 74.6263 14.9437C71.0109 12.4907 71.4531 7.19308 75.4586 5.00098C76.0308 4.68782 76.7591 4.58344 78.1117 4.66172C79.6983 4.71392 80.1404 4.8444 81.1028 5.49681ZM99.726 5.41852C102.639 7.37576 103.107 11.5512 100.714 14.1869C99.0498 16.0398 95.9286 16.4834 93.7177 15.2047C91.923 14.1348 91.0907 12.7516 90.9867 10.5856C90.8566 8.62839 91.3508 7.32357 92.6773 6.12313C94.0298 4.8444 94.8101 4.58344 96.8129 4.63563C98.2955 4.71392 98.8677 4.8444 99.726 5.41852Z"
                                fill="white" />
                            <path
                                d="M60.6848 1.37349C60.2166 1.84323 60.6068 2.18248 61.8032 2.33906L63.1037 2.52174V10.5595C63.1037 17.3967 63.0517 18.6494 62.7136 18.9364C62.5055 19.1191 62.3234 19.5106 62.3234 19.7976C62.3234 20.2935 62.4275 20.3195 64.4823 20.163C65.6527 20.0586 67.0052 19.9803 67.4734 19.9803C68.1237 19.9803 68.3057 19.8759 68.3057 19.4584C68.3057 19.0669 68.1237 18.9364 67.5515 18.9364H66.8232L66.6411 15.2046C66.5631 13.1691 66.407 9.17634 66.329 6.33183L66.1469 1.19082H63.4939C62.0373 1.19082 60.7628 1.26911 60.6848 1.37349Z"
                                fill="white" />
                            <path
                                d="M41.2551 5.75753L44.2462 8.75863H36.2351H28.25V10.5854V12.4121H36.1831C40.5528 12.4121 44.1162 12.4904 44.1162 12.5948C44.1162 12.6992 42.7896 14.1084 41.203 15.7264L38.2639 18.6753H40.8389H43.4399L47.4194 14.7086L51.399 10.742L47.4455 6.7492L43.4659 2.75643H40.8649H38.2639L41.2551 5.75753Z"
                                fill="white" />
                        </svg>
                    </router-link>
                    <!-- Name -->
                    <h1 class="font-sf_pro font-bold text-lg text-white">
                        Определите своих клиентов
                    </h1>
                </div>
                <div class="flex items-center space-x-10">
                    <div @click.stop="isOpen = true"
                        class="px-8 py-2 rounded-lg bg-m_yellow-100 font-bold font-sf_pro text-lg flex items-center space-x-2 cursor-pointer">
                        <documentIcon />
                        <p class="font-bold font-sf_pro text-lg">Домашнее задание</p>
                    </div>
                    <router-link to="#" @click.prevent="$router.go(-1)">
                        <closeIcon />
                    </router-link>
                </div>
            </div>
            <div class="container bg-transparent">
                <!-- Popup -->
                <div @click="isOpen = false">
                    <div v-if="isOpen"
                        class="fixed inset-0 z-50 flex items-center justify-center bg-black text-white bg-opacity-50"
                        @click.self="isOpen = false">
                        <div class="bg-m_black-300 px-12 py-10 rounded-lg shadow-lg w-2/4" @click.stop>
                            <div class="flex items-center justify-between pb-12">
                                <h1 class="font-sf_pro font-bold text-2xl">Домашнее задание</h1>
                                <span @click="isOpen = false" class="cursor-pointer">
                                    <closeIcon />
                                </span>
                            </div>
                            <div class="flex flex-col">
                                <h4 class="font-sf_pro font-medium text-sm text-m_gray-600 uppercase pb-4">Заметки
                                    наставника</h4>
                                <p class="font-sf_pro font-normal text-base text-m_gray-100">Продвигайте себя, ясно
                                    выражайте идеи и используйте приемы, которые сделают вас более убедительными. </p>
                            </div>
                            <button
                                class="w-full bg-m_yellow-100 flex items-center justify-center space-x-4 py-4 rounded-lg mt-12">
                                <downloadIcon />
                                <p class="font-sf_pro font-bold text-lg text-black">Скачать домашнее задание</p>
                            </button>
                            <div class="border border-dashed rounded-lg border-m_black-400 mt-10 py-6 flex flex-col items-center">
                                <button
                                    class="w-fit border border-m_yellow-100 flex items-center justify-center space-x-4 px-32 py-3 rounded-lg">
                                    <uploadIcon />
                                    <p class="font-sf_pro font-bold text-lg text-m_yellow-100">Загрузить файл</p>
                                </button>
                                <p class="font-sf_pro font-normal text-base text-m_gray-100 pt-6">Максимальный размер - до  <span class="font-bold text-white">30MB</span></p>
                            </div>
                            <div class="w-full rounded-lg px-6 py-3 bg-m_black-600 flex items-center justify-between mt-10">
                                <div class="flex items-center space-x-6">
                                    <documentIcon color="white" />
                                    <p class="font-sf_pro font-medium text-lg text-white">Homework.docx</p>
                                </div>
                                <span class="cursor-pointer">
                                    <closeIcon :w="24" :h="24" />
                                </span>
                            </div>
                            <div class="w-full mt-12 flex items-center space-x-6 font-sf_pro text-lg">
                                <button class="w-full border border-m_gray-100 text-m_gray-100 py-3 rounded-lg">Назад</button>
                                <button class="w-full bg-m_yellow-100 text-black font-bold py-3 rounded-lg">Сохранить </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Video player -->
                <div class="video-player-container">
                    <video id="plyr-video" class="plyr" controls playsinline>
                        <source v-if="lessons?.video" :src="lessons?.video" type="video/mp4">
                    </video>
                </div>
                <div class="flex items-center justify-center py-10">
                    <p v-for="(item, index) in tabs" @click="activeTab = index"
                        class="font-sf_pro font-medium text-lg px-6 pb-4 cursor-pointer border-b-4"
                        :class="[activeTab === index ? 'text-m_yellow-100 border-m_yellow-100' : 'text-m_gray-100 border-m_black-300']">
                        {{ item }}
                    </p>
                </div>
                <!-- Information -->
                <div v-if="activeTab === 0" class="py-16">
                    <div class="pb-10">
                        <h1 class="font-sf_pro font-bold text-5xl text-white pb-4">Эффективно общайтесь и работайте в
                            командах</h1>
                        <p class="font-sf_pro font-normal text-lg text-m_gray-100 py-10">Продвигайте себя, ясно
                            выражайте идеи и используйте приемы, которые сделают вас более
                            убедительными. Продвигайте себя, ясно выражайте идеи и используйте приемы, которые сделают
                            вас более убедительными. Продвигайте себя, ясно выражайте идеи и используйте приемы, которые
                            сделают вас более убедительными. Продвигайте себя, ясно выражайте идеи и используйте приемы,
                            которые сделают вас более убедительными. Продвигайте себя, ясно выражайте идеи и используйте
                            приемы, которые сделают вас более убедительными. Продвигайте себя, ясно выражайте идеи и
                            используйте приемы, которые сделают вас более убедительными. Продвигайте себя, ясно
                            выражайте идеи и используйте приемы... <span class="text-m_yellow-100">Читать далее</span>
                        </p>
                        <div class="flex items-center space-x-6">
                            <p v-for="item in cats"
                                class="px-8 py-3 bg-m_black-300 rounded-full text-m_gray-100 font-sf_pro text-lg">
                                {{ item }}
                            </p>
                            <p class="px-8 py-3 bg-m_black-300 rounded-full text-m_gray-100 font-sf_pro text-lg">17
                                уроков</p>
                            <p class="px-8 py-3 bg-m_black-300 rounded-full text-m_gray-100 font-sf_pro text-lg">2h 10m
                            </p>
                        </div>
                        <div class="flex items-center space-x-8 py-10">
                            <div class="flex items-center">
                                <span class="lg:text-base text-sm text-m_yellow-100">★</span>
                                <span class="ml-1 text-white lg:text-base text-sm font-medium">4.8</span>
                                <span class="ml-2 text-m_gray-100 lg:text-base text-sm font-medium">(120 отзывов)</span>
                            </div>
                            <div class="flex items-center font-sf_pro font-medium lg:text-base text-sm text-white">
                                102 студентов
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <h2
                            class="font-sf_pro font-bold lg:text-[40px] text-[30px] lg:leading-[60px] leading-[50px] text-white pb-6">
                            Чему вы научитесь</h2>
                        <div class="my-10 flex items-center justify-center flex-wrap gap-x-6 gap-y-4">
                            <div v-for="item in themes" :key="item.id"
                                class="w-fit px-6 py-3 rounded-3xl bg-m_black-300 font-sf_pro font-normal lg:text-base text-sm text-white">
                                {{ item.name }}
                            </div>
                        </div>
                    </div>
                    <div class="w-full lg:py-16">
                        <h2
                            class="font-sf_pro font-bold lg:text-[40px] text-3xl lg:leading-[60px] leading-[50px] text-white text-center">
                            Ментор</h2>
                        <div class="flex lg:flex-row flex-col items-center lg:space-x-10 lg:space-y-0 space-y-10 pt-20">
                            <div class="sm:w-[400px] w-full h-[200px] rounded-lg bg-m_black-500 relative">
                                <img class="w-full absolute bottom-0 left-1/2 -translate-x-1/2 object-cover h-[250px]"
                                    src="/imgs/person1.png">
                                <div class="absolute top-4 right-4">
                                    <div class="flex items-center">
                                        <span class="lg:text-base text-sm text-m_yellow-100">★</span>
                                        <span
                                            class="ml-1 text-white lg:text-base text-sm font-bold font-sf_pro">4.8</span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-1 flex lg:items-start items-center flex-col space-y-3">
                                <h3 class="font-sf_pro font-bold lg:text-2xl text-xl text-white">Marques Brownlee</h3>
                                <p class="font-sf_pro font-normal lg:text-base text-sm text-m_yellow-200">Youtuber,
                                    Podcaster</p>
                                <div class="text-m_gray-100 lg:text-start text-center">
                                    <p class="lg:text-base text-sm leading-relaxed mb-4">
                                        Я также являюсь онлайн-инструктором с опытом преподавания более 3 лет и преподаю
                                        веб-разработку и деловое письмо более чем 14 000 студентам со всего мира на
                                        нескольких глобальных платформах. Я больше сосредоточен на творческих вещах и
                                        презентациях. Преподавание — это то, что я люблю делать
                                        <a v-if="100 < 200" href="#" class="text-m_yellow-100 hover:underline">...Читать
                                            далее</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- About -->
                <div v-if="activeTab === 1" class="py-16">
                    <div class="flex items-center space-x-6">
                        <div v-for="item in modules" :key="item.id"
                            class="px-8 py-3 rounded-3xl bg-m_black-300 font-sf_pro font-normal lg:text-lg text-base text-white">
                            {{ item.name }}
                        </div>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-20">
                        <router-link v-for="(item, index) in visibleLessons" :key="index" to="/video/detail/1"
                            class="p-4 bg-m_black-500 rounded-xl overflow-hidden flex items-center space-x-4 cursor-pointer">
                            <div class="relative w-24">
                                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <playIcon :w="32" :h="32" />
                                </div>
                                <img :src="item.banner" class="w-full rounded-xl object-cover mr-8">
                            </div>
                            <div class="flex items-start flex-col space-y-2">
                                <p class="font-sf_pro font-medium lg:text-base text-sm text-m_gray-100">Урок: {{ index +
                        1 }}</p>
                                <p class="font-sf_pro font-medium text-start lg:text-xl text-lg text-white">{{ item.name
                                    }}</p>
                            </div>
                        </router-link>
                    </div>
                </div>
                <!-- Comments -->
                <div v-if="activeTab === 2" class="py-16">
                    <div class="w-full lg:pb-20">
                        <div
                            class="w-full text-white p-6 rounded-lg justify-center items-center flex flex-col lg:flex-row gap-8">
                            <!-- Rating Overview -->
                            <div
                                class="w-full lg:h-[152px] flex lg:flex-row flex-col items-center justify-center px-10">
                                <div
                                    class="h-full lg:pr-6 lg:mr-3 lg:border-r-2 lg:border-white lg:pb-0 pb-6 opacity-80 flex flex-col items-center justify-center">
                                    <div class="text-4xl font-bold font-sf_pro tracking-wider text-nowrap">4.6 <span
                                            class="font-normal text-base">/</span><sub
                                            class="font-normal text-base">5</sub></div>
                                    <div class="fonst-sf_pro text-lg opacity-80 text-white">86 Ком.</div>
                                </div>
                                <div class="w-full h-full space-y-2">
                                    <RatingBar :stars="5" :count="70" />
                                    <RatingBar :stars="4" :count="5" />
                                    <RatingBar :stars="3" :count="8" />
                                    <RatingBar :stars="2" :count="2" />
                                    <RatingBar :stars="1" :count="1" />
                                </div>
                            </div>
                            <!-- Review Form -->
                            <div class="w-full bg-m_black-500 py-8 px-10 rounded-lg flex flex-col gap-4">
                                <div class="flex items-center gap-2 pb-5">
                                    <StarRating :selectedStars="3" />
                                </div>
                                <h4 class="font-sf_pro font-medium text-base text-m_gray-100">Комментарий</h4>
                                <textarea cols="5" rows="4" v-model="comment"
                                    class="w-full py-4 px-6 rounded-lg bg-m_black-300 text-white placeholder-gray-400 focus:outline-none resize-none"></textarea>
                                <button
                                    class="mt-6 bg-transparent hover:bg-m_yellow-100 hover:text-black border border-m_yellow-100 text-m_yellow-100 font-sf_pro font-bold text-lg py-3 rounded-lg duration-300">
                                    Отправить комментарий
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="w-full text-center">
                        <div class="md:columns-3 mobile:columns-2 columns-1 gap-6 sm:pb-20 pb-10">
                            <div class="bg-m_black-500 rounded-lg p-8 mb-6">
                                <div class="w-full flex space-x-6 items-center">
                                    <div class="w-16 rounded-full">
                                        <img src="/imgs/person4.png">
                                    </div>
                                    <div class="flex flex-col items-start space-y-1">
                                        <p class="font-sf_pro font-medium lg:text-xl text-lg text-start text-white">
                                            Мария
                                            Смирнова</p>
                                        <div class="flex items-center space-x-2">
                                            <span class="text-sm text-m_yellow-100">★</span>
                                            <span class="text-sm text-m_yellow-100">★</span>
                                            <span class="text-sm text-m_yellow-100">★</span>
                                            <span class="text-sm text-m_yellow-100">★</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full pt-6 font-sf_pro font-normal lg:text-base text-sm text-white">
                                    Курсы предоставляют отличную возможность для расширения знаний и навыков в различных
                                    областях. 💜 Они структурированы так, чтобы обеспечить понимание материала.
                                </div>
                            </div>
                            <div class="bg-m_black-500 rounded-lg p-8 mb-6">
                                <div class="w-full flex space-x-6 items-center">
                                    <div class="w-16 rounded-full">
                                        <img src="/imgs/person4.png">
                                    </div>
                                    <div class="flex- flex-col space-y-1">
                                        <p class="font-sf_pro font-medium lg:text-xl text-lg text-start text-white">
                                            Мария
                                            Смирнова</p>
                                        <div class="flex items-center space-x-2">
                                            <span class="text-sm text-m_yellow-100">★</span>
                                            <span class="text-sm text-m_yellow-100">★</span>
                                            <span class="text-sm text-m_yellow-100">★</span>
                                            <span class="text-sm text-m_yellow-100">★</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full pt-6 font-sf_pro font-normal lg:text-base text-sm text-white">
                                    Курсы предоставляют отличную возможность для расширения знаний и навыков в различных
                                    областях. 💜 Они структурированы так, чтобы обеспечить понимание материала.
                                </div>
                            </div>
                            <div class="bg-m_black-500 rounded-lg p-8 mb-6">
                                <div class="w-full flex space-x-6 items-center">
                                    <div class="w-16 rounded-full">
                                        <img src="/imgs/person4.png">
                                    </div>
                                    <div class="flex- flex-col space-y-1">
                                        <p class="font-sf_pro font-medium lg:text-xl text-lg text-start text-white">
                                            Мария
                                            Смирнова</p>
                                        <div class="flex items-center space-x-2">
                                            <span class="text-sm text-m_yellow-100">★</span>
                                            <span class="text-sm text-m_yellow-100">★</span>
                                            <span class="text-sm text-m_yellow-100">★</span>
                                            <span class="text-sm text-m_yellow-100">★</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full pt-6 font-sf_pro font-normal lg:text-base text-sm text-white">
                                    Опытные наставники и качественные материалы делают обучение Курсы предоставляют
                                    отличную
                                    возможность для расширения знаний и навыков в различных областях 😀🩷 Они
                                    структурированы так, чтобы обеспечить понимание материала, с интерактивными и
                                    практическими заданиями.
                                </div>
                            </div>
                            <div class="bg-m_black-500 rounded-lg p-8 mb-6">
                                <div class="w-full flex space-x-6 items-center">
                                    <div class="w-16 rounded-full">
                                        <img src="/imgs/person4.png">
                                    </div>
                                    <div class="flex- flex-col space-y-1">
                                        <p class="font-sf_pro font-medium lg:text-xl text-lg text-start text-white">
                                            Мария
                                            Смирнова</p>
                                        <div class="flex items-center space-x-2">
                                            <span class="text-sm text-m_yellow-100">★</span>
                                            <span class="text-sm text-m_yellow-100">★</span>
                                            <span class="text-sm text-m_yellow-100">★</span>
                                            <span class="text-sm text-m_yellow-100">★</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full pt-6 font-sf_pro font-normal lg:text-base text-sm text-white">
                                    Курсы предоставляют отличную возможность для расширения знаний и навыков в различных
                                    областях. 💜 Они структурированы так, чтобы обеспечить понимание материала.
                                </div>
                            </div>
                            <div class="bg-m_black-500 rounded-lg p-8 mb-6">
                                <div class="w-full flex space-x-6 items-center">
                                    <div class="w-16 rounded-full">
                                        <img src="/imgs/person4.png">
                                    </div>
                                    <div class="flex- flex-col space-y-1">
                                        <p class="font-sf_pro font-medium lg:text-xl text-lg text-start text-white">
                                            Мария
                                            Смирнова</p>
                                        <div class="flex items-center space-x-2">
                                            <span class="text-sm text-m_yellow-100">★</span>
                                            <span class="text-sm text-m_yellow-100">★</span>
                                            <span class="text-sm text-m_yellow-100">★</span>
                                            <span class="text-sm text-m_yellow-100">★</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full pt-6 font-sf_pro font-normal lg:text-base text-sm text-white">
                                    Курсы предоставляют отличную возможность для расширения знаний и навыков в различных
                                    областях. 💜 Они структурированы так, чтобы обеспечить понимание материала.
                                </div>
                            </div>
                            <div class="bg-m_black-500 rounded-lg p-8 mb-6">
                                <div class="w-full flex space-x-6 items-center">
                                    <div class="w-16 rounded-full">
                                        <img src="/imgs/person4.png">
                                    </div>
                                    <div class="flex- flex-col space-y-1">
                                        <p class="font-sf_pro font-medium lg:text-xl text-lg text-start text-white">
                                            Мария
                                            Смирнова</p>
                                        <div class="flex items-center space-x-2">
                                            <span class="text-sm text-m_yellow-100">★</span>
                                            <span class="text-sm text-m_yellow-100">★</span>
                                            <span class="text-sm text-m_yellow-100">★</span>
                                            <span class="text-sm text-m_yellow-100">★</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full pt-6 font-sf_pro font-normal lg:text-base text-sm text-white">
                                    Опытные наставники и качественные материалы делают обучение Курсы предоставляют
                                    отличную
                                    возможность для расширения знаний и навыков в различных областях 😀🩷 Они
                                    структурированы так, чтобы обеспечить понимание материала, с интерактивными и
                                    практическими заданиями.
                                </div>
                            </div>
                        </div>
                        <router-link to="/"
                            class="px-7 py-3 mt-20 rounded-lg border border-white font-sf_pro font-medium text-white lg:text-base text-sm">
                            Посмотреть все
                        </router-link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </div>
</template>

<script>
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';
import api from '@/api/index';
import Footer from '@/components/Footer.vue';
import closeIcon from '@/components/icons/close.vue';
import documentIcon from '@/components/icons/document.vue';
import downloadIcon from '@/components/icons/download.vue';
import uploadIcon from '@/components/icons/upload.vue';
import Video from '@/components/Video.vue';
import playIcon from '@/components/icons/play.vue';
import StarRating from '@/components/StarRating.vue';
import RatingBar from '@/components/RatingBar.vue';
export default {
    name: "VideoPlayer",
    components: {
        Footer,
        Video,
        closeIcon,
        playIcon,
        StarRating,
        RatingBar,
        documentIcon,
        downloadIcon,
        uploadIcon
    },
    data() {
        return {
            isOpen: false,
            activeTab: 0,
            lessons: [],
            cats: ['Бизнес & предпринимательство'],
            tabs: ['Информация о курсе', 'Программа курса', 'Отзывы'],
            themes: [
                { id: 1, name: 'Превращение обыденного в культовое' },
                { id: 2, name: 'Создавать уникальный фирменный стиль.' },
                { id: 3, name: 'Как вырасти из неудач' },
                { id: 4, name: 'Создание продуктов, которые нравятся рынку' },
                { id: 5, name: 'Масштабирование идей до крупных успехов' },
            ],
            modules: [
                { id: 1, name: 'Модуль #1' },
                { id: 2, name: 'Модуль #2' },
                { id: 3, name: 'Модуль #3' },
                { id: 4, name: 'Модуль #4' },
                { id: 5, name: 'Модуль #5' }
            ],
            visibleLessons: [
                { id: 1, banner: '/imgs/person5.png', name: 'Определите своих клиентов' },
                { id: 2, banner: '/imgs/person5.png', name: 'Зажгите большую идею' },
                { id: 3, banner: '/imgs/person5.png', name: 'Определите своих клиентов' },
                { id: 4, banner: '/imgs/person5.png', name: 'Зажгите большую идею' },
                { id: 5, banner: '/imgs/person5.png', name: 'Определите своих клиентов' },
                { id: 6, banner: '/imgs/person5.png', name: 'Зажгите большую идею' },
            ],
            comment: 'Этот курс предназначен для тех, кто хочет освоить основные концепции и стратегии маркетинга! 😀🩷'
        };
    },
    created() {
        this.getLessons()
    },
    mounted() {
        this.player = new Plyr('#plyr-video', {
            controls: [
                'play-large',
                'play',
                'rewind',
                'fast-forward',
                'progress',
                'current-time',
                'duration',
                'mute',
                'volume',
                'settings',
                'pip',
                'fullscreen',
            ],
            settings: ['speed'],
            speed: { selected: 1.0, options: [0.5, 1, 1.5, 2, 4, 10] },
        });

        document.addEventListener('keydown', this.handleKeyEvents);
    },
    methods: {
        handleKeyEvents(event) {
            if (event.key === 'ArrowRight') {
                this.player.forward(5);
            } else if (event.key === 'ArrowLeft') {
                this.player.rewind(5);
            } else if (event.key === 'ArrowUp') {
                this.player.volume = Math.min(this.player.volume + 0.1, 1);
            } else if (event.key === 'ArrowDown') {
                this.player.volume = Math.max(this.player.volume - 0.1, 0);
            }
        },
        async getLessons() {
            const response = await api.get(`/lessons/${this.$route.params.id}`)
            this.lessons = response.data
        }
    },
    beforeUnmount() {
        document.removeEventListener('keydown', this.handleKeyEvents);
        this.player.destroy();
    },
}
</script>

<style>
:root {
    --plyr-color-main: #FFCC02 !important;
    --plyr-control-color: #ffffff !important;
    --plyr-menu-background: #1e293b !important;
    --plyr-menu-color: #e2e8f0 !important;
    --plyr-tooltip-background: #475569 !important;
    --plyr-tooltip-color: #ffffff !important;
}

.video-player-container {
    width: 100%;
    height: 700px;
}

.plyr {
    width: 100%;
    height: 100%;
    background-position: center;
    overflow: hidden;
}
</style>