<template>
  <footer>
    <div class="work-footer">
      <h2>LET'S TALK ABOUT WORK</h2>
      <p>A wonderful serenity has taken possession far far away, behind the word mountains.</p>
      <button>get started</button>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection',
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
.work-footer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  height: 45vh;
  background-image: url('@/img/business-people-working-together-on-project-and-B3MZ4TX.jpg');
  background-position: center;

  h2{
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p{
    text-align: center;
    max-width: 25%;
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  button{
      padding: 1.5rem 3rem;
      background-color: $brand-color;
      color: white;
      letter-spacing: 0.2rem;
      font-weight: 600;
      text-transform: uppercase;
      border: none;
      cursor: pointer;

      &:hover{
        background-color: $btn-light-color;
        color: $hover-color;
      }
}
}
</style>
