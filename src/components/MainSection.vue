<template>
  <main>
    <consultant-component class="consultant" />
  </main>
</template>

<script>
import ConsultantComponent from './ConsultantComponent.vue';

export default {
  name: 'MainSection',
  components: {
    ConsultantComponent,
  },
};
</script>

<style lang="scss" scoped>
  .consultant{
    padding: 7rem 0 3rem 0;
  }
</style>
