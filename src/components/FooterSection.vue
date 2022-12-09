<template>
  <footer>
    <div class="work-footer">
      <h2>LET'S TALK ABOUT WORK</h2>
      <p>A wonderful serenity has taken possession far far away, behind the word mountains.</p>
      <button>get started</button>
    </div>
    <div class="container">
      <div class="nav-footer">
        <img
          src="img/logotype-2-139x23.png"
          alt="logo"
        >
        <navbar-element
          :arr-links="arrLinks"
          class="links-footer"
        />

        <div class="icons">
          <font-awesome-icon
            icon="fa-brands fa-instagram"
            class="icon"
          />
          <font-awesome-icon
            icon="fa-brands fa-linkedin"
            class="icon"
          />
          <font-awesome-icon
            icon="fa-brands fa-facebook-f"
            class="icon"
          />
          <font-awesome-icon
            icon="fa-brands fa-twitter"
            class="icon"
          />
        </div>
      </div>
      <div class="legal-policy">
        <div class="privacy">
          <a href="#!">term of use</a>
          <a href="#!">pirvacy environmental policy</a>
        </div>
        <div class="copyright">
          <a href="#!">copyright &copy; 2020 phlox consulting. all rights reserved.</a>
        </div>
        <div class="icons-end">
          <font-awesome-icon
            icon="fa-solid fa-arrow-up"
            class="icon-arrow"
            @click="scrollTop"
          />
          <font-awesome-icon
            icon="fa-solid fa-comment"
            class="icon-comment"
            @click="showChat"
          />
          <div
            class="chatbox-container"
            :class="{showChatbox : show}"
          >
            <div class="chat-box">
              <div>
                <div class="user">
                  User
                </div>
                <div class="message">
                  Ciao come posso esserti utile?
                </div>
              </div>
              <label
                for="msg"
              >
                <input
                  id="msg"
                  class="send-msg"
                  type="text"
                  name="msg"
                  placeholder="Invia un messaggio"
                >
                <button class="btn">Send</button>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import NavbarElement from '@/components/NavbarElement.vue';

export default {
  name: 'FooterSection',
  components: { NavbarElement },
  props: {
    arrLinks: Array,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    scrollTop() {
      window.scrollTo(0, 0);
    },
    showChat() {
      this.show = !this.show;
    },
  },
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
.container{
  max-width: 1500px;
  margin: 0 auto;
  padding: 5rem 0 3rem;
}
.nav-footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;

  .icons{
    color: white;
    font-size: 1.2rem;
    display: flex;
    column-gap: 1rem;
  }
  .icon:hover{
    color: $hover-color;
    cursor: pointer;
  }

}
.legal-policy{
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  border-top: 1px solid #888;
  padding-top: 2rem;

  .privacy{
    display: flex;
    flex-direction: column;
  }

  a{
    text-decoration: none;
    text-transform: capitalize;
    color: #888;

    &:hover{
      text-decoration: underline;
    }
  }

  .icons-end{
    position: absolute;
    right: -10%;
    bottom: 0;
    cursor: pointer;
  }
  .icon-arrow{
    padding: 1rem;
    border-radius: 100%;
    background-color: white;

    &:hover{
      background-color: $hover-color;
    }
  }

  .icon-comment{
    padding: 1.5rem;
    margin-left: 1rem;
    border-radius: 100%;
    color: white;
    background-color: #527ceb;
    transform: rotateY(180deg);

    &:hover{
      background-color: $hover-color;
    }
  }

  .chat-box{
    width: 300px;
    height: 350px;
    position: absolute;
    bottom: 70px;
    right: 50px;
    background-color: white;
    border-radius: 10px;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .user{
      margin-top: 0.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid #527ceb;
      color: #527ceb;
      text-transform: uppercase;
    }

    .message{
      margin-top: 1rem;
      background-color: #527ceb;
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 10px;
    }
    .send-msg{
      margin-bottom: 1rem;
      height: 60%;
    }

    .btn{
      height: 60%;
      padding: 0 1rem;
    }
  }
}
.chatbox-container{
    display: none;
  }
.showChatbox{
  display: block;
}
</style>
