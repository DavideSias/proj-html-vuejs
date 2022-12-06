<template>
  <main>
    <consultant-component class="consultant" />
    <aboutus-component />
    <project-component />
  </main>
</template>

<script>
import AboutusComponent from './AboutusComponent.vue';
import ConsultantComponent from './ConsultantComponent.vue';
import ProjectComponent from './ProjectComponent.vue';

export default {
  name: 'MainSection',
  components: {
    ConsultantComponent,
    AboutusComponent,
    ProjectComponent,
  },
};
</script>

<style lang="scss" scoped>
  .consultant{
    padding: 7rem 0 3rem 0;
    background-color: white;
  }
</style>
