<template>
  <div class="container mp-page" :class="{ theme, grey }">
    <MpNavbar v-if="pageData.title" :title="pageData.title" />
    <component
      :is="`mp-${item.tag}`"
      :key="index"
      v-bind="getConfig(item)"
      v-for="(item, index) in pageData.content"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref, watch } from "vue";
import { useStore } from "vuex";
import MpCard from "./Card.vue";
import MpCopy from "./Copy.vue";
import MpDoc from "./Doc.vue";
import MpFooter from "./Footer.vue";
import MpGrid from "./Grid.vue";
import MpImg from "./Img.vue";
import MpIntro from "./Intro.vue";
import MpList from "./List.vue";
import MpMedia from "./Media.vue";
import MpNavbar from "./Navbar.vue";
import MpPhone from "./Phone.vue";
import MpSwiper from "./Swiper.vue";
import MpText from "./Text.vue";
import MpTitle from "./Title.vue";
import { getConfig, getPage } from "./utils";
import { PageConfig } from "./typings";

export default defineComponent({
  name: "MpPage",
  props: {
    // Page data
    page: {
      type: String,
      required: true,
      default: '[{"error":true}]',
    },
  },
  components: {
    MpCard,
    MpCopy,
    MpDoc,
    MpFooter,
    MpGrid,
    MpImg,
    MpIntro,
    MpList,
    MpMedia,
    MpNavbar,
    MpPhone,
    MpSwiper,
    MpText,
    MpTitle,
  },
  setup(props) {
    const store = useStore();
    const theme = ref("iOS");
    const pageData = computed(() =>
      getPage(JSON.parse(props.page) as PageConfig)
    );
    const grey = computed(() => pageData.value.grey || false);
    console.log(pageData);

    watch(pageData, () => {
      console.log(pageData);
      store.commit("imageList", pageData.value.images);
    });

    return { theme, grey, pageData, getConfig };
  },
});
</script>
<style lang="scss" scoped>
@import "./style/common";
@import "./style/lib";
@import "./style/theme";
</style>
