<template>
  <div class="share" ref=window>
    
    <TitleSection title="Thank you!" subtitle="We have added your email address to the sinup queue."/>

    <div class="share__banner" ref="banner" :style="bannerBorderRadiusStyle">
      <p class="share__bannerTitle">
        <span>300,293 </span>
        <span>People ahead of you</span>
      </p>
      <p class="share__bannerSubtitle">
        This reservation is held for alexgrior01@gmail.com. Is this <span>not you?</span>
      </p>
    </div>

    <TitleSection 
      title="Interested in priority access?" 
      subtitle="Get early access by referring other people. The more people that join, the sooner you'll get acess."
    />
    
    <div class="share__socials">
      <div 
        class="share__social" 
        :class="getButtonClass(button.modifyer)" 
        v-for="button in buttons" 
        :key="button.title">
        {{ button.title }}
      </div>
    </div>

    <TitleSection title="Or share this unique link:" subtitle="https://www.examplewebsite.com/share?ajdfhrdj" :small="true"/>

  </div>
</template>

<script>
import TitleSection from "@/components/TitleSection.vue";
  export default {
    components: { TitleSection },
    data() {
      return {
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
            title: "Reddit",
            modifyer: "reddit"
          }
        ]
      }
    },
    mounted() {
      this.windowWidth = this.$refs.window.clientWidth;
      this.bannerBorderRadius = this.windowWidth > this.mobileSyulesStartsAt ? this.$refs.banner.clientHeight / 2 : this.$refs.banner.clientWidth / 5;
    },
    methods: {
      getButtonClass(modifyer) {
        return ` share__social_${modifyer}`
      }
    },
    computed: {
      bannerBorderRadiusStyle() {
        return `border-radius: ${this.bannerBorderRadius}px`
      }
    }
  }
</script>

<style scoped lang="scss">
@import "@/styles/main";
  .share {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 50px 30px;
    min-height: 100vh;

		// .share__banner

		&__banner {
      position: relative;
      text-align: center;
      padding: 100px 30px;
      background-color: $gray-light-color;
      margin: 0 20px;
      border-radius: 50%;

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
      font-size: 2.5em;
		}

		// .share__bannerSubtitle

		&__bannerSubtitle {
      font-weight: 500;
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
		}
}

</style>