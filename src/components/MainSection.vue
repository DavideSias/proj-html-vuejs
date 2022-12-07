<template>
  <main>
    <consultant-component />
    <aboutus-component />
    <project-component :arr-project="arrProject" />
    <testimonial-component :arr-testimonial="arrTestimonial" />
    <blog-component :arr-blog="arrBlog" />
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
  data() {
    return {
      arrProject: [
        {
          imgUrl: 'DRY-1-790x592.jpg',
          product: 'Purinky Products',
          category: 'uncategorized',
        },
        {
          imgUrl: '221bf0b7-8134-43bb-936a-5acbe42db64a-790x592.jpg',
          product: 'Purinky Products 2',
          category: 'uncategorized',
        },
        {
          imgUrl: 'z1el4c4p-790x592.jpg',
          product: 'Purinky Products 3',
          category: 'uncategorized',
        },
      ],
      arrTestimonial: [
        {
          imgUrl: 'oliver-ragfelt-488196-2.jpg',
          person: 'Vera Duncan',
          company: 'Amazon Inc.',
        },
        {
          imgUrl: 'oliver-ragfelt-488196-unsplash.jpg',
          person: 'John Smith',
          company: 'Apple Inc.',
        },
        {
          imgUrl: '12679.jpg',
          person: 'Max Power',
          company: 'Google Inc.',
        },
      ],
      arrBlog: [
        {
          imgUrl: 'startup-business-people-and-strategy-board-PAJ3P9K-1390x1042.jpg',
          date: 'july 4, 2019',
          author: 'paul',
          title: 'canadian consulting firm acquired by UK giant',
        },
        {
          imgUrl: 'business-people-working-together-on-project-and-5FHSKBL-1390.jpg',
          date: 'august 6, 2020',
          author: 'jhon',
          title: 'canadian consulting firm acquired by USA giant',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
