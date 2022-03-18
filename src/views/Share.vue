<template>
  <div class="share" ref=window>
    
    <TitleSection title="Thank you!" subtitle="We have added your email address to the signup queue."/>

    <div class="share__banner" ref="banner" :style="bannerBorderRadiusStyle">
      <p class="share__bannerTitle">
        <span>{{ usersCount }} </span>
        <span>People ahead of you</span>
      </p>
      <p class="share__bannerSubtitle">
        This reservation is held for {{ email }} Is this <br>
        <span @click="goToContacts">not you?</span>
      </p>
    </div>

    <TitleSection title="Share with you friends!" />
    
    <div class="share__socials">
      <div 
        class="share__social" 
        :class="getButtonClass(button.modifyer)" 
        v-for="button in buttons" 
        :key="button.title">
        {{ button.title }}
      </div>
    </div>

    <TitleSection
      class="lineBreak"
      title="Or share this link:"
      subtitle="https://www.greyboard.xyz"
      :small="true"
    />

  </div>
</template>

<script>
import TitleSection from "@/components/TitleSection.vue";
import getUsersCount from "@/repositories/usersCount";

  export default {
    components: { TitleSection },
    data() {
      return {
        usersCount: 0,
        bannerBorderRadius: 134,
        windowWidth: 1000,
        mobileSyulesStartsAt: 900,
        buttons: [
          {
            title: "Story",
            modifyer: "instagram"
          },
          {
            title: "Tweet",
            modifyer: "tweeter"
          },
          {
            title: "Share",
            modifyer: "facebook"
          },
          {
            title: "TBA",
            modifyer: "reddit"
          }
        ]
      }
    },
    async mounted() {
      if(this.email) {
        this.windowWidth = this.$refs.window.clientWidth;
      this.bannerBorderRadius = this.windowWidth > this.mobileSyulesStartsAt ? this.$refs.banner.clientHeight / 2 : this.$refs.banner.clientWidth / 5;
      this.showPreloader()
      await getUsersCount().then(count => this.usersCount = count);
      this.hidePreloader()
      } else {
        this.$router.go(-1);
      }
    },
    methods: {
      goToContacts() {
        this.$router.push({name: 'contacts'})
      },
      getButtonClass(modifyer) {
        return ` share__social_${modifyer}`
      }
    },
    computed: {
      bannerBorderRadiusStyle() {
        return `border-radius: ${this.bannerBorderRadius}px`
      },
      email() {
        return this.$route.query.email;
      }
    }
  }
</script>

<style lang="scss">
@import "@/styles/main";

  .share {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    padding: 50px 30px;
    min-height: 100vh;

		// .share__banner

		&__banner {
      position: relative;
      text-align: center;
      display: inline-block;
      padding: 100px 30px;
      background-color: $gray-light-color;
      margin: 0 auto;
      border-radius: 50%;
      width: 70%;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: $stickman-background;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 8%;
      }
		}

		// .share__bannerTitle

		&__bannerTitle {
      font-weight: 600;
      font-size: 2.7em;
		}

		// .share__bannerSubtitle

		&__bannerSubtitle {
      font-weight: 500;
      font-size: 1.2em;

      span {
        color: $contrast-color;
        cursor: pointer;
        position: relative;
        z-index: 10;
        &:hover {
          cursor: pointer;
        }
      }
		}

		// .share__socials

		&__socials {
      display: flex;
      justify-content:space-evenly;
		}

		// .share__social

		&__social {
      padding: 10px 20px 10px 40px;
      border-radius: 50px;
      background-color: $gray-light-color;
      border: 1px solid $contrast-color;
      font-weight: 500;
      color: $contrast-color;
      cursor: pointer;
      position: relative;

      & + & {
        // margin-left: 40px;
      }

      &::after {
        content: "";
        width: 39px;
        height: 39px;
        position: absolute;
        left: 0;
        top: 0;
        background-position: center;
        background-repeat: no-repeat;
      }

      &_instagram::after {
        background-image: $instagran-icon-green;
        background-size: 60%;
      }
      &_tweeter::after {
        background-image: $twitter-icon-green;
        background-size: 60%;
      }
      &_facebook::after {
        background-image: $facebook-icon-green;
        background-size: 37%;
        left: -5px;
      }
      &_reddit::after {
        background-image: $reddit-icon-green;
        background-size: 60%;
      }
		}
}

  @media screen and (max-width: 900px) {
    .share {
      &__socials {
        display: grid;
        grid-template-columns: auto auto;
        grid-row-gap: 20px;
      }

      &__banner {
        padding: 30px;
        width: 100%;
      }

      &__bannerTitle {
        font-size: 1.5em;
      }

      &__bannerSubtitle {
        font-size: 0.9em;
      }
    }

    .lineBreak p {
        word-break: break-all;
        white-space: normal;
      }
  }

</style>