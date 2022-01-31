<template>
	<div class="border border-white mt-auto">
		<div class="p-2">
			<img src="@/assets/logo.png" alt="" class="mx-auto" />
		</div>
		<div class="py-2 px-6 flex flex-col">
			<div v-if="isLoading" class="p-5 mb-2 justify-center flex">
				<div class="h-10 w-10 animate-pulse rounded-full bg-white">
					<div class="animate-ping h-10 w-10 rounded-full bg-white"></div>
				</div>
			</div>
			<div class="border-2 border-neutral-700 px-4 py-1 mb-4 relative">
				<input 
					type="text" 
					placeholder="Email"
					class="p-3 w-full bg-transparent outline-0 text-neutral-500 font-montserrat text-lg">
			</div>	
			<div class="border-2 border-neutral-700 px-4 py-1 mb-4 relative">
				<input 
					type="text" 
					placeholder="Номер телефона"
					class="p-3 w-full bg-transparent outline-0 text-neutral-500 font-montserrat text-lg">
			</div>	
			<div class="border-2 border-neutral-700 px-4 py-2 mb-3 relative">
				<div>
					<div>
						<h1 class="text-lg">Способ оплаты</h1>
						<p>Payme</p>
					</div>
					<div @click="toggleSelect" class="absolute right-3 inset-y-1/2 cursor-pointer hover:opacity-50" :class="{ 'rotate-180': !activeSelect }">
						<svg						
						width="24"
						height="14"
						viewBox="0 0 24 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						>
						<path d="M24 0.5L12 12.5L0 0.5" stroke="white" />
						</svg>
					</div>
				</div>
				<div
					class="
						select
						border-2 border-neutral-700
						absolute
						left-0
						right-0
						top-full
						z-10
						bg-black
					"
					:class="{ hidden: !activeSelect }"
					style="left: -2px; right: -2px"
				>
					<div
						@click="toggleSelect"
						class="hover:bg-white hover:text-black my-1 cursor-pointer"
					>
						<h1 class="text-lg">Payme</h1>						
					</div>
					<div
						@click="toggleSelect"
						class="hover:bg-white hover:text-black my-1 cursor-pointer"
					>
						<h1 class="text-lg">Click</h1>						
					</div>					
				</div>
			</div>
			<div class="py-3">
				<div class="flex justify-between mb-2">
					<span class="text-lg text-neutral-500 font-montserrat">Событие</span>
					<span class="text-sm">New Matters</span>
				</div>
				<div class="flex justify-between mb-2">
					<span class="text-lg text-neutral-500 font-montserrat">Кол-во</span>
					<span class="text-sm">3 шт.</span>
				</div>
				<div class="flex justify-between">
					<span class="text-lg text-neutral-500 font-montserrat">Итого</span>
					<span class="text-sm">250 000 сум.</span>
				</div>
			</div>
		</div>

		<button
			class="
				text-center
				block
				w-full
				p-4
				text-2xl
				border-t-2 border-dashed border-white
				hover:bg-white hover:text-black
				transition
				duration-200
				tracking-[.2rem]
			"
			@click="toggleModal"
		>
			Купить билет
		</button>
	</div>
</template>

<script>

export default {
  props: ["toggleModal"],
  data: () => ({
    activeSelect: false,
  }),
  methods: {
    toggleSelect() {
      this.activeSelect = !this.activeSelect;
    },
  },
};
</script>
