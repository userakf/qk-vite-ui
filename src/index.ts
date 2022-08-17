import { createApp } from 'vue'
import SmartyUI from './entry'

import SFButton from './button/Button'
import JSXButton from './JSXButton'
import SFCButton from './SFCButton.vue'

function bootstrap() {
    const app = createApp(SFButton)
    app.use(SmartyUI)
    app.mount('#app')
}

bootstrap() 