<template>
  <div class="article-content">
    <div class="article-tag">
      <a
        v-for="tag in tags"
        :key="tag.name"
        :href="tag.url"
        :class="['tag-item', { 'tag-active': tagActive === tag.name }]"
      >
        {{ tag.name }}
      </a>
    </div>
    <Content />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useData } from 'vitepress';
export default defineComponent({
  name: 'ArticleContent',
  setup() {
    const { frontmatter } = useData();
    const tags = [
      {
        name: 'Newest',
        url: '/views/article/index.html',
      },
      {
        name: 'Vuejs',
        url: '/views/article/vuejs/index.html',
      },
      {
        name: 'Javascript',
        url: '/views/article/javascript/index.html',
      },
      {
        name: 'Nodejs',
        url: '/views/article/nodejs/index.html',
      },
      {
        name: 'Tool',
        url: '/views/article/Tool/index.html',
      },
      {
        name: 'InformalEssay',
        url: '/views/article/informalEssay/index.html',
      },
    ];
    const tagActive = computed(() => {
      return frontmatter.value.tag;
    });
    return {
      tags,
      tagActive,
    };
  },
});
</script>
<style lang="less" scoped>
.article-content {
  .article-tag {
    position: sticky;
    top: 50px;
    display: flex;
    height: 80px;
    align-items: center;
    background-color: #fff;
    z-index: 9;
    .tag-item {
      font-size: 24px;
      color: #999;
      cursor: pointer;
      margin-right: 15px;
      &:hover {
        color: #333;
      }
    }
    .tag-active {
      color: #333;
    }
  }
}
</style>
