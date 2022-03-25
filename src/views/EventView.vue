<template>
    <div class="flex flex-wrap w-full">
        <div
            class="bg-black sticky top-0 w-full"
            :class="{ 'block lg:hidden': !isCollapsed, hidden: isCollapsed }"
        >
            <div class="h-14"></div>
        </div>
        <div
            class="
                lg:w-2/5
                xl:w-1/3
                overflow-y-auto
                lg:h-screen
                px-4
                pt-12
                sm:pt-0
                md:px-10
                text-sm
                flex flex-col
            "
            ref="sidebarContainer"
        >
            <div
                class="bg-black sticky top-0 w-full"
                :class="{ hidden: isCollapsed }"
            >
                <div class="h-14"></div>
            </div>
            <div class="mb-5 mt-2 lg:mt-10">
                <h1
                    class="
                        text-4xl
                        tracking-[.4rem]
                        underline
                        decoration-2
                        leading-1
                    "
                    :class="{
                        'animate-pulse bg-white overflow-hidden': isLoading,
                        'underline-offset-4': !isLoading,
                    }"
                    :style="{
                        width: isLoading
                            ? `${
                                  150 +
                                  Math.random() *
                                      ($refs.sidebarContainer.offsetWidth - 200)
                              }px`
                            : 'auto',
                    }"
                >
                    {{ event?.title ?? "Загрузка" }}
                </h1>
            </div>
            <div class="mb-5" v-if="isLoading">
                <p
                    class="font-montserrat tracking-normal mb-1"
                    v-for="param in parseInt(2 + Math.random() * 3)"
                    :key="param"
                    :class="{
                        'animate-pulse bg-white overflow-hidden': isLoading,
                        'underline-offset-4': !isLoading,
                    }"
                    :style="{
                        width: isLoading
                            ? `${
                                  150 +
                                  Math.random() *
                                      ($refs.sidebarContainer.offsetWidth - 200)
                              }px`
                            : 'auto',
                    }"
                >
                    Загрузка
                </p>
            </div>
            <div class="mb-5" v-if="!isLoading">
                <p
                    class="font-montserrat tracking-normal"
                    v-for="param in event?.params"
                    :key="param"
                >
                    {{ param.title }}:

                    <span class="font-bold" v-if="param._group == 'text'">
                        {{ param.value }}</span
                    >
                    <span
                        class="font-bold"
                        v-else-if="param._group == 'address'"
                    >
                        <router-link
                            :to="{
                                name: 'events',
                                params: { slug: event.slug },
                            }"
                            class="
                                underline
                                transition-opacity
                                duration-200
                                hover:opacity-50
                                font-bold
                            "
                        >
                            {{ event.address }}
                        </router-link>
                    </span>

                    <span class="font-bold" v-else-if="param._group == 'links'">
                        <span v-for="(link, index) in param.items" :key="link">
                            <a
                                :href="link.url"
                                :target="
                                    link.is_new_blank == '1' ? '_blank' : false
                                "
                                class="
                                    underline
                                    transition-opacity
                                    duration-200
                                    hover:opacity-50
                                    font-bold
                                "
                            >
                                {{ link.label }} </a
                            >{{ param.items.length > index ? ", " : "" }}
                        </span>
                    </span>
                </p>
            </div>
            <div class="font-montserrat tracking-normal" v-if="isLoading">
                <p
                    class="mb-3 bg-white animate-pulse"
                    :style="{ width: `${Math.random * 5000}px` }"
                >
                    загрузка
                </p>
                <p
                    class="mb-3 bg-white animate-pulse"
                    :style="{ width: `${Math.random * 5000}px` }"
                >
                    загрузка
                </p>
                <p
                    class="mb-3 bg-white animate-pulse"
                    :style="{ width: `${Math.random * 5000}px` }"
                >
                    загрузка
                </p>
                <p
                    class="mb-3 bg-white animate-pulse"
                    :style="{ width: `${Math.random * 5000}px` }"
                >
                    загрузка
                </p>
            </div>
            <div
                class="font-montserrat tracking-normal mb-8"
                v-if="!isLoading"
                v-html="event?.description"
            ></div>
            <div class="mt-auto mb-4">
                <button
                    class="
                        block
                        w-full
                        border border-white
                        p-4
                        tracking-[.2rem]
                        text-lg
                        transition-all
                        duration-200
                    "
                    :class="{
                        'bg-black hover:bg-white hover:text-black': !isLoading,
                        'bg-white animate-pulse text-white': isLoading,
                    }"
                    @click="modalIsOpen = true"
                    :disabled="isLoading"
                >
                    Купить билеты
                </button>
            </div>
        </div>
        <div class="w-full lg:w-3/5 xl:w-2/3 lg:h-screen overflow-y-auto">
            <div
                class="columns-2 md:columns-3 lg:columns-2 xl:columns-3 gap-0"
                v-if="!isLoading"
            >
                <a
                    @click.prevent="openGallery(index)"
                    v-for="(img, index) in event?.images"
                    :key="index"
                    class="cursor-pointer block"
                >
                    <img :src="img.path" :alt="img.title" class="w-full" />
                </a>
            </div>
            <div v-else class="flex items-center justify-center h-full">
                <svg
                    class="animate-spin h-10 w-10 m-auto text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                    ></circle>
                    <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                </svg>
            </div>
        </div>

        <VueEasyLightbox
            class="backdrop-blur"
            :visible="boxIsOpen"
            :index="index"
            :imgs="event?.images.map((ob) => ob.path)"
            @hide="hideGallery"
        >
        </VueEasyLightbox>
        <c-modal v-model="modalIsOpen" v-slot="{ close }">
            <button @click="close" class="absolute -top-8 md:top-0 right-0 md:-right-8">
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
            <buy-form :event="event"> </buy-form>
        </c-modal>
    </div>
</template>


<script setup>
import { inject, onMounted, ref, watch } from "vue";

import VueEasyLightbox from "vue-easy-lightbox";

import CModal from "@/components/c-modal.vue";
import BuyForm from "@/components/buy-form.vue";
import useEvent from "@/composables/event";
import { useRoute, useRouter } from "vue-router";

const isCollapsed = inject("isCollapsed");

const boxIsOpen = ref(false);
const index = ref(0);

const route = useRoute();
const { slug } = route.params;
const router = useRouter();
const { isLoading, event, isLoaded, fetchEvent, error } = useEvent(slug);
const sidebarContainer = ref(null);

watch(error, async () => {
    if (error.value?.response?.status == 404) {
        router.push({
            name: "404",
            // preserve current path and remove the first char to avoid the target URL starting with `//`
            params: { pathMatch: route.path.substring(1).split("/") },
            // preserve existing query and hash if any
            query: route.query,
            hash: route.hash,
        });
    }
});

onMounted(() => {
    fetchEvent();
});

const hideGallery = () => {
    boxIsOpen.value = false;
};
const openGallery = (imageIndex) => {
    index.value = imageIndex;
    boxIsOpen.value = true;
};

const modalIsOpen = ref(false);
</script>
