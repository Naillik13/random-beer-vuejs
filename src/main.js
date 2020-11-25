import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faBeer, faSearch, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import "./assets/style/main.css"

import router from "../router"

import store from '../store'

library.add(faHome, faBeer, faSearch, faHeart);

const app = createApp(App);

app.use(router);

app.use(store);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
