<template>
  <!-- 段落标题 -->
  <div v-if="heading" class="paragraph-header" v-text="heading" />
  <!-- 段落主体 -->
  <div class="paragraph">
    <template v-if="type === 'ol'">
      <div
        v-for="(item, index) in text"
        :key="item"
        class="list"
        :style="myStyle"
      >
        <div class="head" v-text="`${index + 1}.`" />
        <span class="text" v-text="decode(item)" />
      </div>
    </template>
    <template v-else-if="type === 'ul'">
      <div v-for="item in text" :key="item" class="list" :style="myStyle">
        <div class="head">·</div>
        <span class="text" v-text="decode(item)" />
      </div>
    </template>
    <template v-else>
      <div
        class="text"
        v-for="item in text"
        :key="item"
        :style="myStyle"
        v-text="decode(item)"
      />
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { decode } from "./utils";

type TextType = "ol" | "ul" | "p" | "";

export default defineComponent({
  name: "MpText",
  props: {
    type: String as PropType<TextType>,
    heading: [String, Boolean],
    text: { type: Array as PropType<string[]>, default: (): string[] => [] },
    myStyle: [String, Object] as PropType<string | Record<string, string>>,
  },
  setup() {
    return {
      decode,
    };
  },
});
</script>
<style lang="scss" scoped>
.paragraph-header {
  max-width: var(--max-width);
  min-height: 36px;
  margin: 0 var(--paragraph-horizontal-margin);
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

.paragraph {
  max-width: var(--max-width);

  margin: 0 var(--paragraph-horizontal-margin);
  padding: 0 15px;

  color: var(--text-color);
  text-align: justify;
  font-size: 16px;
  line-height: 1.6;
  word-break: break-all;

  word-wrap: break-word;

  @media (min-width: 768px) {
    font-size: 17px;
  }

  .grey & {
    position: relative;

    padding: 10px 15px;
    background-color: var(--block-bgcolor);
    border-radius: 8px;

    text-align: left;
    font-size: 17px;
    overflow: hidden;
  }

  .text {
    word-wrap: break-word;
  }

  .list {
    display: flex;

    .head {
      padding: 0 0.5em;
      flex-shrink: 0;

      .grey & {
        padding: 0 0.5em 0 0;
      }
    }
  }
}

// @import "iOS.wxss";
// @import "Android.wxss";
// @import "weui.wxss";
</style>
