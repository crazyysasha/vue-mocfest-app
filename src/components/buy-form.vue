<template>
    <div class="border border-white shadow-2xl bg-black text-white">
        <div class="p-2 sm:p-4 pb-4">
            <img src="@/assets/logo.png" alt="" class="mx-auto" />
        </div>
        <div class="flex flex-col font-neutralFace p-4 sm:p-6">
            <div v-if="isLoading" class="p-5 mb-2 justify-center flex">
                <div class="h-10 w-10 animate-pulse rounded-full bg-white">
                    <div
                        class="animate-ping h-10 w-10 rounded-full bg-white"
                    ></div>
                </div>
            </div>
            <div>
                <c-select
                    class="text-white"
                    v-model="createState.event"
                    :options="events"
                    :disabled="true"
                    option-key="id"
                >
                    <template #default="{ title, subtitle }">
                        <div class="underline underline-offset-2">
                            {{ title }}
                        </div>
                        <div
                            class="
                                text-md
                                tracking-normal
                                font-thin font-montserrat
                            "
                            v-html="subtitle"
                        ></div>
                    </template>
                    <template #option="{ option }">
                        <div>{{ option.title }}</div>
                    </template>
                </c-select>

                <c-select
                    class="text-white"
                    v-model="createState.date"
                    :options="dates"
                    :disabled="true"
                    option-key="id"
                    v-if="dates.length > 1"
                >
                    <template #default="{ title }">
                        <div class="underline underline-offset-2">Дата</div>
                        <div
                            class="
                                text-md
                                tracking-normal
                                font-thin font-montserrat
                            "
                        >
                            {{ title }}
                        </div>
                    </template>
                    <template #option="{ option }">
                        <div>{{ option.title }}</div>
                    </template>
                </c-select>

                <c-select
                    class="text-white"
                    v-model="createState.time"
                    :options="times"
                    :disabled="true"
                    option-key="id"
                    v-if="times.length > 1"
                >
                    <template #default="{ title }">
                        <div class="underline underline-offset-2">
                            Начало события
                        </div>
                        <div
                            class="
                                text-md
                                tracking-normal
                                font-thin font-montserrat
                            "
                        >
                            {{ title }}
                        </div>
                    </template>
                    <template #option="{ option }">
                        <div>{{ option.title }}</div>
                    </template>
                </c-select>

                <c-counter
                    v-model="createState.quantity"
                    :min="1"
                    :max="tickets.length"
                >
                </c-counter>
                <div class="pt-5 font-montserrat">
                    <div
                        class="flex justify-between my-2"
                        v-if="dates.length <= 1"
                    >
                        <div class="opacity-50">Дата события</div>
                        <div>{{ createState.date.title }}</div>
                    </div>
                    <div
                        class="flex justify-between my-2"
                        v-if="times.length <= 1"
                    >
                        <div class="opacity-50">Начало</div>
                        <div>{{ createState.time.title }}</div>
                    </div>
                </div>
            </div>
            <div v-if="false">
                <div class="mb-2">
                    <input
                        type="text"
                        placeholder="Email"
                        class="
                            w-full
                            bg-transparent
                            outline-0
                            text-neutral-500
                            font-montserrat
                            text-lg
                            border-2 border-neutral-700
                            px-4
                            py-2
                        "
                        v-model="email"
                    />
                </div>
                <div class="mb-2">
                    <input
                        type="text"
                        placeholder="Номер телефона"
                        class="
                            w-full
                            bg-transparent
                            outline-0
                            text-neutral-500
                            font-montserrat
                            text-lg
                            border-2 border-neutral-700
                            px-4
                            py-2
                        "
                        v-model="phoneNumber"
                    />
                </div>

                <c-select
                    class="text-white"
                    v-model="payment"
                    :options="payments"
                    :disabled="true"
                    option-key="id"
                >
                    <template #default="{ title }">
                        <div class="underline underline-offset-2">
                            Способ оплаты
                        </div>
                        <div
                            class="
                                text-md
                                tracking-normal
                                font-thin font-montserrat
                            "
                        >
                            {{ title }}
                        </div>
                    </template>
                    <template #option="{ option }">
                        <div>{{ option.title }}</div>
                    </template>
                </c-select>

                <div class="py-3">
                    <div class="flex justify-between mb-2">
                        <span class="text-lg text-neutral-500 font-montserrat"
                            >Событие</span
                        >
                        <span class="text-sm">{{ event.title }}</span>
                    </div>
                    <div class="flex justify-between mb-2">
                        <span class="text-lg text-neutral-500 font-montserrat"
                            >Кол-во</span
                        >
                        <span class="text-sm">{{ quantity }} шт.</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-lg text-neutral-500 font-montserrat"
                            >Итого</span
                        >
                        <span class="text-sm">{{ totalPrice }} сум.</span>
                    </div>
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
            @click.prevent="onCreate"
            v-if="!isPayment"
        >
            Продолжить
        </button>
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
            v-if="isPayment"
            @click="isNotEmptyInput"
        >
            Купить билеты
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
import CSelect from "@/components/c-select.vue";
import CCounter from "@/components/c-counter.vue";
import useEvents from "@/composables/events";
import useOrder from "@/composables/order";
import useVuelidate from "@vuelidate/core";
import grouper from "@/utils/grouper";
import { required, email, helpers, numeric } from "@vuelidate/validators";

import { computed, onMounted, reactive, ref, watch } from "vue";

const { isLoaded, isLoading, events, error, fetchEvents } = useEvents();

onMounted(() => {
    if (!isLoaded.value) fetchEvents();
});

const props = defineProps({ event: Object });

const dates = ref(grouper(props.event.tickets));

const times = ref(dates.value[0].times);

const tickets = ref(times.value[0].tickets || []);

const totalPrice = computed(() => {
    return tickets.value.slice(0, quantity.value).reduce((sum, ticket) => {
        return sum + ticket.price;
    }, 0);
});

const { data, orderError, onCreate: onCreateOrder, onUpdate } = useOrder();

const createState = reactive({
    event: { ...props.event },
    date: dates.value[0],
    time: times.value[0],
    quantity: 1,
});

watch(
    () => createState.event,
    (newEvent) => {
        dates.value = grouper(newEvent.tickets);
        createState.date = dates.value[0];
    }
);

watch(
    () => createState.date,
    (newDate) => {
        times.value = newDate.times;
        createState.time = times.value[0];
    }
);

watch(
    () => createState.time,
    (newTime) => {
        tickets.value = newTime.tickets || [];
    }
);
watch(tickets, (newTickets) => {
    createState.quantity =
        createState.quantity < newTickets.length
            ? createState.quantity
            : newTickets.length;
});

const createRules = {
    event: { required },
    date: { required },
    time: { required },
    quantity: {
        numeric,
        min: helpers.withMessage("Количество не верно", (value) => value < 2),
        max: helpers.withMessage(
            "Количество не верно",
            (value) => value > times.value[0].tickets.length
        ),
    },
};

const createValidation = useVuelidate(createRules, createState);

const onCreate = async () => {
    const isValid = await createValidation.value.$validate();
    console.log(createValidation.value.$errors);
};
</script>

