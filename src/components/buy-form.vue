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
            <c-select
                class="text-white"
                v-model="event"
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
                v-model="date"
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
                v-model="time"
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

            <c-counter v-model="quantity" :min="1" :max="tickets.length">
            </c-counter>
            <div class="pt-5 font-montserrat">
                <div class="flex justify-between my-2" v-if="dates.length <= 1">
                    <div class="opacity-50">Дата события</div>
                    <div>{{ date.title }}</div>
                </div>
                <div class="flex justify-between my-2" v-if="times.length <= 1">
                    <div class="opacity-50">Начало</div>
                    <div>{{ time.title }}</div>
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
import CSelect from "@/components/c-select.vue";
import CCounter from "@/components/c-counter.vue";
import useEvents from "@/composables/events";
import { onMounted, ref, watch } from "vue";

const grouper = (tickets) => {
    return Object.entries(
        Array.from(tickets).reduce((group, ticket) => {
            const [validAtDate, validAtTime] = [
                new Date(ticket.valid_at).toLocaleDateString(),
                new Date(ticket.valid_at).toLocaleTimeString(),
            ];

            group[validAtDate] = group[validAtDate] || {};
            group[validAtDate][validAtTime] =
                group[validAtDate][validAtTime] || [];
            group[validAtDate][validAtTime].push(ticket);
            return group;
        }, {})
    ).map((array) => {
        const [title, timesObj] = array;
        const times = Object.entries(timesObj).map((array) => {
            const [title, tickets] = array;
            return { title, tickets };
        });
        return { title, times };
    });
};

const props = defineProps({
    event: Object,
});

const event = ref(props.event);

const dates = ref(grouper(event.value.tickets));
const date = ref(dates.value[0]);

const times = ref(date.value.times);

const time = ref(times.value[0]);

const tickets = ref(time.value.tickets || []);

const quantity = ref(tickets.value.length);

watch(event, (newEvent) => {
    dates.value = grouper(newEvent.tickets);
    date.value = dates.value[0];
});

watch(date, (newDate) => {
    times.value = newDate.times;
    time.value = times.value[0];
});

// console.log(
//     tickets.value.reduce((sum, ticket) => {
//         return sum + ticket.price;
//     }, 0)
// );

watch(time, (newTime) => {
    tickets.value = newTime.tickets || [];
});
watch(tickets, (newTickets) => {
    quantity.value =
        quantity.value < newTickets.length ? quantity.value : newTickets.length;
});
const { isLoaded, isLoading, events, error, fetchEvents } = useEvents();

onMounted(() => {
    if (!isLoaded.value) fetchEvents();
});

// const data = {
//     "12.3.2022": {
//         "15:00": [
//             //...tickets
//         ],
//     },
// // };
// [
//     [
//         "12.3.2022",
//         {
//             "15:00": [
//                 //...tickets
//             ],
//         },
//     ],
//     [
//         "12.3.2022",
//         {
//             "15:00": [
//                 //...tickets
//             ],
//         },
//     ],
// ];
// const data = [
//     {
//         title: "12.3.2022",
//         times: [
//             {
//                 title: "15:00",
//                 tickets: [
//                     //...tickets
//                 ],
//             },
//         ],
//     },
// ];
</script>
