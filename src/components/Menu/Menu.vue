<template>
  <nav class="nav">
    <PCMenu class="pc-menu" :menu="menu" :selected="selected"/>
    <MobileMenu class="mobile-menu" :menu="menu" :selected="selected"/>
  </nav>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'
  import PCMenu from '@/components/Menu/PCMenu.vue'
  import MobileMenu from '@/components/Menu/MobileMenu.vue'

  @Component({
    components: {PCMenu, MobileMenu}
  })
  export default class Menu extends Vue {
    menu: TMenuItem[] = [
      {route: '/', label: 'Home', icon: 'el-icon-user'},
      {route: '/projects', label: 'Projects', icon: 'el-icon-suitcase'},
      {route: '/resume', label: 'Resume', icon: 'el-icon-s-order'},
    ]

    selected(route: string) {
      return route === this.$route.path ? 'selected' : ''
    }
  }
</script>

<style scoped lang="scss">
  .mobile-menu {
    display: none;
  }
  .pc-menu {
    display: flex;
  }

  @media only screen and (max-width: 600px) {
    .mobile-menu {
      display: flex;
    }
    .pc-menu {
      display: none;
    }
  }
</style>
