<script setup>
import { gsap } from 'gsap'
import { ref, onMounted } from 'vue'

const root = ref()
const loops = ref([])

let tl

onMounted(() => {
  tl = gsap.timeline({
    delay: 0.2,
    repeat: 1,
    repeatDelay: 0.2,
    onComplete: () => {
      hide()
    },
  })
  tl.fromTo(
    loops.value,
    {
      scale: 0,
      yPercent: 50,
    },
    {
      scale: 1,
      yPercent: 0,
      stagger: 0.06,
      duration: 0.8,
      ease: 'elastic.out(1.1, 0.8)',
    },
  )
  tl.to(loops.value, {
    scale: 0,
    stagger: 0.06,
    duration: 0.4,
    ease: 'power2.in',
  })
})

function hide() {
  gsap.to(root.value, {
    autoAlpha: 0,
    duration: 1,
    ease: 'power2.out',
  })
}
</script>

<template>
  <div ref="root" class="app-intro">
    <div ref="loops" v-for="i in 5" :key="`intro-${i}`" class="loop"></div>
  </div>
</template>

<style lang="scss" scoped>
.app-intro {
  position: fixed;
  inset: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  // gap: -1rem;
  background-color: hsl(210, 17%, 95%);

  .loop {
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    border: solid 0.2rem currentColor;
    transform: scale(0);

    &:nth-child(1) {
      color: var(--color-europe);
      margin-right: -0.9rem;
    }
    &:nth-child(2) {
      color: var(--color-asia);
      margin-top: 1.75rem;
      margin-right: -0.9rem;
    }
    &:nth-child(3) {
      color: var(--color-africa);
    }
    &:nth-child(4) {
      color: var(--color-oceania);
      margin-top: 1.75rem;
      margin-left: -0.9rem;
    }
    &:nth-child(5) {
      color: var(--color-america);
      margin-left: -0.9rem;
    }
  }
}
</style>
