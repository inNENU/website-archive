<template>
  <div :style="myStyle" class="mp-title" v-text="text" />
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "MpTitle",
  props: {
    // Heading text
    text: { type: String, required: true },
    // Heading Style
    myStyle: [String, Object] as PropType<string | Record<string, string>>,
  },
});
</script>
<style lang="scss" scoped>
.mp-title {
  width: 100%;
  max-width: 600px;
  text-align: left;
  font-weight: 500;
  padding: 12px 15px 4px 15px;
  min-height: 24px;
  font-size: 22px;
  max-width: 600px;
  margin: 0 auto;

  @media (min-width: 768px) {
    min-height: 26px;
    font-size: 24px;
  }
}

.mp-title + .mp-title {
  padding-top: 2px;
}
</style>
