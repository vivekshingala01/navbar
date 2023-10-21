import { createApp } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'
import App from './App.vue'
import './assets/main.css'
import config from '../formkit.config.js'



createApp(App).use(plugin, defaultConfig(config)).mount('#app')
// remember, each Vue plugin needs its own .use()
// .use(router).use(plugin2)