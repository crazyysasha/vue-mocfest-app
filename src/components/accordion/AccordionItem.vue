<script setup>
import { computed, toRef, toRefs, watch } from "vue";

const props = defineProps({
    open: {
        type: [String, Number],
        default: null,
    },
    id: {
        type: [String, Number],
    },
});

const { open, id } = toRefs(props);

const isOpen = computed(() => id.value == open.value);

const trigger = () => {
    emit("trigger", id.value == open.value ? null : id.value);
};

const hide = (element) => {
    element.style.height = 0;
};
const show = (element) => {
    element.style.height = `${element.scrollHeight}px`;
};
const emit = defineEmits(["trigger"]);
</script>

<template>
    <div class="cursor-pointer" @click="trigger">
        <div class="flex py-4 justify-between font-montserrat font-medium">
            <div class="flex items-center">
                <slot name="title"></slot>
            </div>
            <div>
                <svg
                    class="w-8 h-8 transition duration-200"
                    :class="{
                        'rotate-180': isOpen,
                    }"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width=".5"
                        d="M19 9l-7 7-7-7"
                    ></path>
                </svg>
            </div>
        </div>
        <transition
            enter-active-class="transition-all duration-200"
            leave-active-class="transition-all duration-200"
            @before-enter="hide"
            @enter="show"
            @before-leave="show"
            @leave="hide"
        >
            <div v-show="isOpen">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>