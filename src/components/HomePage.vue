<template>
  <div class="home-page">
    <div class="home-operate">
      <a class="operate-item" href="/views/article/index.html">Blog</a>
      <a class="operate-item" href="/views/project/index.html">Project</a>
      <a class="operate-item" href="/views/about.html">About</a>
      <a class="operate-btn" href="https://github.com/alqmc" target="_blank">
        <svg-icon :size="26">
          <Github />
        </svg-icon>
      </a>
    </div>
    <div class="home-content">
      <img class="home-cover" src="/images/cover3.jpg" />
      <div class="content-left">
        <div class="left-title">阿乐去买菜</div>
        <div class="left-descript">
          Do whatever you wanna do, go wherever you wanna go.
        </div>
        <div class="enter-btn">README</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'HomePage',
});
</script>
<style lang="less" scoped>
@import url('./../.vitepress/style/var.less');
.home-page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
  .home-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    .home-cover {
      width: 55%;
      height: 100%;
      object-fit: cover;
    }
    .content-left {
      padding: 30px 50px;
      width: 45%;
      height: 100%;
      .left-title {
        font-size: 36px;
        font-weight: 600;
        margin-top: 200px;
        margin-bottom: 10px;
      }
      .left-descript {
        font-size: 20px;
        margin-bottom: 30px;
      }
      .enter-btn {
        width: 120px;
        height: 40px;
        border-radius: 4px;
        color: #fff;
        line-height: 40px;
        text-align: center;
        font-size: 18px;
        background-color: @theme-color;
        cursor: pointer;
        &:hover {
          opacity: 0.85;
        }
      }
    }
  }
}
</style>
