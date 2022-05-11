<script setup>
import { ref } from "vue";

const openItem = ref(null);

const onChange = (value) => {
    openItem.value = value;
};
</script>

<template>
    <div>
        <slot :open-item="openItem" :on-change="onChange"></slot>
    </div>
</template>