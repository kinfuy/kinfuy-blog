<template>
  <div class="home-nav">
    <div class="home-operate">
      <a
        v-for="item in links"
        :key="item.key"
        :class="['operate-item', { active: activeRoute === item.key }]"
        :href="item.url"
        >{{ item.title }}</a
      >
      <a class="operate-btn" href="https://github.com/alqmc" target="_blank">
        <svg-icon :size="26">
          <Github />
        </svg-icon>
      </a>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useData } from 'vitepress';
export default defineComponent({
  name: 'HomeNav',
  setup() {
    const { frontmatter } = useData();
    const activeRoute = computed(() => {
      return frontmatter.value.active || '';
    });

    const links = [
      {
        title: 'Home',
        key: 'home',
        url: '/',
      },
      {
        title: 'Blog',
        key: 'blog',
        url: '/views/article/index.html',
      },
      {
        title: 'Project',
        key: 'project',
        url: '/views/project/index.html',
      },
      {
        title: 'About',
        key: 'about',
        url: '/views/about.html',
      },
    ];
    return {
      activeRoute,
      links,
    };
  },
});
</script>
<style lang="less" scoped>
@import url('../../.vitepress/style/var.less');
.home-nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 100px;
  box-sizing: border-box;
  .home-operate {
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
    .active {
      color: @theme-color;
    }
  }
}
</style>
