<!--
 * @Author: Mr.Hope
 * @LastEditors: Mr.Hope
 * @Description: Base Image
 * @Date: 2019-02-27 00:00:08
 * @LastEditTime: 2019-08-25 21:11:18
-->
<template>
  <div v-if="error" class="status-wrapper">
    <Error class="error" />
    <span>图片加载失败</span>
  </div>
  <div v-else-if="!loaded" class="status-wrapper">
    <Loading class="loading" />
    <span>加载中...</span>
  </div>
  <img
    class="img"
    :style="loaded ? '' : 'height: 0px;'"
    :src="src"
    @click="viewImage"
  />
  <div v-if="desc" class="img-desc" v-text="`▲ ${desc}`" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Loading from "./icon/loading.svg";
import Error from "./icon/error.svg";
import { useStore } from "vuex";

export default defineComponent({
  name: "MpImg",
  props: {
    // Image link address
    src: { type: String, required: true },
    // Image description
    desc: String,
  },
  components: {
    Loading,
    Error,
  },
  setup(props) {
    const store = useStore();
    // Image load status
    const loaded = ref(false);
    const error = ref(false);

    const viewImage = (): void => {
      store.commit("imageUrl", props.src);
    };

    onMounted(() => {
      const img = new Image(); // Create new Image instance

      img.src = props.src;

      // Image has been cached
      if (img.complete) {
        loaded.value = true;

        return;
      }

      // Error when loading Image, show error message
      img.onerror = (): void => {
        error.value = true;
      };

      // Sucess loading Image, display this Image now
      img.onload = (): void => {
        loaded.value = true;

        // eslint-disable-next-line @typescript-eslint/no-empty-function
        img.onload = (): void => {};
      };
    });

    return {
      loaded,
      error,
      viewImage,
    };
  },
});
</script>
<style lang="scss" scoped>
.status-wrapper {
  display: flex;

  width: calc(100% - 40px);
  max-width: 517px;
  height: 200px;
  margin: 4px auto;
  background-color: var(--border-color);
  border-radius: 8px;

  color: var(--grey);
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .error {
    width: 32px;
    height: 32px;
    margin-bottom: 5px;
  }

  .loading {
    width: 60px;
    height: 60px;
    margin-bottom: 6px;
  }
}

.img {
  width: calc(100% - 40px);
  max-width: 517px;
  margin: 4px auto;
  border-radius: 18px;
}

.img-desc {
  margin: -2px auto 4px;
  padding: 0 20px;

  color: var(--grey3);
  text-align: center;
  font-size: 12px;
  font-weight: 300;
}
</style>
