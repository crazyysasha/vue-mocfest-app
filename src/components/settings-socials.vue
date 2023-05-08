<template>
    <div v-if="isLoading" class="flex flex-col-reverse">
        <div
            class="my-1 flex justify-center"
            v-for="socials in 3"
            :key="socials"
        >
            <div
                v-for="(social, index) in socials"
                :key="social"
                class="flex justify-center"
            >
                <div
                    class="hover:opacity-50 bg-white mx-2 animate-pulse"
                    :style="{ width: `${50 + 25 * Math.random()}px` }"
                >
                    <span class="opacity-50">{{ social }}</span>
                </div>
                {{ index < socials - 1 ? "/ " : "" }}
            </div>
        </div>
    </div>
    <div class="font-montserrat text-center text-sm mt-8 pb-5" v-else-if="isLoaded">
        <div class="my-1" v-for="socials in settings.socials" :key="socials">
            <span v-for="(social, index) in socials" :key="social">
                <router-link
                    v-if="social.is_internal"
                    class="hover:opacity-50"
                    :to="social.url"
                >
                    {{ social.label }}
                </router-link>
                <a class="hover:opacity-50" :href="social.url" v-else>
                    {{ social.label }}
                </a>
                {{ index < socials.length - 1 ? "/ " : "" }}
            </span>
        </div>
    </div>
</template>

<script setup>
import useSettings from "@/composables/settings";
import { onMounted } from "@vue/runtime-core";

const { exec, isLoading, isLoaded, error, settings } = useSettings();

onMounted(async () => {
    if (!isLoaded.value) await exec();
});
</script>
