<template>
  <yandex-map
      :settings="{
            apiKey: '05604d63-2945-4cef-bd92-e82c5362bf26',
            lang: 'ru_RU',
            enterprise: false,
            version: '2.1',
        }"
      :controls="[]"
      :coords="initialCoords"
      :show-all-markers="true"
      :options="{
            maxAnimationZoomDifference: Infinity,
        }"
      class="w-full filter grayscale invert"
      @map-was-initialized="onMapLoaded"
  >
    <div></div>
    <ymap-marker
        v-for="event in events"
        :key="event.id"
        :marker-id="event.id"
        :balloon="{
                header: event.title,
                body: event.subtitle,
                footer: event.address,
            }"
        :coords="[event.latitude, event.longitude]"
        :icon="markerIcon(event.logo?.path || null)"
    />
  </yandex-map>
</template>


<script setup>
import { ymapMarker, yandexMap, loadYmap } from "vue-yandex-maps";
import useEvents from "@/composables/events";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

const { isLoading, fetchEvents, events } = useEvents();
const route = useRoute();

const yMap = ref();
const moveCamera = (slug) => {
  if (!yMap.value) return;
  const event = events.value.find((element) => slug == element.slug);
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  if (event)
    yMap.value.setCenter([event.latitude, event.longitude], 15, {
      duration: 2000,
      checkZoomRange: true,
      timingFunction: "ease",
    });
  else if (events.value.length == 1)
    yMap.value.setCenter(
        events.value.map((event) => [event.latitude, event.longitude])[0],
        15,
        {
          duration: 2000,
          checkZoomRange: true,
          timingFunction: "ease",
        }
    );
  else if (events.value.length > 1)
    yMap.value.setBounds(
        window.ymaps.util.bounds.fromPoints(events.value.map((event) => [event.latitude, event.longitude])),
        {
          duration: 3000,
          checkZoomRange: true,
          timingFunction: "ease",
        }
    );
};
watch(
    () => route.params?.slug,
    (newSlug) => {
      moveCamera(newSlug);
    },
    {
      immediate: true,
    }
);

const onMapLoaded = async (map) => {
  await fetchEvents();
  yMap.value = map;
  moveCamera(route.params?.slug);
};
const initialCoords = ref([41.3113, 69.279773]);
const markerIcon = (url = null) => {
  return {
    layout: "default#imageWithContent",
    imageHref: url || "https://cdn-icons-png.flaticon.com/512/1946/1946470.png",
    imageSize: [50, 50],
    imageOffset: [-25, -25],
    // content: '123 v12',
    contentOffset: [0, 15],
    // contentLayout: '<div style="background: red; width: 50px; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'}
  }
};
</script>

<style>
</style>
