<template>
    <div class="container mx-auto pt-24 px-4">
        <div class="header mb-5">
            <h1 class="text-xl sm:text-3xl leading-8">галерея</h1>
            <p class="text-sm leading-5 sm:leading-10">
                фотоотчёт наших мероприятий
            </p>
        </div>
        <div class="gallery">
            <div class="w-full lg:h-screen">
                <div
                    class="
                        columns-2
                        md:columns-3
                        lg:columns-4
                        xl:columns-5
                        gap-0
                    "
                >
                    <a
                        @click.prevent="openGallery(index)"
                        v-for="(img, index) in settings?.gallery"
                        :key="index"
                        class="cursor-pointer block"
                    >
                        <img :src="img" alt="img" class="w-full" />
                    </a>
                </div>
                <div
                    v-if="isLoading"
                    class="flex items-center justify-center h-full"
                >
                    <svg
                        class="animate-spin h-10 w-10 m-auto text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            class="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            stroke-width="4"
                        ></circle>
                        <path
                            class="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                    </svg>
                </div>
            </div>

            <VueEasyLightbox
                class="backdrop-blur"
                :visible="boxIsOpen"
                :index="index"
                :imgs="settings?.gallery"
                @hide="hideGallery"
            >
            </VueEasyLightbox>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { onMounted } from "@vue/runtime-core";
import VueEasyLightbox from "vue-easy-lightbox";
import { required } from "@vuelidate/validators";

import useSettings from "@/composables/settings";

const { exec, settings, isLoading, isLoaded, error } = useSettings();

onMounted(async () => {
    if (!isLoaded.value) await exec();
});

// const images = [
// 	{ id: 1, path: require("../assets/images/gallery/1.jpg") },
// 	{ id: 2, path: require("../assets/images/gallery/2.jpg") },
// 	{ id: 3, path: require("../assets/images/gallery/3.jpg") },
// 	{ id: 4, path: require("../assets/images/gallery/4.jpg") },
// 	{ id: 5, path: require("../assets/images/gallery/5.jpg") },
// 	{ id: 6, path: require("../assets/images/gallery/6.jpg") },
// 	{ id: 7, path: require("../assets/images/gallery/1.jpg") },
// 	{ id: 8, path: require("../assets/images/gallery/2.jpg") },
// 	{ id: 9, path: require("../assets/images/gallery/3.jpg") },
// 	{ id: 10, path: require("../assets/images/gallery/4.jpg") },
// 	{ id: 11, path: require("../assets/images/gallery/5.jpg") },
// 	{ id: 12, path: require("../assets/images/gallery/6.jpg") },
// ];

const boxIsOpen = ref(false);
const index = ref(0);

const hideGallery = () => {
    boxIsOpen.value = false;
};

const openGallery = (imageIndex) => {
    index.value = imageIndex;
    boxIsOpen.value = true;
};
</script>