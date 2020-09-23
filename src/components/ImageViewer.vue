<!--
 * @Author: Mr.Hope
 * @Date: 2019-05-16 15:35:49
 * @LastEditors: Mr.Hope
 * @LastEditTime: 2019-08-25 21:19:17
 * @Description: Image Viewer
-->
<template>
  <div ref="viewer">
    <template v-for="(item, index) in list">
      <img
        :alt="item.title"
        :key="`item${index}`"
        :src="item.url"
        v-if="typeof item === 'object'"
        v-show="false"
      />
      <img :key="index" :src="item" v-else v-show="false" />
    </template>
  </div>
</template>
<script lang="ts">
import Viewer from "viewerjs";
import { computed, defineComponent, onUnmounted, nextTick, watch } from "vue";
import { useStore } from "vuex";

// 引入ViewJS样式
import "viewerjs/dist/viewer.css";

let viewer: Viewer;

export default defineComponent({
  name: "ImageViewer",
  setup(_props, { emit }) {
    const store = useStore();
    // 图片列表
    const list = computed(() => store.state.image.list);

    // 图片索引值
    const index = computed(() => store.state.image.index);

    // 展示状态
    const display = computed(() => store.state.image.display);

    // 显示 immediate = 是否立即显示
    const show = (immediate?: boolean): void => {
      viewer.show(immediate);
    };

    // 隐藏 immediate = 是否立即隐藏
    const hide = (immediate?: boolean): void => {
      viewer.hide(immediate);
    };

    // 切换到图像到索引的图像位置，如果未显示灯箱，将首先显示灯箱。index = 索引
    const view = (imageIndex: number): void => {
      viewer.view(imageIndex);
    };

    // 初始化Viewer
    Viewer.setDefaults({
      navbar: 1,
      toolbar: {
        prev: 1,
        play: 1,
        next: 1,
        reset: 1,
      },
      interval: 3000,
      zIndex: 200,
      shown: (event) => {
        console.log("show");
        // 显示事件-结束
        store.commit("displayImage", true);
        emit("shown", event);
        emit("update:visible", true);
      },
      hidden: (event) => {
        console.log("hide");
        // 隐藏事件-结束
        store.commit("displayImage", false);
        emit("hidden", event);
        emit("update:visible", false);
      },
      viewed: (event) => {
        // 切换事件-结束
        store.commit("imageIndex", event.detail.index);
        emit("viewed", event);
      },
    });

    watch(list, () => {
      nextTick(() => {
        viewer.update();
      });
    });

    watch(display, (newVal) => {
      if (newVal) view(index.value);
      else hide();
    });

    watch(index, () => {
      if (display.value) view(index.value);
    });

    // 销毁Viewerjs 实例
    onUnmounted(() => {
      viewer.destroy();
    });

    return { display, list, index, show, hide, view };
  },
  mounted() {
    viewer = new Viewer(this.$refs.viewer as Element);
    if (this.display) this.show();
  },
});
</script>
