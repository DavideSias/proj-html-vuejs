<template>
  <main>
    <consultant-component class="consultant" />
    <aboutus-component />
  </main>
</template>

<script>
import AboutusComponent from './AboutusComponent.vue';
import ConsultantComponent from './ConsultantComponent.vue';

export default {
  name: 'MainSection',
  components: {
    ConsultantComponent,
    AboutusComponent,
  },
};
</script>

<style lang="scss" scoped>
  .consultant{
    padding: 7rem 0 3rem 0;
    background-color: white;
  }
</style>
