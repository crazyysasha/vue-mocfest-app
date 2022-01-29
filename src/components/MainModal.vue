<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <transition name="fade">
    <div
      class="fixed z-20 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      :class="{ hidden: !modalActive }"
      aria-modal="true"
    >
      <div
        class="
          flex
          items-center
          justify-center
          bg-black
          min-h-screen
          pt-4
          px-4
          pb-20
          text-center
          sm:p-0
        "
      >
        <div
          class="fixed inset-0 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <div
          class="
            z-50
            mx-auto
            flex flex-col
            p-1
            w-[25rem]
            tracking-[.2rem]
            relative
          "
        >
          <button
            class="
              absolute
              focus:outline-none
              block
              p-1
              transition
              duration-200
              hover:opacity-50
            "
            @click="close"
          >
            <span
              class="
                w-6
                scale-110
                h-px
                block
                bg-white
                my-2
                transform
                transition
                duration-200
                ease
                rotate-45
                translate-y-[4.5px]
              "
            ></span>
            <span
              class="
                w-6
                scale-110
                h-px
                block
                bg-white
                my-2
                transform
                transition
                duration-200
                ease
                -rotate-45
                -translate-y-[4.5px]
              "
            ></span>
          </button>

          <slot />

          <div class="font-montserrat text-center text-sm my-auto mt-6 text-lg">
            <div class="">
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
        </div>
      </div>
    </div>
  </transition>
</template> 

<script>
export default {
  props: {
    modalActive: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    close() {
      this.$emit("update:modalActive", false);
    },
  },
};
</script>



<style scoped>
button.absolute {
  right: -52px;
  top: 0px;
}
@media (max-width: 473px) {
  button.absolute {
    right: 0px;
    top: -35px;
  }
}
</style>>
