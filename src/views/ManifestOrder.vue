<template>
	<div class="container mx-auto py-16">
		<div class="content flex flex-wrap mb-10">
			<div class="img flex justify-center flex-[1_1_50%] relative">
				<img
					:src="manifest.img"
					alt="Image"
					class="absolute h-[100%]"
				/>
			</div>
			<div class="characteristic max-w-sm">
				<h1 class="text-2xl leading-10 tracking-[.25rem]">
					{{ manifest.title }}
				</h1>
				<p class="text-xs">
					ограниченная серия. осталось <strong>30</strong> шт.
				</p>
				<p class="text-xs">дизайн от <strong>Goober</strong></p>
				<h3 class="leading-[4rem]">{{ manifest.price }} сум</h3>
				<div class="buy-manifest">
					<div class="flex justify-between">
						<div
							class="
								flex
								items-center
								sizes
								border border-white border-opacity-50
								relative
								mr-4
							"
						>
							<div
								class="flex px-5 py-4"
								@click="onToggleSizeSelect"
							>
								<div class="mr-5">{{ size }}</div>
								<svg
									class="m-auto cursor-pointer"
									width="20"
									height="10"
									viewBox="0 0 24 14"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M24 0.5L12 12.5L0 0.5"
										stroke="white"
									/>
								</svg>
							</div>
							<div
								class="
									absolute
									left-0
									right-0
									top-[100%]
									bg-zinc-800
									text-center
									border border-white border-opacity-50
								"
								:class="{ hidden: !showSizeSelect }"
							>
								<div
									class="
										py-2
										hover:bg-zinc-200 hover:text-zinc-900
										cursor-pointer
									"
									v-for="(s, i) in sizes"
									:key="i"
									@click="onSelectSize(s)"
								>
									{{ s }}
								</div>
							</div>
						</div>
						<div
							class="
								border border-white border-opacity-50
								flex
								items-center
								flex-grow
							"
							:class="quantity <= 0 ? 'border-rose-900' : ''"
						>
							<button
								class="
									p-3
									flex
									items-center
									justify-center
									disabled:opacity-50
								"
								@click="decrement"
								:disabled="quantity <= min"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="1"
									viewBox="0 0 24 1"
									fill="none"
								>
									<path
										d="M0 0.5L12 0.5L24 0.5"
										stroke="white"
									/>
								</svg>
							</button>
							<div class="text-center flex-1 p-1">
								<div
									:class="
										quantity <= 0 ? 'text-rose-900' : ''
									"
								>
									<input
										type="number"
										:value="quantity"
										@input="input"
										@keydown="updateValue"
										class="
											tracking-normal
											font-thin font-montserrat
											bg-transparent
											appearance-none
											text-center
											focus:outline-none
										"
										placeholder="0"
										:min="min"
										:max="max"
									/>
									<span class="text-sm">шт.</span>
								</div>
							</div>
							<button
								class="
									p-3
									flex
									items-center
									justify-center
									disabled:opacity-50
								"
								@click="increment"
								:disabled="quantity >= max"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="25"
									viewBox="0 0 24 25"
									fill="none"
								>
									<path
										d="M12 0.5L12 12.5M12 24.5L12 12.5M12 12.5L0 12.5M12 12.5L24 12.5"
										stroke="white"
									/>
								</svg>
							</button>
						</div>
					</div>
					<div
						@click="() => (isShowModal = true)"
						class="
							btn
							border border-white border-opacity-50
							py-4
							text-center
							mt-4
							cursor-pointer
							hover:bg-white hover:text-zinc-900
						"
					>
						Купить билет
					</div>
				</div>
			</div>
		</div>
		<div class="swiper relative">
			<swiper
				:modules="modules"
				:slides-per-view="4"
				:space-between="50"
				:autoplay="true"
			>
				<swiper-slide v-for="item in items" :key="item.id">
					<a :href="'/manifestos/'+item.title">
						<img
							:src="item.img"
							alt="Image"
							class="img max-w-[200px]"
						/>
					</a>
				</swiper-slide>
			</swiper>
			<div class="absolute left-0 top-0 text-xs cursor-pointer z-10">
				<router-link :to="{name: 'manifest', params: {slug: ''}}">Ещё</router-link>
			</div>
		</div>
		<c-modal v-model="isShowModal" v-slot="{ close }">
			<button
				@click="close"
				class="absolute -top-8 md:top-0 right-0 md:-right-8"
			>
				<span
					class="
						w-6
						scale-110
						h-px
						block
						bg-white
						my-2
						transform
						transition
						duration-200
						ease
						rotate-45
						translate-y-[4.5px]
					"
				></span>
				<span
					class="
						w-6
						scale-110
						h-px
						block
						bg-white
						my-2
						transform
						transition
						duration-200
						ease
						-rotate-45
						-translate-y-[4.5px]
					"
				></span>
			</button>
			<buy-form-manifest :product="manifest"></buy-form-manifest>
		</c-modal>
	</div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper";

import useEvents from "../composables/events";
import CModal from "@/components/c-modal.vue";
import BuyFormManifest from "@/components/buy-form-manifest.vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const route = useRoute();
const items = [
	{
		id: 1,
		title: "панама",
		price: "50",
		img: require("../assets/images/manifest/Frame75.png"),
	},
	{
		id: 2,
		title: "жилетка",
		price: "200",
		img: require("../assets/images/manifest/Frame78.png"),
	},
	{
		id: 3,
		title: "майка",
		price: "150",
		img: require("../assets/images/manifest/Frame81.png"),
	},
	{
		id: 4,
		title: "фонарь",
		price: "130",
		img: require("../assets/images/manifest/Frame76.png"),
	},
	{
		id: 5,
		title: "п. банка",
		price: "240",
		img: require("../assets/images/manifest/Frame79.png"),
	},
	{
		id: 6,
		title: "д. шашка",
		price: "70",
		img: require("../assets/images/manifest/Frame77.png"),
	},
	{
		id: 7,
		title: "беруши",
		price: "190",
		img: require("../assets/images/manifest/Frame80.png"),
	},
];

const manifest = items
	.filter((item) => item.title == route.params.slug)
	.reduce((acc, key) => {
		acc = items[key];
		return acc;
	});

const sizes = ["S", "M", "L", "XL"];
const size = ref(sizes[0]);
const showSizeSelect = ref(false);

const onToggleSizeSelect = () => {
	showSizeSelect.value = !showSizeSelect.value;
};
const onSelectSize = (val) => {
	size.value = val;
	showSizeSelect.value = !showSizeSelect.value;
};

const min = ref(1);
const max = ref(10);
const quantity = ref(1);
const increment = () => {
	quantity.value = quantity.value + 1;
};
const decrement = () => {
	quantity.value = quantity.value - 1;
};
const input = (event) => {
	let value = parseInt(event.data);
	quantity.value = value;
};

const { isLoading, events, error, fetchEvents, isLoaded } = useEvents();
onMounted(() => {
	if (!isLoaded.value) fetchEvents();
});
const isShowModal = ref(false);

const modules = [Autoplay];
</script>



<style lang="scss" scoped>
.swiper-slide {
	margin: auto 50px auto 0;
}
input::-webkit-inner-spin-button {
	display: none;
}
</style>