<template>
	<div class="m-64">
		<iframe
			width="560"
			height="315"
			:src="videoUrl"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		></iframe>
	</div>
</template>


<script setup>

const id = 'LVbUNRwpXzw'
const videoUrl = 'https://www.youtube.com/embed/' + id
console.log(videoUrl);


</script>

<style>
iframe {
	width: 100%;
	max-width: 650px; /* Also helpful. Optional. */
}
</style>
