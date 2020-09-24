<template>
  <div v-if="header" class="copy-header" v-text="header" />
  <div class="copy-wrapper">
    <Copy class="copy" @click="copy" />
    <div class="text" v-text="text" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import message from "%/message";
import Copy from "../assets/copy.svg";

export default defineComponent({
  name: "MpCopy",
  components: {
    Copy,
  },
  props: {
    header: String,
    text: { type: String, required: true },
  },
  setup() {
    const copy = (): void => {
      message.warn("浏览器不支持读写剪切板，请自行复制");
    };

    return { copy };
  },
});
</script>

<style lang="scss">
@import "../style/hover";

.copy-header {
  max-width: var(--max-width);
  min-height: 36px;
  margin: 0 var(--horizontal-margin);
  padding: 12px 15px 4px 15px;

  color: var(--text-color);
  text-align: left;
  font-size: 19px;
  font-weight: 500;

  .grey & {
    padding: 21px 15px 5px 15px;
    color: var(--dark-grey);
    font-size: 13px;
    font-weight: 400;
  }
}

.copy-wrapper {
  max-width: var(--max-width);
  margin: 2px var(--horizontal-margin);
  padding: 8px 10px 8px 15px;
  background-color: var(--block-bgcolor);
  border-radius: 8px;

  color: var(--text-color);
  line-height: 1.2;
  overflow: hidden;

  .text {
    text-align: justify;
    font-size: 17px;
    word-break: break-all;

    &::before {
      content: " ";
      display: inline-block;
      vertical-align: middle;
      min-height: 36px;
    }

    .copy {
      float: right;
      width: 20px;
      height: 20px;
      margin: 8px;

      @include hover;
    }
  }
}
</style>
