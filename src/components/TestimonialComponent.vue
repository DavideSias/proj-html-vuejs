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
        <div class="testimonials-card">
          <p>
            When, while lovely valley teems with vapour around
            meand eridian sun strike, and but a thousand unknown plants are noticed
            when I hear the buzz of the little world among us the stalks.
          </p>
          <h4>
            Vera Duncan
          </h4>
          <div class="company">
            Amazon Inc.
          </div>
          <img
            src="@/img/oliver-ragfelt-488196-2.jpg"
            alt="testimonial"
          >
        </div>
        <div class="testimonials-card">
          <p>
            When, while lovely valley teems with vapour around
            meand eridian sun strike, and but a thousand unknown plants are noticed
            when I hear the buzz of the little world among us the stalks.
          </p>
          <h4>
            Vera Duncan
          </h4>
          <div class="company">
            Amazon Inc.
          </div>
          <img
            src="@/img/oliver-ragfelt-488196-unsplash.jpg"
            alt="testimonial"
          >
        </div>
        <div class="testimonials-card">
          <p>
            When, while lovely valley teems with vapour around
            meand eridian sun strike, and but a thousand unknown plants are noticed
            when I hear the buzz of the little world among us the stalks.
          </p>
          <h4>
            Vera Duncan
          </h4>
          <div class="company">
            Amazon Inc.
          </div>
          <img
            src="@/img/12679.jpg"
            alt="testimonial"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TestimonialComponent',
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

    .testimonials-card{
      max-width: 30%;
      padding: 3rem 4rem;
      color: #888;
      position: relative;

      p{
        margin-bottom: 3rem;
      }

      h4{
        color: $brand-color;
        font-size: 1.3rem;
        margin-bottom: 1rem;
      }

      p, h4, .company{
        position: relative;
        z-index: 2;
      }

      img{
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 1;
        display: none;
      }
    }

    .testimonials-card:hover img, .testimonials-card:hover h4{
      display: block;
      color: white;
    }
  }
}
</style>
