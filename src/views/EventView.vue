<template>
    <div class="flex flex-wrap w-full">
        <div
            class="bg-black sticky top-0 w-full"
            :class="{ 'block lg:hidden': !isCollapsed, hidden: isCollapsed }"
        >
            <div class="h-14"></div>
        </div>
        <div
            class="
                lg:w-2/5
                xl:w-1/3
                overflow-y-auto
                lg:h-screen
                px-4
                md:px-10
                text-sm
                flex flex-col
            "
        >
            <div
                class="bg-black sticky top-0 w-full"
                :class="{ hidden: isCollapsed }"
            >
                <div class="h-14"></div>
            </div>
            <div class="mb-5 mt-10">
                <h1
                    class="
                        text-4xl
                        tracking-[.4rem]
                        underline
                        decoration-2
                        underline-offset-4
                        border-white
                        leading-1
                    "
                >
                {{ event.title }}
                </h1>
            </div>

            <div class="mb-5">
                <p class="font-montserrat tracking-normal">
                    открытие: <span class="font-bold">{{event.date[0].day}}</span>
                </p>
                <p 
                    class="font-montserrat tracking-normal" 
                    v-for="d in event.date" 
                    :key="d">
                        Число: {{ d.day }}<br/>                    
                        Время: <span v-for="t in d.times" :key="t"> в: {{t}} </span>
                </p><br>
                <p class="font-montserrat tracking-normal">
                    локация:
                    <router-link
                        class="
                            underline
                            transition-opacity
                            duration-200
                            hover:opacity-50
                            font-bold
                        "
                        :to="{
                            name: 'events',
                            params: { slug: 'mykosmos' },
                        }"
                    >
                        Бывш. завод узбум
                    </router-link>
                </p>
                <p class="font-montserrat tracking-normal">
                    лайнап:
                    <router-link
                        to="/"
                        class="
                            underline
                            transition-opacity
                            duration-200
                            hover:opacity-50
                            font-bold
                        "
                        >Bad sector</router-link
                    >,
                    <router-link
                        to="/"
                        class="
                            underline
                            transition-opacity
                            duration-200
                            hover:opacity-50
                            font-bold
                        "
                        >Flyin Up</router-link
                    >,
                    <router-link
                        to="/"
                        class="
                            underline
                            transition-opacity
                            duration-200
                            hover:opacity-50
                            font-bold
                        "
                        >Gio</router-link
                    >,
                    <router-link
                        to="/"
                        class="
                            underline
                            transition-opacity
                            duration-200
                            hover:opacity-50
                            font-bold
                        "
                        >Lee Lu Lien</router-link
                    >
                </p>
                <p class="font-montserrat tracking-normal">
                    Иммерсивные инсталяции:
                    <router-link
                        to="/"
                        class="
                            underline
                            transition-opacity
                            duration-200
                            hover:opacity-50
                            font-bold
                        "
                        >Данил Лашманов</router-link
                    >,
                    <router-link
                        to="/"
                        class="
                            underline
                            transition-opacity
                            duration-200
                            hover:opacity-50
                            font-bold
                        "
                        >Азиза Пулатова</router-link
                    >,
                    <router-link
                        to="/"
                        class="
                            underline
                            transition-opacity
                            duration-200
                            hover:opacity-50
                            font-bold
                        "
                        >Фалончи Писмадончиев</router-link
                    >,
                    <router-link
                        to="/"
                        class="
                            underline
                            transition-opacity
                            duration-200
                            hover:opacity-50
                            font-bold
                        "
                        >Джон Доу</router-link
                    >,
                    <router-link
                        to="/"
                        class="
                            underline
                            transition-opacity
                            duration-200
                            hover:opacity-50
                            font-bold
                        "
                    >
                        Олег Газманов
                    </router-link>
                </p>
            </div>
            <div class="font-montserrat tracking-normal">
                <p class="mb-3">
                    фестиваль мультимедийного искусства, главная цель которого —
                    показать человека в составе бесконечной Вселенной, позволить
                    людям отвлечься от обыденности и посмотреть на наше
                    существование со стороны
                </p>
                <p class="mb-3">
                    проект предоставляет возможность стать частью одного общего
                    пространства, растворившись в интерактивной выставке,
                    связывающей искусство с технологиями, в сопровождении музыки
                    экспериментального формата
                </p>
            </div>
            <div class="mt-auto mb-4">
                <button
                    class="
                        block
                        w-full
                        border border-white
                        p-4
                        tracking-[.2rem]
                        text-lg
                        hover:bg-white hover:text-black
                        transition
                        duration-200
                    "
                    @click="openModal"
                >
                    Купить билеты
                </button>
            </div>
        </div>
        <div class="w-full lg:w-3/5 xl:w-2/3 lg:h-screen overflow-y-auto">
            <div class="columns-2 md:columns-3 lg:columns-2 xl:columns-3 gap-0">
                <a
                    @click.prevent="openGallery(index)"
                    v-for="(img, index) in images"
                    :key="index"
                    class="cursor-pointer block"
                >
                    <img :src="img" alt="" class="w-full" />
                </a>
            </div>
        </div>

        <VueEasyLightbox
            class="backdrop-blur"
            :visible="boxIsOpen"
            :index="index"
            :imgs="images"
            @hide="hideGallery"
        >
        </VueEasyLightbox>

        
        <MainModal @close="openModal" v-model:modalActive="modalActiveCheck">
            <ModalCheckEvent
                :toggleModalPayment="toggleModalPayment"
                :incQuantity="incQuantity"
                :decQuantity="decQuantity"
                :quantity="quantityTicket"
                :event="event"
            />
        </MainModal>
        <MainModal
            @close="modalActivePayment"
            v-model:modalActive="modalActivePayment"
        >
            <ModalPayment />
        </MainModal>
    </div>
