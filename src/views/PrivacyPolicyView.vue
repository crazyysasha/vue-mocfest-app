<script setup>
import useTerms from "@/composables/privacyPolicy";
import { onMounted } from "@vue/runtime-core";

const { data, isLoaded, isLoading, onGet } = useTerms();

const { exec } = onGet();

onMounted(async () => {
    if (!isLoaded.value) await exec();
});
</script>

<template>
    <div class="mt-16 p-7 terms w-full md:w-4/5 tracking-normal">
        <div v-if="isLoading">
            <div class="h-12 w-96 mb-6 bg-white animate-pulse"></div>
            <div class="h-7 w-full mb-2 bg-white animate-pulse"></div>
            <div class="h-7 w-full mb-2 bg-white animate-pulse"></div>

            <div class="h-6 w-full mt-16 mb-2 bg-white animate-pulse"></div>
            <div class="h-6 w-full mb-2 bg-white animate-pulse"></div>
            <div class="h-6 w-full mb-2 bg-white animate-pulse"></div>
            <div class="h-6 w-full mb-2 bg-white animate-pulse"></div>
            <div class="h-6 w-full mb-2 bg-white animate-pulse"></div>
            <div class="h-6 w-full mb-2 bg-white animate-pulse"></div>
            <div class="h-6 w-full mb-2 bg-white animate-pulse"></div>
            <div class="h-6 w-full mb-2 bg-white animate-pulse"></div>
            <div class="h-6 w-full mb-2 bg-white animate-pulse"></div>
            <div class="h-6 w-full mb-2 bg-white animate-pulse"></div>
        </div>
        <div v-else-if="isLoaded">
            <h1 class="font-montserrat font-normal text-3xl md:text-5xl mb-6">
                {{ data?.title }}
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
            <div class="mt-16 font-montserrat" v-html="data?.content"></div>
            <div class="hidden">
                <h6></h6>
                <h5></h5>
                <h4></h4>
                <h3></h3>
                <h2></h2>
                <h1></h1>
                <p></p>
            </div>
        </div>
    </div>
</template>

<style>
.terms h6 {
    @apply mb-4 font-medium text-xs;
}
.terms h5 {
    @apply mb-4 font-medium text-base;
}
.terms h4 {
    @apply mb-4 font-medium text-[21px];
}
.terms h3 {
    @apply mb-4 font-medium text-2xl;
}
.terms h2 {
    @apply mb-4 font-medium text-3xl;
}
.terms h1 {
    @apply mb-4 font-medium text-4xl;
}
.terms p {
    @apply mb-4;
}
</style>