import { createApp } from 'vue'
import QkUi from './entry'

function bootstrap() {
    const app = createApp({
        template:`
        <SButton>JSX按钮</SButton>
        `
    })
    app.use(QkUi)
    app.mount('#app')
}

bootstrap() 