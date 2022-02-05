<template>
    <header>
        <div class="flex justify-between">
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
                    @click="hideMenu"
                    class="flex items-center p-4 left-2.5 top-[1.05rem] z-20"
                    :class="{ absolute: !isCollapsed }"
                >
                    <svg
                        class="h-6 w-6 mr-1"
                        viewBox="0 0 14 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M13 24L1 12L13 0" stroke="white" />
                    </svg>
                    <span v-if="!isCollapsed"> На главную </span>
                </router-link>
            </transition>
            <transition name="margin" mode="out-in">
                <button
                    @click.prevent="toggleMenu"
                    class="
                        focus:outline-none
                        block
                        p-4
                        transition
                        duration-200
                        z-20
                    "
                    :class="{
                        hidden: !isCollapsed,
                        'mx-auto': $route.path == '/',
                        'ml-auto': $route.path != '/',
                    }"
                    v-bind:key="$route.path"
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
            </transition>
        </div>
        <div
            class="
                transition-all
                duration-200
                ease
                flex flex-col
                overflow-hidden
                h-screen
                -z-10
            "
            :class="{
                'top-0 bg-opacity-0 h-0': !isOpen && isCollapsed,
                'bg-opacity-100 h-screen': isOpen && isCollapsed,
                'absolute backdrop-blur w-full top-0': isCollapsed,
            }"
        >
            <ul
                class="
                    flex flex-col
                    transform
                    text-sm
                    uppercase
                    text-center
                    h-screen
                "
                :class="{
                    'rotate-180 h-full': !isCollapsed,
                    'my-5 mt-20 w-full': isCollapsed,
                }"
                ref="menu"
            >
                <li class="my-auto"></li>
                <li
                    v-for="link in links"
                    :key="link.url"
                    :class="{ 'my-auto': !isCollapsed, 'my-2': isCollapsed }"
                >
                    <router-link
                        :to="link.url"
                        @click="hideMenu"
                        :exact="link.exact"
                        class="hover:opacity-50 transition duration-200"
                        :class="{ 'writing-vertical': !isCollapsed }"
                    >
                        <div class="p-1 inline-block">
                            {{ link.title }}
                        </div>
                    </router-link>
                </li>
                <li class="my-auto"></li>
            </ul>
            <div
                class="font-montserrat text-center text-sm mt-auto mb-20"
                :class="{ hidden: !isCollapsed }"
            >
                <div class="">
                    <div class="my-2">
                        <a href="" class="hover:opacity-50">Facebook </a>
                        /
                        <a href="" class="hover:opacity-50">Instagram </a>
                        /
                        <a href="" class="hover:opacity-50">Email </a>
                    </div>
                    <div class="my-2">
                        <a href="" class="hover:opacity-50">Telegram </a>
                        /
                        <a href="" class="hover:opacity-50">Telegram Bot</a>
                    </div>
                    <div class="my-2">
                        <a href="tel:+998946036085" class="hover:opacity-50">
                            +998 94 603 60 85
                        </a>
                    </div>
                </div>
            </div>
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
            { title: "Карта", url: "/events" },
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
        const hideMenu = () => {
            isOpen.value = false;
        };

        return {
            menu,
            isCollapsed,
            isOpen,
            toggleMenu,
            hideMenu,
        };
    },
};
</script>

<style scoped>
.writing-vertical {
    writing-mode: vertical-rl;
}
</style>