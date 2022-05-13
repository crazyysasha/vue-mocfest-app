<template>
    <div class="mx-auto flex flex-col p-1 w-[25rem] tracking-[.2rem] py-5">
        <div class="border border-white mx-2 relative mt-auto">
            <LangList
                class="absolute top-0 -right-20 p-0"
                :class="{ hidden: isCollapsed }"
            >
            </LangList>

            <div class="p-3 px-4">
                <img src="@/assets/logo.svg" alt="" class="mx-auto" />
            </div>
            <div class="flex flex-col p-4">
                <div v-if="isLoading" class="p-5 mb-2 justify-center flex">
                    <div class="h-10 w-10 animate-pulse rounded-full bg-white">
                        <div
                            class="animate-ping h-10 w-10 rounded-full bg-white"
                        ></div>
                    </div>
                </div>
                <div v-else v-for="event in events" :key="event.slug">
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
                        :class="{ 'p-3': !isLoading }"
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
                                        text-xl
                                        sm:text-2xl
                                        tracking-[20%]
                                        group-hover:underline
                                        underline-offset-2
                                        leading-6
                                        font-normal
                                        mb-1
                                    "
                                >
                                    {{ event.title }}
                                </div>
                                <div
                                    class="
                                        text-md
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
                {{ $t("buttons.buyTicket") }}
            </button>
        </div>

        <settings-socials class="mb-auto"></settings-socials>

        <c-modal v-model="modalIsOpen" v-slot="{ close }">
            <button
                @click="close"
                class="absolute -top-8 md:top-0 right-0 md:-right-8"
            >
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
import { ref, inject } from "vue";

import { onMounted } from "@vue/runtime-core";
import useEvents from "@/composables/events";
import CModal from "@/components/c-modal.vue";
import BuyForm from "@/components/buy-form.vue";
import SettingsSocials from "@/components/settings-socials.vue";
import LangList from "@/components/lang-list.vue";

const { isLoading, events, error, fetchEvents, isLoaded } = useEvents();
onMounted(() => {
    if (!isLoaded.value) fetchEvents();
});

const isCollapsed = inject("isCollapsed");
const modalIsOpen = ref(false);
</script>