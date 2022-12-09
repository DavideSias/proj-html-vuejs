<template>
  <Header>
    <div class="navbar">
      <img
        class="logo-navbar"
        src="img/logotype.png"
        alt="logo"
      >
      <navbar-element
        :arr-links="arrLinks"
        class="menu-links"
      />
    </div>
    <div class="headline-container">
      <div class="headline">
        <div class="sub-headline">
          Always the best way you need it
        </div>

        <h1>the best business consulting</h1>

        <div class="links-container">
          <button>READ MORE</button>
          <div class="icon">
            <font-awesome-icon icon="fa-solid fa-play" />
          </div>
        </div>
      </div>
    </div>
  </Header>
</template>

<script>
import NavbarElement from '@/components/NavbarElement.vue';

export default {
  name: 'HeaderSection',
  components: { NavbarElement },
  props: {
    arrLinks: Array,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
header{
  height: 100vh;
  background-color: $brand-color;
  background-image: url('@/img/portrait-of-young-architect-woman-on-meeting-KFZCE3A.jpg');
  background-position-x: right;
  background-position-y: top;
  background-repeat: no-repeat;
  position: relative;
}

.navbar{
  max-width: 1500px;
  height: 70px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo-navbar{
    width: 8%;
  }

  .menu-links{
    height: 100%;

  }
}

.headline-container{
  max-width: 1500px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;

    .headline{
      width: 40%;

      .sub-headline{
        color: white;
        text-transform: uppercase;
        margin-bottom: 2rem;
      }
      .sub-headline::before {
        margin-right: 1rem;
        content: '';
        display: inline-block;
        width: 7%;
        border-bottom: 3px solid $btn-light-color;
      }
      h1{
        font-size: 6.3rem;
        text-transform: uppercase;
        color:white;
        line-height: 0.9;
      }

      button{
        padding: 1.3rem 3rem;
        margin-top: 3rem;
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
      .links-container{
        display: flex;
        align-items: flex-end;
        gap: 2rem;

        .icon{
        display: flex;
        align-items: center;
        justify-content: center;
        color: $btn-light-color;
        width: 3rem;
        height: 3rem;
        padding: 1.5rem;
        border: 2px solid white;
        border-radius: 50%;
        cursor: pointer;

        &:hover{
          color: white;
          background-color: $hover-color;
        }
      }
      }
    }
}
</style>
