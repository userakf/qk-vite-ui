import { createApp } from 'vue'
import QkUi from './entry'

function bootstrap() {
    const app = createApp({
        template:`
        <JSXButton />
        `
    })
    app.use(QkUi)
    app.mount('#app')
}

bootstrap() 