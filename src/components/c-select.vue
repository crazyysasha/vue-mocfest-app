<template>
    <div
        class="
            select
            border border-white border-opacity-50
            flex
            cursor-pointer
            relative
            min-h-[60px]
        "
        @click="toggle"
        ref="select"
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
            <slot :="modelValue"></slot>
        </div>
        <div class="p-3 flex items-center justify-center">
            <svg
                class="m-auto transform duration-200"
                width="24"
                height="14"
                viewBox="0 0 24 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                :class="{ 'rotate-180': isOpen }"
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
                    top-full
                    bg-zinc-800
                    z-10
                    -left-0.5
                    -right-0.5
                "
                v-if="isOpen"
            >
                <div
                    class="
                        hover:bg-white hover:text-black
                        px-3
                        py-2
                        text-center
                    "
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
import { toRefs, ref, onMounted, onUnmounted, effect } from "vue";

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
const toggle = (event) => {
    event.stopPropagation();
    isOpen.value = !isOpen.value;
};
const select = ref();
const onSelect = (item) => {
    emit("update:modelValue", item);
    hide();
};

const hideHandler = (event) => {
    if (select.value.contains(event.target) || select.value == event.target) {
        event.stopPropagation();
    }
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