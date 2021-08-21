<template>
  <section id="about" class="container" v-if="data">
    <h1>{{ data.title }}</h1>
    <div class="row">
      <div class="col-md-10">
        <div class="description" v-html="data.description"></div>
      </div>
      <div class="col-md-2 text-end">
        <img :src="data.image" alt="Welcome school" />
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Intro',
    props: {
      data: Object
    }
  }
</script>

<style scoped lang="scss">
  p {
    font-size: 18px;
    line-height: 24px;
  }
  img {
    max-width: 100%;
  }
</style>
