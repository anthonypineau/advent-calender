<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>

<template>
  <div class="indicator">
    <span
      class="indicator-item indicator-start text-2xl text-yellow-500 pl-7 pt-9 font-bold"
      >1</span
    >
    <div
      class="relative w-50 h-50 bg-base-100 shadow-xl overflow-hidden rounded-xl"
      :class="isOpen ? 'cursor-default' : 'cursor-pointer'"
      @click="isOpen = true"
    >
      <!-- Volet gauche -->
      <div
        class="absolute top-0 left-0 w-1/2 h-full bg-primary text-primary-content flex items-center justify-center transition-transform duration-700 ease-in-out"
        :class="isOpen ? '-translate-x-full' : 'translate-x-0'"
      >
        <img
          class="w-full h-full object-cover"
          src="../assets/doors/left/sapin.png"
        />
      </div>

      <!-- Volet droit -->
      <div
        class="absolute top-0 right-0 w-1/2 h-full bg-secondary text-secondary-content flex items-center justify-center transition-transform duration-700 ease-in-out"
        :class="isOpen ? 'translate-x-full' : 'translate-x-0'"
      >
        <img
          class="w-full h-full object-cover"
          src="../assets/doors/right/sapin.png"
        />
      </div>

      <!-- Contenu intérieur -->
      <div
        class="bg-white text-black absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 delay-200"
        :class="isOpen ? 'opacity-100' : 'opacity-0'"
      >
        <p class="text-lg font-bold">🎁 Surprise !</p>
      </div>
    </div>
  </div>
</template>
