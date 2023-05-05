<template>
    <div
        class="
            flex
            items-center
            text-sm
            p-3
            z-20
            cursor-pointer
            text-center
        "
        :class="{
            absolute: !isCollapsed,
        }"
    >
        <div class="relative">
            <span @click.stop="onClickLanguage" class="px-2">
                {{ locale }}
            </span>
            <transition>
                <div class="drop-shadow absolute left-0 right-0" v-if="isOpen">
                    <div
                        @click.stop="onSelect('ru')"
                        class="
                            py-0.5
                            hover:text-black hover:bg-zinc-300
                            bg-[#000000cc]
                        "
                    >
                        ru
                    </div>
                    <div
                        @click.stop="onSelect('en')"
                        class="
                            py-0.5
                            hover:text-black hover:bg-zinc-300
                            bg-[#000000cc]
                        "
                    >
                        en
                    </div>
                    <div
                        @click.stop="onSelect('uz')"
                        class="
                            py-0.5
                            hover:text-black hover:bg-zinc-300
                            bg-[#000000cc]
                        "
                    >
                        uz
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script setup>
import useLocale from "@/composables/locale";
import i18n from "@/i18n";
import { ref, inject, onMounted, onUnmounted } from "vue";
const { onChange, locale } = useLocale();
const isCollapsed = inject("isCollapsed");

const isOpen = ref(false);
const onClickLanguage = () => {
    isOpen.value = !isOpen.value;
};

const onSelect = (locale) => {
    onChange(locale);
    isOpen.value = false;
};

const hideHandler = (event) => {
    if (event?.keyCode == 27 || event.type == "click") {
        isOpen.value = false;
    }
};
onMounted(() => {
    document.addEventListener("click", hideHandler);
    document.addEventListener("keyup", hideHandler);
});

onUnmounted(() => {
    document.removeEventListener("click", hideHandler);
    document.removeEventListener("keyup", hideHandler);
});
</script>

<style lang="scss" scope>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>