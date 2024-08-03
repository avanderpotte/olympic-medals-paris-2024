<script setup>
import { ref, onMounted } from 'vue'
import { GLYPHS } from '@/assets/js/utils/string'

const root = ref(null)

const props = defineProps({
  markup: {
    type: String,
    default: 'span',
  },
  text: {
    type: String,
    default: '',
    required: true,
  },
})

onMounted(() => {
  Array.from(root.value.children).forEach((c) => {
    c.style.setProperty('--char-1', `'${GLYPHS[Math.floor(Math.random() * GLYPHS.length)]}'`)
    c.style.setProperty('--char-2', `'${GLYPHS[Math.floor(Math.random() * GLYPHS.length)]}'`)
    c.style.setProperty('--char-3', `'${GLYPHS[Math.floor(Math.random() * GLYPHS.length)]}'`)
  })
})

function show() {
  root.value.classList.add('-active')
}

function hide() {
  root.value.classList.remove('-active')
}

defineExpose({ show, hide })
</script>

<template>
  <component ref="root" :is="markup" class="ui-glitchText" :aria-label="text">
    <span
      v-for="(char, index) in text.split('')"
      :key="char"
      :data-char="char"
      :style="{
        '--index': [2, 4, 1, 0, 3][index % 5],
      }"
      v-text="char"
    />
  </component>
</template>

<style lang="scss" scoped>
@keyframes flashIn {
  20% {
    content: var(--char-1);
  }
  40% {
    content: var(--char-2);
  }
  60% {
    content: var(--char-3);
  }
  100% {
    content: attr(data-char);
  }
}

@keyframes flash {
  20% {
    content: var(--char-1);
  }
  40% {
    content: var(--char-2);
  }
  60% {
    content: var(--char-3);
  }
}

.ui-glitchText {
  position: relative;
  text-transform: uppercase;

  &:is(a),
  &:is(button) {
    &:hover {
      span {
        color: var(--color-black);
        transition: color 0s linear 0.3s;

        &::after {
          animation: flash 0.3s step-end;
        }
      }
    }
  }

  &.-active {
    span::after {
      animation: flashIn 0.3s step-end calc(var(--index) * 0.03s) forwards;
    }
  }

  span {
    position: relative;
    color: transparent;
    line-height: 1;

    &::after {
      content: '';
      position: absolute;
      display: inline-block;
      top: 0.2em;
      left: 0;
      color: var(--color-black);
    }
  }
}
</style>
