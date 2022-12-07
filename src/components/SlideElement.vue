<template>
  <div class="slide-card">
    <img
      :src="`img/${imgUrl}`"
      :alt="product"
    >
    <!-- TODO: img non si vede -->
    <div class="category">
      <div class="text">
        <h4>{{ product }}</h4>
        <p>{{ category }}</p>
      </div>
      <font-awesome-icon
        icon="fa-solid fa-plus"
        class="plus-icon"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlideElement',
  props: {
    imgUrl: String,
    product: String,
    category: String,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
.slide-card {
  max-width: 32%;
  position: relative;

  .category {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 1rem;
    color: white;
    background-color: #F00e2e99;
    display: none;

    h4 {
      font-size: 1.5rem;
    }

    p {
      color: #AAA;
    }

    .plus-icon {
      padding: 1rem;
      background-color: $brand-color;
      cursor: pointer;
    }
  }

  &:hover .category {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  img {
    width: 100%;
  }
}
</style>
