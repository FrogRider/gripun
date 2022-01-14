<template>
  <div class="titleSection" :class="small ? 'titleSection_small' : ''">
    <div class="titleSection__title">{{ title }}</div>
    <p class="titleSection__subTitle" v-if="subtitle">{{ subtitle }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      subtitle: {
        type: String
      },
      small: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped lang="scss">
@import "@/styles/main";

  .titleSection {
    text-align: center;
    font-size: 19px;

    &_small {
      font-size: 15px;
      .titleSection__title {
        margin-bottom: 15px;
      }
    }

		// .titleSection__title
		&__title {
      font-size: 2em;
      font-weight: 600;
		}

		// .titleSection__subTitle
		&__subTitle {
      font-size: 1.3em;
      font-weight: 500;
      margin-top: 20px;
      color: $gray-hard-color;
		}
}


</style>