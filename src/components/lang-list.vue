<template>
	<div
		class="
			flex
			items-center
			text-sm
			p-4
			right-10
			top-[1.05rem]
			z-20
			cursor-pointer
			text-center
		"
		:class="{
			absolute: !isCollapsed,
		}"
	>
		<div class="relative">
			<span @click.stop="onClickLanguage" class="px-2">
				{{ lanTitle }}
			</span>
			<transition>
				<div
					class="drop-shadow absolute left-0 right-0 mt-1"
					v-if="isActiveLan "
				>
					<div
						@click.stop="onSelectLan"
						class="py-0.5 hover:text-black hover:bg-zinc-200"
						:class="{ 'bg-zinc-200 text-black': lanTitle == 'ENG' }"
					>
						ENG
					</div>
					<div
						@click.stop="onSelectLan"
						class="py-0.5 hover:text-black hover:bg-zinc-200"
						:class="{ 'bg-zinc-200 text-black': lanTitle == 'RU' }"
					>
						RU
					</div>
				</div>
			</transition>
		</div>
	</div>
</template>

<script setup>
import { ref, inject, onMounted, onUnmounted } from "vue";

const isCollapsed = inject("isCollapsed");

const isActiveLan = ref(false);
const onClickLanguage = () => {
	isActiveLan.value = !isActiveLan.value;
};
const lanTitle = ref("RU");
const onSelectLan = (e) => {
	lanTitle.value = e.target.innerText;
	isActiveLan.value = false;
};

const hideHandler = (event) => {
	if (event?.keyCode == 27 || event.type == "click") {
		isActiveLan.value = false;
	}
};
onMounted(() => {
	document.addEventListener("click", hideHandler);
	document.addEventListener("keyup", hideHandler);
});

onUnmounted(() => {
	document.removeEventListener("click", hideHandler);
	document.removeEventListener("keyup", hideHandler);
});
</script>

<style lang="scss" scope>
.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>