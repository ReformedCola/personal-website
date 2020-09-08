<template>
  <div class="profile">
    <div class="item">
      <h1>Me</h1>
      <p>
        A new grad with degree of Bachelor of Science in Computational Mathematics from
        <a href="https://www.ucr.edu/" target="_blank">UC Riverside</a>.
        <br/>
        <br/>
        I'm currently seeking for a
        <a href="https://work.chron.com/frontend-engineer-16867.html#:~:text=A%20front%2Dend%20engineer%2C%20also,interface%20elements%20of%20a%20website.&text=Job%20prospects%20remain%20strong%20for,are%20accessible%20on%20mobile%20devices." target="_blank">Frontend Engineer</a>
        job opportunity.
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
  import About from '@/views/Home/About.vue'

  @Component({
    components: {About, SocialList, ToolList, TechList}
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
