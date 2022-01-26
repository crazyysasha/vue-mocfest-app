<template>
    <div
        class="bg-black relative flex items-stretch"
        :class="{ 'flex-col': isCollapsed }"
        ref="container"
    >
        <DefaultHeader :class="{ 'order-2 hidden': !isCollapsed }"></DefaultHeader>
        <main class="flex-1 flex overflow-y-auto">
            <slot></slot>
        </main>
    </div>
</template>

<script>
import DefaultHeader from "@/components/DefaultHeader.vue";
import { ref } from "vue";
import { computed, provide } from "vue";
import { useWindowSize } from "@vueuse/core";

export default {
    components: {
        DefaultHeader,
    },
    setup() {
        const menu = ref(null);

        provide("menu", menu);

        const { height } = useWindowSize();

        const isCollapsed = computed(() => {
            if (menu.value == null) {
                return false;
            }
            let menuHeight = 0;

            menu.value?.querySelectorAll("a").forEach((element) => {
                if (isCollapsed.value) {
                    menuHeight += element.offsetWidth;
                } else {
                    menuHeight += element.offsetHeight;
                }
            });

            return height.value < menuHeight + 20;
        });

        provide("isCollapsed", isCollapsed);
        return { isCollapsed };
    },
};
</script>
