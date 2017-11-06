<template>
  <div class="silder">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in recommends" :key="item.index">
        <a :href="item.linkUrl">
          <img :src="item.picUrl" :alt="item.id">
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
    export default {
        name: 'hello',
        props: {
            recommends: {
                type: Array,
                default: true
            }
        }
    }
</script>

<style scoped lang="scss">
  .silder {
    .mint-swipe {
      height: 150px;
      .mint-swipe-item {
        img {
          height: 100%;
          width: 100%;
        }
      }
    }
  }
</style>
