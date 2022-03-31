<template>
	<div class="container mx-auto mt-10">
		<div class="manifest">
			<div class="grid lg:grid-cols-3 grid-cols-3 p-5">
				
				<div class="item-list">
					<div
						v-for="(item, index) in items" 
						:key="item.id"			
						class="item relative h-max"
					>
						<template v-if="index <= (items.length / 3)">
							<router-link
								class="img"
								:to="{name: 'manifest-order', params: {slug: item.title}}"
							>
								<img :src="item.img" alt="Image">
							</router-link>
							<div class="content absolute bottom-10 left-10">
								<h3>{{item.title}}</h3>
								<p>{{item.price}}</p>
							</div>							
						</template>
					</div>					
				</div>
				
				<div class="item-list">					
					<div 
						v-for="(item, index) in items" 
						:key="item.id"	
						class="item relative h-max"
					>
						<template v-if="(index > (items.length / 3)) && (index <= (items.length - (items.length / 3)))">
							<router-link 
								class="img"
								:to="{name: 'manifest-order', params: {slug: item.title}}"								
							>
								<img :src="item.img" alt="Image"
								>
							</router-link>
							<div class="content absolute bottom-10 left-10">
								<h3>{{item.title}}</h3>
								<p>{{item.price}}</p>
							</div>							
						</template>
					</div>					
				</div>

				<div class="item-list">					
					<div 
						v-for="(item, index) in items" 
						:key="item.id"	
						class="item relative h-max"
					>
						<template v-if="index > (items.length - (items.length / 3))">
							<router-link 
								class="img"
								:to="{name: 'manifest-order', params: {slug: item.title}}"								
							>
								<img :src="item.img" alt="Image"
								>
							</router-link>
							<div class="content absolute bottom-10 left-10">
								<h3>{{item.title}}</h3>
								<p>{{item.price}}K</p>
							</div>							
						</template>
					</div>					
				</div>

			</div>
		</div>
	</div>
</template> 

<script setup>

	const items = [
		{
			id: 1, 
			title: 'панама',
			price: '50',
			img: require('../assets/images/manifest/Frame75.png')
		},
		{
			id: 2, 
			title: 'жилетка',
			price: '200',
			img: require('../assets/images/manifest/Frame78.png')
		},
		{
			id: 3, 
			title: 'майка',
			price: '150',
			img: require('../assets/images/manifest/Frame81.png')
		},
		{
			id: 4, 
			title: 'фонарь',
			price: '130',
			img: require('../assets/images/manifest/Frame76.png')
		},
		{
			id: 5, 
			title: 'п. банка',
			price: '240',
			img: require('../assets/images/manifest/Frame79.png')
		},
		{
			id: 6, 
			title: 'д. шашка',
			price: '70',
			img: require('../assets/images/manifest/Frame77.png')
		},
		{
			id: 7, 
			title: 'беруши',
			price: '190',
			img: require('../assets/images/manifest/Frame80.png')
		},
	]
</script>