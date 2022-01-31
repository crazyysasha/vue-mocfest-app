<template>
  <div>
    <h1>Map page</h1>
    <yandex-map :coords="coords" :zoom="10" @click="onClick">
      <ymap-marker :coords="coords" marker-id="123" hint-content="some hint" />
    </yandex-map>
  </div>
</template>



<script>
import { yandexMap, ymapMarker } from "vue-yandex-maps";

export default {
  data: () => ({
    coords: [
      54.82896654088406,
      39.831893822753904,
    ],
  }),
  methods: {
    onClick(e) {
      this.coords = e.get('coords');
    },
  },
  components: { "yandex-map": yandexMap, 'ymap-marker': ymapMarker },
  // other options
};
</script>