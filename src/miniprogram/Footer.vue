<template>
  <div class="footer-wrapper">
    <span v-if="descText" decode>{{ descText }}</span>
    <div class="info">
      <span v-if="authorText" decode>作者: {{ authorText }}</span>
      <span v-if="timeText" decode>最后更新于: {{ timeText }}</span>
    </div>

    <div class="footer">in 东师，就用 in 东师</div>
    <div class="copyright">Copyright © 2017-2020 HopeStudio</div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { decode } from "./utils";

export default defineComponent({
  name: "MpFooter",
  props: {
    // Description text
    desc: String,
    // Author information
    author: { type: String, default: "Mr.Hope" },
    // Last edit time
    time: String,
  },
  setup(props) {
    const authorText = computed(() => decode(props.desc || ""));
    const descText = computed(() => decode(props.author || ""));
    const timeText = computed(() => decode(props.time || ""));

    return { authorText, descText, timeText };
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
