<template>
    <svg :width="w" :height="h" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1270_12575)">
            <mask id="mask0_1270_12575" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="29"
                height="29">
                <path
                    d="M14.5013 26.5827C21.1749 26.5827 26.5846 21.173 26.5846 14.4993C26.5846 7.82572 21.1749 2.41602 14.5013 2.41602C7.82768 2.41602 2.41797 7.82572 2.41797 14.4993C2.41797 21.173 7.82768 26.5827 14.5013 26.5827Z"
                    fill="white" stroke="white" stroke-width="4" stroke-linejoin="round" />
                <path
                    d="M12.0859 14.4982V10.3125L15.7109 12.4053L19.3359 14.4982L15.7109 16.591L12.0859 18.6838V14.4982Z"
                    fill="black" stroke="black" stroke-width="4" stroke-linejoin="round" />
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
</template>

<script>
export default {
    props: {
        w: {
            type: Number,
            default: "40"
        },
        h: {
            type: Number,
            default: "40"
        },
    }
}
</script>