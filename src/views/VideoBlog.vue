<template>
  <div class="video">
    <Jumbotron :data="data.jumbotron" />
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
      this.getShows(0)
    },
    methods: {
      getShows() {
        const shows = this.data.videos.map((item) => {
            for (let show in shows) {
              console.log(show)
            }
            return item.show
        })
        console.log(shows)
      }
    }
  }
</script>

<style scoped></style>
