<template>
  <section>
    <div class="container">
      <h3>PROJECT</h3>
      <div class="title">
        <h2>
          OUR EXPERT TRUSTED CONSULTANTS HELP CLIENTS
        </h2>
        <div class="buttons">
          <font-awesome-icon
            icon="fa-solid fa-left-long"
            class="icon"
            @click="moveSlideBack"
          />
          <font-awesome-icon
            icon="fa-solid fa-right-long"
            class="icon"
            @click="moveSlideForward"
          />
        </div>
      </div>
      <div
        class="slides"
      >
        <slide-element
          v-for="(slide, index) in arrProject"
          :key="index"
          :img-url="slide.imgUrl"
          :category="slide.category"
          :product="slide.product"
          eslint-disable-next-line
          :style="{ transform: `translateX(calc(${startSlide}px - 1rem))`,
                    transition: 'transform 0.5s'}"
        />
      </div>
    </div>
  </section>
</template>

<script>
import SlideElement from './SlideElement.vue';

export default {
  name: 'ProjectComponent',
  components: {
    SlideElement,
  },
  props: {
    arrProject: Array,
  },
  data() {
    return {
      startSlide: 0,
      numberSlide: (this.arrProject.length - 1) * -480,
    };
  },
  methods: {
    moveSlideForward() {
      if (this.startSlide > this.numberSlide) {
        this.startSlide -= 480;
        console.log(this.startSlide);
        console.log(this.numberSlide);
      }
    },
    moveSlideBack() {
      if (this.startSlide < 0) { this.startSlide += 480; }
      console.log(this.startSlide);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

  section{
    margin-top: 7rem;
    color: white;

    .container{
      max-width: 1500px;
      margin: 0 auto;

      h3{
        font-size: 1rem;
        font-weight: 400;

        &::before{
        margin-right: 1rem;
        content: '';
        display: inline-block;
        width: 3%;
        border-bottom: 3px solid $btn-light-color;
        }
      }

      .title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1.5rem;

        h2{
          font-size: 2.5rem;
          max-width: 50%;
          margin-bottom: 2rem;
        }

        .icon{
          padding: 1rem;
          background-color: rgb(54, 53, 76);
          margin-left: 1rem;
          cursor: pointer;

          &:hover{
            background-color: $hover-color;
          }
        }
      }

      .slides{
        display: flex;
        overflow: hidden;
        column-gap: 2rem;
      }
    }
  }
</style>
