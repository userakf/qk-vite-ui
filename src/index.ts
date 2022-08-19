import { createApp } from 'vue'
import SmartyUI from './entry'

function bootstrap() {
    const app = createApp({
        template:`
        <JSXButton />
        `
    })
    app.use(SmartyUI)
    app.mount('#app')
}

bootstrap() 