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
          />
          <font-awesome-icon
            icon="fa-solid fa-right-long"
            class="icon"
          />
        </div>
      </div>
      <!-- TODO: slider? -->
      <div class="slides">
        <div class="slide-card">
          <img
            src="@/img/DRY-1-790x592.jpg"
            alt="dry"
          >
          <div class="category">
            <div class="text">
              <h4>Purinky Products</h4>
              <p>uncategorized</p>
            </div>
            <font-awesome-icon
              icon="fa-solid fa-plus"
              class="plus-icon"
            />
          </div>
        </div>
        <div class="slide-card">
          <img
            src="@/img/221bf0b7-8134-43bb-936a-5acbe42db64a-790x592.jpg"
            alt="scolarship"
          >
          <div class="category">
            <div class="text">
              <h4>Purinky Products</h4>
              <p>uncategorized</p>
            </div>
            <font-awesome-icon
              icon="fa-solid fa-plus"
              class="plus-icon"
            />
          </div>
        </div>
        <div class="slide-card">
          <img
            src="@/img/z1el4c4p-790x592.jpg"
            alt="vizeon"
          >
          <div class="category">
            <div class="text">
              <h4>Purinky Products</h4>
              <p>uncategorized</p>
            </div>
            <font-awesome-icon
              icon="fa-solid fa-plus"
              class="plus-icon"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectComponent',
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
        justify-content: space-between;

        .slide-card{
          max-width: 32%;
          position: relative;

          .category{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 1rem;
            color: white;
            background-color: #F00e2e99;
            display: none;

            h4{
              font-size: 1.5rem;
            }

            p{
              color: #AAA;
            }

            .plus-icon{
              padding: 1rem;
              background-color: $brand-color;
              cursor: pointer;
            }
          }

          &:hover .category{
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
          }

          img{
            width: 100%;
          }
        }
      }
    }
  }
</style>
