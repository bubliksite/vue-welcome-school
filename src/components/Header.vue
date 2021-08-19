<template>
  <header class="my-2">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <div class="logo">
          <img :src="logo" alt="logo" />
        </div>
        <nav class="d-flex justify-content-end align-items-center">
          <HeaderItem
            class="ms-5"
            v-for="(item, index) in navs"
            :key="index"
            :item="item"
          />
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
  import logo from '@/assets/logo.png'
  import HeaderItem from './HeaderItem'
  export default {
    name: 'Header',
    components: {HeaderItem},
    data() {
      return {
        logo,
        navs: ''
      }
    },
    mounted() {
      this.navs = this.$store.state.global.menu
    }
  }
</script>

<style scoped lang="scss"></style>
