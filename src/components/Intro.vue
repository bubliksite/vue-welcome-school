<template>
  <section id="about" class="container" v-if="data">
    <h1>{{ data.title }}</h1>
    <div class="row">
      <div class="col-md-10">
        <p v-html="data.description"></p>
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
</style>
