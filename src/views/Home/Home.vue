<template>
  <div class="profile">
    <div class="item">
      <h1>Me</h1>
      <p>
        I’m a Cybersecurity Analyst with a strong foundation in Frontend Engineering. After several years of 
        <br/>
        <br/>
        building responsive, user-friendly web applications, I’ve transitioned into cybersecurity, focusing on
        <br/>
        <br/>
        threat detection, incident response, and security improvements. I’m now seeking new opportunities
        <br/>
        <br/> 
        where I can combine my tech background with my passion for cybersecurity.
      </p>
      <el-button @click="showMore = !showMore" type="text">
        {{showMoreText}}<i :class="showMore ? 'el-icon-caret-top' : 'el-icon-caret-bottom'"/>
      </el-button>
    </div>

    <div v-show="showMore" class="item">
      <h1>More</h1>
      <About/>
    </div>

    <div v-show="showMore" class="item">
      <h1>Certification</h1>
      <CertList/>
    </div>

    <div v-show="showMore" class="item">
      <h1>Tech</h1>
      <TechList/>
    </div>

    <div v-show="showMore" class="item">
      <h1>Tools</h1>
      <ToolList/>
    </div>

    <div class="item">
      <h1>Find Me</h1>
      <SocialList/>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'

  import SocialList from '@/views/Home/SocialList.vue'
  import ToolList from '@/views/Home/ToolList.vue'
  import TechList from '@/views/Home/TechList.vue'
  import CertList from '@/views/Home/CertList.vue'
  import About from '@/views/Home/About.vue'

  @Component({
    components: {About, SocialList, ToolList, TechList, CertList}
  })
  export default class Home extends Vue {
    showMore = false

    get showMoreText() {
      return this.showMore ? 'Collapse' : 'More About Me'
    }
  }
</script>

<style scoped lang="scss">
  .profile {
    .item {
      padding-bottom: 24px;
      margin-bottom: 32px;
      border-bottom: 1px dashed #DCDFE6;

      p {
        padding-bottom: 0.5em;
      }

      &:last-child {
        padding-bottom: 0;
        margin-bottom: 0;
        border-bottom: none;
      }
    }
  }
</style>
