<template>
  <section id="team" v-if="data">
    <div class="container">
      <h1>{{ data.title }}</h1>
      <div class="row my-5" v-for="(team, index) in data.team" :key="index">
        <div
          class="col-lg-3 col-md-4 mb-3"
          :class="{'order-md-last order-first': !(index % 2 === 0)}"
        >
          <img :src="team.image" :alt="team.name" />
        </div>
        <div class="col-lg-9 col-md-8">
          <h2 class="mb-0">{{ team.name }}</h2>
          <h3 class="mb-3">{{ team.position }}</h3>
          <p v-html="team.description"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Team',
    props: {
      data: Object
    }
  }
</script>

<style scoped lang="scss">
  @import '../styles/colors';

  #team {
    h3 {
      color: $color-red;
    }
    img {
      border-radius: 50%;
      width: 100%;
    }
  }
</style>
