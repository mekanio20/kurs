<template>
    <div class="w-full h-full relative">
        <div class="absolute bottom-0 left-0">
            <svg width="587" height="910" viewBox="0 0 587 910" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="-26.5267" cy="899.913" rx="613.473" ry="899.913" fill="url(#paint0_radial_731_5230)"
                    fill-opacity="0.15" />
                <defs>
                    <radialGradient id="paint0_radial_731_5230" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(-26.5267 899.913) rotate(90) scale(899.913 613.473)">
                        <stop stop-color="#FFC300" />
                        <stop offset="1" stop-color="#181C27" stop-opacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
        <div class="w-full relative z-50">
            <Navbar />
            <div class="container bg-transparent mt-44">
                <h2 class="font-sf_pro font-bold text-[35px] text-white leading-[60px] mx-auto mt-32 mb-10">
                    Оформить заказ
                </h2>
                <div class="w-full flex items-start space-x-20">
                    <div class="flex-1">
                        <div class="bg-m_black-500 rounded-lg p-8 mb-6">
                            <div class="flex items-center justify-between mb-14">
                                <h2 class="font-sf_pro font-bold text-xl text-white">Credit/Debit card</h2>
                                <div class="flex items-center space-x-2">
                                    <img class="w-[35px]" src="/imgs/visa.png">
                                    <img class="w-[35px]" src="/imgs/amex.png">
                                    <img class="w-[35px]" src="/imgs/mastercard.png">
                                </div>
                            </div>
                            <div class="mb-8">
                                <div class="flex items-center justify-between mb-3">
                                    <h4 class="font-sf_pro font-normal text-base text-white">Имя на карте</h4>
                                    <p class="font-sf_pro font-normal text-sm text-m_gray-100">*Необходимый</p>
                                </div>
                                <input
                                    class="w-full px-10 py-4 rounded-lg bg-m_black-300 placeholder:text-m_black-400 font-sf_pro font-normal text-lg text-white outline-none"
                                    type="text" placeholder="Имя на карте" required>
                            </div>
                            <div class="mb-8">
                                <div class="flex items-center justify-between mb-3">
                                    <h4 class="font-sf_pro font-normal text-base text-white">Имя на карте</h4>
                                    <p class="font-sf_pro font-normal text-sm text-m_gray-100">*Необходимый</p>
                                </div>
                                <input
                                    class="w-full px-10 py-4 rounded-lg bg-m_black-300 placeholder:text-m_black-400 font-sf_pro font-normal text-lg text-white outline-none"
                                    type="text" placeholder="0000 0000 0000 0000" required>
                            </div>
                            <div class="mb-8 flex items-center space-x-6">
                                <div class="flex-1 ">
                                    <div class="flex items-center justify-between mb-3">
                                        <h4 class="font-sf_pro font-normal text-base text-white">Дата истечения срока
                                            действия</h4>
                                    </div>
                                    <input
                                        class="w-full px-10 py-4 rounded-lg bg-m_black-300 placeholder:text-m_black-400 font-sf_pro font-normal text-lg text-white outline-none"
                                        type="text" placeholder="MM/YY">
                                </div>
                                <div class="flex-1">
                                    <div class="flex items-center justify-between mb-3">
                                        <h4 class="font-sf_pro font-normal text-base text-white">cvc/cvv</h4>
                                        <p class="font-sf_pro font-normal text-sm text-m_gray-100">*Необходимый</p>
                                    </div>
                                    <input
                                        class="w-full px-10 py-4 rounded-lg bg-m_black-300 placeholder:text-m_black-400 font-sf_pro font-normal text-lg text-white outline-none"
                                        type="text" placeholder="cvc" required>
                                </div>
                            </div>
                        </div>
                        <div class="bg-m_black-500 rounded-lg p-8 flex items-center justify-between">
                            <p class="font-sf_pro font-bold text-xl text-white">Paypal</p>
                            <div>
                                <svg width="28" height="33" viewBox="0 0 28 33" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_731_5762)">
                                        <path
                                            d="M23.7528 2.56884C22.2288 0.833385 19.4739 0.0893555 15.9495 0.0893555H5.72072C5.372 0.0893017 5.0347 0.213566 4.7695 0.439795C4.5043 0.666024 4.32861 0.97937 4.27402 1.32347L0.0149586 28.3099C-0.0696977 28.8421 0.342755 29.324 0.88263 29.324H7.19751L8.78344 19.2742L8.73422 19.5889C8.84721 18.8785 9.45533 18.3545 10.1755 18.3545H13.1763C19.0714 18.3545 23.6873 15.9624 25.0357 9.0423C25.0757 8.83763 25.1104 8.63843 25.1404 8.44382C24.9702 8.35378 24.9702 8.35378 25.1404 8.44382C25.5419 5.8861 25.1376 4.14508 23.7528 2.56884Z"
                                            fill="#27346A" />
                                        <path
                                            d="M11.1998 7.52244C11.3724 7.44019 11.5612 7.39762 11.7524 7.39787H19.7716C20.7212 7.39787 21.6069 7.45961 22.4163 7.58975C22.6427 7.62586 22.8681 7.66893 23.0919 7.71891C23.4091 7.78886 23.7227 7.87445 24.0314 7.97537C24.4293 8.10814 24.7999 8.26276 25.1405 8.44382C25.5419 5.88512 25.1376 4.14508 23.7528 2.56884C22.2279 0.833385 19.4739 0.0893555 15.9495 0.0893555H5.71985C4.99962 0.0893555 4.3869 0.613203 4.27402 1.32347L0.0149592 28.3089C-0.0696971 28.842 0.342756 29.3232 0.881756 29.3232H7.19751L10.4878 8.47748C10.5202 8.27259 10.6019 8.07862 10.7259 7.91227C10.8499 7.74591 11.0125 7.61213 11.1998 7.52244Z"
                                            fill="#27346A" />
                                        <path
                                            d="M25.0359 9.04233C23.6875 15.9614 19.0717 18.3546 13.1765 18.3546H10.1748C9.45469 18.3546 8.84645 18.8785 8.73456 19.5889L6.76155 32.0846C6.68783 32.5503 7.04833 32.9724 7.51995 32.9724H12.8432C13.1482 32.9723 13.4431 32.8635 13.6749 32.6656C13.9067 32.4677 14.0603 32.1937 14.1079 31.8927L14.1598 31.6218L15.1631 25.2691L15.2277 24.9181C15.2754 24.6172 15.4289 24.3431 15.6607 24.1452C15.8925 23.9473 16.1874 23.8386 16.4923 23.8385H17.289C22.4457 23.8385 26.4835 21.7455 27.6634 15.6923C28.156 13.1626 27.9011 11.0506 26.5982 9.56716C26.2031 9.11783 25.7123 8.74675 25.1406 8.44385C25.1096 8.63944 25.0761 8.83766 25.0359 9.04233Z"
                                            fill="#2790C3" />
                                        <path
                                            d="M23.7285 7.88143C23.5182 7.8201 23.306 7.7658 23.0921 7.71861C22.8682 7.66943 22.6429 7.62665 22.4165 7.59033C21.6063 7.45931 20.7212 7.39746 19.7708 7.39746H11.7526C11.5612 7.39714 11.3723 7.44006 11.1999 7.52302C11.0125 7.61238 10.8496 7.74607 10.7256 7.91248C10.6015 8.0789 10.5199 8.27303 10.4879 8.47805L8.78359 19.2739L8.73438 19.5886C8.84648 18.8782 9.45461 18.3542 10.1748 18.3542H13.1765C19.0716 18.3542 23.6875 15.9621 25.0358 9.042C25.076 8.83733 25.1097 8.63901 25.1406 8.44352C24.7992 8.26359 24.4295 8.10773 24.0316 7.97595C23.9311 7.94268 23.8301 7.91117 23.7286 7.88143"
                                            fill="#1F264F" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_731_5762">
                                            <rect width="28" height="33" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                        </div>
                    </div>
                    <div class="w-[550px] flex flex-col space-y-6">
                        <div class="w-full bg-m_black-500 rounded-lg p-8 mb-4">
                            <div class="flex items-center space-x-6">
                                <div class="w-[280px]">
                                    <img class="w-full h-full object-cover rounded-lg" src="/imgs/person5.png">
                                </div>
                                <div class="flex flex-col space-y-2">
                                    <h2 class="font-sf_pro font-medium text-lg text-white">Do Things, Tell People: The
                                        Power of Personal Branding</h2>
                                    <div class="flex items-center justify-between">
                                        <p class="font-sf_pro font-normal text-m_gray-100 py-1 text-sm">Anthony Wade</p>
                                        <div class="flex items-center">
                                            <span class="text-xs text-m_yellow-100">★</span>
                                            <span class="ml-1 text-m_gray-100 text-sm font-semibold">4.8</span>
                                            <span class="ml-1 text-m_gray-100 text-xs">(5.8k+)</span>
                                        </div>
                                    </div>
                                    <div class="flex items-center space-x-2 pb-3">
                                        <div
                                            class="px-4 py-2 rounded-full bg-m_black-400 text-m_gray-100 font-sf_pro font-normal text-xs">
                                            17 Lessons</div>
                                        <div
                                            class="px-4 py-2 rounded-full bg-m_black-400 text-m_gray-100 font-sf_pro font-normal text-xs">
                                            2h 10m</div>
                                    </div>
                                    <div
                                        class="w-fit bg-m_yellow-100 text-black px-3 py-1 rounded-full text-sm font-medium">
                                        $75.99</div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full bg-m_black-500 rounded-lg p-8">
                            <div class="flex items-center justify-between pt-2 pb-6">
                                <p class="font-sf_pro font-normal text-lg text-white">Цена</p>
                                <p class="font-sf_pro font-bold text-lg text-white">$75</p>
                            </div>
                            <div class="flex items-center justify-between pb-8 border-b border-m_black-400">
                                <p class="font-sf_pro font-normal text-lg text-white">Скидка</p>
                                <p class="font-sf_pro font-bold text-lg text-white">-$5</p>
                            </div>
                            <div class="flex items-center justify-between pt-8">
                                <p class="font-sf_pro font-bold text-xl text-white">Общий</p>
                                <p class="font-sf_pro font-bold text-xl text-m_yellow-100">$75</p>
                            </div>
                        </div>
                        <div class="w-full flex items-center space-x-4 select-none mr-2">
                            <div class="checkbox-wrapper-46">
                                <input class="inp-cbx" id="cbx-46" type="checkbox" />
                                <label class="cbx" for="cbx-46">
                                    <span>
                                        <svg width="16px" height="13px" viewbox="0 0 16 13">
                                            <polyline points="1.5 8 5 12 14 2"></polyline>
                                        </svg>
                                    </span>
                                </label>
                            </div>
                            <p class="font-sf_pro font-normal text-base text-m_gray-100 w-4/5">
                                Продолжая, вы соглашаетесь с нашими условиями и политикой конфиденциальности.
                            </p>
                        </div>
                        <button class="w-full bg-m_yellow-200 rounded-lg py-3 font-sf_pro font-bold text-lg">Оформить
                            заказ сейчас</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default {
    name: "Payment",
    components: {
        Navbar,
    },
}
</script>

