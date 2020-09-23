import { createStore } from "vuex";
import myMutation from "./mutation";
import myState from "./state";
import image from "./module/image";
import serviceWorker from "./module/service-worker";
import slide from "./module/slide";

export default createStore({
  state: myState,
  modules: {
    image,
    serviceWorker,
    slide,
  },
  mutations: myMutation,
});
