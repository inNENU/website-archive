<template>
  <div class="doc-wrapper" @click="view">
    <!-- 文档图标 -->
    <img class="doc-icon" :src="`./icon/${icon}.svg`" />
    <div class="name">{{ name }}</div>
    <div v-if="downloadable !== false" class="download" @click="download">
      <img class="icon" src="./icon/download.svg" />
    </div>
    <div class="div" @click="div">
      <img class="icon" src="./icon/view.svg" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MpDoc",
  props: {
    name: { type: String, required: true },
    icon: { type: String, default: "document" },
    downloadable: { type: Boolean, default: false },
  },
  setup(props) {
    const canView = ref(props.icon === "pdf");

    return canView;
  },
});
</script>

<style lang="scss">
@import "./style/hover";

.doc-wrapper {
  display: flex;
  position: relative;

  max-width: var(--max-width);
  margin: 2px var(--horizontal-margin);
  padding: 8px 10px 8px 15px;
  background-color: var(--block-bgcolor);
  border-radius: 8px;

  color: var(--text-color);
  line-height: 1.2;
  align-items: center;
  overflow: hidden;

  @include hover;

  .doc-icon {
    width: 32px;
    height: 32px;
    margin-right: 15px;
    flex: none;
  }
  .name {
    text-align: left;
    font-size: 17px;
    flex: 1 1 auto;
  }

  & .download,
  & .view {
    width: 26px;
    height: 26px;
    margin: 0 4px;
    border-radius: 13px;
    flex-shrink: 0;
    overflow: hidden;

    @include hover;

    .icon {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
