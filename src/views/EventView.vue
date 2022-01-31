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
                px-10
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
                    мыкосмос
                </h1>
            </div>

            <div class="mb-5">
                <p class="font-montserrat tracking-normal">
                    открытие: <span class="font-bold">19 марта, 18:00</span>
                </p>
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
                    @click="toggleModalOne"
                >
                    Купить билеты
                </button>
            </div>
        </div>
        <div class="lg:w-3/5 xl:w-2/3 lg:h-screen overflow-y-auto">
            <div class="grid grid-cols-3">
                <div>
                    <a href="../assets/images/gallery/1.jpg">
                        <img
                            class="w-full"
                            src="../assets/images/gallery/1.jpg"
                            alt=""
                        />
                    </a>
                    <a href="../assets/images/gallery/3.jpg">
                        <img
                            class="w-full"
                            src="../assets/images/gallery/3.jpg"
                            alt=""
                        />
                    </a>
                    <a href="../assets/images/gallery/5.jpg">
                        <img
                            class="w-full"
                            src="../assets/images/gallery/5.jpg"
                            alt=""
                        />
                    </a>
                </div>
                <div>
                    <a href="../assets/images/gallery/2.jpg">
                        <img
                            class="w-full"
                            src="../assets/images/gallery/2.jpg"
                            alt=""
                        />
                    </a>
                    <a href="../assets/images/gallery/4.jpg">
                        <img
                            class="w-full"
                            src="../assets/images/gallery/4.jpg"
                            alt=""
                        />
                    </a>
                    <a href="../assets/images/gallery/6.jpg">
                        <img
                            class="w-full"
                            src="../assets/images/gallery/6.jpg"
                            alt=""
                        />
                    </a>
                </div>
                <div>
                    <a href="../assets/images/gallery/1.jpg">
                        <img
                            class="w-full"
                            src="../assets/images/gallery/1.jpg"
                            alt=""
                        />
                    </a>
                    <a href="../assets/images/gallery/3.jpg">
                        <img
                            class="w-full"
                            src="../assets/images/gallery/3.jpg"
                            alt=""
                        />
                    </a>
                    <a href="../assets/images/gallery/5.jpg">
                        <img
                            class="w-full"
                            src="../assets/images/gallery/5.jpg"
                            alt=""
                        />
                    </a>
                </div>
            </div>
        </div>
        <MainModal
            @close="toggleModalOne"
            v-model:modalActive="modalActiveOne"
            :modalOpen="modalOpen"
        >
            <ModalQuantity
                :toggleModal="toggleModalTwo"
                :incQuantity="incQuantity"
                :decQuantity="decQuantity"
                :quantity="quantityTicket"
                :toggleSelect="toggleSelect"
                :activeSelect="activeSelect"
            />
        </MainModal>
        <MainModal @close="toggleModalTwo" v-model:modalActive="modalActiveTwo">
            <ModalStatus
                :toggleModal="toggleModalThree"
                :incQuantity="incQuantity"
                :decQuantity="decQuantity"
                :quantity="quantityTicket"
                :toggleSelect="toggleSelect"
                :activeSelect="activeSelect"
            />
        </MainModal>
        <MainModal
            @close="toggleModalThree"
            v-model:modalActive="modalActiveThree"
        >
            <ModalPayment
                :toggleSelect="toggleSelect"
                :activeSelect="activeSelect"
            />
        </MainModal>
    </div>
</template>


<script>
import { inject } from "vue";
import MainModal from "@/components/MainModal.vue";
import ModalQuantity from "@/components/ModalQuantity.vue";
import ModalStatus from "@/components/ModalStatus.vue";
import ModalPayment from "@/components/ModalPayment.vue";

export default {
    setup() {
        const isCollapsed = inject("isCollapsed");
        return { isCollapsed };
    },
    data: () => ({
        modalOpen: false,
        quantityTicket: 1,
        modalActiveOne: false,
        modalActiveTwo: false,
        modalActiveThree: false,
    }),
    methods: {
        toggleModalOne() {
            this.modalActiveOne = !this.modalActiveOne;
            this.quantityTicket = 1;
            this.modalOpen = !this.modalOpen;
        },
        toggleModalTwo() {
            this.modalActiveTwo = !this.modalActiveTwo;
            this.modalActiveOne = false;
            this.quantityTicket = 1;
        },
        toggleModalThree() {
            this.modalActiveThree = !this.modalActiveThree;
            this.modalActiveTwo = false;
            this.quantityTicket = 1;
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
    components: {
        MainModal,
        ModalQuantity,
        ModalStatus,
        ModalPayment,
    },
};
</script>

<style scoped>
.overflow-y-auto::-webkit-scrollbar {
    display: none;
}
</style>