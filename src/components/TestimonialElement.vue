<template>
  <div class="testimonials-card">
    <p>
      When, while lovely valley teems with vapour around
      meand eridian sun strike, and but a thousand unknown plants are noticed
      when I hear the buzz of the little world among us the stalks.
    </p>
    <h4>
      {{ person }}
    </h4>
    <div class="company">
      {{ company }}
    </div>
    <img
      :src="('@/img/' + imgUrl)"
      alt="testimonial"
    >
  </div>
</template>

<script>
export default {
  name: 'TestimonialElement',
  props: {
    imgUrl: String,
    person: String,
    company: String,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
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
</style>
