import { createApp } from 'vue'
import SmartyUI from './entry'

import SFButton from './button'
import JSXButton from './JSXButton'
createApp({
    template: `<JSXButton />`
}).use(SmartyUI).mount('#app')