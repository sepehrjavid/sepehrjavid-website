<template>
  <div class="app">
    <Sidebar />
    <router-view class="main-view" />
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'

</script>

<style lang="scss">
:root {
  --primary: #15141B;
  --secondary: #31433C;
  --secondary-active: #8B9A75;
  --light: #BFBF8A;
  --light-more: #EEDCA9;
  --sidebar-width: 300px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira sans', sans-serif;
}

body {
  background: var(--primary);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 1.5rem;
    max-width: calc(100vw - (2rem + 32px));
    position: relative;
    left: calc(2rem + 32px);
  }
}
</style>
