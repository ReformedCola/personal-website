<template>
  <ul class="tech-list">
    <li>Frontend (ES6, TypeScript, React.js, Vue.js, Sass, HTML5, CSS3, etc)</li>
    <li>Backend (Node.js, MySQL)</li>
    <li>Unit Test (Jest, Mocha, Sinon, Karma, Travis Cli, etc)</li>
    <li>Currently learning Python, Java</li>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'

  @Component
  export default class TechList extends Vue {

  }
</script>

<style scoped lang="scss">

</style>
