import { App } from "vue";
import { Button } from './button'

import 'uno.css'
// 导出单独组件
export { Button };

// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    [Button].forEach((c) => app.component(c.name,c))
  },
};