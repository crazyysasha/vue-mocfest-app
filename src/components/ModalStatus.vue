<template>
  <div class="border border-white mt-auto">
    <div class="p-2">
      <img src="@/assets/logo.png" alt="" class="mx-auto" />
    </div>
    <div class="py-2 px-6 flex flex-col">
      <div v-if="isLoading" class="p-5 mb-2 justify-center flex">
        <div class="h-10 w-10 animate-pulse rounded-full bg-white">
          <div class="animate-ping h-10 w-10 rounded-full bg-white"></div>
        </div>
      </div>
      <div class="border-2 border-neutral-700 px-4 py-2 mb-4 relative">
        <div @click="toggleSelect">
          <div>
            <h1 class="text-lg">Гроза</h1>
            <p class="font-montserrat">12 марта</p>
          </div>
          <div
            class="absolute right-3 inset-y-1/2 cursor-pointer hover:opacity-50"
            :class="{ 'rotate-180': !activeSelect }"
          >
            <svg
              class=""
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
        <div
          class="
            select
            border-2 border-neutral-700
            absolute
            left-0
            right-0
            top-full
            z-10
            bg-black
          "
          :class="{ hidden: !activeSelect }"
          style="left: -2px; right: -2px"
        >
          <div
            @click="toggleSelect"
            class="hover:bg-white hover:text-black my-1 cursor-pointer mb-2"
          >
            <h1 class="text-sm">Гроза</h1>
            <p class="font-montserrat text-xs">12 марта</p>
          </div>
          <div
            @click="toggleSelect"
            class="hover:bg-white hover:text-black my-1 cursor-pointer mb-2"
          >
            <h1 class="text-sm">Stand-Up Dvizh</h1>
            <p class="font-montserrat text-xs">13 марта</p>
          </div>
          <div
            @click="toggleSelect"
            class="hover:bg-white hover:text-black my-1 cursor-pointer mb-2"
          >
            <h1 class="text-sm">МЫКОСМОС</h1>
            <p class="font-montserrat text-xs">19 марта (событие)
25 марта-10 апреля (выставка)</p>
          </div>
        </div>
      </div>
      <div class="border-2 border-neutral-700 relative px-4 py-2 mb-4">
        <div>
          <h1>дата</h1>
          <p class="font-montserrat">9 апр.</p>
        </div>
        <svg
          class="absolute right-3 inset-y-1/2"
          width="24"
          height="14"
          viewBox="0 0 24 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M24 0.5L12 12.5L0 0.5" stroke="white" />
        </svg>
      </div>
      <div class="border-2 border-neutral-700 relative px-4 py-2 mb-4">
        <div>
          <h1>времЯ</h1>
          <p class="font-montserrat">18:40 (осталось 20 мест)</p>
        </div>
        <svg
          class="absolute right-3 inset-y-1/2"
          width="24"
          height="14"
          viewBox="0 0 24 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M24 0.5L12 12.5L0 0.5" stroke="white" />
        </svg>
      </div>
      <div
        class="
          flex
          justify-between
          items-center
          border-2 border-neutral-700
          relative
          px-4
          py-2
          mb-2
        "
      >
        <div @click="decQuantity" class="cursor-pointer py-2 hover:opacity-50">
          <svg
            width="24"
            height="1"
            viewBox="0 0 24 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0.5L12 0.5L24 0.5" stroke="white" />
          </svg>
        </div>
        <div>
          <h1 class="mb-1">количество</h1>
          <input
            type="text"
            class="bg-transparent text-center"
            :value="quantity"
            disabled
          />
        </div>
        <div @click="incQuantity" class="cursor-pointer py-2 hover:opacity-50">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 0.5L12 12.5M12 24.5L12 12.5M12 12.5L0 12.5M12 12.5L24 12.5"
              stroke="white"
            />
          </svg>
        </div>
      </div>
    </div>
    <button
      class="
        text-center
        block
        w-full
        p-4
        text-2xl
        border-t-2 border-dashed border-white
        hover:bg-white hover:text-black
        transition
        duration-200
        tracking-[.2rem]
      "
      @click="toggleModal"
    >
      продолжить
    </button>
  </div>
</template>

<script>
export default {
  props: ["toggleModal", "incQuantity", "decQuantity", "quantity", "event", "payments"],
  data: () => ({
    activeSelect: false,
  }),
  methods: {
    toggleSelect() {
      this.activeSelect = !this.activeSelect;
    },
  },
};
</script>