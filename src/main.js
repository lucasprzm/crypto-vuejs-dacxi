import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";
import router from "./routes";

createApp(App).use(router).mount("#app");
