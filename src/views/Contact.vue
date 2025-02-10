<template>
    <div class="w-full min-h-100vh relative overflow-hidden">
        <div class="absolute top-0 right-0">
            <svg width="591" height="1735" viewBox="0 0 591 1735" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="613.473" cy="834.913" rx="613.473" ry="899.913" fill="url(#paint0_radial_553_5476)"
                    fill-opacity="0.17" />
                <defs>
                    <radialGradient id="paint0_radial_553_5476" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(613.473 834.913) rotate(90) scale(899.913 613.473)">
                        <stop stop-color="#FFC300" />
                        <stop offset="1" stop-color="#181C27" stop-opacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
        <div class="absolute top-[2200px] left-0">
            <svg width="599" height="1800" viewBox="0 0 599 1800" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="-14.5267" cy="899.913" rx="613.473" ry="899.913" fill="url(#paint0_radial_553_5474)"
                    fill-opacity="0.17" />
                <defs>
                    <radialGradient id="paint0_radial_553_5474" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(-14.5267 899.913) rotate(90) scale(899.913 613.473)">
                        <stop stop-color="#FFC300" />
                        <stop offset="1" stop-color="#181C27" stop-opacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
        <div class="absolute top-[2800px] right-0">
            <svg width="591" height="1800" viewBox="0 0 591 1800" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="613.473" cy="899.913" rx="613.473" ry="899.913" fill="url(#paint0_radial_553_5475)"
                    fill-opacity="0.17" />
                <defs>
                    <radialGradient id="paint0_radial_553_5475" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(613.473 899.913) rotate(90) scale(899.913 613.473)">
                        <stop stop-color="#FFC300" />
                        <stop offset="1" stop-color="#181C27" stop-opacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
        <div class="w-full relative z-50">
            <Navbar />
            <div class="container bg-transparent sm:mt-44 mt-36">
                
            </div>
            <Footer />
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Card from '@/components/Card.vue';
import RatingBar from '@/components/RatingBar.vue';
import StarRating from '@/components/StarRating.vue';
import playIcon from '@/components/icons/play.vue';
import bookmarkIcon from '@/components/icons/bookmark.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
export default {
    name: "CourseDetail",
    components: {
        Navbar,
        Footer,
        Card,
        playIcon,
        RatingBar,
        StarRating,
        bookmarkIcon,
        SwiperSlide,
        Swiper,
    },
    methods: {

    },
}
</script>