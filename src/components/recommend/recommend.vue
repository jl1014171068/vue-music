<template>
  <div id="a">
    <Silder :recommends=recommends></Silder>
    <div class="recommend-list">
      <h1 class="list-title">热门歌单推荐</h1>
      <ul v-show="discList.length">
        <li v-for="item in discList" class="item">
          <div class="icon">
            <img width="60" height="60" v-lazy="item.imgurl">
          </div>
          <div class="text">
            <h2 class="name" v-html="item.creator.name"></h2>
            <p class="desc" v-html="item.dissname"></p>
          </div>
        </li>
      </ul>
      <div class="loading-container" v-show="!discList.length">
        <Loading></Loading>
      </div>
    </div>
  </div>
</template>

<script>
    import {getRecommend, getDiscList} from 'api/index.js';
    import Silder from 'components/base/silder/silder';
    import Loading from 'components/base/loading/loading';
    export default {
        name: 'hello',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                recommends: [],
                discList: []
            }
        },
        mounted: function () {
            this.fetchData()
        },
        methods: {
            fetchData() {
                getRecommend().then(response => {
                    this.recommends = response.data.slider;
                }),
                    getDiscList().then(response => {
                        this.discList = response.data.list;
                    })
            }
        },
        components: {
            Silder,
            Loading
        }
    }
</script>

<style scoped lang="scss">
  @import '~style/variable.scss';
  .recommend-list {
    .list-title {
      height: 65px;
      line-height: 65px;
      text-align: center;
      font-size: $font-size-medium;
      color: $color-theme;
    }
    .item {
      display: flex;
      box-sizing: border-box;
      align-items: center;
      padding: 0 20px 20px 20px;
    }
    .icon {
      flex: 0 0 60px;
      width: 60px;
      padding-right: 20px;
    }
    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;
      line-height: 20px;
      overflow: hidden;
      font-size: $font-size-medium;
    }
    .name {
      margin-bottom: 10px;
      color: $color-text;
    }
    .desc {
      color: $color-text-d;
    }
  }
</style>
