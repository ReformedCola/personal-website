<template>
  <div class="projects">
    <h1>Personal Projects</h1>
    <ul>
      <li v-for="item in projectsDB" :key="item.github">
        <div>
          <a class="title" :href="item.url" target="_blank">{{item.title}}</a>
          <p class="desc">{{item.desc}}</p>
        </div>
        <div class="buttons">
          <el-button type="success" size="mini" @click="goto(item.github)">
            Source Code
          </el-button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'

  import projectsDB from '@/db/projectsDB'

  @Component
  export default class Projects extends Vue {
    projectsDB = projectsDB
    goto(website: string) {
      window.open(website, '_blank');
    }
  }
</script>

<style scoped lang="scss">
  .projects {
    li {
      display: flex;
      justify-content: space-between;
      margin-bottom: 16px;
      min-height: 86px;

      &:last-child {
        margin-bottom: 0;
      }

      a.title {
        font-size: 1.2em;
        color: #409EFF;
      }

      .buttons {
        min-width: 25%;
        text-align: right;
      }
    }

    .desc {
      margin-top: 4px;
    }
  }
</style>
