<template>
    <div class="container mx-auto pt-20 px-5 about">
        <div class="video relative">
            <video
                v-if="settings?.video"
                class="w-full"
                autoplay="true"
                :controls="false"
                :src="settings.video"
                ref="player"
                @click="player.pause()"
            ></video>
            <div
                class="absolute inset-0 flex items-center justify-center"
                v-if="paused"
            >
                <svg
                    @click.stop.prevent="play"
                    class="cursor-pointer"
                    width="165"
                    height="187"
                    viewBox="0 0 165 187"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M156.94 79.6422C167.61 85.8 167.61 101.2 156.94 107.358L24.2712 183.924C13.6046 190.08 0.273657 182.381 0.273658 170.066L0.273664 16.9342C0.273665 4.61859 13.6046 -3.07954 24.2713 3.07641L156.94 79.6422Z"
                        fill="white"
                        fill-opacity="0.5"
                    />
                </svg>
            </div>
        </div>
        <div class="content mt-8 font-montserrat">
            <div v-for="content in settings?.content" :key="content">
                <div
                    v-if="content._group == 'header'"
                    v-html="content.content"
                ></div>
                <div
                    v-else-if="content._group == 'columns'"
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                    <div
                        v-for="content in content.content"
                        :key="content"
                        v-html="content.content"
                    ></div>
                </div>
            </div>
        </div>
        <div class="our-team pt-16 pb-10">
            <div class="title text-2xl mb-10">наша команда</div>
            <div class="row grid grid-cols-2 sm:grid-cols-4 gap-4">
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
                    <div class="title my-3 sm:my-5 text-[12px] sm:text-[14px]">
                        {{ people.name }}
                    </div>
                    <div
                        class="
                            description
                            font-montserrat
                            text-[8px]
                            sm:text-[10px]
                        "
                        v-html="people.bio"
                    ></div>
                </div>
            </div>
        </div>

        <h1 style="display: none"></h1>
        <h2 style="display: none"></h2>
        `
        <h3 style="display: none"></h3>
        <h4 style="display: none"></h4>
        <p style="display: none"></p>
    </div>
</template>

<script setup>
import useSettings from "@/composables/settings";
import { onMounted, ref, watch } from "vue";

const { settings, isLoading, isLoaded, exec } = useSettings();
onMounted(async () => {
    if (!isLoaded.value) await exec();
});

const player = ref(null);
const paused = ref(true);
onMounted(() => {
	player.value.onpause = () => {
		paused.value = true;
	};
	player.value.onplay = () => {
		paused.value = false;
	};
});
const play = () => {
    player.value.play();
};
</script>
<style>
.about p {
    @apply text-base;
}
.about h1 {
    @apply text-3xl;
}
.about h2 {
    @apply text-2xl;
}
.about h3 {
    @apply text-xl;
}
.about h4 {
    @apply text-lg;
}
</style>
