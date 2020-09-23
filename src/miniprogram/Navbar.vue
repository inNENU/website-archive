<template>
  <div class="navbar" v-text="title" v-wechat-title="title" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MpNavbar",
  props: {
    /** Title of displayed page */
    title: { type: String, required: true },
  },
});
</script>

<style>
.navbar {
  color: var(--grey3);
  font-size: 24px;
  line-height: 30px;
  font-weight: bold;
  overflow: hidden;
  padding: 10px;
  max-width: 600px;
  margin: 0 auto 16px auto;
  border-bottom: 1px solid #000;
}
</style>
