<template>
    <div class="border border-white shadow-2xl bg-black text-white">
        <div class="p-8 pb-4">
            <img src="@/assets/logo.png" alt="" class="mx-auto" />
        </div>
        <div class="flex flex-col font-neutralFace p-6">
            <div v-if="isLoading" class="p-5 mb-2 justify-center flex">
                <div class="h-10 w-10 animate-pulse rounded-full bg-white">
                    <div
                        class="animate-ping h-10 w-10 rounded-full bg-white"
                    ></div>
                </div>
            </div>
            <div
                class="
                    border border-white border-opacity-50
                    flex
                    my-2
                    cursor-pointer
                "
            >
                <div class="p-3 flex items-center justify-center opacity-0">
                    <svg
                        class="m-auto"
                        width="24"
                        height="14"
                        viewBox="0 0 24 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M24 0.5L12 12.5L0 0.5" stroke="white" />
                    </svg>
                </div>
                <div class="text-center flex-1 p-2">
                    <div class="underline underline-offset-2">Гроза</div>
                    <div
                        class="
                            text-xs
                            tracking-normal
                            font-thin font-montserrat
                        "
                    >
                        12 марта
                    </div>
                </div>
                <div class="p-3 flex items-center justify-center">
                    <svg
                        class="m-auto"
                        width="24"
                        height="14"
                        viewBox="0 0 24 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M24 0.5L12 12.5L0 0.5" stroke="white" />
                    </svg>
                </div>
            </div>
            <div class="border border-white border-opacity-50 flex my-2">
                <button class="p-3 flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="1"
                        viewBox="0 0 24 1"
                        fill="none"
                    >
                        <path d="M0 0.5L12 0.5L24 0.5" stroke="white" />
                    </svg>
                </button>
                <div class="text-center flex-1 p-2">
                    <div class="">Количество</div>
                    <div class="tracking-normal font-thin font-montserrat">
                        3
                    </div>
                </div>
                <button class="p-3 flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                    >
                        <path
                            d="M12 0.5L12 12.5M12 24.5L12 12.5M12 12.5L0 12.5M12 12.5L24 12.5"
                            stroke="white"
                        />
                    </svg>
                </button>
            </div>
            <div class="pt-5 font-montserrat">
                <div class="flex justify-between my-2">
                    <div class="opacity-50">Дата события</div>
                    <div>9 апр.</div>
                </div>
                <div class="flex justify-between my-2">
                    <div class="opacity-50">Начало</div>
                    <div>18:00</div>
                </div>
            </div>
        </div>
        <button
            class="
                text-center
                block
                w-full
                p-4
                border-t-2 border-dashed border-white
                hover:bg-white hover:text-black
                transition
                duration-200
                tracking-[.2rem]
                font-neutralFace
            "
        >
            Продолжить
        </button>
    </div>
    <div class="font-montserrat text-center text-sm text-white">
        <div class="py-2">
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
</template>

<script setup>
const { default: useEvents } = require("@/composables/events");
const { onMounted } = require("@vue/runtime-core");

const { isLoaded, isLoading, events, error, fetchEvents } = useEvents();

onMounted(() => {
    if (!isLoaded.value) fetchEvents();
});
</script>
