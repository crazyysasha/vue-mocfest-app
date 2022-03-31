<template>
	<div class="container mx-auto pt-20 px-5">
		<div class="video">
			<video class="w-full" autoplay controls src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"></video>
		</div>
		<div class="content mt-8">
			<div class="title text-2xl">moc fest — это фестиваль фестивалей</div>
			<p class="subtitle my-6 text-sm">
				независимый прогрессивный универсальный и гибкий, сотканный из событий
				разных масштабов, жанров и форм.
			</p>
			<div class="description flex flex-wrap justify-between pt-4">
				<p class="mb-3 sm:mb-6 text-[10px] w-[100%] sm:w-[48%] lg:w-[24%] text-zinc-400">
					никакой завершенности и полноты в понимании того, что такое moc fest — нет.
					но в этом и смысл его существования. moc fest не хочет быть понятным: он,
					как все живое, как искусство, как человек, непрерывно меняется,
					эволюционирует и тем самым ускользает от объяснений и удобоваримых
					конструкций.
				</p>
				<p class="mb-3 sm:mb-6 text-[10px] w-[100%] sm:w-[48%] lg:w-[24%] text-zinc-400">
					но не быть понятным не означает оставаться непóнятым. отсутствие
					прямолинейных объяснений компенсируется наличием ощущения, настолько яркого
					и светлого, что на ум приходят два слова: любовь и свобода.
				</p>
				<p class="mb-3 sm:mb-6 text-[10px] w-[100%] sm:w-[48%] lg:w-[24%] text-zinc-400">
					ощущение это отсылает к детству, к тому смешанному чувству счастья и
					нетерпеливости, которое возникает при приближении долгожданного праздника.
					и единственным недостатком этих праздников, будь то день рождения или новый
					год, является наличие ограничений. за один день невозможно сделать все:
					посмотреть все любимые мультики, пообщаться со всеми друзьями, покататься
					на всех аттракционах, съесть все пирожные.
				</p>
				<p class="mb-3 sm:mb-6 text-[10px] w-[100%] sm:w-[48%] lg:w-[24%] text-zinc-400">
					moc fest — это праздник, который снимает с себя эти ограничения. он длится
					не один день, а два месяца, его программу составляют самые яркие локальные
					и международные проекты, он приглашает всех друзей, весь город, всю страну
					и потенциально весь мир праздновать любовь и свободу вместе.
				</p>
			</div>
		</div>
		<div class="our-team pt-16 pb-10">
			<div class="title text-2xl mb-10">наша команда</div>
			<div class="row grid grid-cols-2 sm:grid-cols-4 gap-4">
				<div class="col">
					<img 
                        :src="require('../assets/images/about/unsplash.png')" 
                        alt="img" 
                        class="w-full"
                    />
					<div class="title my-3 sm:my-5 text-[12px] sm:text-[14px]">Дензел Вашингтон</div>
					<div class="description text-[8px] sm:text-[10px]">
						Dictumst turpis tincidunt feugiat cursus tristique magna. Id ultricies
						mattis id tincidunt. Nibh faucibus pharetra ut auctor senectus leo metus.
						Accumsan amet porttitor.
					</div>
				</div>
				<div class="col">
					<img 
                        :src="require('../assets/images/about/unsplash.png')" 
                        alt="img" 
                        class="w-full"
                    />
					<div class="title my-3 sm:my-5 text-[12px] sm:text-[14px]">Дензел Вашингтон</div>
					<div class="description text-[8px] sm:text-[10px]">
						Dictumst turpis tincidunt feugiat cursus tristique magna. Id ultricies
						mattis id tincidunt. Nibh faucibus pharetra ut auctor senectus leo metus.
						Accumsan amet porttitor.
					</div>
				</div>
				<div class="col">
					<img 
                        :src="require('../assets/images/about/unsplash.png')" 
                        alt="img" 
                        class="w-full"
                    />
					<div class="title my-3 sm:my-5 text-[12px] sm:text-[14px]">Дензел Вашингтон</div>
					<div class="description text-[8px] sm:text-[10px]">
						Dictumst turpis tincidunt feugiat cursus tristique magna. Id ultricies
						mattis id tincidunt. Nibh faucibus pharetra ut auctor senectus leo metus.
						Accumsan amet porttitor.
					</div>
				</div>
				<div class="col">
					<img 
                        :src="require('../assets/images/about/unsplash.png')" 
                        alt="img" 
                        class="w-full"
                    />
					<div class="title my-3 sm:my-5 text-[12px] sm:text-[14px]">Дензел Вашингтон</div>
					<div class="description text-[8px] sm:text-[10px]">
						Dictumst turpis tincidunt feugiat cursus tristique magna. Id ultricies
						mattis id tincidunt. Nibh faucibus pharetra ut auctor senectus leo metus.
						Accumsan amet porttitor.
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
