<template>
  <section>
    <div class="svg">
      <div class="about-us">
        <div class="container">
          <div class="about-us-text">
            <h3>about us</h3>
            <h2>we make your strategy work</h2>
            <p>
              When, while lovely valley teems with vapour around
              meand eridian sun strike, and but a thousand unknown plants are noticed
              when I hear the buzz of the little world among us the stalks, and grow
              familiar indescribable forms of the insects and flies, then i feel the
              presence of the Almighty.
            </p>
          </div>
        </div>
      </div>
      <div class="get-started">
        <div class="text-container">
          <h2>WE HELP TO DELIVER THE BUSINESS CASE</h2>
          <p>
            When, while lovely valley teems with vapour around
            meand eridian sun strike the upper impenetrable foliage of my trees,
            and but a thousand unknown
          </p>
        </div>
        <button>GET STARTED</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutusComponent',
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
  background-position-y: -200px;
  background-position-x: 1000px;
  }
  .about-us{
    height: 85vh;
    background-image: url('@/img/business-people-working-together-on-project-and-5FHSKBL.jpg');
    background-position-x: left;
    background-position-y: center;
    background-repeat: no-repeat;

    .container{
      max-width: 1500px;
      height: 100%;
      margin: 0 auto;
      padding: 3rem;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      color: white;

      .about-us-text{
        width: 32%;

        h3{
          font-weight: 400;
        }

        h3, h2{
          text-transform: uppercase;
          margin-bottom: 2.5rem;
        }

        h3::before {
        margin-right: 1rem;
        content: '';
        display: inline-block;
        width: 12%;
        border-bottom: 3px solid $btn-light-color;
        }

        h2{
          font-size: 3.3rem;
        }

        p{
          color: #888;
          font-size: 1.1rem;
        }
      }
    }
  }

  .get-started{
    position: relative;
    width: 90%;
    background-color: $btn-light-color;
    padding: 6rem;

    .text-container{
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      column-gap: 12rem;
      color: $brand-color;

      h2{
        flex: 0 1 70%;
        font-size: 2.3rem;
      }

      p{
        font-size: 1.2rem;

      }
    }

    button{
      position: absolute;
      right: 0;
      bottom: 0;
      padding: 1.3rem 3rem;
      background-color: $hover-color;
      color: white;
      letter-spacing: 0.2rem;
      font-weight: 600;
      border: none;
      cursor: pointer;

      &:hover{
        opacity: 0.8;
      }
    }
  }
</style>
