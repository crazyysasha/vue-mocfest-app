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
                        <path d="M13 24L1 12L13 0" stroke="white" />
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
                        //'mx-auto': $route.path == '/',
                        //'ml-auto': $route.path != '/',
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
                    v-for="link in computedLinks"
                    :key="link.url"
                    :class="{ 'my-auto': !isCollapsed, 'my-2': isCollapsed }"
                >
                    <a
                        v-if="link.withoutRouter"
                        :href="link.url"
                        class="hover:opacity-50 transition duration-200"
                        :class="{ 'writing-vertical': !isCollapsed }"
                        @click="hideMenu"
                    >
                        <div class="p-1 inline-block">
                            {{ link.title }}
                        </div>
                    </a>
                    <router-link
                        v-else
                        :to="link.url"
                        @click="hideMenu"
                        :exact="link.exact"
                        class="hover:opacity-50 transition duration-200"
                        :class="{ 'writing-vertical': !isCollapsed }"
                    >
                        <div class="p-1 inline-block">
                            {{ link.title() }}
                        </div>
                    </router-link>
                </li>
                <li class="my-auto"></li>
            </ul>
            <div
                class="font-montserrat text-center text-sm mt-auto mb-20"
                :class="{ hidden: !isCollapsed }"
            >
                <SettingsSocials />
            </div>
        </div>
    </header>
</template>


<script>
import {
    inject,
    ref,
    onMounted,
    onUnmounted,
    computed,
    shallowRef,
    reactive,
} from "vue";
import LangList from "@/components/lang-list.vue";
import SettingsSocials from "@/components/settings-socials.vue";
import { useI18n } from "vue-i18n";

export default {
    components: {
        LangList,
        SettingsSocials,
    },
    data: () => ({}),
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

        const { t } = useI18n();

        const links = reactive([
            // {
            //     title: "магаз",
            //     url: "https://mocfest.avlo.site/",
            //     withoutRouter: true,
            // },
            // { title: "FAQ", url: "/faq" },
            { title: () => t("header.links.partners"), url: "/partners" },
            { title: () => t("header.links.gallery"), url: "/gallery" },
            { title: () => t("header.links.map"), url: "/events" },
            {
                title: () => t("header.links.about"),
                url: "/about",
                exact: true,
            },
        ]);

        const computedLinks = computed(() => links, { deep: true });
        return {
            menu,
            isCollapsed,
            isOpen,
            toggleMenu,
            hideMenu,
            links,
            computedLinks,
        };
    },
};
</script>

<style scoped>
.writing-vertical {
    writing-mode: vertical-rl;
}
</style>