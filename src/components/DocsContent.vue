<template>
  <div class="docs-content">
    <div class="home-operate">
      <a class="operate-item" href="/">Home</a>
      <a class="operate-item" href="/views/article/index.html">Blog</a>
      <a class="operate-item" href="/views/project/index.html">Project</a>
      <a class="operate-item" href="/views/about.html">About</a>
      <a class="operate-btn" href="https://github.com/alqmc" target="_blank">
        <svg-icon :size="26">
          <Github />
        </svg-icon>
      </a>
    </div>
    <div class="docs-bodyer">
      <Content />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'DocsContent',
});
</script>
<style lang="less" scoped>
@import url('./../.vitepress/style/var.less');
.docs-content {
  width: 100%;
  height: 100%;
  .home-operate {
    position: absolute;
    right: 100px;
    top: 20px;
    display: flex;
    align-items: center;
    .operate-btn {
      cursor: pointer;
    }
    .operate-item {
      margin-right: 20px;
      cursor: pointer;
      &:hover {
        color: @theme-color;
      }
    }
  }
  .docs-bodyer {
    margin: 80px auto;
    width: 1200px;
  }
}
</style>
