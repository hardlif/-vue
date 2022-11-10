import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// elementUI引入
import ElementPlus from 'element-plus'

import './assets/main.css'
// 引入iconfont css
import "./assets/iconfont/iconfont.css"

//引入v-md-editor的markdown编辑器
import VMdEditor from '@kangc/v-md-editor/lib/codemirror-editor';
import '@kangc/v-md-editor/lib/style/codemirror-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs
import hljs from 'highlight.js';

// codemirror 编辑器的相关资源
import Codemirror from 'codemirror';
// mode
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/vue/vue';
// edit
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/matchbrackets';
// placeholder
import 'codemirror/addon/display/placeholder';
// active-line
import 'codemirror/addon/selection/active-line';
// scrollbar
import 'codemirror/addon/scroll/simplescrollbars';
import 'codemirror/addon/scroll/simplescrollbars.css';
// style
import 'codemirror/lib/codemirror.css';
// highlight 的样式，依赖包，组件
// import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/styles/androidstudio.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'
//引入elementui图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

VMdEditor.Codemirror = Codemirror;
VMdEditor.use(githubTheme, {
  Hljs: hljs,
});



const app = createApp(App)


app.use(createPinia())
app.use(router)
// 使用elementUI
app.use(ElementPlus, { size: 'small', zIndex: 3000 })    
// 使用v-md-editor
app.use(VMdEditor);
//注册代码高亮组件
app.use(hljsVuePlugin)
app.mount('#app')
// 注册elementui图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
