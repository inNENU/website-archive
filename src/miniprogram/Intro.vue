<template>
  <div class="intro-wrapper">
    <img class="background" :src="logo" />
    <div class="intro">
      <img class="icon" :src="logo" />
      <div class="name">{{ name }}</div>
      <div class="desc">{{ desc }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MpIntro",
  props: {
    name: { type: String, required: true },
    logo: { type: String, required: true },
    desc: String,
  },
});
</script>

<style lang="scss">
.intro-wrapper {
  position: relative;
  width: 100%;
  height: 50vw;
  overflow: hidden;

  .background {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    opacity: 0.6;

    filter: blur(8px);
  }

  .intro {
    display: flex;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .icon {
      width: 24%;
      max-width: 150px;
      height: 24%;
      max-height: 150px;
    }

    .name {
      margin: 4px 0;
      font-size: 18px;
      text-shadow: 0 0 1px var(--grey);
    }

    .desc {
      max-width: 80%;
      color: var(--grey3);
      font-size: 14px;
    }
  }
}
</style>
