<template>
    <component :is="layout" class="tracking-[.15rem] font-neutralFace text-white underline-offset-2 h-screen">
        <router-view />
    </component>
</template>
<script>
import { useRoute } from "vue-router";
import WithHeaderLayout from "./layouts/WithHeaderLayout.vue";

export default {
    setup() {
        const route = useRoute();

        return {
            layout: route.meta?.layout || WithHeaderLayout,
        };
    },
};
</script>