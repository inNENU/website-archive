<template>
  <div class="footer-wrapper">
    <span v-if="desc" v-text="decode(desc)" />
    <div class="info">
      <span v-if="author" v-text="`作者: ${decode(author)}`" />
      <span v-if="time" v-text="`最后更新于: ${decode(time)}`" />
    </div>
    <div class="footer">in 东师，就用 in 东师</div>
    <div class="copyright">Copyright © 2017-2020 HopeStudio</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { decode } from "@/miniprogram/utils";

export default defineComponent({
  name: "MpFooter",
  props: {
    // Description text
    desc: { type: String, default: "" },
    // Author information
    author: { type: String, default: "Mr.Hope" },
    // Last edit time
    time: { type: String, default: "" },
  },
  setup() {
    return { decode };
  },
});
</script>

<style lang="scss">
.footer-wrapper {
  max-width: var(--max-width);
  margin: auto auto 0 auto;
  padding: 10px 15px 8px;
  padding-bottom: env(safe-area-inset-bottom);

  color: #86868b;
  text-align: left;
  font-size: 12px;
  line-height: 1.33337;

  letter-spacing: -0.01em;

  @media (min-width: 768px) {
    font-size: 13px;
  }

  .info {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .footer {
    display: flex;

    margin-top: 10px;

    font-size: 10px;
    font-weight: 300;
    line-height: 1.6;
    justify-content: center;
    align-items: center;

    letter-spacing: 1px;

    @media (min-width: 768px) {
      font-size: 12px;
    }
  }

  .copyright {
    text-align: center;
  }
}
</style>
