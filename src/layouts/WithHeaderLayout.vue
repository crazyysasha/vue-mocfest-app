<template>
    <div class="flex" :class="{ 'overflow-y-auto flex-col': isCollapsed }">
        <DefaultHeader
            class="bg-gradient-to-b from-black"
            :class="{ 'order-2': !isCollapsed, 'fixed top-0 w-full z-50': isCollapsed }"
        ></DefaultHeader>
        <main 
            class="flex-1 flex bg-black main-blog"
            :class="{ 'overflow-y-auto': !isCollapsed }"
        >
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
            if (width.value < 640) {
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
            return height.value < menuHeight + 20;
        });
        
        provide("isCollapsed", isCollapsed);

        return { isCollapsed };
    },
};
</script>

<style lang="scss" scope>
    .main-blog::-webkit-scrollbar { /* WebKit */
        width: 0;
        height: 0;
    }
    .main-blog {
        scrollbar-width: none;
        -ms-overflow-style: none;  /* IE and Edge */
    }
</style>
