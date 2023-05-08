<template>
    <header>
        <div
                class="
                flex
                justify-between
                absolute
                top-0
                left-0
                right-0
                h-[45px]
                bg-[#000000cc]
            "
        >
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
                        class="flex items-center p-3 left-2.5 z-20"
                        :class="{
                        absolute: !isCollapsed,
                        'mr-auto': $route.path != '/',
                    }"
                >
                    <svg
                            class="h-6 w-6 mr-1"
                            viewBox="0 0 14 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M13 24L1 12L13 0" stroke="white"/>
                    </svg>
                    <span v-if="!isCollapsed"> {{ $t("home") }} </span>
                </router-link>
            </transition>

            <LangList
                    :class="{
                    hidden: $route.path == '/' && !isCollapsed,
                    'top-0 right-0': $route.path == '/' && isCollapsed,
                }"
            ></LangList>

            <transition name="margin" mode="out-in">
                <button
                        @click.prevent="toggleMenu"
                        class="
                        focus:outline-none
                        block
                        py-2
                        px-3
                        transition
                        duration-200
                        z-20
                    "
                        :class="{
                        hidden: !isCollapsed,
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
        <transition class="block sm:hidden">
            <HeaderLinks v-if="isOpen"
                         :isOpen="isOpen"
                         @updateIsOpen="handleIsOpen"
            />
        </transition>
        <HeaderLinks class="hidden sm:block"
                     @updateIsOpen="handleIsOpen" />
    </header>
</template>


<script>
import {
    inject,
    ref,
} from "vue";
import LangList from "@/components/lang-list.vue";
import HeaderLinks from "@/components/HeaderLinks.vue";

export default {
    components: {
        LangList,
        HeaderLinks
    },
    data: () => ({}),
    setup() {
        const menu = inject("menu");

        const isCollapsed = inject("isCollapsed");

        let isOpen = ref(false);

        const handleIsOpen = (value) => {
            isOpen.value = value
        }

        const toggleMenu = () => {
            handleIsOpen(!isOpen.value)
        };

        const hideMenu = () => {
            handleIsOpen(false)
        };

        return {
            menu,
            isCollapsed,
            isOpen,
            toggleMenu,
            hideMenu,
            handleIsOpen
        };
    },
};
</script>