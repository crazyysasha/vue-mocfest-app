<template>
    <div class="mx-auto flex flex-col p-1 w-[25rem] tracking-[.2rem] py-5">
        <div class="border border-white mt-auto mx-2">
            <div class="p-3 px-4">
                <img src="@/assets/logo.png" alt="" class="mx-auto" />
            </div>
            <div class="p-2 flex flex-col">
                <div v-if="isLoading" class="p-5 mb-2 justify-center flex">
                    <div class="h-10 w-10 animate-pulse rounded-full bg-white">
                        <div class="animate-ping h-10 w-10 rounded-full bg-white"></div>
                    </div>
                </div>
                <div v-for="event in events" :key="event.slug">
                    <router-link
                        :to="{ name: 'event', params: { slug: event.slug } }"
                        class="
                            flex flex-col
                            w-full
                            text-center
                            group
                            hover:opacity-50
                            transition
                            duration-200
                        "
                        :class="{ 'p-2': !isLoading }"
                    >
                        <transition
                            enter-active-class="transform transition duration-200"
                            enter-from-class="scale-0"
                            enter-to-class="scale-100"
                        >
                            <!-- leave-active-class="transform transition duration-200"
                            leave-to-class="scale-0"
                            leave-from-class="scale-100" -->
                            <div>
                                <div
                                    class="
                                        text-lg
                                        group-hover:underline
                                        underline-offset-2
                                        leading-6
                                    "
                                >
                                    {{ event.title }}
                                </div>
                                <div
                                    class="
                                        text-xs
                                        tracking-normal
                                        font-thin font-montserrat
                                    "
                                    v-html="event.subtitle"
                                ></div>
                            </div>
                        </transition>
                    </router-link>
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
                @click="modalIsOpen = true"
            >
                Купить билет
            </button>            
        </div>
        <div class="font-montserrat text-center text-sm my-auto">
            <div class="">
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
        <c-modal v-model="modalIsOpen" v-slot="{ close }">
            <button @click="close" class="absolute -right-8">
                <span
                    class="
                        w-6
                        scale-110
                        h-px
                        block
                        bg-white
                        my-2
                        transform
                        transition
                        duration-200
                        ease
                        rotate-45
                        translate-y-[4.5px]
                    "
                ></span>
                <span
                    class="
                        w-6
                        scale-110
                        h-px
                        block
                        bg-white
                        my-2
                        transform
                        transition
                        duration-200
                        ease
                        -rotate-45
                        -translate-y-[4.5px]
                    "
                ></span>
            </button>
            <buy-form :event="events[0]"> </buy-form>
        </c-modal>
    </div>
</template>

<script setup>
import { ref } from 'vue'

import { onMounted } from "@vue/runtime-core";
import useEvents from "@/composables/events";
import CModal from "@/components/c-modal.vue";
import BuyForm from "@/components/buy-form.vue";

const { isLoading, events, error, fetchEvents, isLoaded } = useEvents();
onMounted(() => {
    if (!isLoaded.value) fetchEvents();
});

const modalIsOpen = ref(false);
</script>