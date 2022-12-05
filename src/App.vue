<template>
  <div id="app">
    <header-section />
    <main-section />
    <footer-section />
  </div>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue';
import MainSection from './components/MainSection.vue';
import FooterSection from './components/FooterSection.vue';

export default {
  name: 'App',
  components: {
    HeaderSection,
    MainSection,
    FooterSection,
  },
};
</script>

<style lang="scss">
</style>
