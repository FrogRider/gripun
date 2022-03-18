<template>
  <div>
    <div class="contacts">
      <div class="contacts__column contacts__column_threeParts">
        <div class="contacts__top">
          <div class="contacts__mobileGlobe"></div>
          <h1 class="contacts__title"> Contact us </h1>
          <p class="contacts__subtitle">
            For any questions, comments, or propositions please refer directly to us at our
          </p>
        </div>
        <div class="contacts__middle">
          <div class="links">
            <a class="link" v-for=" link in links" :href="link.href" target="_blank" :key="link.name">
              <div class="link__name" :class="getLinkClass(link)">{{ link.name }}</div>
              <span>-</span>
              <div class="link__adress">{{ link.lable }}</div>
            </a>
          </div>
        </div>
        <div class="contacts__bottom">
          <p class="contacts__bottomTitle">Thank you</p>
          <p class="contacts__subtitle">*Due to high request demand at times, expect your message to be processed within 1-3 business days*</p>
        </div>
      </div>

      <div class="contacts__column contacts__column_dark"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        links: [
          {
            name: 'instagram',
            lable: '@greyboard.xyz',
            href: ' https://www.instagram.com/greyboard.xyz/'
          },
          {
            name: 'twitter',
            lable: '@greyboard_xyz',
            href: 'https://twitter.com/greyboard_xyz'
          },
          {
            name: 'reddit',
            lable: 'to be announced',
            href: '#'
          },
          {
            name: 'email',
            lable: 'greyboard.contact@gmail.com',
            href: 'mailto:greyboard.contact@gmail.com'
          }
        ]
      }
    },
    methods: {
      getLinkClass(link) {
        return `link__name_${link.name}`
      }
    }
  }
</script>

<style scoped lang="scss">
@import "@/styles/main";
  .contacts {
    display: grid;
    width: 100vw;
    height: 100vh;
    grid-template-columns: 1fr 1fr;
		// .contacts__column

		&__column {
      &_threeParts {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 50px 30px;
      }

      &_dark {
        background-color: $gray-light-color;
        background-image: $globe-icon;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 35%;
      }
		}

    &__mobileGlobe {
      display: none;
    }

		// .contacts__top

		&__top {
      text-align: center;
		}

		// .contacts__title

		&__title {
      margin-bottom: 20px;
      text-transform: capitalize;
      font-weight: 700;
		}

		// .contacts__subtitle

		&__subtitle {
      color: $gray-hard-color;
      font-weight: 400;
      font-size: 1.1em;
		}

		// .contacts__middle

		&__middle {
      margin: 20px 0;
		}

		// .contacts__bottom

		&__bottom {
      text-align: center;
		}

		// .contacts__bottomTitle

		&__bottomTitle {
      margin-bottom: 20px;
      font-weight: 700;
      font-size: 1.2em;
		}

		// .contacts__bottomSubtitle

		&__subtitle {
      // margin: 0 30px;
      color: $gray-hard-color;
      font-weight: 400;
      font-size: 1.2em;
		}
}
.links {
}
.link {
  display: flex;
  justify-content: center;
  font-weight: 500;
  color: #000;
  text-decoration: none;

    & + & {
      margin-top: 50px;
    }

    span {
      padding: 0 10px;
    }

		// .link__name

		&__name {
      text-transform: uppercase;
      position: relative;
      padding-left: 45px;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 39px;
        height: 39px;
        background-size: 90%;
        background-position: center;
        background-repeat: no-repeat;
      }

        &_instagram::before {
              background-image: $instagram-icon-black;
        }

        &_twitter::before {
              background-image: $twitter-icon;
        }

        &_email::before {
          background-image: $email-icon;      
        }

        &_reddit::before {
        background-image: $reddit-icon;      
      }
      }

      // .link__adress

      &__adress {
      }
  }

   @media screen and (max-width: 900px) {
    .contacts {
      grid-template-rows: 2fr 1fr;
      grid-template-columns: 1fr;
      max-height: 100vh;

      &__column {
        &_dark {
          display: none;
        }

        &_threeParts {
          min-height: 100vh;
        }
      }

      &__mobileGlobe {
        display: block;
        height: 15vh;
        margin-bottom: 40px;
        // background-color: red;
        width: 100%;
        background-image: $globe-icon;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
  }

</style>