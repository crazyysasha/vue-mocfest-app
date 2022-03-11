<template>
    <div class="border border-white shadow-2xl bg-black text-white">
        <div class="p-8 pb-4">
            <img src="@/assets/logo.png" alt="" class="mx-auto" />
        </div>
        <div class="flex flex-col font-neutralFace p-6">
            <div v-if="isLoading" class="p-5 mb-2 justify-center flex">
                <div class="h-10 w-10 animate-pulse rounded-full bg-white">
                    <div
                        class="animate-ping h-10 w-10 rounded-full bg-white"
                    ></div>
                </div>
            </div>
            <c-select
                v-model="event"
                :items="events"
                :disabled="true"
                class="text-white"
            >
                <template #default="{ title, subtitle }">
                    <div class="underline underline-offset-2">
                        {{ title }}
                    </div>
                    <div
                        class="
                            text-xs
                            tracking-normal
                            font-thin font-montserrat
                        "
                        v-html="subtitle"
                    ></div>
                </template>
                <template #options="{ select, title }">
                    <div @click="select({ title: 'huy' })">{{ title }}</div>
                </template>
            </c-select>
            <c-counter v-model="quantity" :min="1" :max="10"> </c-counter>
            <div class="pt-5 font-montserrat">
                <div class="flex justify-between my-2">
                    <div class="opacity-50">Дата события</div>
                    <div>9 апр.</div>
                </div>
                <div class="flex justify-between my-2">
                    <div class="opacity-50">Начало</div>
                    <div>18:00</div>
                </div>
            </div>
        </div>
        <button
            class="
                text-center
                block
                w-full
                p-4
                border-t-2 border-dashed border-white
                hover:bg-white hover:text-black
                transition
                duration-200
                tracking-[.2rem]
                font-neutralFace
            "
        >
            Продолжить
        </button>
    </div>
    <div class="font-montserrat text-center text-sm text-white">
        <div class="py-2">
            <div class="my-2">
                <a href="" class="hover:opacity-50">Facebook </a>
                /
                <a href="" class="hover:opacity-50">Instagram </a>
                /
                <a href="" class="hover:opacity-50">Email </a>
            </div>
            <div class="my-2">
                <a href="" class="hover:opacity-50">Telegram </a>
                /
                <a href="" class="hover:opacity-50">Telegram Bot</a>
            </div>
            <div class="my-2">
                <a href="tel:+998946036085" class="hover:opacity-50">
                    +998 94 603 60 85
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import CSelect from "@/components/c-select.vue";
import CCounter from "@/components/c-counter.vue";
import useEvents from "@/composables/events";
import { onMounted, reactive, ref, toRefs, watch } from "vue";

const props = defineProps({
    event: Object,
});

const { event } = toRefs(reactive({ ...props }));
watch(event, console.log);
const { isLoaded, isLoading, events, error, fetchEvents } = useEvents();

onMounted(() => {
    if (!isLoaded.value) fetchEvents();
});

const quantity = ref(1);
</script>
