<template>
  <section>
    <div class="svg">
      <div class="container">
        <h3>BLOG</h3>
        <div class="title">
          <h2>
            THE RECENT NEWS YOU MUST READ IT
          </h2>
          <div class="btn">
            <button>VIEW ALL</button>
          </div>
        </div>

        <div class="news">
          <blog-element
            v-for="(element, index) in arrBlog"
            :key="index"
            :img-url="element.imgUrl"
            :date="element.date"
            :author="element.author"
            :title="element.title"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BlogElement from './BlogElement.vue';

export default {
  name: 'BlogComponent',
  components: {
    BlogElement,
  },
  props: {
    arrBlog: Array,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
.svg{
  height: 100%;
  width: 100%;
  background-image: url('@/img/Mediamodifier-Design.svg');
  background-repeat: no-repeat;
  background-size: 1300px;
  background-position-y: -400px;
  background-position-x: -400px;
  }

section{
  margin: 10rem 0 10rem;
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
      }

      button{
        padding: 1.3rem 3rem;
        background-color: $btn-light-color;
        letter-spacing: 0.2rem;
        font-weight: 600;
        border: none;
        cursor: pointer;

        &:hover{
          color: white;
          background-color: $hover-color;
        }
      }
    }

    .news{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 2rem;
      column-gap: 2rem;
    }
  }
}
</style>
