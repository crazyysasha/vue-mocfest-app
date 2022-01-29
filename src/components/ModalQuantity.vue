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
				<div>
					<h1 class="text-lg">Гроза</h1>
					<p class="font-montserrat">12 марта</p>
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
			<div class="border-2 border-neutral-700 px-4 py-3 mb-4 relative flex justify-between items-center">
				<div @click="decQuantity" class="cursor-pointer	py-1 hover:opacity-50">
					<svg width="24" height="1" viewBox="0 0 24 1" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0 0.5L12 0.5L24 0.5" stroke="white"/>
					</svg>
				</div>				
				<div>
					<h1 class="mb-2">количество</h1>
					<input type="text" class="bg-transparent text-center" :value="quantity" disabled>
				</div>
				<div @click="incQuantity" class="cursor-pointer	py-1 hover:opacity-50">
					<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12 0.5L12 12.5M12 24.5L12 12.5M12 12.5L0 12.5M12 12.5L24 12.5" stroke="white"/>
					</svg>
				</div>
			</div>
			<div class="py-7">
				<div class="flex justify-between mb-4">
					<span class="font-montserrat text-lg text-neutral-500">Дата события</span>
					<span class="text-sm">9 апр.</span>
				</div>
				<div class="flex justify-between">
					<span class="font-montserrat text-lg text-neutral-500">Начало</span>
					<span class="text-sm">18:00</span>
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
			продолжить
		</button>
	</div>
</template>

<script>

export default {
  props: ["toggleModal", "incQuantity", "decQuantity", "quantity"],
};
</script>
