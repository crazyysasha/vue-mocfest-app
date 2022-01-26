<template>
    <div
        class="bg-black relative flex items-stretch"
        :class="{ 'flex-col': isCollapsed }"
    >
        <DefaultHeader :class="{ 'order-2': !isCollapsed }"></DefaultHeader>
        <main class="flex-1 flex overflow-y-auto bg-black">
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

        const { height, width } = useWindowSize();

        const isCollapsed = computed(() => {
            if (width.value < 600) {
                return true;
            }
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
            console.log(height.value, menuHeight + 20);
            return height.value < menuHeight + 20;
        });

        provide("isCollapsed", isCollapsed);
        return { isCollapsed };
    },
};
</script>