<style scoped>
.checkbox-wrapper-46 input[type="checkbox"] {
    display: none;
    visibility: hidden;
}

.checkbox-wrapper-46 .cbx {
    margin: auto;
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
}

.checkbox-wrapper-46 .cbx span {
    display: inline-block;
    vertical-align: middle;
    transform: translate3d(0, 0, 0);
}

.checkbox-wrapper-46 .cbx span:first-child {
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: 3px;
    transform: scale(1);
    vertical-align: middle;
    border: 1px solid #9098A9;
    transition: all 0.2s ease;
}

.checkbox-wrapper-46 .cbx span:first-child svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    fill: none;
    stroke: #FFFFFF;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 22px;
    stroke-dashoffset: 22px;
    transition: all 0.3s ease;
    transition-delay: 0.1s;
}

.checkbox-wrapper-46 .cbx span:first-child:before {
    content: "";
    width: 100%;
    height: 100%;
    background: #FFCC02;
    display: block;
    transform: scale(0);
    opacity: 1;
    border-radius: 50%;
}

.checkbox-wrapper-46 .cbx span:last-child {
    padding-left: 8px;
}

.checkbox-wrapper-46 .cbx:hover span:first-child {
    border-color: #FFCC02;
}

.checkbox-wrapper-46 .inp-cbx:checked+.cbx span:first-child {
    background: #FFCC02;
    border-color: #FFCC02;
    animation: wave-46 0.4s ease;
}

.checkbox-wrapper-46 .inp-cbx:checked+.cbx span:first-child svg {
    stroke-dashoffset: 0;
}

.checkbox-wrapper-46 .inp-cbx:checked+.cbx span:first-child:before {
    transform: scale(3.5);
    opacity: 0;
    transition: all 0.6s ease;
}

@keyframes wave-46 {
    50% {
        transform: scale(0.9);
    }
}
</style>