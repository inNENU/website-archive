<!--
 * @Author: Mr.Hope
 * @LastEditors: Mr.Hope
 * @Description: BackTop Button
 * @Date: 2019-03-22 19:30:08
 * @LastEditTime: 2019-08-25 20:02:02
-->
<template>
  <transition name="myfade">
    <div @click="scrollTop" class="scrollTop" v-if="display">
      <Icon :component="backTopSvg" style="font-size: 32px; margin: -1px" />
    </div>
  </transition>
</template>
<script lang="ts">
import { defineComponent, markRaw, onMounted, ref } from "vue";
import Icon from "@ant-design/icons-vue";
import BackTopSvg from "|/icon/backToTop.svg";

export default defineComponent({
  name: "BackToTop",
  components: {
    Icon,
  },
  setup() {
    const display = ref(false);
    const backTopSvg = markRaw(BackTopSvg);

    const getDistance = (): number =>
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      window.pageYOffset;

    // Make the website scroll to the top
    const scrollTop = (): void => {
      let topDistance = getDistance();

      if (topDistance > 0) {
        window.requestAnimationFrame(scrollTop);
        window.scrollTo(0, Math.max(0, topDistance - 24));
      }
    };

    // Register event for the "backtop" button
    onMounted(() => {
      window.addEventListener("scroll", () => {
        display.value = getDistance() > 300;
      });
    });

    return {
      display,
      backTopSvg,
      scrollTop,
    };
  },
});
</script>
<style scoped>
.scrollTop {
  position: fixed;
  right: 20px;
  bottom: 80px;
  z-index: 3;
  width: 36px;
  height: 36px;
  background-color: #fff;
  border-radius: 50%;
}
</style>
