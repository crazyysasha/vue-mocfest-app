<template>
    <div
        class="
            border border-white border-opacity-50
            flex
            my-2
            cursor-pointer
            relative
            h-14
        "
        @click.prevent.stop="toggle"
    >
        <div class="p-3 flex items-center justify-center opacity-0">
            <svg
                class="m-auto"
                width="24"
                height="14"
                viewBox="0 0 24 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M24 0.5L12 12.5L0 0.5" stroke="white" />
            </svg>
        </div>
        <div class="flex justify-center flex-col items-center flex-1 p-1">
            <slot :="modelValue">
                <div class="underline underline-offset-2">
                    {{ modelValue.title }}
                </div>
                <div
                    class="text-md tracking-normal font-thin font-montserrat"
                    v-html="modelValue.subtitle"
                ></div>
            </slot>
        </div>
        <div class="p-3 flex items-center justify-center">
            <svg
                class="m-auto transform duration-200"
                width="24"
                height="14"
                viewBox="0 0 24 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                :class="{ 'rotate-180': !isOpen }"
            >
                <path d="M24 0.5L12 12.5L0 0.5" stroke="white" />
            </svg>
        </div>
        <transition>
            <div
                class="
                    select
                    border-2 border-neutral-700
                    absolute
                    left-0
                    right-0
                    top-full
                    bg-zinc-800
                    z-10
                "
                v-if="isOpen"
                style="left: -2px; right: -2px"
            >
                <div
                    class="hover:bg-white hover:text-black px-3 py-2 text-center"
                    v-for="option in options"
                    :key="option[optionKey]"
                    @click.stop="onSelect(option)"
                >
                    <slot name="option" :onSelect="onSelect" :option="option">
                        {{ option.title }}
                    </slot>
                </div>
            </div>
        </transition>
    </div>
</template>


<script setup>
import { toRefs, ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
    modelValue: Object,
    options: {
        type: Array,
        default() {
            return [{ label: "Нет данных", value: null }];
        },
    },
    optionKey: {
        type: String,
        default() {
            return "key";
        },
    },
});

const emit = defineEmits(["update:modelValue"]);

const isOpen = ref(false);

const show = () => {
    isOpen.value = true;
};
const hide = () => {
    isOpen.value = false;
};

const toggle = () => {
    isOpen.value = !isOpen.value;
};
const onSelect = (item) => {
    emit("update:modelValue", item);
    hide();
};

const hideHandler = (event) => {
    if (event?.keyCode == 27 || event.type == "click") {
        hide();
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

<style lang="scss" scoped>

</style>