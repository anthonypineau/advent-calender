<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const targetDate = new Date(new Date().getFullYear(), 11, 25, 0, 0, 0)

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

function updateCountdown() {
  const now = new Date()
  let diff = targetDate - now

  if (diff < 0) {
    targetDate.setFullYear(targetDate.getFullYear() + 1)
    diff = targetDate - now
  }

  days.value = Math.floor(diff / (1000 * 60 * 60 * 24))
  hours.value = Math.floor((diff / (1000 * 60 * 60)) % 24)
  minutes.value = Math.floor((diff / (1000 * 60)) % 60)
  seconds.value = Math.floor((diff / 1000) % 60)
}

let interval
onMounted(() => {
  updateCountdown()
  interval = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <div class="flex flex-col items-center gap-6">
    <h2 class="text-2xl font-bold text-primary">
      🎅 Countdown bis Weihnachten 🎄
    </h2>

    <div class="grid grid-flow-col gap-10 text-center auto-cols-max">
      <div>
        <span class="countdown font-mono text-6xl">
          <span :style="{ '--value': days }"></span>
        </span>
        <div class="text-lg">Tage</div>
      </div>
      <div>
        <span class="countdown font-mono text-6xl">
          <span :style="{ '--value': hours }"></span>
        </span>
        <div class="text-lg">Stunden</div>
      </div>
      <div>
        <span class="countdown font-mono text-6xl">
          <span :style="{ '--value': minutes }"></span>
        </span>
        <div class="text-lg">Minutes</div>
      </div>
      <div>
        <span class="countdown font-mono text-6xl">
          <span :style="{ '--value': seconds }"></span>
        </span>
        <div class="text-lg">Sekunden</div>
      </div>
    </div>
  </div>
</template>
