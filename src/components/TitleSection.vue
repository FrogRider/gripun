<template>
  <div class="titleSection" :class="small ? 'titleSection_small' : ''">
    <p class="titleSection__title">{{ title }}</p>
    <p class="titleSection__subTitle">{{ subtitle }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: 'Title'
      },
      subtitle: {
        type: String,
        default: 'Subtitle'
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
      margin-bottom: 20px;
      font-size: 2em;
      font-weight: 600;
		}

		// .titleSection__subTitle
		&__subTitle {
      font-size: 1.3em;
      font-weight: 500;
      color: $gray-hard-color;
		}
}


</style>