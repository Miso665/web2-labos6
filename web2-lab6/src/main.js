import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import CarCard from "./components/CarCard.vue";
import SmallContainer from "./components/SmallContainer.vue";
import EuroConverter from "./components/EuroConverter.vue";
import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("car-card", CarCard);
app.component("euro-converter", EuroConverter);
app.component("small-container", SmallContainer);
app.mount("#app");
