<template>
  <!-- <a href="https://github.com/ReformedCola/personal-website/blob/master/src/assets/JasonHe_Resume.pdf" target="_blank">Resume</a> -->
  <div class="resume-container">
    <!-- <iframe 
      src="/public/resume.pdf" 
      width="100%" 
      height="600px">
    </iframe> -->
    <p>
      <a href="/public/resume.pdf" download>
        📄 Download My Resume
      </a>
    </p>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'

  @Component
  export default class Resume extends Vue {
  }
</script>

<style scoped>
.resume-container {
  text-align: center;
  margin-top: 20px;
}

.resume-container iframe {
  border: none;
}

.resume-container a {
  display: inline-block;
  margin-top: 10px;
  font-size: 16px;
  color: #007bff;
  text-decoration: none;
}

.resume-container a:hover {
  text-decoration: underline;
}
</style>
