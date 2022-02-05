<template>
    <yandex-map
        :settings="{
            apiKey: '05604d63-2945-4cef-bd92-e82c5362bf26',
            lang: 'ru_RU',
            enterprise: false,
            version: '2.1',
        }"
        :controls="[]"
        :coords="coords"
        class="w-full filter grayscale invert"
    >   
    <div></div>
    <ymap-marker 
      marker-id="123" 
      :coords="coords"
      :icon="markerIcon"
    />
    </yandex-map>
</template>


<script>
    import { 
        ymapMarker,
        yandexMap } from "vue-yandex-maps";
    export default {
        components: {
            yandexMap,
            ymapMarker, 
        },
        data: () => ({
            coords: [41.311300, 69.279773],
            markerIcon: {
            layout: 'default#imageWithContent',
            imageHref: 'https://cdn-icons-png.flaticon.com/512/1946/1946470.png',
            imageSize: [60, 60],
            imageOffset: [0, 0],
            // content: '123 v12',
            contentOffset: [0, 15],
            // contentLayout: '<div style="background: red; width: 50px; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            }
        })
    };
</script>

<style>

</style>