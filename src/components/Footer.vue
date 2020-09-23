<template>
  <ALayoutFooter :class="slide ? 'withSlide' : ''">
    <ARow align="middle" justify="space-around" type="flex">
      <ACol :lg="8" :xs="24">
        <img alt="innenu" class="logo" src="/assets/img/inNENU.png" />
      </ACol>
      <ACol :lg="8" :xs="12">
        <h3>in 东师</h3>
        <div class="text">辽 ICP 备 18007023 号</div>
        <div class="text">维护者: Mr.Hope</div>
      </ACol>
      <ACol :lg="8" :xs="12">
        <h3>关于我们</h3>
        <div class="text">
          <a href="https://hope-studio.innneu.com" target="blank"
            >关于希望工作室</a
          >
        </div>
        <div class="text">
          <a href="https://mrhope.site/about/" target="blank">关于 Mr.Hope</a>
        </div>
      </ACol>
    </ARow>
  </ALayoutFooter>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Footer",
  setup() {
    const store = useStore();
    // 动态改变页脚样式
    const slide = computed(() => store.state.slide.list.length > 0);

    return { slide };
  },
});
</script>
<style lang="scss" scoped>
/* 改变footer底色 */
#footer {
  background-color: #343a40;
  // 保证侧边栏展开时显示正常
  width: 100vw;

  text-align: center;

  // 保证 lg 以上屏幕 footer 的固定效果
  @media (min-width: 992px) {
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    z-index: -1;
  }

  // 保证有侧边栏的屏幕的显示效果
  &.withSlide {
    @media (min-width: 992px) {
      width: calc(100vw - 200px);
      left: 200px;
    }
  }

  .logo {
    width: 50px;
    height: 50px;
  }

  h3 {
    color: #999;
  }

  .text {
    color: #999;
    font-size: 14px;
  }
}
</style>
