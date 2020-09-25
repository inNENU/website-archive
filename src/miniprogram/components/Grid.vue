<template>
  <div v-if="header !== false" class="grid-head" v-text="header" />
  <div class="grid-wrapper">
    <div
      v-for="item in content"
      :key="item.text"
      class="grid"
      :class="`bg-${item.color}`"
      @click="navigate(item.url)"
    >
      <img v-if="item.icon" class="icon" :src="getIcon(item.icon)" />
      <div class="text" v-text="item.text" />
      <div class="name" v-text="item.name" />
    </div>
  </div>
  <div v-if="footer" class="grid-foot" v-text="footer" />
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { getIcon } from "@/miniprogram/utils";
import { GridComponentItemComfig } from "@/miniprogram/typings";

export default defineComponent({
  name: "BaseGrid",
  props: {
    header: { type: [String, Boolean], default: "" },
    content: {
      type: Array as PropType<GridComponentItemComfig[]>,
      required: true,
    },
    footer: { type: String, default: "" },
  },
  setup() {
    return { getIcon };
  },
});
</script>

<style lang="scss">
@import "../style/hover";

.grid-head {
  min-height: 36px;
  padding: 12px 15px 4px 15px;

  color: var(--text-color);
  text-align: left;
  font-size: 19px;
  font-weight: 500;

  @media (min-width: 768px) {
    min-height: 38px;
    font-size: 21px;
  }

  .grey & {
    min-height: 37px;
    margin: 0 10px;
    padding: 23px 15px 5px 15px;

    color: var(--dark-grey);
    font-size: 13px;

    @media (min-width: 768px) {
      margin: 0 15px;
    }
  }
}

.grid-wrapper {
  display: flex;
  flex-wrap: wrap;

  .grid {
    @include hover;
  }
}

.grid-foot {
  min-height: 14px;
  padding: 3px 15px;

  color: #999;
  text-align: left;
  font-size: 14px;
}

@import "../style/grid/Android";
@import "../style/grid/iOS";
@import "../style/grid/NENU";
@import "../style/grid/weui";
</style>
