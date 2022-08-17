import { App } from "vue";
import MyButton from "./button";
import JSXButton from "./JSXButton";

// 导出单独组件
export { MyButton, JSXButton };

// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    app.component(MyButton.name, MyButton);
    app.component(JSXButton.name, JSXButton);
  },

};