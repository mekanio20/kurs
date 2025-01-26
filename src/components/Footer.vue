<template>
    <div class="container ">
        <div
            class="flex lg:flex-row flex-col-reverse items-start justify-between sm:py-20 py-10 border-b border-m_black-300">
            <div
                class="lg:flex-1 w-full flex lg:items-start items-center lg:justify-start justify-center flex-col lg:mt-0 mt-20">
                <router-link to="/" class="flex items-center space-x-4 cursor-pointer">
                    <LogoIcon />
                </router-link>
                <p
                    class="font-sf_pro font-normal lg:text-lg sm:text-base text-sm text-m_gray-100 my-10 w-1/2 lg:text-start text-center">
                    Учитесь у экспертов, чтобы стать тем, кем всегда мечтали быть.
                </p>
                <p
                    class="font-sf_pro font-normal lg:text-lg sm:text-end text-center sm:text-base text-sm my-10 text-m_gray-100 lg:hidden block">
                    All Rights Reserved | <router-link to="/terms"
                        class="text-m_yellow-100 cursor-pointer hover:underline">Terms and Conditions</router-link> |
                    <router-link to="/privacy" class="text-m_yellow-100 cursor-pointer hover:underline">Privacy
                        Policy</router-link>
                </p>
            </div>
            <div class="lg:flex-1 w-full flex flex-col items-end">
                <div class="w-full flex items-start justify-between lg:pl-24">
                    <div class="flex flex-col items-start justify-center">
                        <h3 class="font-sf_pro font-bold lg:text-lg sm:text-base text-sm text-white mb-10">
                            About</h3>
                        <div class="flex flex-col items-start space-y-4">
                            <router-link to="/about"
                                class="font-dm_sans font-normal lg:text-lg sm:text-base text-sm text-m_gray-100 hover:underline">
                                About us
                            </router-link>
                            <router-link to="/contact"
                                class="font-dm_sans font-normal lg:text-lg sm:text-base text-sm text-m_gray-100 hover:underline">
                                Contact us
                            </router-link>
                        </div>
                    </div>
                    <div class="flex flex-col items-start justify-center">
                        <h3 class="font-sf_pro font-bold lg:text-lg sm:text-base text-sm text-white mb-10">
                            Social</h3>
                        <div class="flex flex-col items-start space-y-4">
                            <router-link to="#" class="flex items-center space-x-2">
                                <InstagramIcon />
                                <p class="font-dm_sans font-normal lg:text-lg sm:text-base text-sm text-m_gray-100 hover:underline">
                                    Instagram</p>
                            </router-link>
                            <router-link to="#" class="flex items-center space-x-2">
                                <FacebookIcon />
                                <p class="font-dm_sans font-normal lg:text-lg sm:text-base text-sm text-m_gray-100 hover:underline">
                                    Facebook</p>
                            </router-link>
                            <router-link to="#" class="flex items-center space-x-2">
                                <YoutubeIcon />
                                <p class="font-dm_sans font-normal lg:text-lg sm:text-base text-sm text-m_gray-100 hover:underline">
                                    YouTube</p>
                            </router-link>
                            <router-link to="#" class="flex items-center space-x-2">
                                <LinkedInIcon />
                                <p class="font-dm_sans font-normal lg:text-lg sm:text-base text-sm text-m_gray-100 hover:underline">
                                    LinkedIn</p>
                            </router-link>
                        </div>
                    </div>
                    <div class="flex flex-col items-start justify-center">
                        <h3 class="font-sf_pro font-bold lg:text-lg sm:text-base text-sm text-white mb-10">
                            Mobile</h3>
                        <div class="flex flex-col items-start space-y-4">
                            <router-link to="#">
                                <GoogleIcon />
                            </router-link>
                            <router-link to="#">
                                <AppleIcon />
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p
            class="font-sf_pro font-normal lg:text-lg text-end sm:text-base text-sm py-10 text-m_gray-100 lg:block hidden">
            All Rights Reserved | <router-link to="/terms"
                class="text-m_yellow-100 cursor-pointer hover:underline">Terms and Conditions</router-link> |
            <router-link to="/privacy" class="text-m_yellow-100 cursor-pointer hover:underline">Privacy
                Policy</router-link>
        </p>
    </div>
</template>

<script>
import InstagramIcon from '@/components/icons/instagram.vue';
import FacebookIcon from '@/components/icons/facebook.vue';
import LinkedInIcon from '@/components/icons/linkedin.vue';
import YoutubeIcon from '@/components/icons/youtube.vue';
import GoogleIcon from '@/components/icons/google.vue';
import AppleIcon from '@/components/icons/apple.vue';
import LogoIcon from '@/components/icons/logo.vue';
export default {
    name: "Footer",
    components: {
        InstagramIcon,
        FacebookIcon,
        LinkedInIcon,
        YoutubeIcon,
        GoogleIcon,
        AppleIcon,
        LogoIcon
    }
}
</script>