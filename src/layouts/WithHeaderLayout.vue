<template>
    <div class="bg-black relative flex items-stretch">
        <DefaultHeader class="order-2"></DefaultHeader>
        <main class="flex-1 flex overflow-y-auto">
            <slot></slot>
        </main>
    </div>
</template>

<script>
import DefaultHeader from "@/components/DefaultHeader.vue";
export default {
    components: {
        DefaultHeader,
    },
};
</script>
