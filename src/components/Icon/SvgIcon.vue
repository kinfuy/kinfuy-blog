<template>
  <i
    :class="[
      'svg-icon',
      {
        [`svg-animation-spin`]: spin,
      },
    ]"
    :style="[rotateStyle, sizeStyle, colorStyle]"
  >
    <slot />
  </i>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';
import { iconProps } from '../../type/icon.type';

export default defineComponent({
  name: 'SvgIcon',
  props: iconProps,
  setup(props) {
    const rotateStyle = computed(() => {
      if (props.rotate) {
        return {
          transform: `rotate(${props.rotate}deg)`,
        };
      }
      return {};
    });

    const sizeStyle = computed(() => {
      if (props.size) {
        return {
          fontSize: `${props.size}px`,
        };
      }
      return {};
    });

    const colorStyle = computed(() => {
      if (props.color) {
        return {
          color: props.color,
        };
      }
      return {};
    });

    return {
      rotateStyle,
      sizeStyle,
      colorStyle,
    };
  },
});
</script>
