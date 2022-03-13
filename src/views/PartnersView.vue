<template>
    <div class="container mx-auto mt-auto">
        <div class="grid lg:grid-cols-5 grid-cols-3 p-5">
            <div v-for="partner in partners" :key="partner.id">
                <a :href="partner.link" class="flex h-full p-3">
                    <img :src="partner.image.path" alt="" class="m-auto" />
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import usePartners from "@/composables/partners";
import { onMounted } from "@vue/runtime-core";
const { isLoading, partners, error, fetchPartners, isLoaded } = usePartners();
onMounted(() => {
    if (!isLoaded.value) fetchPartners();
});
</script>