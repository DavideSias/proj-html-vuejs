<template>
  <div id="app">
    <header-section :arr-links="arrLinks" />
    <main-section />
    <footer-section :arr-links="arrLinks" />
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
  data() {
    return {
      arrLinks: [
        'home',
        'about',
        'projects',
        'services',
        'blog',
        'contact',
      ],
    };
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/reset';
@import '@/assets/scss/variables';
@import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300;400;500;600;700&display=swap');

body{
  font-family: 'Bai Jamjuree', sans-serif;
  background-color: $brand-color;
}
</style>
