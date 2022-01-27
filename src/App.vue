<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import loaderVue from './components/shared/loader.vue';
import modalVue from './components/shared/modal.vue';

</script>

<template>
  <router-view></router-view>
  <loaderVue></loaderVue>
  <modalVue></modalVue>

</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
