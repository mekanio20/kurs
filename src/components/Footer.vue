<template>
    <div class="container ">
        <div
            class="flex lg:flex-row flex-col-reverse items-start justify-between sm:py-20 py-10 border-b border-m_black-300">
            <div class="lg:flex-1 w-full flex lg:items-start items-center lg:justify-start justify-center flex-col lg:mt-0 mt-20">
                <router-link to="/" class="flex items-center space-x-4 cursor-pointer">
                    <svg width="120" height="21" viewBox="0 0 106 21" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <p
                    class="font-sf_pro font-normal lg:text-lg sm:text-base text-sm text-m_gray-100 my-10 w-1/2 lg:text-start text-center">
                    Учитесь у экспертов, чтобы стать тем, кем всегда мечтали быть.
                </p>
                <div class="flex items-center space-x-6">
                    <router-link v-for="item in icons" :key="item.id" :to="item.url">
                        <img :src="item.icon">
                    </router-link>
                </div>
                <p
                    class="font-sf_pro font-normal lg:text-lg sm:text-end text-center sm:text-base text-sm my-10 text-m_gray-100 lg:hidden block">
                    All Rights Reserved | <router-link to="/terms" class="text-m_yellow-100 cursor-pointer hover:underline">Terms and Conditions</router-link> | <router-link to="/privacy"
                        class="text-m_yellow-100 cursor-pointer hover:underline">Privacy Policy</router-link>
                </p>
            </div>
            <div class="lg:flex-1 w-full flex flex-col items-end">
                <div class="w-full flex items-center justify-between lg:pl-24">
                    <div class="flex flex-col items-start justify-center">
                        <h3
                            class="font-sf_pro font-bold lg:text-lg sm:text-base text-sm text-white mb-10">
                            Product</h3>
                        <div class="flex flex-col items-start space-y-4">
                            <router-link to="#"
                                class="font-dm_sans font-normal lg:text-lg sm:text-base text-sm text-m_gray-100">
                                Features
                            </router-link>
                            <router-link to="#"
                                class="font-dm_sans font-normal lg:text-lg sm:text-base text-sm text-m_gray-100">
                                Pricing
                            </router-link>
                            <router-link to="#"
                                class="font-dm_sans font-normal lg:text-lg sm:text-base text-sm text-m_gray-100">
                                Case studies
                            </router-link>
                            <router-link to="#"
                                class="font-dm_sans font-normal lg:text-lg sm:text-base text-sm text-m_gray-100">
                                Reviews
                            </router-link>
                            <router-link to="#"
                                class="font-dm_sans font-normal lg:text-lg sm:text-base text-sm text-m_gray-100">
                                Updates
                            </router-link>
                        </div>
                    </div>
                    <div class="flex flex-col items-start justify-center">
                        <h3
                            class="font-sf_pro font-bold lg:text-lg sm:text-base text-sm text-white mb-10">
                            Company</h3>
                        <div class="flex flex-col items-start space-y-4">
                            <router-link to="#"
                                class="font-dm_sans font-normal lg:text-lg sm:text-base text-sm text-m_gray-100">
                                About
                            </router-link>
                            <router-link to="#"
                                class="font-dm_sans font-normal lg:text-lg sm:text-base text-sm text-m_gray-100">
                                Contact us
                            </router-link>
                            <router-link to="#"
                                class="font-dm_sans font-normal lg:text-lg sm:text-base text-sm text-m_gray-100">
                                Careers
                            </router-link>
                            <router-link to="#"
                                class="font-dm_sans font-normal lg:text-lg sm:text-base text-sm text-m_gray-100">
                                Culture
                            </router-link>
                            <router-link to="#"
                                class="font-dm_sans font-normal lg:text-lg sm:text-base text-sm text-m_gray-100">
                                Blog
                            </router-link>
                        </div>
                    </div>
                    <div class="flex flex-col items-start justify-center">
                        <h3
                            class="font-sf_pro font-bold lg:text-lg sm:text-base text-sm text-white mb-10">
                            Support</h3>
                        <div class="flex flex-col items-start space-y-4">
                            <router-link to="#"
                                class="font-dm_sans font-normal lg:text-lg sm:text-base text-sm text-m_gray-100">
                                Getting started
                            </router-link>
                            <router-link to="#"
                                class="font-dm_sans font-normal lg:text-lg sm:text-base text-sm text-m_gray-100">
                                Help center
                            </router-link>
                            <router-link to="#"
                                class="font-dm_sans font-normal lg:text-lg sm:text-base text-sm text-m_gray-100">
                                Server status
                            </router-link>
                            <router-link to="#"
                                class="font-dm_sans font-normal lg:text-lg sm:text-base text-sm text-m_gray-100">
                                Report a bug
                            </router-link>
                            <router-link to="#"
                                class="font-dm_sans font-normal lg:text-lg sm:text-base text-sm text-m_gray-100">
                                Chat support
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p
            class="font-sf_pro font-normal lg:text-lg text-end sm:text-base text-sm py-10 text-m_gray-100 lg:block hidden">
            All Rights Reserved | <router-link to="/terms" class="text-m_yellow-100 cursor-pointer hover:underline">Terms and Conditions</router-link> | <router-link to="/privacy"
                        class="text-m_yellow-100 cursor-pointer hover:underline">Privacy Policy</router-link>
        </p>
    </div>
</template>

<script>
export default {
    name: "Footer",
    data() {
        return {
            icons: [
                { id: 1, icon: '/svgs/facebook.svg', url: '#' },
                { id: 2, icon: '/svgs/instagram.svg', url: '#' },
                { id: 3, icon: '/svgs/youtube.svg', url: '#' },
                { id: 4, icon: '/svgs/linkedin.svg', url: '#' },
            ]
        }
    }
}
</script>