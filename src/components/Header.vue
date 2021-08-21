<template>
  <header class="my-2">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <div class="logo">
          <router-link :to="{name: 'Home'}">
            <img :src="logo" alt="logo" />
          </router-link>
        </div>
        <nav class="d-none justify-content-end align-items-center d-md-flex">
          <HeaderItem
            class="ms-5"
            v-for="(item, index) in navs"
            :key="index"
            :item="item"
          />
        </nav>
        <div class="mobile-menu d-lock d-md-none">
          <div class="open-icon" @click="toggleMobileMenu">
            <BIconList font-scale="3"/>
          </div>
          <div class="menu" v-if="mobileMenuIsOpen">
            <div class="close-icon p-2 d-flex justify-content-center align-items-center" @click="toggleMobileMenu">
              <BIconXOctagon/>
            </div>
            <ul class="list-unstyled mobile-menu">
              <li v-for="(item, index) in navs" :key="index">
                <HeaderItem
                  class="ms-5"
                  :class="{'mobile-menu-item' : mobileMenuIsOpen}"
                  :key="index"
                  :item="item"
              />
              </li>
              <ul class="contacts list-unstyled mt-5 text-center fw-bold">
                <li>
                  <a :href="`mailto:${contacts.email}`">{{contacts.email}}</a>
                </li>
                <li>
                  <a :href="`tel:${contacts.phone}`">{{contacts.phone}}</a>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import logo from '@/assets/logo.png'
  import HeaderItem from './HeaderItem'
  import {BIconList, BIconXOctagon} from 'bootstrap-vue'

  export default {
    name: 'Header',
    components: {HeaderItem, BIconList, BIconXOctagon},
    data() {
      return {
        logo,
        navs: '',
        contacts: '',
        mobileMenuIsOpen: false
      }
    },
    methods: {
      toggleMobileMenu() {
        this.mobileMenuIsOpen = !this.mobileMenuIsOpen
      }
    },
    mounted() {
      this.navs = this.$store.state.global.menu
      this.contacts = this.$store.state.global.contacts
    }
  }
</script>

<style scoped lang="scss">
  .mobile-menu      {
    .open-icon {
      color: #ca2027;
      cursor: pointer;
    }
    .menu {
      position: absolute;
      background-color: #fff;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      .close-icon {
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 30px;
        background-color: #ca2027;
        color: #fff;
        border-radius: 50%;
        width: 50px;
        height: 50px;
      }
      .mobile-menu {
        position: relative;
        top: 100px;
      }
      .contacts {
        a {
          color: #000;
          text-decoration: none;
          font-size: 18px;
          line-height: 36px;
        }
      }
    }
  }
</style>
