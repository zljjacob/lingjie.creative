// 当页面滚动时显示或隐藏按钮
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
}

// 平滑滚动到页面顶部
function scrollToTop() {
  // 计算滚动距离，使滚动更平滑
  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 16); // 调整除数来控制滚动速度，这里的 8 是速度因子
    }
  };
  scrollToTop();
}




// MarkdownLoader.js
class MarkdownLoader {
  constructor(url, targetElementId) {
      this.url = url;
      this.targetElementId = targetElementId;
  }

  async loadAndConvert() {
      return new Promise((resolve, reject) => {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', this.url, true);
          xhr.onreadystatechange = () => {
              if (xhr.readyState === 4) {
                  if (xhr.status === 200) {
                      var markdownText = xhr.responseText;
                      var converter = new showdown.Converter({
                          // extensions: ['mathjax'],
                          headerIds: true,
                          tables: true,
                          ghCompatibleHeaderId: true,
                      });

                      var htmlContent = converter.makeHtml(markdownText);

                      htmlContent = htmlContent.replace(/(?!\$\$)\$(.*?)\$/g, '<span class="math-inline">\\($1\\)</span>');
                    
                      document.getElementById(this.targetElementId).innerHTML = htmlContent;
                      resolve(htmlContent); 
                      this.highlightCodeBlocks(); 
                  } else {
                      reject(xhr.statusText);
                  }
              }
          };
          xhr.send();
      });
  }

  highlightCodeBlocks() {
      hljs.highlightAll();
      MathJax.typeset();
  }
}

