<script>
import SettingsSocials from "@/components/settings-socials.vue";
import {computed, inject, reactive} from "vue";
import {useI18n} from "vue-i18n";
import useSettings from "@/composables/settings";

export default {
    components: {
        SettingsSocials,
    },
    data: () => ({}),
    props: {
        isOpen: {
            type: Boolean,
            default: false
        }
    },
    emits: ['updateIsOpen'],
    setup(props, {emit}) {

        const isCollapsed = inject("isCollapsed");
        const menu = inject("menu");

        const {t} = useI18n();

        const toggleMenu = () => {
            emit('updateIsOpen', !props.isOpen)
        };
        const hideMenu = () => {
            emit('updateIsOpen', false)
        };

        const links = reactive([
            {title: () => t("header.links.partners"), url: "/partners"},
            {title: () => t("header.links.gallery"), url: "/gallery"},
            {title: () => t("header.links.map"), url: "/events"},
            {
                title: () => t("header.links.about"),
                url: "/about",
                exact: true,
            },
        ]);

        const computedLinks = computed(() => links, {deep: true});
        return {
            menu,
            isCollapsed,
            toggleMenu,
            hideMenu,
            links,
            computedLinks,
            settings: useSettings().settings
        };
    },
};
</script>

<template>
    <div
            class="
                transition-all
                duration-200
                ease
                flex flex-col
                overflow-hidden
                h-screen
                z-10
            "
            :class="{
                'top-0 bg-opacity-0 h-0': !isOpen && isCollapsed,
                'bg-opacity-100 h-screen': isOpen && isCollapsed,
                'absolute backdrop-blur-sm bg-black/75 w-full top-0 overflow-y-auto': isCollapsed,
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
            <li v-if="settings?.support?.is_active"
                :class="{
                        'my-auto': !isCollapsed,
                        'my-2': isCollapsed,
                    }">
                <a :href="settings.support.link_url"
                   class="hover:opacity-50 transition duration-200"
                   :class="{ 'writing-vertical': !isCollapsed }"
                   target="_blank">
                    <div>
                        {{ settings.support.link_text }}
                    </div>
                </a>
            </li>
            <li
                    v-for="link in computedLinks"
                    :key="link.url"
                    :class="{
                        'my-auto': !isCollapsed,
                        'my-2': isCollapsed,
                    }"
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
            <SettingsSocials/>
        </div>
    </div>
</template>

<style>
.writing-vertical {
    writing-mode: vertical-rl;
}

@media (max-width: 640px) {

}

</style>