import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import registerServiceWorker from "./service-worker";

import "%/public.scss";

// 引入 ant-design-vue
import {
  Anchor,
  Breadcrumb,
  Button,
  Carousel,
  Col,
  Divider,
  Dropdown,
  Form,
  Input,
  InputNumber,
  Layout,
  Menu,
  Modal,
  Radio,
  Row,
  Select,
  Skeleton,
  Spin,
  Timeline,
  Tooltip,
  message,
} from "ant-design-vue";

registerServiceWorker(store);

const app = createApp(App)
  .use(router)
  .use(store)
  // 使用 ant-design
  .use(Anchor)
  .use(Breadcrumb)
  .use(Button)
  .use(Carousel)
  .use(Col)
  .use(Divider)
  .use(Dropdown)
  .use(Form)
  .use(Input)
  .use(InputNumber)
  .use(Layout)
  .use(Menu)
  .use(Modal)
  .use(Radio)
  .use(Row)
  .use(Select)
  .use(Skeleton)
  .use(Spin)
  .use(Timeline)
  .use(Tooltip)
  // 使用 vue-wechat-title
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  .use(require("vue-wechat-title"));

app.config.globalProperties.$message = message;

app.mount("#app");
