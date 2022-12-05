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
@import '@/assets/scss/reset';
@import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300;400;500;600;700&display=swap');

body{
  font-family: 'Bai Jamjuree', sans-serif;
}
</style>
