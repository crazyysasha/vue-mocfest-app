<template>
    <div
        class="border border-white border-opacity-50 flex my-2 cursor-pointer relative"
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
            <div class="underline underline-offset-2">
                дата    
            </div>
            <div class="text-md tracking-normal font-thin font-montserrat">
                {{subtitleDate}} (осталось {{quantityTicket.length}} мест)          
            </div>            
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
                    z-10
                    bg-zinc-800
                "                
                v-if="isOpen"
                style="left: -2px; right: -2px"                
            >            
                <div
                    class="flex justify-between hover:bg-white hover:text-black px-4 py-1"
                    v-for="date, key in ticketsDate"
                    :key="date"
                    @click.stop="select(date)"                    
                >
                  <strong>{{key + 1}}:</strong>  <span>{{ date }}</span>
                </div>
            </div>
        </transition>
    </div>
</template>


<script setup>
import { reactive, toRefs, ref, onMounted, onUnmounted, onComputed } from "vue";

const props = defineProps({
    modelValue: Object,  
    lengthTickets: Number  
});
const emit = defineEmits(["update:modelValue"]);
const { modelValue } = toRefs(props);


const groupByTicket = modelValue.value.tickets.reduce((group, product) => {
  const { valid_at } = product;
  group[valid_at] = group[valid_at] ?? [];
  group[valid_at].push(product);
  return group;
}, {});

const ticketsDate = Object.keys(groupByTicket);
const subtitleDate = ref();
const quantityTicket = ref(modelValue.value.tickets.filter(t => t.valid_at === subtitleDate.value));

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

const select = (date) => {
    subtitleDate.value = date;
    quantityTicket.value = modelValue.value.tickets.filter(t => t.valid_at === date);
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