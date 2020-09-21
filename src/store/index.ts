import { createStore } from "vuex";
import myMutation from "./mutation";
import myState from "./state";
import image from "./module/image";
import serviceWorker from "./module/service-worker";

export default createStore({
  state: myState,
  modules: {
    image,
    serviceWorker,
  },
  mutations: myMutation,
});
