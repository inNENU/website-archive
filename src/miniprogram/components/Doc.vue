<template>
  <div class="doc-wrapper" @click="view">
    <component :is="icon" class="doc-icon" />
    <div class="name" v-text="name" />
    <template v-if="downloadable !== false">
      <View v-if="icon === 'pdf'" class="view" @click.stop="view" />
      <Download v-else class="download" @click.stop="view" />
    </template>
  </div>
</template>

<script lang="ts">
import message from "%/message";
import { defineComponent } from "vue";
import Doc from "../assets/doc.svg";
import Document from "../assets/document.svg";
import Gif from "../assets/gif.svg";
import Jpg from "../assets/jpg.svg";
import Pdf from "../assets/pdf.svg";
import Png from "../assets/png.svg";
import Ppt from "../assets/ppt.svg";
import Xls from "../assets/xls.svg";
import Download from "../assets/download.svg";
import View from "../assets/view.svg";

export default defineComponent({
  name: "MpDoc",
  components: {
    Doc,
    Document,
    Gif,
    Jpg,
    Pdf,
    Png,
    Ppt,
    Xls,
    Download,
    View,
  },
  props: {
    name: { type: String, required: true },
    icon: { type: String, default: "document" },
    downloadable: { type: Boolean, default: true },
    url: { type: String, required: true },
  },
  setup(props) {
    const view = (): void => {
      if (props.downloadable === false) message.warn("该文件不许查看");
      else window.open(props.url);
    };

    return { view };
  },
});
</script>

<style lang="scss">
@import "../style/hover";

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

  .download,
  .view {
    width: 26px;
    height: 26px;
    margin: 0 4px;
    border-radius: 13px;
    flex-shrink: 0;
    overflow: hidden;

    @include hover;
  }
}
</style>
