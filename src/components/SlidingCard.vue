<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'

const props = defineProps(['dayNumber'])

const isOpen = ref(false)
const date = new Date()
const month = date.getMonth()
const today = date.getDate()

// ✅ Déverrouillage du jour
// changer à 11 pour décembre
const isUnlocked = computed(() => month === 9 && today >= props.dayNumber)

// 🍪 Gestion des cookies
function setCookie(name, value, expires) {
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; expires=${expires.toUTCString()}; path=/`
}

function getCookie(name) {
  const match = document.cookie.match(
    new RegExp('(?:^|; )' + name + '=([^;]*)')
  )
  return match ? decodeURIComponent(match[1]) : null
}

// 📅 Expiration du cookie après Noël
const year = new Date().getFullYear()
const expiryDate = new Date(`${year}-12-26T23:59:59`)

// 🔁 Lecture initiale
onMounted(() => {
  const cookie = getCookie('openedCases')
  if (cookie) {
    try {
      const openedList = JSON.parse(cookie)
      if (openedList.includes(props.dayNumber)) {
        isOpen.value = true
      }
    } catch {
      setCookie('openedCases', JSON.stringify([]), expiryDate)
    }
  } else {
    setCookie('openedCases', JSON.stringify([]), expiryDate)
  }
})

async function openCard(event) {
  if (!isUnlocked.value || isOpen.value) return

  // 1️⃣ Joue l’animation
  isOpen.value = true

  // 2️⃣ Enregistre dans le cookie
  const cookie = getCookie('openedCases')
  let openedList = []
  try {
    openedList = cookie ? JSON.parse(cookie) : []
  } catch {
    openedList = []
  }

  if (!openedList.includes(props.dayNumber)) {
    openedList.push(props.dayNumber)
    setCookie('openedCases', JSON.stringify(openedList), expiryDate)
  }

  // 3️⃣ Synchronise avec la durée réelle de la transition
  await nextTick() // attendre le rendu pour que l'élément soit présent
  const card = event.currentTarget.querySelector('.door-left')
  const style = getComputedStyle(card)
  const duration = parseFloat(style.transitionDuration) * 1000 // sec → ms
  const delay = parseFloat(style.transitionDelay) * 1000 || 0

  // 4️⃣ Attendre (durée + délai)
  const total = duration + delay + 100 // petite marge
  setTimeout(() => {
    window.open(
      'https://www.sachsen.schule/~gs-marienberg/',
      '_blank',
      'noopener,noreferrer'
    )
  }, total)
}
</script>

<template>
  <div class="indicator">
    <span
      class="indicator-item indicator-start text-2xl text-yellow-500 pl-7 pt-9 font-bold"
    >
      {{ dayNumber }}
    </span>

    <div
      class="relative w-50 h-50 bg-base-100 shadow-xl overflow-hidden rounded-xl"
      :class="isUnlocked ? 'cursor-pointer' : 'cursor-not-allowed opacity-60'"
      @click="openCard"
    >
      <!-- Volet gauche -->
      <div
        class="door-left absolute top-0 left-0 w-1/2 h-full bg-primary transition-transform duration-700 ease-in-out"
        :class="isOpen ? '-translate-x-full' : 'translate-x-0'"
      >
        <img
          class="w-full h-full object-cover"
          :src="`/assets/doors/left/day${dayNumber}.png`"
        />
      </div>

      <!-- Volet droit -->
      <div
        class="door-right absolute top-0 right-0 w-1/2 h-full bg-secondary transition-transform duration-700 ease-in-out"
        :class="isOpen ? 'translate-x-full' : 'translate-x-0'"
      >
        <img
          class="w-full h-full object-cover"
          :src="`/assets/doors/right/day${dayNumber}.png`"
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
