<template>
  <div class="banner">
    <Menu/>
    <div class="intro">
      <el-avatar class="avatar"
                 :src="avatar"
                 alt="avatar"
                 icon="el-icon-user-solid"
                 :size="120"/>

      <p class="name">Zhiyuan He</p>

      <p class="title">Frontend Engineer / League of Legends Zealot</p>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'
  import Menu from './Menu/Menu.vue'

  @Component({
    components: {Menu}
  })
  export default class Banner extends Vue {
    avatar = require('../assets/avatar.jpeg')
  }
</script>

<style scoped lang="scss">
  .banner {
    display: flex;
    flex-direction: column;
    height: 400px;
    background-color: #2c3e50;
    background-image: url("../assets/background.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 40%;

    .intro {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex-grow: 1;
      color: white;

      .avatar {
        box-shadow: 0 0 55px -6px rgba(255, 255, 255, 1);
      }

      .name {
        margin: 12px 0;
        font-size: 1.6em;
      }

      .title {
        font-size: 1.1em;
      }
    }
  }
</style>
