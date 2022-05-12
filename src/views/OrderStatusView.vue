<template>
    <div class="flex items-center justify-center w-full">
        <div v-if="isLoading" class="p-5 mb-2 justify-center flex">
            <div class="h-10 w-10 animate-pulse rounded-full bg-white">
                <div class="animate-ping h-10 w-10 rounded-full bg-white"></div>
            </div>
        </div>
        <div v-if="data" class="max-w-md px-5 md:px-0">
            <h2 class="text-center text-2xl mb-5 tracking-[.22em]">
                Спасибо за покупку!
            </h2>
            <p class="font-montserrat text-center mb-5 tracking-normal">
                Билеты и дополнительная информация отправлены вам на
                <span class="font-bold">
                    {{ data.email }}
                </span>
            </p>
            <button
                class="
                    block
                    w-full
                    border border-white
                    p-4
                    tracking-[.22em]
                    text-lg
                    transition-all
                    duration-200
                "
                @click="router.push('/')"
            >
                На главную
            </button>
        </div>
    </div>
</template>

<script setup>
import useOrder from "@/composables/order";
import { onMounted } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const { onGet } = useOrder();
const { exec, error, isLoading, data } = onGet();

onMounted(async () => {
    await exec(route.params.id);
    if (error.value?.type == "not_found") {
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
</script>
