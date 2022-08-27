import { createApp } from 'vue'
import QkUi from './entry'

function bootstrap() {
    const app = createApp({
        template:`
        <SButton />
        `
    })
    app.use(QkUi)
    app.mount('#app')
}

bootstrap() 