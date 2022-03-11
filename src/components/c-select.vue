<script setup>
import { toRefs, ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
    modelValue: Object,
    items: {
        type: Array,
        default() {
            return [{ label: "Нет данных", value: null }];
        },
    },
});
const { modelValue, items } = toRefs(props);

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
const select = (item) => {
    emit("update:modelValue", item);
    hide();
};

const hideHandler = (event) => {
    if (event?.keyCode == 27 || event.type == "click") {
        console.log("asd");
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

<template>
    <div
        class="border border-white border-opacity-50 flex my-2 cursor-pointer"
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
        <div class="text-center flex-1 p-2">
            <slot :="modelValue">
                <div class="underline underline-offset-2">
                    {{ modelValue.title }}
                </div>
                <div
                    class="text-xs tracking-normal font-thin font-montserrat"
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
                :class="{ 'rotate-180': isOpen }"
            >
                <path d="M24 0.5L12 12.5L0 0.5" stroke="white" />
            </svg>
        </div>
        <transition>
            <div v-if="isOpen">
                <div
                    v-for="item in items"
                    :key="item.value"
                    @click.stop="select(item)"
                >
                    <slot name="options" :select="select" :="item">
                        {{ item.title }}
                    </slot>
                </div>
            </div>
        </transition>
    </div>
</template>
