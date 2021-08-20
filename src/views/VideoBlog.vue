<template>
  <div class="video">
    <Jumbotron :data="data.jumbotron" />
    <div class="container">
      <nav class="nav my-5 justify-content-center">
        <div
          class="nav-item mx-3 text-uppercase"
          v-for="(show, index) in shows"
          :key="index"
        >
          {{ show }}
        </div>
      </nav>
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
        shows: []
      }
    },
    mounted() {
      this.data = this.$store.state.video
      this.getShows()
    },
    methods: {
      getShows() {
        for (let video of this.data.videos) {
          if (!this.shows.length) {
            this.shows.push(video.show)
          } else {
            for (let show of this.shows) {
              console.log(show + ' = ' + video.show)
              if (show !== video.show) {
                this.shows.push(video.show)
              }
            }
          }
        }
        console.log(this.shows)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../styles/colors';
  .nav-item {
    color: $color-red;
  }
</style>
