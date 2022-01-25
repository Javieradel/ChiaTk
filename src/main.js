import { createApp } from 'vue'
import router from './router'
import store from './store';
import api from './api';
import { Quasar, Notify, BottomSheet } from 'quasar';
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

import App from './App.vue'

const myApp = createApp(App)

myApp.use(store)
myApp.use(router)

myApp.use(Quasar, {
    plugins: {
        Notify,
        BottomSheet
    }
})
myApp.mount('#app')