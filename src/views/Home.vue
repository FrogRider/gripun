<template>
  <div class="homePage" @keyup.enter="goToShare">
    <div class="homePage__section homePage__section_video">
      <video poster="../assets/loading.gif" autoplay muted loop class="desktop">
            <source src="../assets/videoDesktop.mp4" type="video/mp4">
      </video>
      <video poster="../assets/loading.gif" autoplay="autoplay" loop="loop" muted defaultMuted playsinline  oncontextmenu="return false;"  preload="auto"  class="mobile">
            <source src="../assets/videoMobile.mp4" type="video/mp4">
      </video>
    </div>
    <!-- <video src="../assets/video.mp4" type='video/mp4' autoplay loop
 class="homePage__section homePage__section_video"></video> -->

    <div class="homePage__section homePage__section_centered">
      <div class="emailForm">
        <h1 class="emailForm__title test">
          GREYBOARD
        </h1>
        <p class="emailForm__subtitle">
          Buy tokens of people, you follow online
        </p>

        <div class="emailForm__form">
          <div class="form">
            <input type="text" v-model="email" class="form__input" placeholder="Enter email adress">
            <button class="form__button" :class="{'form__button_disabled': !isValid}" @click="goToShare">Get early access</button>
          </div>
          <p class="emailForm__notValid" v-if="notValid">Not a valid e-mail address</p>
        </div>
      </div>

      <div class="contact" @click="goToContacts">Contact us</div>
    </div>
  </div>
</template>

<script>
import sentEmail from "@/repositories/email";
  export default {
    data() {
      return {
        email: '',
        isValid: false
      }
    },
    methods: {
      goToContacts() {
        this.$router.push({name: 'contacts'})
      },
      async goToShare() {
        if(this.isValid) {
          await sentEmail(this.email).then(responce => {
            console.log(responce);
            this.$router.push({name: 'share', query: {email: this.email}})
          }).catch(() => {
            this.$notify({
              title: 'An error occurred, please try again',
              type: 'error'
            })
          })
        }
      },
      validateEmail() {
        const validator = /\S+@\S+\.\S+/;
        // return re.test(email);
        this.isValid = validator.test(this.email);
      }
    },
    computed: {
      notValid() {
        return this.email && !this.isValid
      }
    },
    watch: {
      email: {
        handler: 'validateEmail'
      }
    },
  }
</script>

<style scoped lang="scss">
@import "@/styles/main";
  .homePage {
    display: grid;
    width: 100vw;
    min-height: 100vh;
    grid-template-columns: 1fr 1fr;

    &__section {
      &_video {
        // background-image: url('../assets/DesktopHomeVideoUpdated2 (1).gif');
        // width: 100%;
        // height: 100%;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        background-color: $gray-light-color;
        position: relative;

        video {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translateX(-50%) translateY(-50%);
          height: 100%;

          &.mobile {
            height: 85%;
            display: none;
          }
        }
      }
      &_centered {
        // display: grid;
        // place-items: center;
      }
    }
  }

  .emailForm {
    // background-color: red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: calc(100% - 1em - 10px);
    text-align: center;
    padding: 0 30px;

    &__form {

    }

    &__notValid {
      font-size: .9rem;
      color: tomato;
      text-align: left;
      position: absolute;
    }

    &__title {
      text-transform: uppercase;
      margin-bottom: 5px;
      font-weight: 600;
    }

    &__subtitle {
      color: $gray-hard-color;
      margin-bottom: 5px;
    }
  }

  .form {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 2px;
    background-color: $main-dark-color;
    padding: 2px;

    &__input {
      border-radius: 0px;
      border: none;
      padding: 5px;
      outline: none;
      padding: 15px;
      &::placeholder {
        color: $gray-hard-color;
      }
    }

    &__button {
      padding: 15px;
      text-align: center;
      color: $main-light-color;
      background-color: $main-dark-color;
      border: 2px solid $main-light-color;
      font-weight: 600;

      &_disabled {
        cursor: not-allowed;
      }
    }
  }

  .contact {
    // position: fixed;
    // bottom: 0;
    text-align: center;
    padding: 5px;
    color: $gray-hard-color;
    cursor: pointer;
    transition: all .2s linear;

    &:hover {
      font-size: 1.1em;
      color: $contrast-color;
    }
  }

  @media screen and (max-width: 900px) {
    .homePage {
      max-width: 100vw;
      grid-template-rows: 2fr 1fr;
      grid-template-columns: 1fr;
      min-height: 100vh;

      &__section {
        // min-height: 100vh;

        &_video {
        background-color: #eaeaea;

        video {
          &.desktop {
            display: none;
          }

          &.mobile {
            display: block;
          }
        }
      }
      }
    }

    .form {
      background-color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;

      &__input {
        width: 90%;
        border: 1px solid $main-dark-color;
        padding: 10px 15px;
        &::placeholder {
          text-align: center;
        }
      }

      &__button {
        margin-top: 20px;
        padding: 10px 15px;
        border: none;
        box-shadow: 0px 0px 0px 1px #fff, 0px 0px 0px 2px #000;
      }
    }
  }
</style>