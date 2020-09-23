<template>
  <ALayout id="app">
    <!-- <ALayout hasSider="true" id="app"> -->
    <!-- <my-slide id="aside" v-if="$store.state.slide.list.length" /> -->
    <ALayout id="body">
      <MyNav id="nav" />
      <ALayout-content id="content">
        <RouterView v-slot="{ Component }">
          <!-- <Transition :name="transitionName"> -->
          <KeepAlive :max="10">
            <component v-if="$route.meta.title === false" :is="Component" />
            <component
              v-else
              :is="Component"
              v-wechat-title="$route.meta.title || 'in 东师'"
            />
          </KeepAlive>
          <!-- </Transition> -->
        </RouterView>
      </ALayout-content>
      <BackToTop />
      <MyFooter id="footer" />
    </ALayout>
    <ImageViewer />
  </ALayout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import BackToTop from "#/BackToTop.vue";
import ImageViewer from "#/ImageViewer.vue";
import MyNav from "#/Nav.vue";
import MyFooter from "#/Footer.vue";

export default defineComponent({
  name: "App",
  components: {
    BackToTop,
    ImageViewer,
    MyNav,
    MyFooter,
  },
});
</script>
<style lang="scss">
/* App.vue主布局 */
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // 保证 lg 以上屏幕 footer 的固定效果
  @media (min-width: 992px) {
    background-color: #fff;
    margin-bottom: 192px;
  }
}

// lg 以上屏幕 nav 固定
#body {
  @media (min-width: 992px) {
    padding-top: 48px;
  }
  @media (max-width: 992px) {
    padding-top: 40px;
  }
}

/* 内容主布局 */
#content {
  /* 背景色配色 */
  background-color: #fff;
  /* 防止内部元素无法撑开 content */
  min-height: auto;
  /* 侧边栏展开显示配合 */
  @media (max-width: 992px) {
    width: 100vw;
  }
}
</style>
