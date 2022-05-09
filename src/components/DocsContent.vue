<template>
  <div class="docs-content">
    <HomeNav />
    <div class="docs-bodyer">
      <Content />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import HomeNav from './common/HomeNav.vue';
export default defineComponent({
  name: 'DocsContent',
  components: { HomeNav },
});
</script>
<style lang="less" scoped>
.docs-content {
  width: 100%;
  height: 100%;
  .docs-bodyer {
    margin: 80px auto;
    width: 1200px;
  }
}
</style>
