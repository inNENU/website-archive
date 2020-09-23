<template>
  <AMenu :theme="theme" mode="horizontal" v-model="active">
    <AMenuItem key="logo" style="padding: 0 10px 0 20px">
      <Transition name="myfade">
        <Back id="backButton" v-if="backButtonDisplay" />
      </Transition>
      <Transition name="myfade">
        <img
          alt="in东师"
          id="logo"
          src="/assets/img/inNENU.png"
          v-if="logoDisplay"
        />
      </Transition>
    </AMenuItem>
    <AMenuItem
      class="d-none d-lg-inline"
      disabled
      key="logoName"
      style="padding: 0 10px 0 0"
    >
      <span class="text-black">in东师</span>
    </AMenuItem>
    <AMenuItem key="/">
      <RouterLink to="/"> <HomeOutlined />主页 </RouterLink>
    </AMenuItem>
    <AMenuItem key="/guide">
      <RouterLink to="/guide"> <BulbOutlined />新生攻略 </RouterLink>
    </AMenuItem>
  </AMenu>
</template>
<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { BulbOutlined, HomeOutlined } from "@ant-design/icons-vue";
import Back from "|/icon/back.svg";

export default defineComponent({
  name: "Nav",
  components: { Back, BulbOutlined, HomeOutlined },
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();

    const logoDisplay = ref(true);
    const backButtonDisplay = ref(false);
    let firstNavigate = true;

    // 获得主题
    const theme = computed(() => (store.state.nightmode ? "dark" : "light"));

    const active = computed({
      // 激活对应menu项
      get: () => route.path,
      // do nothing
      set: (newVal) => {
        if (newVal[0] === "logo") router.back();
      },
    });

    watch(
      () => route,
      () => {
        if (firstNavigate) {
          firstNavigate = false;
          setTimeout(() => {
            logoDisplay.value = false;
            setTimeout(() => {
              backButtonDisplay.value = true;
            }, 500);
          }, 3000);
        }
      }
    );

    return {
      active,
      backButtonDisplay,
      logoDisplay,
      theme,
    };
  },
});
</script>
<style lang="scss" scoped>
#nav {
  position: fixed;
  top: 0px;
  z-index: 100;
  width: 100vw;
  @media (max-width: 992px) {
    line-height: 38.6px;
  }
}

#backButton {
  margin-right: 0;
}

#logo {
  width: 18.4px;
  height: 18.4px;
  margin: 0 -2.2px;
}
</style>
