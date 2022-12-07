<template>
  <main>
    <consultant-component />
    <aboutus-component />
    <project-component />
    <testimonial-component />
    <blog-component />
  </main>
</template>

<script>
import AboutusComponent from './AboutusComponent.vue';
import BlogComponent from './BlogComponent.vue';
import ConsultantComponent from './ConsultantComponent.vue';
import ProjectComponent from './ProjectComponent.vue';
import TestimonialComponent from './TestimonialComponent.vue';

export default {
  name: 'MainSection',
  components: {
    ConsultantComponent,
    AboutusComponent,
    ProjectComponent,
    TestimonialComponent,
    BlogComponent,
  },
};
</script>

<style lang="scss" scoped>

</style>
