import { createApp } from 'vue'
import SmartyUI from './entry'

import SButton from './button/Button'
import JSXButton from './JSXButton'
import SFCButton from './SFCButton.vue'

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