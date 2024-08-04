<template>
  <div class="app-credits">
    <p>
      Submission for a development challenge proposed by
      <a href="https://www.youtube.com/@BenjaminCode" target="_blank" rel="noopener noreferer"
        >BenjaminCode</a
      >.
    </p>
    <p>
      Based on an original design by
      <a
        href="https://dribbble.com/shots/16149730--Olympic-medals-per-continent-in-Rio-2016"
        target="_blank"
        rel="noopener noreferer"
        >ramsés&nbsp;cabello</a
      >.
    </p>
    <p>
      Made with &#x2665; by
      <a href="https://avdp.xyz" target="_blank" rel="noopener noreferer">Adrien&nbsp;Vanderpotte</a
      >.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.app-credits {
  position: fixed;
  top: 3rem;
  right: 1rem;
  width: max(25vw, 300px);
  z-index: 2;
  padding: 1rem;
  border-radius: 0.3rem;
  background-color: hsl(210, 17%, 92%);
  background-color: #fff;
  font-size: 0.75rem;
  text-transform: uppercase;

  a {
    text-decoration: underline;
    transition: color 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);

    &:hover {
      color: hsl(210, 17%, 42%);
    }
  }
}

.popin-enter-active,
.popin-leave-active {
  transition: 0.6s cubic-bezier(0.47, 1.64, 0.41, 0.8);
}

.popin-enter-from,
.popin-leave-to {
  opacity: 0;
  transform: translate3d(0, 1rem, 0);
}
</style>
