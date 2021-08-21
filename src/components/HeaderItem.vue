<template>
  <div class="text-uppercase">
    <router-link
      v-if="item.type === 'router-link'"
      :to="{name: item.link}"
      :class="classes"
      active-class="active"
    >
      {{ item.title }}
    </router-link>
    <a v-if="item.type === 'anchor'" :href="`/#${item.link}`" :class="classes">
      {{ item.title }}
    </a>
  </div>
</template>

<script>
  export default {
    name: 'HeaderItem',
    props: {
      item: Object
    },
    data() {
      return {
        classes: {'btn btn-default': this.item.button}
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../styles/styles';
  .mobile-menu-item {
    a {
      font-size: 32px;
      line-height: 64px;
    }
    .btn {
      margin-top: 50px;
      padding: 0 30px;
    }
  }
  a {
    text-decoration: none;
    color: #000;
    font-size: 16px;
    &.active {
      color: $color-red;
    }
    &:hover {
      color: $color-red;
    }
  }
</style>
