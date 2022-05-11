<template>
    <div
        class="
            container
            mx-auto
            pt-16
            px-5
            about
            h-full
            flex
            items-center
            justify-center
        "
        v-if="isLoading"
    >
        <div class="h-10 w-10 animate-pulse rounded-full bg-white">
            <div class="animate-ping h-10 w-10 rounded-full bg-white"></div>
        </div>
    </div>
    <div class="container mx-auto pt-16 px-5 about" v-else-if="isLoaded">
        <div
            class="
                video
                border border-white border-opacity-10
                min-h-[calc(100vh-11rem)]
                mb-8
            "
            ref="videoContainer"
        ></div>
        <div class="content font-montserrat tracking-normal">
            <div
                v-for="content in settings?.content"
                :key="content"
                class="mb-10"
            >
                <div
                    v-if="content._group == 'header'"
                    v-html="content.content"
                    class="about-title"
                ></div>
                <div
                    v-else-if="content._group == 'columns'"
                    class="grid gap-8"
                    :class="content.cols?.split(',')"
                >
                    <div
                        v-for="content in content.content"
                        :key="content"
                        v-html="content.content"
                        class="about-description"
                    ></div>
                </div>
            </div>
        </div>
        <div class="our-team pt-16 pb-10" v-if="settings?.team?.length > 0">
            <div class="text-5xl mb-16 tracking-normal font-montserrat">
                наша команда
            </div>
            <div
                v-if="settings.team.length === 0"
                class="flex items-center justify-center h-full relative"
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
            <div
                v-else
                class="row grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
            >
                <div
                    class="col"
                    v-for="people in settings?.team"
                    :key="people.name"
                >
                    <img
                        v-if="people.avatar"
                        :src="people.avatar"
                        alt="img"
                        class="w-full"
                    />
                    <div
                        class="
                            my-3
                            sm:my-5
                            text-[14px]
                            sm:text-[21px]
                            font-montserrat
                            tracking-normal
                        "
                    >
                        {{ people.name }}
                    </div>
                    <div
                        class="
                            description
                            font-montserrat
                            about-team-description
                        "
                        v-html="people.bio"
                    ></div>
                </div>
            </div>
        </div>
    </div>
    <div
        class="
            grid-cols-1
            grid-cols-2
            grid-cols-3
            grid-cols-4
            grid-cols-5
            grid-cols-6
            grid-cols-7
            grid-cols-8
            grid-cols-9
            grid-cols-10
            grid-cols-11
            grid-cols-12
            sm:grid-cols-1
            sm:grid-cols-2
            sm:grid-cols-3
            sm:grid-cols-4
            sm:grid-cols-5
            sm:grid-cols-6
            sm:grid-cols-7
            sm:grid-cols-8
            sm:grid-cols-9
            sm:grid-cols-10
            sm:grid-cols-11
            sm:grid-cols-12
            md:grid-cols-1
            md:grid-cols-2
            md:grid-cols-3
            md:grid-cols-4
            md:grid-cols-5
            md:grid-cols-6
            md:grid-cols-7
            md:grid-cols-8
            md:grid-cols-9
            md:grid-cols-10
            md:grid-cols-11
            md:grid-cols-12
            lg:grid-cols-1
            lg:grid-cols-2
            lg:grid-cols-3
            lg:grid-cols-4
            lg:grid-cols-5
            lg:grid-cols-6
            lg:grid-cols-7
            lg:grid-cols-8
            lg:grid-cols-9
            lg:grid-cols-10
            lg:grid-cols-11
            lg:grid-cols-12
            xl:grid-cols-1
            xl:grid-cols-2
            xl:grid-cols-3
            xl:grid-cols-4
            xl:grid-cols-5
            xl:grid-cols-6
            xl:grid-cols-7
            xl:grid-cols-8
            xl:grid-cols-9
            xl:grid-cols-10
            xl:grid-cols-11
            xl:grid-cols-12
            2xl:grid-cols-1
            2xl:grid-cols-2
            2xl:grid-cols-3
            2xl:grid-cols-4
            2xl:grid-cols-5
            2xl:grid-cols-6
            2xl:grid-cols-7
            2xl:grid-cols-8
            2xl:grid-cols-9
            2xl:grid-cols-10
            2xl:grid-cols-11
            2xl:grid-cols-12
        "
    ></div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import useSettings from "@/composables/settings";
import { afterChange } from "@/composables/locale";

const { settings, isLoading, isLoaded, exec } = useSettings();

onMounted(async () => {
    if (!isLoaded.value) await exec();
    if (settings.value.video) {
        videoContainer.value.innerHTML = `
		<iframe 
			width="${videoContainer.value.clientWidth}" 
			height="${videoContainer.value.clientHeight}"
			src="https://www.youtube.com/embed/${settings.value.video}"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
		></iframe>`;
    }
    afterChange(() => {
        if (settings.value.video) {
            videoContainer.value.innerHTML = `
		<iframe 
			width="${videoContainer.value.clientWidth}" 
			height="${videoContainer.value.clientHeight}"
			src="https://www.youtube.com/embed/${settings.value.video}"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
		></iframe>`;
        }
    });
});

const videoContainer = ref();
// const player = ref(null);
// const paused = ref(true);
// onMounted(() => {
// 	if (settings.value.video) {
// 		player.value.onpause = () => {
// 			paused.value = true;
// 		};
// 		player.value.onplay = () => {
// 			paused.value = false;
// 		};
// 	}
// });
// const play = () => {
// 	player.value.play();
// };
</script>
<style>
.video > * {
    @apply !w-full;
}
.about p {
    @apply text-base;
}
.about h1 {
    @apply text-2xl sm:text-5xl leading-normal tracking-normal;
}
.about h2 {
    @apply text-2xl;
}
.about h3 {
    @apply text-xl sm:text-[28px] tracking-normal leading-tight;
}
.about h4 {
    @apply text-lg;
}

.about-title p {
    @apply text-xl sm:text-[17px] tracking-normal max-w-[75%];
}
.about li {
    @apply text-[17px];
}
.about li {
    @apply list-disc ml-4;
}
.about-team-description p {
    @apply text-[17px] tracking-normal leading-normal;
}
.about-description p {
    @apply text-[17px] tracking-normal leading-normal;
}
</style>
