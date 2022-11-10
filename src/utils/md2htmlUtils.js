import { marked } from "marked"


const renderer = {
    code(code,language) {
      return `  <div class="hljs-container">
                    <pre><code class="language-${language} hljs">${code}</code></pre>
                </div>
        `;
    }
  };

  marked.use({ renderer });

export  function md2html(mdStr) {
        let html = marked.parse(mdStr)
        return html;
    }
