<template>
  <div
    class="home-nav"
    :style="{ 'background-color': isHero ? 'transparent' : '#fff' }"
  >
    <div class="home-operate">
      <a
        v-for="item in links"
        :key="item.key"
        :class="['operate-item', { active: activeRoute === item.key }]"
        :href="item.url"
        >{{ item.title }}</a
      >
      <a class="operate-btn" href="https://github.com/kinfuy" target="_blank">
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

    const isHero = computed(() => {
      return frontmatter.value.hero;
    });

    const btnColor = computed(() => {
      return isHero.value ? '#fff' : '#333';
    });
    const activeColor = computed(() => {
      return isHero.value ? '#333' : '#7dd1d3';
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
      // {
      //   title: 'Project',
      //   key: 'project',
      //   url: '/views/project/index.html',
      // },
      {
        title: 'About',
        key: 'about',
        url: '/views/about.html',
      },
    ];
    return {
      activeRoute,
      links,
      isHero,
      btnColor,
      activeColor,
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
  box-sizing: border-box;
  z-index: 99;
  .home-operate {
    display: flex;
    align-items: center;
    .operate-btn {
      cursor: pointer;
    }
    .operate-item {
      margin-right: 20px;
      cursor: pointer;
    }
  }
}

@media screen and (min-width: 700px) {
  .home-nav {
    padding-right: 100px;
    .home-operate {
      .operate-btn {
        &:hover {
          color: #333;
        }
      }

      .active {
        color: @theme-color;
      }
    }
  }
}
@media screen and (max-width: 700px) {
  .home-nav {
    padding-right: 10px;
    min-width: 350px;
    .home-operate {
      .operate-item {
        color: v-bind(btnColor);
      }
      .operate-btn {
        color: v-bind(btnColor);
        &:hover {
          color: v-bind(activeColor);
        }
      }
      .active {
        color: v-bind(activeColor);
      }
    }
  }
}
</style>
