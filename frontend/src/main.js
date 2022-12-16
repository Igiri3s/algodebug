import { createApp } from "vue";
import App from "@/App.vue";
import mitt from "mitt";
import Vue3Sanitize from "vue-3-sanitize";
import VueKonva from "vue-konva";
import store from "@/store";

// Vuetify
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@/javascript/prototypes/Map";
import "@/javascript/prototypes/String";

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: "light",
    },
    icons: {
        defaultSet: "mdi",
        aliases,
        sets: {
            mdi,
        },
    },
});

const app = createApp(App);
app.config.globalProperties.emitter = mitt();

app.use(Vue3Sanitize);
app.use(VueKonva);
app.use(store);
app.use(vuetify);
app.mount("#app");
