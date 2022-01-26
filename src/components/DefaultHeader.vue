<template>
    <header class="">
        <transition
            enter-active-class="transform transition duration-200"
            enter-from-class="scale-0"
            enter-to-class="scale-100"
            leave-active-class="transform transition duration-200"
            leave-to-class="scale-0"
            leave-from-class="scale-100"
        >
            <router-link
                v-if="$route.path != '/'"
                to="/"
                class="flex items-center absolute left-4 top-4"
            >
                <svg
                    class="h-4 w-4 mr-1"
                    viewBox="0 0 14 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M13 24L1 12L13 0" stroke="white" />
                </svg>
                <span v-if="!isCollapsed"> На главную </span>
            </router-link>
        </transition>
        <a> </a>
        <div class="h-screen overflow-y-auto">
            <ul
                class="flex h-full flex-col transform text-sm uppercase"
                :class="{ 'rotate-180': !isCollapsed }"
                ref="menu"
            >
                <li class="my-auto"></li>
                <li v-for="link in links" :key="link.url" class="my-auto">
                    <router-link
                        :to="link.url"
                        :exact="link.exact"
                        class="hover:opacity-50 transition duration-200"
                        :class="{ 'writing-vertical': !isCollapsed }"
                    >
                        <div class="p-1 m-1 inline-block">
                            {{ link.title }}
                        </div>
                    </router-link>
                </li>
                <li class="my-auto"></li>
            </ul>
        </div>
    </header>
</template>


<script>
import { inject } from "vue";

export default {
    data: () => ({
        links: [
            { title: "Команда", url: "/comand" },
            { title: "Галерея", url: "/gallery" },
            { title: "Карта", url: "/map" },
            { title: "Манифест", url: "/manifesto", exact: true },
            { title: "Партнеры", url: "/partners" },
        ],
    }),
    setup() {
        const menu = inject("menu");

        const isCollapsed = inject("isCollapsed");

        return {
            menu,
            isCollapsed,
        };
    },
};
</script>

<style scoped>
.writing-vertical {
    writing-mode: vertical-rl;
}
</style>