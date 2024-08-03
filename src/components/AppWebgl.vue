<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

import UiGlitchText from './UiGlitchText.vue'
import WebglApp from '@/scripts/webgl/app.js'
import { data } from '@/assets/js/data'

const root = ref(null)
const label = ref()
const medals = ref([])

const hoverId = ref('')

let webglApp

onMounted(() => {
  webglApp = new WebglApp(root.value, updateHoverId)
})

function updateHoverId(id) {
  hoverId.value = id
}

function onEnter() {
  label.value.show()
  medals.value.forEach((m) => m.show())
}
</script>

<template>
  <div ref="root" class="app-webgl">
    <transition :duration="200" name="fade" @enter="onEnter">
      <div v-if="hoverId" class="infos" :key="hoverId">
        <ui-glitch-text ref="label" markup="p" :text="`${hoverId}: ${data[hoverId].total}`" />
        <div class="panel">
          <ul>
            <li
              v-for="(medal, index) in ['gold', 'silver', 'bronze']"
              :key="`medal-${index}`"
              markup="li"
            >
              <ui-glitch-text ref="medals" :text="`${medal}: ${data[hoverId][medal]}`" />
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.fade-leave-active {
  transition: opacity 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.fade-leave-to {
  opacity: 0;
}

.app-webgl {
  position: fixed;
  inset: 0;

  .infos {
    position: absolute;
    left: 1rem;
    bottom: 1rem;
    text-transform: uppercase;

    .label {
      margin-top: 2rem;
      text-transform: uppercase;
    }

    .panel {
      font-size: 0.75rem;
      margin-top: 1.5rem;

      ul {
        li {
          display: flex;
          align-items: center;
          gap: 0.5rem;

          &::before {
            content: '';
            display: block;
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 100%;
          }

          &:first-child::before {
            background-color: var(--color-gold);
          }

          &:nth-child(2)::before {
            background-color: var(--color-silver);
          }

          &:last-child::before {
            background-color: var(--color-bronze);
          }
        }
      }
    }
  }
}
</style>
