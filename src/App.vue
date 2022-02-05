<template>
    <component
        :is="this.$route.meta.layout || WithHeaderLayout"
        class="
            tracking-[.15rem]
            font-neutralFace
            text-white
            underline-offset-2
            h-screen
        "
    >
        <router-view />
    </component>
</template>
<script>
// import { useRoute } from "vue-router";
import WithHeaderLayout from "./layouts/WithHeaderLayout.vue";

export default {
    components: { WithHeaderLayout },
};
</script>