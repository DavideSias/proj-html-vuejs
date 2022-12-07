<template>
  <section>
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
        <div class="card-news">
          <img
            src="@/img/startup-business-people-and-strategy-board-PAJ3P9K-1390x1042.jpg"
            alt="start-up-bussines"
          >
          <div class="card-text">
            <div class="date">
              <!-- TODO: separare data e autore nella struttura dati -->
              july 4, 2019 by paul
            </div>
            <div class="news-title">
              canadian consulting firm acquired by UK giant
            </div>
            <p>
              When, while lovely valley teems with vapour around
              meand eridian su strikes the upper impenetrable
              foliage of my trees, and but a
            </p>
          </div>
        </div>
        <div class="card-news">
          <img
            src="@/img/startup-business-people-and-strategy-board-PAJ3P9K-1390x1042.jpg"
            alt="start-up-bussines"
          >
          <div class="card-text">
            <div class="date">
              <!-- TODO: separare data e autore nella struttura dati -->
              july 4, 2019 by paul
            </div>
            <div class="news-title">
              canadian consulting firm acquired by UK giant
            </div>
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
export default {
  name: 'BlogComponent',
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

section{
  margin: 10rem 0 20rem;
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
      margin-top: 2rem;
      column-gap: 2rem;
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
    }
  }
}
</style>
