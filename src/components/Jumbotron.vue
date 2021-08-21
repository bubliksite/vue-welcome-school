<template>
  <section
    v-if="data"
    class="jumbotron d-flex justify-content-start align-items-center"
    :style="`background-image: url('${data.background}')`"
  >
    <div class="container">
      <h1 v-html="data.title"></h1>
      <p class="lead">{{ data.subtitle }}</p>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Jumbotron',
    props: {
      data: Object
    }
  }
</script>

<style scoped lang="scss">
  .jumbotron {
    margin: 0;
    height: calc(100vh - 120px);
    max-height: 100%;
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: cover;
    color: #fff;

    h1 {
      font-size: 72px;
      line-height: 60px;
      color: #fff;
    }
    p.lead {
      font-size: 32px;
    }
  }
</style>
