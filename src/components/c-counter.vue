<template>
    <div class="border border-white border-opacity-50 flex my-2">
        <button
            class="p-3 flex items-center justify-center disabled:opacity-50"
            @click="decrement"
            :disabled="modelValue <= min"
        >
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
            <input
                type="number"
                :value="modelValue"
                @input="input"
                class="
                    tracking-normal
                    font-thin font-montserrat
                    bg-transparent
                    appearance-none
                    text-center
                    focus:outline-none
                "
                :min="min"
                :max="max"
            />
        </div>
        <button
            class="p-3 flex items-center justify-center disabled:opacity-50"
            @click="increment"
            :disabled="modelValue >= max"
        >
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
</template>

<script setup>
import { toRefs, watch } from "vue";

const props = defineProps({
    min: {
        type: Number,
        default: 0,
    },
    max: {
        type: Number,
        default: Infinity,
    },
    modelValue: {
        type: Number,
        required: true,
    },
    lengthTicket: {
        type: Number,
        default: 1
    }
});
const { modelValue, min, max, lengthTicket } = toRefs(props);
const emit = defineEmits(["update:modelValue"]);

const updateValue = (val) => {
    emit("update:modelValue", parseInt(val));
};
const input = (event) => {    
    // console.log(event);
    // let value = parseInt(event.data);
    // if (value > max.value) {
    //     value = max.value;
    // }
    // if (value < min.value) {
    //     value = min;
    // }
    const value = event.data
    updateValue(value);
    // console.log(value);
    // return value;
};

console.log(modelValue.value);
const increment = () => {
    updateValue(modelValue.value + 1);
};
const decrement = () => {
    updateValue(modelValue.value - 1);
};
</script>
<style scoped>


input::-webkit-inner-spin-button {
    display: none;
}
</style>