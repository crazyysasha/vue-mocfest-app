<template>
    <div>
        <div v-if="!payIsLoading">
            <div
                class="
                    border border-white
                    shadow-2xl
                    bg-black
                    text-white
                    max-w-sm
                "
                v-if="!globalError"
            >
                <div class="p-2 sm:p-4 pb-4">
                    <img src="@/assets/logo.png" alt="" class="mx-auto" />
                </div>
                <div class="flex flex-col font-neutralFace p-4 sm:p-6">
                    <div v-if="isLoading" class="p-5 mb-2 justify-center flex">
                        <div
                            class="
                                h-10
                                w-10
                                animate-pulse
                                rounded-full
                                bg-white
                            "
                        >
                            <div
                                class="
                                    animate-ping
                                    h-10
                                    w-10
                                    rounded-full
                                    bg-white
                                "
                            ></div>
                        </div>
                    </div>
                    <div v-if="!updateState.order">
                        <c-select
                            class="text-white"
                            :class="{}"
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
                                        text-[13px]
                                        leading-5
                                        tracking-normal
                                        font-thin font-montserrat
                                        text-center
                                    "
                                    v-html="subtitle"
                                ></div>
                            </template>
                            <template #option="{ option }">
                                <div>{{ option.title }}</div>
                            </template>
                        </c-select>
                        <div
                            class="text-rose-900"
                            v-for="error in createValidation.event.$errors"
                            :key="error.$uid"
                        >
                            {{ error.$message }}
                        </div>
                        <c-select
                            class="text-white"
                            v-model="createState.date"
                            :options="dates"
                            :disabled="true"
                            option-key="id"
                            v-if="
                                dates.length > 1 &&
                                createState.event.tickets.length > 0
                            "
                        >
                            <template #default="{ title }">
                                <div class="underline underline-offset-2">
                                    Дата
                                </div>
                                <div
                                    class="
                                        text-[13px]
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
                        <div
                            v-if="
                                dates.length > 1 &&
                                createState.event.tickets.length > 0
                            "
                            class="flex flex-col"
                        >
                            <div
                                class="text-rose-900 w-full"
                                v-for="error in createValidation.date.$errors"
                                :key="error.$uid"
                            >
                                {{ error.$message }}
                            </div>
                        </div>
                        <c-select
                            class="text-white"
                            v-model="createState.time"
                            :options="times"
                            :disabled="true"
                            option-key="id"
                            v-if="
                                times.length > 1 &&
                                createState.event.tickets.length > 0
                            "
                        >
                            <template #default="{ title }">
                                <div class="underline underline-offset-2">
                                    Начало события
                                </div>
                                <div
                                    class="
                                        text-[13px]
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
                        <div
                            v-if="
                                times.length > 1 &&
                                createState.event.tickets.length > 0
                            "
                            class="flex flex-col"
                        >
                            <div
                                class="text-rose-900 w-full"
                                v-for="error in createValidation.time.$errors"
                                :key="error.$uid"
                            >
                                {{ error.$message }}
                            </div>
                        </div>
                        <c-counter
                            v-model="createState.quantity"
                            :min="1"
                            :max="tickets.length"
                            v-if="createState.event.tickets.length > 0"
                        >
                        </c-counter>
                        <div
                            class="flex flex-col"
                            v-if="createState.event.tickets.length > 0"
                        >
                            <div
                                class="text-rose-900 w-full"
                                v-for="error in createValidation.quantity
                                    .$errors"
                                :key="error.$uid"
                            >
                                {{ error.$message }}
                            </div>
                        </div>
                        <div
                            class="pt-5 font-montserrat"
                            v-if="createState.event.tickets.length > 0"
                        >
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
                        <div
                            class="text-rose-900 text-center"
                            v-if="createState.event.tickets.length == 0"
                        >
                            Билетов не осталось
                        </div>
                    </div>
                    <div v-else-if="updateState.order">
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
                                v-model="updateState.email"
                            />
                        </div>
                        <div class="flex flex-col">
                            <div
                                class="text-rose-900 w-full"
                                v-for="error in updateValidation.email.$errors"
                                :key="error.$uid"
                            >
                                {{ error.$message }}
                            </div>
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
                                v-model="updateState.phone"
                            />
                        </div>

                        <div class="flex flex-col">
                            <div
                                class="text-rose-900 w-full"
                                v-for="error in updateValidation.phone.$errors"
                                :key="error.$uid"
                            >
                                {{ error.$message }}
                            </div>
                        </div>
                        <c-select
                            class="text-white"
                            v-model="updateState.paymentType"
                            :options="[{ title: 'Payme' }]"
                            :disabled="true"
                            option-key="id"
                        >
                            <template #default="{ title }">
                                <div class="underline underline-offset-2">
                                    Способ оплаты
                                </div>
                                <div
                                    class="
                                        text-[13px]
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
                                <span
                                    class="
                                        text-lg text-neutral-500
                                        font-montserrat
                                    "
                                    >Событие</span
                                >
                                <span class="text-sm">{{
                                    updateState.order.event.title
                                }}</span>
                            </div>
                            <div class="flex justify-between mb-2">
                                <span
                                    class="
                                        text-lg text-neutral-500
                                        font-montserrat
                                    "
                                    >Кол-во</span
                                >
                                <span class="text-sm"
                                    >{{ updateState.order.quantity }} шт.</span
                                >
                            </div>
                            <div class="flex justify-between">
                                <span
                                    class="
                                        text-lg text-neutral-500
                                        font-montserrat
                                    "
                                    >Итого</span
                                >
                                <span class="text-sm"
                                    >{{ updateState.order.price }} сум.</span
                                >
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
                    :disabled="createState.event.tickets.length == 0"
                    @click.prevent="onCreate"
                    v-if="!updateState.order"
                    :class="{
                        'bg-white animate-pulse text-white': createIsLoading,
                    }"
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
                    v-else-if="updateState.order"
                    @click="onUpdate"
                    :class="{
                        'bg-white animate-pulse text-white': updateIsLoading,
                    }"
                >
                    Купить билеты
                </button>
            </div>
            <div
                class="
                    border border-white
                    shadow-2xl
                    bg-black
                    text-white
                    max-w-sm
                "
                v-else-if="globalError"
            >
                <div class="p-2 sm:p-4 pb-4">
                    <img src="@/assets/logo.png" alt="" class="mx-auto" />
                </div>
                <div class="p-4 text-rose-900">
                    {{ globalError }}
                    <p class="mt-2">Обновите страницу и по пробуйте снова</p>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="p-5 mb-2 justify-center flex">
                <div class="h-10 w-10 animate-pulse rounded-full bg-white">
                    <div
                        class="animate-ping h-10 w-10 rounded-full bg-white"
                    ></div>
                </div>
            </div>
        </div>
        <div class="font-montserrat text-center text-sm text-white">
            <SettingsSocials />
        </div>
    </div>
