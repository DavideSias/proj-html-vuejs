<template>
  <Header>
    <div class="navbar">
      <img
        class="logo-navbar"
        src="@/img/logotype.png"
        alt="logo"
      >
      <!--TODO: dinamico, statico solo per lo stile e link-->
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Services</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </div>
    <div class="headline-container">
      <div class="headline">
        <h1>the best business consulting</h1>
      </div>
    </div>
  </Header>
</template>

<script>
export default {
  name: 'HeaderSection',
};
</script>

<style lang="scss" scoped>
header{
  height: 100vh;
  background-color: #1F1E38;
  background-image: url('@/img/portrait-of-young-architect-woman-on-meeting-KFZCE3A.jpg');
  background-position-x: right;
  background-position-y: top;
  background-repeat: no-repeat;
}
.navbar{
  max-width: 1400px;
  height: 70px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo-navbar{
    width: 8%;
  }

  ul{
    height: 100%;
    display: flex;
    align-items: center;
    list-style: none;
    color: #AAA;

    li{
      display: flex;
      align-items: center;
      height: 100%;
      margin-left: 2rem;
      font-weight: 600;
      text-transform: uppercase;
      border-top: 3px solid transparent;
      cursor: pointer;

      &:hover{
        border-top: 3px solid white;
        color:white;
      }
    }
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
      h1{
        font-size: 6.3rem;
        text-transform: uppercase;
        color:white;
        line-height: 0.9;
      }
    }
}
</style>
