<template>
  <div class="container">
    <h2>our consultants can help you</h2>
    <div class="card-container">
      <div class="card">
        <font-awesome-icon
          icon="fa-solid fa-chart-line"
          class="icon"
        />
        <div class="card-content">
          <h3>statistical consulting</h3>
          <p>
            When, while lovely valley teems with vapour around
            meand eridian su strikes the upper impenetrable
            foliage of my trees, and but a
          </p>
        </div>
      </div>
      <div class="card">
        <font-awesome-icon
          icon="fa-solid fa-bullhorn"
          class="icon"
        />
        <div class="card-content">
          <h3>statistical consulting</h3>
          <p>
            When, while lovely valley teems with vapour around
            meand eridian su strikes the upper impenetrable
            foliage of my trees, and but a
          </p>
        </div>
      </div>
      <div class="card">
        <font-awesome-icon
          icon="fa-solid fa-wallet"
          class="icon"
        />
        <div class="card-content">
          <h3>statistical consulting</h3>
          <p>
            When, while lovely valley teems with vapour around
            meand eridian su strikes the upper impenetrable
            foliage of my trees, and but a
          </p>
        </div>
      </div>
      <div class="card">
        <font-awesome-icon
          icon="fa-solid fa-bullseye"
          class="icon"
        />
        <div class="card-content">
          <h3>statistical consulting</h3>
          <p>
            When, while lovely valley teems with vapour around
            meand eridian su strikes the upper impenetrable
            foliage of my trees, and but a
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: 'ConsultantComponent',
  components: { FontAwesomeIcon },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
.container{
  max-width: 1200px;
  margin: 0 auto;
  color: $brand-color;

  h2{
    text-transform: uppercase;
    margin-bottom: 5rem;
  }

  .card-container{
    display: flex;
    flex-wrap: wrap;
  }

  .card{
    flex: 0 1 calc(100% / 2);
    display: flex;
    column-gap: 2rem;
    margin-bottom: 7rem;

    .card-content{
      padding-right: 10rem;

      h3{
        text-transform: uppercase;
        margin-bottom: 1rem;
      }
    }
    .icon{
        padding: 0.5rem;
        font-size: 1.7rem;
        color: white;
        background-color: $hover-color;
        border-radius: 50%;
    }
  }
}
</style>
