<template>
  <ul class="tech-list">
    <li>🛡️ <b>Cybersecurity:</b></li>
    <li>Security Onion, Sophos Security, NodeZero, Elastic Stack, WireShark</li>
    <li>Velociraptor, AC-Hunter, RITA, OWASP ZAP, and more</li>
    <br/>
    <li>🌐 <b>Web Development:</b></li>
    <li>Languages: JavaScript, TypeScript, HTML5, CSS3, SASS</li>
    <li>Libraries: React.js, Vue.js, Redux, Zustand</li>
    <li>Frameworks: Next.js, Vite.js</li>
    <li>Unit Test: Jest, Mocha, Sinon, Chai, Karma, Travis Cli</li>
    <li>Currently learning Java, Ruby, Rust, and more</li>
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
