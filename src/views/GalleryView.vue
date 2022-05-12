<template>	
	<div class="container mx-auto pt-24 px-4">
		<div class="header mb-6 tracking-wide">
			<h1 class="text-xl sm:text-5xl leading-8 font-montserrat">{{$t("gallery.title")}}</h1>
			<p class="text-[17px] leading-5 sm:leading-8 font-montserrat">{{$t("gallery.description")}}</p>
		</div>
		<div class="gallery">
			<div v-if="!settings.gallery" class="border border-blue-300 border-opacity-30 shadow rounded-md p-4 w-full mx-auto">
                <div class="animate-pulse grid grid-cols-3 sm:grid-cols-4 gap-4">
                    <div v-for=" i in 20" :key="i" class="bg-slate-700 h-20 sm:h-36 flex justify-center items-center">
                        <svg role="status" class="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                    </div>				
                </div>
            </div>
            <div v-else class="w-full lg:h-screen">
				<div class="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-0">
					<a
						@click.prevent="openGallery(index)"
						v-for="(img, index) in settings?.gallery"
						:key="index"
						class="cursor-pointer block"
					>
						<img :src="img" alt="img" class="w-full" />
					</a>
				</div>
				<div v-if="isLoading" class="flex items-center justify-center h-full">
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