</template>

<script setup>
import SettingsSocials from "@/components/settings-socials.vue";
import CSelect from "@/components/c-select.vue";
import CCounter from "@/components/c-counter.vue";
import useEvents from "@/composables/events";
import useOrder from "@/composables/order";
import useVuelidate from "@vuelidate/core";
import grouper from "@/utils/grouper";
import { required, email, helpers, numeric } from "@vuelidate/validators";

import { computed, onMounted, reactive, ref, watch } from "vue";
import { pay } from "@/api/orders";
import { useRouter } from "vue-router";

const { isLoaded, isLoading, events, error, fetchEvents } = useEvents();

onMounted(() => {
    if (!isLoaded.value) fetchEvents();
});

const globalError = ref(null);

const props = defineProps({ event: Object });
const dates = ref(grouper(props.event.tickets));

const times = ref(dates.value[0]?.times || []);

const tickets = ref(times.value[0]?.tickets || []);

const totalPrice = computed(() => {
    return tickets.value.slice(0, quantity.value).reduce((sum, ticket) => {
        return sum + ticket.price;
    }, 0);
});

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
        createExternalResults.event = [];
    }
);

watch(
    () => createState.date,
    (newDate) => {
        times.value = newDate?.times || [];
        createState.time = times.value[0];
        createExternalResults.date = [];
    }
);

watch(
    () => createState.time,
    (newTime) => {
        tickets.value = newTime?.tickets || [];

        createExternalResults.time = [];
    }
);
watch(tickets, (newTickets) => {
    createState.quantity =
        createState.quantity < newTickets.length
            ? createState.quantity
            : newTickets.length;
});

watch(
    () => createState.quantity,
    () => {
        createExternalResults.quantity = [];
    }
);
const createRules = {
    event: { required },
    date: { required },
    time: { required },
    quantity: {
        // numeric,
        min: helpers.withMessage("Количество не верно", (value) => value >= 1),
        // max: helpers.withMessage(
        // 	"Количество не верно",
        // 	(value) => value <= times.value[0].tickets.length
        // ),
    },
};

const createExternalResults = reactive({});
const createValidation = useVuelidate(createRules, createState, {
    $externalResults: createExternalResults,
});

const {
    orders,
    onCreate: onCreateOrder,
    onUpdate: onUpdateOrder,
    onPay: onPayOrder,
} = useOrder();

const {
    exec: createExec,
    data: createData,
    isLoading: createIsLoading,
    error: createError,
} = onCreateOrder();

const onCreate = async () => {
    const isValid = await createValidation.value.$validate();
    if (!isValid) return;

    await createExec({
        event: createState.event.id,
        date: createState.date.title,
        time: createState.time.title,
        quantity: createState.quantity,
    });

    if (createError.value?.type == "validation") {
        Object.assign(createExternalResults, createError.value.fields);
    }
    if (createData.value) {
        updateState.order = createData.value;
    }
};

const updateState = reactive({
    order: null,
    email: "",
    phone: "",
    paymentType: { title: "Payme" },
});

watch(
    () => updateState.email,
    () => {
        updateExternalResults.email = [];
    }
);

watch(
    () => updateState.phone,
    () => {
        updateExternalResults.phone = [];
    }
);

const updateRules = {
    email: { required, email },
    phone: { required },
};

const updateExternalResults = reactive({});
const updateValidation = useVuelidate(updateRules, updateState, {
    $externalResults: updateExternalResults,
});

const {
    exec: updateExec,
    data: updateData,
    isLoading: updateIsLoading,
    error: updateError,
} = onUpdateOrder();
const onUpdate = async () => {
    const isValid = await updateValidation.value.$validate();
    if (!isValid) return;
    await updateExec(updateState.order.id, {
        email: updateState.email,
        phone: updateState.phone,
    });

    if (updateError.value?.type == "validation") {
        Object.assign(updateExternalResults, updateError.value.fields);
    } else if (updateError.value) {
        globalError.value = updateError.value.message;
    }
    if (updateData.value) {
        onPay(updateData.value);
    }
};

const {
    exec: payExec,
    data: payData,
    isLoading: payIsLoading,
    error: payError,
} = onPayOrder();

const router = useRouter();

const onPay = async (order) => {
    await payExec(order.id);
    if (payError.value) {
        globalError.value = payError.value.message;
    }
    if (payData.value?.redirect) {
        window.location.href = payData.value.redirect;
    }
};
</script>