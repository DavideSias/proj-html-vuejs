<template>
  <div class="card-news">
    <img
      :src="('img/' + imgUrl)"
      :alt="imgUrl"
    >
    <div class="card-text">
      <div class="date">
        {{ `${date} by ${author}` }}
      </div>
      <div class="news-title">
        {{ title }}
      </div>
      <p>
        When, while lovely valley teems with vapour around
        meand eridian su strikes the upper impenetrable
        foliage of my trees, and but a
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogElement',
  props: {
    imgUrl: String,
    date: String,
    author: String,
    title: String,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
.card-news{
        width: 50%;
        position: relative;

        img{
          width: 100%;
          height: 100%;
        }
      }

      .card-text{
        background-color: white;
        padding: 3rem 8rem 4rem 4rem;
        width: 80%;
        position: absolute;
        right: 0;
        bottom: -20%;

        .date{
          margin-bottom: 1rem;
          color: $hover-color;
          font-weight: 500;
        }

        .news-title{
          margin-bottom: 2rem;
          color: black;
          text-transform: capitalize;
          font-size: 2rem;
          font-weight: 500;
        }

        p{
          color: #888;
          font-size: 1.1rem;
        }
      }
</style>
