<template>
  <div class="home">
    <Jumbotron :data="data.jumbotron" />
    <Intro :data="data.intro" />
    <Courses :data="data.courses" />
    <Team :data="data.team" />
  </div>
</template>

<script>
  import Jumbotron from '../components/Jumbotron'
  import Intro from '../components/Intro'
  import Courses from '../components/Courses'
  import Team from '../components/Team'
  export default {
    name: 'Home',
    components: {Team, Courses, Intro, Jumbotron},
    data() {
      return {
        data: {}
      }
    },
    mounted() {
      this.data = this.$store.state.home
    }
  }
</script>
