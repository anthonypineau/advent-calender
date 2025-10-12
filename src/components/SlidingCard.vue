<script setup>
import { ref, computed } from 'vue'
const isOpen = ref(false)

const props = defineProps(['dayNumber'])

const date = new Date()
const month = date.getMonth()
const today = date.getDate()

//change to 11 for december
const isUnlocked = computed(() => month == 9 && today >= props.dayNumber)

function openCard() {
  if (isUnlocked.value) {
    isOpen.value = true
    window.open('https://www.trebra-ms.de/', '_blank', 'noopener,noreferrer')
  }
}
</script>

<template>
  <div class="indicator">
    <span
      class="indicator-item indicator-start text-2xl text-yellow-500 pl-7 pt-9 font-bold"
      >{{ dayNumber }}</span
    >
    <div
      class="relative w-50 h-50 bg-base-100 shadow-xl overflow-hidden rounded-xl"
      :class="isUnlocked ? 'cursor-pointer' : 'cursor-not-allowed opacity-60'"
      @click="openCard"
    >
      <div
        class="absolute top-0 left-0 w-1/2 h-full bg-primary text-primary-content flex items-center justify-center transition-transform duration-700 ease-in-out"
        :class="isOpen ? '-translate-x-full' : 'translate-x-0'"
      >
        <img
          class="w-full h-full object-cover"
          :src="`/assets/doors/left/day${dayNumber}.png`"
        />
      </div>

      <div
        class="absolute top-0 right-0 w-1/2 h-full bg-secondary text-secondary-content flex items-center justify-center transition-transform duration-700 ease-in-out"
        :class="isOpen ? 'translate-x-full' : 'translate-x-0'"
      >
        <img
          class="w-full h-full object-cover"
          :src="`/assets/doors/right/day${dayNumber}.png`"
        />
      </div>

      <div
        class="bg-white text-black absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 delay-200"
        :class="isOpen ? 'opacity-100' : 'opacity-0'"
      >
        <p class="text-lg font-bold">🎁 Surprise !</p>
      </div>
    </div>
  </div>
</template>
