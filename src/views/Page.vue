<template>
  <keep-alive :max="5">
    <MpPage v-if="page" :page="page" :key="url" />
  </keep-alive>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import axios from "axios";
import MpPage from "@/miniprogram/Page.vue";
import { Modal } from "ant-design-vue";

export default defineComponent({
  name: "Page",
  components: { MpPage },
  setup() {
    const route = useRoute();

    // const { folder, pageName } = route.params;

    const page = ref("");

    const loadPage = (routePath: string): Promise<boolean> => {
      const path = routePath.replace(/^\//u, "");

      // 获得json文件
      return axios
        .post("https://mp.innenu.com/service/page.php", {
          path,
        })
        .then((response) => {
          try {
            // 设置页面数据
            if (typeof response.data === "object") {
              page.value = JSON.stringify(response.data);

              return true;
            } else throw response.data;
          } catch (err) {
            Modal.confirm({
              title: "页面解析失败",
              content: "JSON 解析失败，请汇报给Mr.Hope!",
              autoFocusButton: "cancel",
              cancelText: "确定",
              okText: "汇报",
              okType: "danger",
              onOk: () => {
                window.open(
                  "http://wpa.qq.com/msgrd?v=3&uin=1178522294&site=qq&menu=yes"
                );
              },
            });

            return false;
          }
        });
    };

    // change docPath
    onBeforeRouteUpdate((to, _from, next) => {
      const paths = to.path.split("/");
      if (paths[1] === "guide" || paths[1] === "page" || paths[1] === "intro")
        loadPage(to.path).then((doNavigate) =>
          // invoke Hook
          next(doNavigate)
        );
      else next();
    });

    console.log(route.path);

    loadPage(route.path).then(() => console.log(page));

    return { page, url: route.path };
  },
});
</script>
