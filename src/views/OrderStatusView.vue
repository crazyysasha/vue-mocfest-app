<template>
    <div class="flex items-center justify-center w-full">
        <div v-if="isLoading" class="p-5 mb-2 justify-center flex">
            <div class="h-10 w-10 animate-pulse rounded-full bg-white">
                <div class="animate-ping h-10 w-10 rounded-full bg-white"></div>
            </div>
        </div>
        <div v-if="data" class="max-w-md px-5 md:px-0">
            <h2 class="text-center text-[1.2rem] mb-5 tracking-[.22em]">
                <template v-if="order?.status === 'cancelled'">
                  <template v-if="leftTickets === 0">
                    {{$t("orderStatus.notPaid_zero")}}
                  </template>
                  <template v-else>
                    <span v-html="$t('orderStatus.notPaid', {leftTickets: leftTickets})">
                    </span>
                  </template>
                </template>
                <template v-else>
                  {{$t("orderStatus.thank")}}
                </template>
            </h2>
            <p class="font-montserrat text-center mb-5 tracking-normal" v-html="$t('orderStatus.text', {email: data.email})">
            </p>
            <button
                class="
                    block
                    w-full
                    border border-white
                    p-4
                    tracking-[.22em]
                    text-lg
                    transition-all
                    duration-200
                "
                @click="router.push('/')"
            >
               {{$t("home")}}
            </button>
        </div>
    </div>
</template>

<script setup>
import useOrder from "@/composables/order";
import { onMounted, computed } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import axios from "@/utils/axios";

const route = useRoute();
const router = useRouter();
const { onGet } = useOrder();
const { exec, error, isLoading, data } = onGet();
const order = ref({});
const leftTickets = ref(0)


onMounted(async () => {
    await exec(route.params.id)
        .then((orderData) => {
          order.value = orderData

          axios.get(`events/${orderData.event_id}/tickets`, {
            params: {
              booking_date: order.value.booking_date
            }
          })
            .then(response => {
              leftTickets.value = response.data.remain_tickets
            })
        })

    if (error.value?.type == "not_found") {
        router.push({
            name: "404",
            // preserve current path and remove the first char to avoid the target URL starting with `//`
            params: { pathMatch: route.path.substring(1).split("/") },
            // preserve existing query and hash if any
            query: route.query,
            hash: route.hash,
        });
    }
});
</script>
