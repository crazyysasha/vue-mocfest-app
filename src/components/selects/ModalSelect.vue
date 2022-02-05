<template>
	<div class="border-2 border-neutral-700 px-4 py-2 mb-4 relative">
        <div @click="toggleSelect">
          <div>
            <h1 class="text-lg">{{event.name}}</h1>
            <p class="font-montserrat">{{event.subtitle}}</p>
          </div>
          <div class="absolute right-3 inset-y-1/2 cursor-pointer hover:opacity-50">
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
          style="left: -2px; right: -2px"
        >
          <div 
			 	class="hover:bg-white hover:text-black my-1 cursor-pointer mb-2"
			 	v-for="option in options"
				:key="option.title">
            <h1 class="text-sm">{{option.title}}</h1>
            <p class="font-montserrat text-xs">{{option.subtitle}}</p>
          </div>          
        </div>
      </div>
</template>

<script>
export default {
	props: {
		event: {
			type: Object,
			required: true 
		},
		options: {
			type: Object,
			required: true
		},
		toggleSelect: {
			type: Function,
			required: true
		}
	},
}
</script>