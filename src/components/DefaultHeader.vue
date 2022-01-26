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
        <button
            @click.prevent="toggleMenu"
            class="focus:outline-none block p-4 mx-auto"
            :class="{ hidden: !isCollapsed }"
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
                "
                :class="{ 'rotate-45 translate-y-[4.5px]': isOpen }"
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
                "
                :class="{ '-rotate-45 -translate-y-[4.5px]': isOpen }"
            ></span>
        </button>
        <div class="h-screen overflow-y-auto" :class="{'hidden': !isOpen && isCollapsed }">
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
import { inject, ref } from "vue";

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

        let isOpen = ref(false);

        const toggleMenu = () => {
            isOpen.value = !isOpen.value;
        };

        return {
            menu,
            isCollapsed,
            isOpen,
            toggleMenu,
        };
    },
};
</script>

<style scoped>
.writing-vertical {
    writing-mode: vertical-rl;
}
</style>