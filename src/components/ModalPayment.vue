<template>
	<div class="border border-white mt-auto">
		<div class="p-4">
			<img src="@/assets/logo.png" alt="" class="mx-auto" />
		</div>
		<div class="py-4 px-6 flex flex-col">
			<div v-if="isLoading" class="p-5 mb-2 justify-center flex">
				<div class="h-10 w-10 animate-pulse rounded-full bg-white">
					<div class="animate-ping h-10 w-10 rounded-full bg-white"></div>
				</div>
			</div>
			<div class="border-2 border-neutral-700 px-4 py-3 mb-4 relative">
				<input 
					type="text" 
					placeholder="Email"
					class="p-3 w-full bg-transparent outline-0 text-neutral-500 font-montserrat text-lg">
			</div>	
			<div class="border-2 border-neutral-700 px-4 py-3 mb-4 relative">
				<input 
					type="text" 
					placeholder="Номер телефона"
					class="p-3 w-full bg-transparent outline-0 text-neutral-500 font-montserrat text-lg">
			</div>	
			<div class="border-2 border-neutral-700 px-4 py-3 mb-4 relative">
				<div>
					<h1 class="text-lg">Способ оплаты</h1>
					<p>Payme</p>
				</div>
				<svg
				class="absolute right-3 inset-y-1/2"
				width="24"
				height="14"
				viewBox="0 0 24 14"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				>
				<path d="M24 0.5L12 12.5L0 0.5" stroke="white" />
				</svg>
			</div>
			<div class="py-6">
				<div class="flex justify-between mb-4">
					<span class="text-lg text-neutral-500 font-montserrat">Событие</span>
					<span class="text-sm">New Matters</span>
				</div>
				<div class="flex justify-between mb-4">
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
				p-6
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
};
</script>
