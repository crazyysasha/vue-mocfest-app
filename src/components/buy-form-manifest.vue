<template>
	<div class="border border-white border-opacity-10 shadow-2xl bg-black text-white max-w-sm p-4 min">
		<div class="product-info flex justify-evenly items-center mb-5">
			<div class="img flex-[0_1_30%]">
				<img :src="product.img" alt="Image" class="">
			</div>
			<div class="content">
				<h1 class="uppercase text-xl">{{product.title}}</h1>
				<p class="text-xs">ограниченная серия</p>
				<p class="text-xs">дизайн от Goober</p>
			</div>
		</div>
		<div class="form">
			<div class="input-email border border-white border-opacity-20 px-5 py-4 mb-3">
				<input type="email" placeholder="Email" class="bg-transparent outline-none placeholder:italic placeholder:text-zinc-500">
			</div>
			<div class="input-phone border border-white border-opacity-20 px-5 py-4 mb-3">
				<input type="number" placeholder="Номер телефона" class="bg-transparent outline-none placeholder:italic placeholder:text-zinc-500">
			</div>
			<div class="select-payments flex justify-center relative border border-white border-opacity-20 px-5 py-1 items-center mb-3 relative">
				<div class="title text-center">
					<h3 class="uppercase">Способ Оплаты</h3>
					<div>{{paymentName}}</div>
				</div>
				<svg
					class="m-auto cursor-pointer absolute right-3"
					width="20"
					height="10"
					viewBox="0 0 24 14"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					@click="onToggleOptions"
				>
					<path
						d="M24 0.5L12 12.5L0 0.5"
						stroke="white"
					/>
				</svg>
				<div 
					class="options absolute top-[102%] -left-[1px] -right-[1px] border border-white border-opacity-30 bg-zinc-800 text-center"
					:class="{hidden: !isShowOption}"
				>
					<div 
						class="py-3 hover:bg-zinc-100 hover:text-zinc-900 cursor-pointer"
						v-for="(p, i) in payments" 
						:key="i"
						@click="onSelectOption"
					>
						{{ p }}
					</div>
				</div>
			</div>
			<div class="input-phone border border-white border-opacity-20 px-5 py-4 mb-3">
				<input type="text" placeholder="Адрес доставки" class="bg-transparent outline-none placeholder:italic placeholder:text-zinc-500">
			</div>
			<div class="delivery text-sm text-zinc-200 text-opacity-80 tracking-wide">Доставка по Ташкенту 3 дня</div>
			<div class="info-product my-5">
				<div class="event-name flex justify-between items-center">
					<span class="text-xs text-zinc-200 text-opacity-30 tracking-[0.1rem]">Событие</span>
					<span>New Matters</span>
				</div>
				<div class="quantity flex justify-between items-center">
					<span class="text-xs text-zinc-200 text-opacity-30 tracking-[0.1rem]">Кол.во</span>
					<span>2 шт.</span>
				</div>
				<div class="total-price flex justify-between items-center">
					<span class="text-xs text-zinc-200 text-opacity-30 tracking-[0.1rem]">Итого</span>
					<span>250 000 сум</span>
				</div>
			</div>
			<div class="btn border border-white border-opacity-20 text-center text-2xl cursor-pointer hover:bg-zinc-200 hover:text-zinc-900 py-3">ОПЛАТИТЬ</div>
		</div>
	</div>
</template>



<script setup>
import { ref } from 'vue'

const props = defineProps({ product: Object });
const payments = ['Payme', 'Click']
const paymentName = ref(payments[0])
const isShowOption = ref(false)

const onToggleOptions = () => {
	isShowOption.value = !isShowOption.value
}
const onSelectOption = (e) => {
	isShowOption.value = false
	paymentName.value = e.target.innerText
}

</script>



<style scoped>
input::-webkit-inner-spin-button {
    display: none;
}
input {
	min-width: 250px;
}
</style>