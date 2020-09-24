<template>
  <div class="container mp-page" :class="{ theme, grey }">
    <MpNavbar v-if="pageData.title" :title="pageData.title" />
    <component
      v-for="(item, index) in pageData.content"
      :key="index"
      :is="`mp-${item.tag}`"
      v-bind="getConfig(item)"
    />
    <MpFooter
      v-if="pageData.footer !== false"
      v-bind="getFooterConfig(pageData)"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref, watch } from "vue";
import { useStore } from "vuex";
import MpCard from "../components/Card.vue";
import MpCopy from "../components/Copy.vue";
import MpDoc from "../components/Doc.vue";
import MpFooter from "../components/Footer.vue";
import MpGrid from "../components/Grid.vue";
import MpImg from "../components/Img.vue";
import MpIntro from "../components/Intro.vue";
import MpList from "../components/List.vue";
import MpMedia from "../components/Media.vue";
import MpNavbar from "../components/Navbar.vue";
import MpPhone from "../components/Phone.vue";
import MpSwiper from "../components/Swiper.vue";
import MpText from "../components/Text.vue";
import MpTitle from "../components/Title.vue";
import { getConfig, getFooterConfig, getPage } from "../utils";
import { PageConfig } from "../typings";

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

    return { theme, grey, pageData, getConfig, getFooterConfig };
  },
});
</script>
<style lang="scss" scoped>
@import "../style/common";
@import "../style/lib";
@import "../style/theme";
</style>
