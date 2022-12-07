<template>
  <section>
    <div class="container">
      <h3>TESTIMONIAL</h3>
      <div class="title">
        <h2>WHAT'S THE CUSTOMER SAY ABOUT OUR WORK</h2>
      </div>
    </div>
    <div class="testimonials">
      <div class="testimonials-container">
        <testimonial-element
          v-for="(element, index) in arrTestimonial"
          :key="index"
          :img-url="element.imgUrl"
          :person="element.person"
          :company="element.company"
        />
      </div>
    </div>
  </section>
</template>

<script>
import TestimonialElement from './TestimonialElement.vue';

export default {
  name: 'TestimonialComponent',
  components: {
    TestimonialElement,
  },
  props: {
    arrTestimonial: Array,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
section{
  margin-top: 6rem;

  .container{
    max-width: 1500px;
    margin: 0 auto;
    text-align: end;
    color: white;

    h3{
      font-weight: 400;

      &::after{
        margin-left: 1rem;
        content: '';
        display: inline-block;
        width: 3%;
        border-bottom: 3px solid $btn-light-color;
      }
    }

    .title{
      display: flex;
      justify-content: flex-end;
      width: 100%;
      margin: 1rem 0 2rem 0;

      h2{
        font-size: 2.5rem;
        max-width: 40%;
      }
    }
  }

  .testimonials{
    max-width: 90%;
    margin-left: calc(100vw - 90%);
    background-color: white;

    .testimonials-container{
      max-width: 1500px;
      display: flex;
      column-gap: 2rem;
    }
  }
}
</style>
