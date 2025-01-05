import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "video.js/dist/video-js.css";
import "./style.css";
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App);

app.use(Toast, {
  position: POSITION.TOP_RIGHT,
  timeout: 5000,
  hideProgressBar: false,
  closeOnClick: true,
});

app.use(store);
app.use(router);
app.mount("#app");