<template>
  <!-- <a href="https://github.com/ReformedCola/personal-website/blob/master/src/assets/JasonHe_Resume.pdf" target="_blank">Resume</a> -->
  <div class="resume-container">
    <!-- <iframe 
      src="/resume.pdf" 
      style="width: 100%; height: auto;" 
      frameborder="0" 
      scrolling="auto">
    </iframe> -->
    <pdf 
      :src="pdfUrl"
      width="100%"
      height="600px"
    ></pdf>
    <p>
      <a href="/resume.pdf" download>
        📄 Download My Resume
      </a>
    </p>
  </div>
</template>

<script lang="ts">
  // import Vue from 'vue'
  import pdf from 'vue-pdf';
  // import {Component} from 'vue-property-decorator'

  // @Component
  export default{
    components: {
      pdf,
    },
    data() {
      return {
        pdfUrl: '/resume.pdf'
      }
    }
  }
</script>

<style scoped>
.resume-container {
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  text-align: center;
  margin: 0 auto;
}

/* .resume-container iframe {
  width: 100%;
  height: auto;
  min-height: 80vh;
  border: none;
} */

.resume-container a {
  display: inline-block;
  margin-top: 10px;
  font-size: 16px;
  color: #007bff;
  text-decoration: none;
}

.resume-container a:hover {
  text-decoration: none;
}
</style>