</template>


<script>
import { inject, ref } from "vue";

import MainModal from "@/components/modal/MainModal.vue";
import ModalCheckEvent from "@/components/modal/ModalCheckEvent.vue";
import ModalPayment from "@/components/modal/ModalPayment.vue";
import VueEasyLightbox from "vue-easy-lightbox";

export default {
    components: {
        MainModal,
        ModalPayment,
        VueEasyLightbox,
        ModalCheckEvent
    },
    setup() {
        const isCollapsed = inject("isCollapsed");

        const boxIsOpen = ref(false);
        const index = ref(0);

        const images = [
            require(`@/assets/images/gallery/2.jpg`),
            require(`@/assets/images/gallery/1.jpg`),
            require(`@/assets/images/gallery/4.jpg`),
            require(`@/assets/images/gallery/5.jpg`),
            require(`@/assets/images/gallery/2.jpg`),
            require(`@/assets/images/gallery/3.jpg`),
            require(`@/assets/images/gallery/1.jpg`),
            require(`@/assets/images/gallery/5.jpg`),
            require(`@/assets/images/gallery/6.jpg`),
            require(`@/assets/images/gallery/4.jpg`),
            require(`@/assets/images/gallery/3.jpg`),
            require(`@/assets/images/gallery/6.jpg`),
        ];

        const hideGallery = () => {
            boxIsOpen.value = false;
        };
        const openGallery = (imageIndex) => {
            index.value = imageIndex;
            boxIsOpen.value = true;
        };
        return {
            isCollapsed,
            images,
            boxIsOpen,
            hideGallery,
            openGallery,
            index,
        };
    },
    data: () => ({
        modalOpen: false,
        quantityTicket: 1,
        modalActiveCheck: false,
        modalActivePayment: false,
    }),
    methods: {
        openModal() {
            if(this.event.date.length > 1) {
                this.modalActiveCheck = !this.modalActiveCheck;
                this.quantityTicket = 1;
            } else {
                this.modalActiveCheck = !this.modalActiveCheck;
                this.quantityTicket = 1;
                // this.modalOpen = !this.modalOpen;
            }
        },
        toggleModalPayment() {
            this.modalActivePayment = !this.modalActivePayment;
            this.modalActiveCheck = false;
            this.quantityTicket = 10;
        },
        incQuantity() {
            this.quantityTicket++;
        },
        decQuantity() {
            if (this.quantityTicket > 1) {
                this.quantityTicket--;
            }
        },
    },
    computed: {
        event() {
            const event = this.$store.getters["events/all"].filter(event => event.slug === this.$route.params.slug)[0]
            return event
        }
    },
};
</script>
