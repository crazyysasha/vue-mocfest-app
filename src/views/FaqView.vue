<script setup>
import AccordionContainer from "@/components/accordion/AccordionContainer.vue";
import AccordionItem from "@/components/accordion/AccordionItem.vue";
import useFaq from "@/composables/faq";
import { onMounted } from "@vue/runtime-core";

const { data, onGet, isLoaded, isLoading } = useFaq();
const { exec } = onGet();

onMounted(async () => {
    if (!isLoaded.value) await exec();
});
</script>

<style scoped>
.content p {
    @apply mb-6;
}
</style>
<template>
    <div class="mt-16 p-7 w-full md:w-4/5">
        <div v-if="isLoading">
            <div class="h-12 w-96 mb-6 bg-white animate-pulse"></div>
            <div class="h-7 w-full mb-2 bg-white animate-pulse"></div>
            <div class="h-7 w-full mb-2 bg-white animate-pulse"></div>
            <div class="mt-16 h-8 w-full mb-6 bg-white animate-pulse"></div>
            <div class="h-8 w-full mb-6 bg-white animate-pulse"></div>
            <div class="h-8 w-full mb-6 bg-white animate-pulse"></div>
            <div class="h-8 w-full mb-6 bg-white animate-pulse"></div>
            <div class="h-8 w-full mb-6 bg-white animate-pulse"></div>
            <div class="h-8 w-full mb-6 bg-white animate-pulse"></div>
        </div>
        <div v-else-if="isLoaded">
            <h1 class="font-montserrat font-normal text-3xl md:text-5xl mb-6">
                {{ data?.title ?? "" }}
            </h1>
            <div
                class="
                    font-montserrat font-normal
                    text-base
                    md:text-[28px]
                    leading-[1.2]
                "
                v-html="data?.description"
            ></div>
            <AccordionContainer class="mt-16" #="{ openItem, onChange }">
                <AccordionItem
                    :open="openItem"
                    @trigger="onChange"
                    class="content font-montserrat font-normal text-[17px]"
                    v-for="(item, index) in data?.items || []"
                    :id="index"
                    :key="index"
                >
                    <template #title>
                        <div class="font-medium text-lg md:text-xl">
                            {{ item.title }}
                        </div>
                    </template>
                    <div v-html="item?.description"></div>
                </AccordionItem>
            </AccordionContainer>
        </div>
    </div>
</template>

