<template>
  <section>
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
            <h3>digital consulting</h3>
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
            <h3>baking consulting</h3>
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
            <h3>enterprise consulting</h3>
            <p>
              When, while lovely valley teems with vapour around
              meand eridian su strikes the upper impenetrable
              foliage of my trees, and but a
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
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

section{
  position: relative;
  .container{
    max-width: 1200px;
    margin: 0 auto;
    color: $brand-color;

    h2{
      font-size: 1.8rem;
      text-transform: uppercase;
      margin-bottom: 7rem;

      &::after{
        content: '';
        width: 54%;
        vertical-align: middle;
        margin-left: 2rem;
        display: inline-block;
        border-top: 3px solid $btn-light-color;
        position: absolute;
        right: 0;
        top: 8rem;
      }
    }

    .card-container{
      display: flex;
      flex-wrap: wrap;
      column-gap: 5rem;
    }

    .card{
      flex: 0 1 calc((100% / 2) - 2.5rem);
      display: flex;
      column-gap: 3rem;
      margin-bottom: 7rem;

      .card-content{
        padding-right: 6rem;

        h3{
          margin-bottom: 1rem;
          font-size: 1.5rem;
          text-transform: uppercase;
        }

        p{
          color: #888;
          font-size: 1.1rem;
        }
      }
      .icon{
          padding: 1rem;
          font-size: 1.7rem;
          color: white;
          background-color: $hover-color;
          border-radius: 50%;
      }
    }
  }

}
</style>
