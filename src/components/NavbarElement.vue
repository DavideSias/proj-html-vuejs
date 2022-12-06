<template>
  <div>
    <ul>
      <li
        v-for="link in arrLinks"
        :key="link"
      >
        <a href="#!">{{ link }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavbarElement',
  props: {
    arrLinks: Array,
  },
};
</script>

<style lang="scss" scoped>

  ul{
    height: 100%;
    display: flex;
    align-items: center;
    list-style: none;

    li{
      display: flex;
      align-items: center;
      height: 100%;
      margin-left: 2rem;
      border-top: 3px solid transparent;
      cursor: pointer;

      &:hover {
        border-top: 3px solid white;
      }

      &:hover a{
        color:white;
      }

      a{
        color: #AAA;
        font-weight: 600;
        text-transform: uppercase;
        text-decoration: none;
      }
    }
  }
</style>
