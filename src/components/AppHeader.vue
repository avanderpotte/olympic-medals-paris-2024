<script setup>
import { gsap } from 'gsap'
import { ref, onMounted } from 'vue'

import UiGlitchText from './UiGlitchText.vue'
import AppCredits from './AppCredits.vue'

const title = ref(null)
const credits = ref(null)
const isCreditsActive = ref(false)

onMounted(() => {
  gsap.delayedCall(6, () => {
    title.value.show()
    credits.value.show()
  })
})
</script>

<template>
  <header class="app-header">
    <ui-glitch-text ref="title" markup="h1" text="Olympic Medals Paris 2024" />
    <ui-glitch-text
      ref="credits"
      markup="button"
      text="Credits"
      :aria-expanded="isCreditsActive"
      @click="isCreditsActive = !isCreditsActive"
    />
  </header>

  <Transition name="popin">
    <app-credits v-if="isCreditsActive" />
  </Transition>
</template>

<style lang="scss" scoped>
.app-header {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem;
  text-transform: uppercase;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
