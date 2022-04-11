<template>
	<div class="container mx-auto pt-20 px-5 about">
		<div
			v-if="!settings.video"
			class="flex items-center justify-center h-[400px] relative"
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
			<div class="absolute inset-0 flex items-center justify-center" v-if="paused">
				<svg
					@click.stop.prevent="settings.video ? play : ''"
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
		<div v-else class="video relative border border-white border-opacity-10">
			<video
				v-if="settings?.video"
				class="w-full"
				autoplay="true"
				:controls="false"
				:src="settings.video"
				ref="player"
				@click="player.pause()"
			></video>
			<div class="absolute inset-0 flex items-center justify-center" v-if="paused">
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
			<div
				v-for="(content, i) in settings?.content"
				:key="content"
				class="first:my-5"
				:class="{ 'first-element': i === 0 }"
			>
				<div
					v-if="content._group == 'header'"
					v-html="content.content"
					class="about-title"
				></div>
				<div
					v-else-if="content._group == 'columns'"
					class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-7"
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
		<div class="our-team pt-16 pb-10">
			<div class="title text-2xl mb-10">наша команда</div>
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
			<div v-else class="row grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
				<div class="col" v-for="people in settings?.team" :key="people.name">
					<img v-if="people.avatar" :src="people.avatar" alt="img" class="w-full" />
					<div class="title my-3 sm:my-5 text-[12px] sm:text-[14px]">
						{{ people.name }}
					</div>
					<div
						class="description font-montserrat about-team-description"
						v-html="people.bio"
					></div>
				</div>
			</div>
		</div>
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
	if (settings.value.video) {
		player.value.onpause = () => {
			paused.value = true;
		};
		player.value.onplay = () => {
			paused.value = false;
		};
	}
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

.about-title p {
	@apply text-lg sm:text-2xl;
}
.first-element p {
	@apply text-xl sm:text-3xl;
}
.about-team-description p {
	@apply text-[12px];
}
.about-description p {
	@apply text-[12px];
}
</style>
