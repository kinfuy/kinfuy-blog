<template>
  <div class="docs-content">
    <HomeNav />
    <div class="docs-bodyer">
      <ArticleContent v-if="navType === 'article'" />
      <Content v-else />
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vitepress';
import HomeNav from './common/HomeNav.vue';
import ArticleContent from './ArticleContent.vue';
export default defineComponent({
  name: 'DocsContent',
  components: { HomeNav, ArticleContent },
  setup() {
    const route = useRoute();

    const navType = computed(() => {
      let type = '';
      if (route.path.includes('/article/')) type = 'article';
      if (route.path.includes('/about/')) type = 'about';
      if (route.path.includes('/project/')) type = 'project';
      return type;
    });
    return {
      navType,
    };
  },
});
</script>
<style lang="less" scoped>
.docs-content {
  width: 100%;
  height: 100%;
  .docs-bodyer {
    box-sizing: border-box;
  }
}

@media screen and (min-width: 375px) and (max-width: 700px) {
  .docs-bodyer {
    margin-top: 50px;
    padding: 10px;
    width: 100%;
  }
}
@media screen and (min-width: 1400px) {
  .docs-bodyer {
    margin: 50px auto;
    width: 100%;
    padding: 10px;
  }
}
</style>
