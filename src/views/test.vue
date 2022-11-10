
<template>
                <el-icon><CopyDocument /></el-icon>

                    <div class="editor-area">

                    <div class="m-text">
                        <textarea v-model="mdValue"></textarea>
                    </div>
          

                    <div class="m-lr boxshadow">
                        <div class="markdown-body" id="markdown" v-html="htmlValue"></div>
                    </div>

                    </div>
                    <input type="color" name="hehe">
                    <input type="button" @click="logHtml">

</template>

<script>
  import { ref } from 'vue';
  import { marked } from "marked"
  import { watch } from "vue"

  export default {
    
    setup() {

      let mdValue = ref("")
      let htmlValue = ref("")
      async function md2html(mdStr) {
            let html = await marked.parse(mdStr)
            return html;
        }
      function logHtml(){
            // let str = "# 一级标题 \n```int main()```";
            
            // console.log("解析后的结果"+marked.parse(str));
            console.log(htmlValue.value);
        }
      watch([mdValue], async () => {
        let md = await md2html(mdValue.value);
        htmlValue.value = md;
      });
      return {
        htmlValue,
        mdValue,
        logHtml
      }
    }

  }
</script>