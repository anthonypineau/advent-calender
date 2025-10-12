<script setup>
import SlidingCard from '../components/SlidingCard.vue'
import ChristmasCountdown from '../components/ChristmasCountdown.vue'
</script>

<template>
  <header><ChristmasCountdown /></header>
  <main class="max-w-7xl mx-auto py-4">
    <!-- <div class="grid grid-cols-2 gap-6 p-6 bg-base-200 min-h-screen"> -->
    <!-- <div class="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-4 justify-items-center"> -->
    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 justify-items-center"
    >
      <SlidingCard v-for="n in 24" :key="n" :dayNumber="n" />
    </div>
  </main>
  <footer class="w-full pt-4 flex flex-col items-center">
    <router-link
      to="/privacy"
      class="mt-auto mb-4 text-sm text-white-500 hover:text-white-700 underline"
    >
      Impressum
    </router-link>
    <p class="text-center text-xs text-white-400">© 2025 Anthony Pineau</p>
  </footer>
</template>

<style scoped></style>
