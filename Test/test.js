function convertMarkdownMathToHTML(markdownText) {
    // 替换行内公式
    markdownText = markdownText.replace(/\$(.*?)\$/g, '<span class="math-inline">\\($1\\)</span>');
    markdownText = markdownText.replace(/\\\((.*?)\\\)/g, '<span class="math-inline">\\($1\\)</span>');

    // 替换块级公式
    markdownText = markdownText.replace(/\$\$(.*?)\$\$/g, '<div class="math-block">\\[$1\\]</div>');
    markdownText = markdownText.replace(/\\\[(.*?)\\\]/g, '<div class="math-block">\\[$1\\]</div>');

    return markdownText;
}

// 示例 Markdown 文本
var markdownText = `
这是一个行内公式：$E=mc^2$

这是一个块级公式：

$$
\\frac{1}{n^{2}}
$$`;

// 转换 Markdown 中的数学公式为 HTML 格式
var htmlText = convertMarkdownMathToHTML(markdownText);

// 输出转换后的 HTML
console.log(htmlText);