<template>
    <yandex-map
        :settings="{
            apiKey: '05604d63-2945-4cef-bd92-e82c5362bf26',
            lang: 'ru_RU',
            enterprise: false,
            version: '2.1',
        }"
        :controls="[]"
        :coords="[54.82896654088406, 39.831893822753904]"
        class="w-full"
    >   
    <div></div>
        <!-- <ymap-marker
            :coords="[54.82896654088406, 39.831893822753904]"
            marker-id="123"
        /> -->
    </yandex-map>
</template>


<script>
import { 
    // ymapMarker,
     yandexMap } from "vue-yandex-maps";
export default {
    components: {
        yandexMap,
        // ymapMarker,
    },
};
</script>

<style>
</style>