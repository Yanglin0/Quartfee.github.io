1. HTML是超文本标记语言（HyperText Markup Language）的缩写。文件后缀名为<font color=red>.html</font>。用于定义网页内容的含义和结构。  
2. 学习过程使用vscode编辑器，创建HTML文件时，可尝试在面板输入<font color=red>!</font>即可完成如下的内容输入。  

```html
    <!DOCTYPE html>    <!-- 声明为HTML5文档-->
    <html lang="en">   <!-- 元素是 HTML 页面的根元素-->
    <head>             <!--元素包含了文档的元（meta）数据，如 <meta charset="utf-8"> 定义网页编码格式为 utf-8。-->
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title> <!-- 描述了文档的标题-->
    </head>
    <body>
    <!--body元素包含了可见的页面内容-->
    </body>
    </html>
```

通过右键页面空白处，(VScode 安装<kbd>Live Server</kbd>插件)点击<font color=red>Open with Live Server</font>即可在浏览器中打开html文件。  
3. HTML标记元素
   HTML使用“标记”（markup）来注明文本、图片和其它内容。如下为各个“元素”的作用及使用。

* **标题**  
  HTML标题通过`<h1>~<h6>` 标签来定义

  ```html
    <h1>标题一</h1>
    <h2>标题二</h2>
    <h3>标题三</h3>
  ```

* **段落**
  通过标签`<p>`定义

  ```html
    <p>段落</p>
  ```

* **链接**
  通过标签`<a>`来定义

  ```html
    <a href="https://www.baidu.com/" target="_blank">百度</a>
    <!-- 在href属性中指定链接 ,target属性为_blank表示在新页面打开链接（默认是当前页面打开即_self）-->
  ```  

  当需要类似书签的功能，即当前位置，跳转回某个指定位置，可采用<font color=red>锚点</font>实现。如下所示：

  ```html
    <!--使用id属性生成某元素的锚点，再使用超链接href指向该锚点，id必须是唯一的，超链接中需要#符号-->
    <h2 id="C4">第四章 论零号病人的重要性</h2>
    <!-- 中间为其它内容 -->
    <a href="#C4">跳到第四章</a>
  ```

* **图像**
  通过标签`<img>`定义

  ```html
    <img src="https://mdbootstrap.com/img/logo/mdb192x192.jpg" alt="MDB Logo" width="200" height="200"> 
  ```

  `src`属性要显示为图片文件的位置URL，即图片文件的路径，`alt`属性当获取图片出现问题是显示的文字（占位符），还可为图片指定高宽度（可能导致图片变形）

* **表格**
  通过标签`<table>`定义。`<tr>`标签定义行，`<td>`标签定义每行的单元格，`<th>`定义表头，

  ```html
    <table border="1">  <!--border设置边框，当border='0'时，没有边框-->
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
        </tr>
        <tr>
            <td>row 1, cell 1</td>
            <td>row 1, cell 2</td>
        </tr>
        <tr>
            <td>row 2, cell 1</td>
            <td>row 2, cell 2</td>
        </tr>
    </table>
  ```
  
* **列表**
  HTML支持有序、无序和定义列表：
  无序列表使用`<ul>`
  
  ```html
    <ul>
        <li>Coffee</li>
        <li>Milk</li>
    </ul>
    <!--表示出来为小黑圆圈-->
  ```

  有序列表始于`<ol>`，每个列表项始于`<li>`

  ```html
    <ol>
        <li>Coffee</li>
        <li>Milk</li>
    </ol>
  ```

  自定义列表以`<dl>`标签开始。每个自定义列表项以`<dt>`开始，每个自定义列表项的定义以`<dd>`开始。

* **表单**`<form>`标签

  ```html
  <form>
    <!-- 文本框，注意有 placeholder 提示符 -->
  用户名：<br>
  <input type="text" name="name" placeholder="请输入用户名" required><br>
  <!-- 密码框 -->
  密码：<br>
  <input type="password" name="ps" placeholder="请输入密码" required><br>
  <!-- 表单提交/重置按钮，将表单中的数据取消或传输给服务器端进行处理 -->
  <input type="submit" value="提 交">
  <input type="reset" value="重 置">
  </form>
  ```

  `input`标签用于输入，type属性可以定义为text,password,submit,reset,date等，根据实际需要进行定义。  

4. 区块元素和内联元素  
      块级元素在浏览器显示时，通常会以新行开始，比如`<h1>`,`<p>`,`<ul>`,`<table>`,`<pre>`,`<div>`,`<table>`等。内联元素一个接一个进行显示，不会新起一行，比如`<span>`,`<input>`,`<td>`,`<a>`,`<img>`,`<b>`,`<a>`等。
5. 特殊字符
   在HTML中，某些字符是预留的。不能使用小于号(<)和大于号(>)，这是因为浏览器会误认为它们是标签。如果要正确显示，则需要在HTML源代码中使用字符实体，可参考<a href="https://www.runnoob.com/tags/ref-entities.html" target="_blank">ISO-8859-1 字符实体手册</a>

   ```html
    <p>有多&nbsp;&nbsp;&nbsp;远，滚&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;多远！</p>
    <hr>
    <h2>test.html</h2>
    <pre>
      &lt;h1&gt;这是个一级标题&lt;/h1&gt;
      &lt;p&gt;这是一个段落&lt;p&gt;
      &lt;a href="https://twitter.com/"&gt;眼见何事，情系何处，身处何方，心思何人&lt;/a&gt;
    </pre>
   ```  
