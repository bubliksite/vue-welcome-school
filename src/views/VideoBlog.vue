<template>
  <div class="video" v-if="data">
    <Jumbotron :data="data.jumbotron" />
    <div class="container">
      <nav class="nav my-5 justify-content-center">
        <div
          class="nav-item mx-2 text-uppercase"
          v-for="(show, index) in shows"
          @click="toggleShow(show)"
          :key="index"
        >
          <span :class="{'active' : show === currentShow}" class="show-title">{{ show.title }}</span>
          <span class="ms-3 divider">|</span>
        </div>
      </nav>
      <div class="content">
        <h1 class="text-capitalize">{{currentShow.title}}</h1>
        <p v-html="currentShow.description" class="mb-5"></p>
        <div class="row my-5">
          <div class="col-md-4 mb-5" v-for="video in currentShows" :key="video.videoId">
            <div class="card">
              <div class="card-top d-flex justify-content-start align-items-end">
                <iframe
                  width="100%"
                  height="315"
                  :src="`https://www.youtube.com/embed/${video.videoId}?controls=0`"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
              </div>
              <div class="card-body">
                <p class="title mt-1">
                  Season {{video.season}}. Episode {{video.episode}} <br />
                  <span>{{video.title}}</span>
                </p>
                <p class="description" v-html="video.description"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Jumbotron from '../components/Jumbotron'
  export default {
    name: 'VideoBlog',
    components: {Jumbotron},
    data() {
      return {
        data: {},
        shows: [],
        currentShows: {},
        currentShow: ''
      }
    },
    mounted() {
      this.data = this.$store.state.video
      this.shows = this.$store.state.video.shows
      this.currentShow = this.shows[0]
      this.currentShows = this.data.videos.filter((item) => item.show === this.currentShow.title)
    },
    methods: {
      toggleShow(show) {
        this.currentShow = show
        this.currentShows = this.data.videos.filter((item) => item.show === this.currentShow.title)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../styles/colors';
  .nav-item {
    font-size: 18px;
    .divider {
      text-decoration: none;
      color: #000;
    }
    &:last-child .divider {
      display: none;
    }
    .show-title {
      cursor: pointer;
      &.active {
        color: $color-red;
        text-decoration: underline;
      }
    }
  }
  .card {
    .title {
      color: $color-red;
      font-weight: 700;
      font-size: 22px;
      span {
        font-size: 18px;
        color: $color-dark-blue;
      }
    }
    .description {
      font-size: 14px;
      line-height: 16px;
    }
  }
</style>
