<template>
  <div class="homePage">
    <div class="homePage__section homePage__section_video">
      
    </div>

    <div class="homePage__section homePage__section_centered">
      <div class="emailForm">
        <h1 class="emailForm__title">
          gripun
        </h1>
        <p class="emailForm__subtitle">
          Buy stocks of people, you follow online
        </p>

        <div class="emailForm__form">
          <div class="form">
            <input type="text" class="form__input" placeholder="Enter email adress">
            <button class="form__button">Get early access</button>
          </div>

        </div>
      </div>

      <div class="contact" @click="goToContacts">Contact us</div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      goToContacts() {
        this.$router.push({name: 'contacts'})
      }
    }
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
        background-image: url('../assets/HomeDesktop.gif');
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        background-color: $gray-light-color;;
      }
      &_centered {
        display: grid;
        place-items: center;
      }
    }
  }

  .emailForm {
    // background-color: red;
    display: block;
    width: 100%;
    text-align: center;
    padding: 0 30px;

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
    }
  }

  .contact {
    position: fixed;
    bottom: 0;
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