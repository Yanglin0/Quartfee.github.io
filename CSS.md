1. 什么是CSS  
   CSS是级联样式表的缩写，HTML用于撰写页面内容，CSS则用于呈现内容，涉及到页面布局，元素位置、距离、颜色、大小、是否显示、是否浮动、透明度等。  

2. CSS语法  
    一条CSS样式规则由两个主要部分构成：  
    * 选择器：需要改变样式的HTML元素，分为类选择器，id选择器，元素选择器
    * 声明：样式属性+值

    <font color=red>id选择器</font> :前面加上`#`号

    ```css
    /*css中*/
        #sky{
            color: blue;
        }
    /*html*/
        <p id="sky">蓝色的天空</p>
    ```  

    则由id为sky的会呈现蓝色，并且这个id是唯一的。  

    <font color=red>class选择器</font>:前面加上`.`号

    ```css
    /*css文件*/ 
        .center{
        text-align: center;
        }
        .large{
        font-size: 30px;
        }
        .red{
        color: red;
        }
    /*html文件 */
        <p class="center">我会居中显示的</p>
        <p class="red">我是红色的</p>
        <p class="center large red">我又红又大还居中</p>
        <p class="red">我也可以是红的</p>
    ```

    则对应class名称就会发生相应变化。可见，class的值可以是多个。  

    <font color=red>元素选择器</font>

    ```css
    /* css */
        p{
            color:red;
            text-align:center;
        }
    /* html*/
        <p>红色居中</p>
        <p>红色居中</p>
        <p>红色居中</p>
    ```

    css中定义了p标签，则HTML中所有p标签都会变成红色居中。
  
3. CSS生效办法  
   * 外部样式表  
  CSS有一个单独的以`.css`结尾的文件，在其中进行样式的设置。要使其生效，需要在html文件的头部加上`<link>`，如下所示：

    ```html
        <!DOCTYPE html>
        <html>
        <head>
        <meta charset="utf-8">
        <!-- 注意下面这个语句，将导入外部的 mycss.css 样式表文件 -->
        <link rel="stylesheet" type="text/css" href="mycss.css">
        <title>页面标题</title>
        </head>
        <body>
        <h1>我是有样式的</h1>
        <hr>
        <p class="haha">还是有点丑：)</p>
        </body>
        </html>
    ```  

    同一目录创建mycss.css文件，如下：  

    ```css
        body {
        background-color: linen;
        text-align: center;
        }
        h1 {
        color: red;
        }
        .haha {
        margin-top: 100px;
        color: chocolate;
        font-size: 50px;
        }
    ```

   * 内部样式表  
  样式也可以直接放在HTML文件中，使用`<style>`元素包围。例如:  

    ```html
        <!DOCTYPE html>
        <html>
        <head>
        <meta charset="utf-8">
        <!-- 注意下面这个语句，将导入外部的 mycss.css 样式表文件 -->
        <link rel="stylesheet" type="text/css" href="mycss.css">
        <title>页面标题</title>
        <style>
            body {
            background-color: linen;
            text-align: center;
            }
            h1 {
            color: red;
            }
            .haha {
            margin-top: 100px;
            color: chocolate;
            font-size: 50px;
            }
        </style>
        </head>
        <body>
        <h1>我是有样式的</h1>
        <hr>
        <p class="haha">还是有点丑：)</p>
        </body>
        </html>
    ```

   * 内联样式  
  直接将样式写到要应用的元素中。例如：

    ```html
        <h3 style="color:green;">I am a heading</h3>
    ```
  
    <font color="red">级联的优先级：</font>
    内联 > 内部样式表或外部样式表 > 浏览器缺省样式  
    <font color="red">多重样式：</font>
4. 盒子模型
   一个HTML元素可以看作一个盒子。从内到外，内容（content），内边距（padding），边框（border），外边距（margin）构成  
   * Content：盒子的内容，如文本、图片等
   * Padding：填充，也叫内边距，内容和边框之间的区域
   * Border：边框，默认不显示
   * Margin：外边距，边框以外与其他元素的区域
  例如：  
  html文件：

    ```html
        <html>
        <head>
            <link rel="stylesheet" href="./mycss.css">
        </head>
        <body>
            <div class="box1">我是内容一，外面红色的是我的边框。注意边框的内外都有25px的距离。</div>
            <div class="box2">我是内容二，外面蓝色的是我的边框。注意与上面元素的外边距，发生了叠加，不是50px而是25px。</div>
        </body>
        </html>
    ```  

    css文件：  

    ```css
        .box1 {
        height: 200px;
        width: 200px;
        background-color:#615200;
        color: aliceblue;
        border: 10px solid red;
        padding: 25px;
        margin: 25px;
        }
        .box2 {
        height: 300px;
        width: 300px;
        background-color:#004d61;
        color: aliceblue;
        border: 10px solid blue;
        padding: 25px;
        margin: 25px;
        }
    ```  

    在浏览器中右键，选择检查，样式即可查看该网页的margin,padding等宽度。也可简写，例如  
    `padding: 25px 50px 75px 100px;`
    顺序为上，右，下，左顺时针方向。  
    浏览器包含有默认样式，如果不取消，则`margin`的值是不为0的。使用如下语句消除默认样式：  

    ```css
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    ```  

    其中的box-sizing用于定义如何计算一个元素的总宽度和总高度：  
    * `content-box`是默认值。如果设置一个元素的宽为100px,那么这个元素的内容区会有100px宽，并且任何边框和内边距的狂赌都会被增加到最后绘制出来的元素宽度中。
    * `border-box`告诉浏览器：你想要设置的边框和内边距的值是包含在width内的。也就是说，如果你将一个元素的width设为100px，那么这100px会包含它的border和padding，内容区的实际宽度是width减去(border + padding)的值。
5. 定位  
    `position`：用于对元素进行定位，包括有：
    * static 静态：默认值，无论设置与否，都按正常的页面布局进行。即元素在HTML出现的先后顺序从上到下，从左到右。
    * relative 相对定位，将元素相对于静态位置进行偏移，比如：  
    html  

    ```html
    <div class="example-relative">我偏移了正常显示的位置。去掉我的样式对比看看？</div>
    ```  

    css:

    ```css
    .example-relative {
        position: relative;
        left: 60px;
        top: 40px;
        background-color: rgb(173, 241, 241);
    }
    ```

    * fixed 固定：元素相对视口（viewport，浏览器的屏幕可见区域）固定不动，由`top, bottom, left, right`属性确定。比如浏览器右下角固定放置一个按钮元素：  
    html:

    ```html
        <div class="broad">占位区域。请将浏览器窗口改变大小，看看右下角的按钮发生了什么？</div>
        <div class="example-fixed">这个按钮是固定的</div>
    ```  

    css:

    ```css
    .example-fixed {
        position: fixed;
        bottom: 40px;
        right: 10px;
        padding: 6px 24px;
        border-radius: 4px;
        color: #fff;
        background-color: #9d0f0f;
        cursor: pointer;
        box-shadow: 0 3px 3px 0 rgba(0,0,0,0.3), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
    }
    .broad {
        height: 5000px;
        width: 5000px;
        padding: 20px;
        background-color: darkkhaki;
    }
    ```

    * absolute 绝对：相对于最近设置了定位属性（非static）的父元素进行偏移。如果都没有，则相对于`<body>`，例如  
    html:

    ```html
    <div class="example-relative">这是父元素，有 relative 定位属性
        <div class="example-absolute">
        这是子元素，有 absolute 定位属性
        </div>
    </div>
    ```  

    css:  

    ```css
    .example-relative {
        position: relative;  
        width: 400px;
        height: 200px;
        border: 3px solid rgb(87, 33, 173);
    }
    .example-absolute {
        position: absolute;
        top: 80px;
        right: 5px;
        width: 200px;
        height: 100px;
        border: 3px solid rgb(218, 73, 16);
    }
    ```

    设置了元素的`position`属性后，才能使用`top, bottom, left, right`属性，否则定位无效。  

6. 溢出  
    当元素内容超过指定区域是，可通过`overflow`属性处理溢出部分：  
    * visible 默认值：溢出部分不被裁剪，在区域外面显示
    * hidden 裁剪溢出部分且不可见
    * scroll 裁剪溢出部分，但提供上下和左右滚动条供显示
    * auto 裁剪溢出部分，视情况提供滚动条  
7. 浮动  
    设置float属性让某元素水平方向上向左或右进行移动，其周围的元素也会重新排列。我们常用这种样式来使图像和文本进行合理布局

    ```html
    <html>
    <head>
        <style>
            .example-float-right {
            float: right;
            }
        </style>
    </head>
    <body>
        <img src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg" class="example-float-right" alt="">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, architecto officiis, repellendus
        corporis obcaecati, et commodi quam vitae vel laudantium omnis incidunt repellat qui eveniet fugiat totam
        modi nam vero!</p>
    </body>
    </html>
    ```  

    一个浮动元素会尽量向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。浮动元素之后的元素将围绕它。如果希望浮动元素后面的元素在其下方显示，可使用`clear: both`样式来进行清除。
8. 不透明度  
    `opacity`对任何元素设置不透明度。只在0.0~1.0之间，值越低，透明度越高
9. 组合选择器  
    CSS有三种选择器：元素、id 和 class 。但我们也可以进行组合，以得到简洁精确的选择。  
    **后代选择器**  
    以空格作为分隔，如：`.haha p`代表在`.haha`这个`div`中，所有为`<p>`的元素。例如：  

    ```html
    <html>
    <head>
        <style>
            .haha p {
                background-color: yellow;
            }
        </style>
    </head>
    <body>
        <div class="haha">
            <p>Paragraph 1 in the div .haha.</p>
            <p>Paragraph 2 in the div .haha>.</p>
            <span>
                <p>Paragraph 3 in the div .haha.</p>
            </span>
        </div>
        <p>Paragraph 4. Not in a div .haha.</p>
        <p>Paragraph 5. Not in a div .haha.</p>
    </body>
    </html>
    ```  

    **子选择器**  
    也称为直接后代选择器，以`>`作为分隔，如：`.haha > p`代表在有`.haha`类的元素内的<font color='red'>直接</font>`<p>`元素。  

10. 伪类和伪元素
    伪类（pseudo-class）或伪元素（pseudo-element）用于定义元素的某种特定的状态或位置等。比如我们可能有这样的需求：  
    * 鼠标移到某元素上变换背景颜色  
    * 超链接访问前后样式不同  
    * 离开必须填写的输入框时出现红色的外框进行警示  
    * 保证段落的第一行加粗，其它正常  
    * ...  
    使用伪类/伪元素语法如下：  

     ```css
     /* 选择器后使用 : 号，再跟上某个伪类/伪元素 */
        selector:pseudo-class/pseudo-element {
            property:value;
        }
     ```

     以下是常用的伪类/伪元素的简单使用：  

      ```css
        a:link {color:#FF0000;}     /* 未访问的链接 */
        a:visited {color:#00FF00;}  /*已访问的链接*/
        a:hover {color:#FF00FF;}    /*鼠标划过链接*/
        /*鼠标移到段落则改变背景颜色*/
        p:hover {background-color: rgb(226, 43, 144);}
        p:first-line{color:blue;}   /*段落的第一行显示蓝色*/
        p:first-letter{font-size: xx-large;}   /*段落的第一个字超大*/

        h1:before { content:url(smiley.gif); } /*在每个一级标题前插入该图片*/
        h1:after { content:url(smiley.gif); } /*在每个一级标题后插入该图片*/
      ```

11. CSS Flex  
    弹性盒子能够帮助我们在某个方向上排列元素，还能控制他们的尺寸，对齐方式，外观顺序等。需要至少两个元素，一个父元素(flex container)，以及至少一个子元素(flex item)。在父元素中使用`display: flex`，会使父变成弹性容器，只有其直接子元素才能成为弹性项，弹性项目的子项不受影响。  
    * *justify-content*  
        HTML:

        ```html
            <div class="wrapper">
                <div class="menu">
                    <a class="active" href="#">Profile</a>
                    <a href="#">Notifications</a>
                    <a href="#">Payments</a>
                    <a href="#">Settings</a>
                </div>
            </div>
        ```  

        ```css
            .menu {
                display: flex;
                justify-content: space-between;
            }
        ```

        上述例子，将父元素`menu`定义为弹性容器，并使用`justify-content: space-between;`控制弹性项目的间隔；  
        `justify-content`的属性值有：  
        * flex-start  
            弹性项目会从容器的起始端开始分布，没有间距
        * flex-end  
            弹性项目会从容器的终端开始分布，没有间距
        * center  
            弹性项目会居中分布，没有间距
        * space-between  
            所有项目都尽可能地隔开，第一个项目在开头，最后一个项目在结尾
        * space-around  
            弹性项目之前和之后的空间是项目之间空间的一半
        * space-evenly  
            项目前后和项目之间的间距相同
    * *Flex-Wrap*  
        用于在空间不足时，进行换行，默认值为nowrap，将值设置为wrap时，可以换行，例如：  
        HTML

        ```html
        <div class="logos">
            <img ...>
            <img ...>
            <img ...>
            <img ...>
        </div>
        ```  

        css

        ```css
        .logos {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
        }
        ```

    * *Align Items*  
        可以使得图片和文字居中对齐，例如：
        HTML

        ```html
        <div class = "icon-wrap">
            <span class = "icon material-icons">videocam</span>
            <span class = "icon-text">Video Conference</span>
        </div> 
        ```

        ```css
        .icon-wrap {
            display: flex;
            align-items: center;
        }
        ```

        align-items其属性值有：
        | 值 | 描述|
        |:---: | :---: |
        |stretch|默认。项目拉伸充满容器|
        |center|容器中央|
        |flex-start|容器开头|
        |flex-end|容器末端|
        |baseline|定位到容器的基线|
        |initial|将此属性设置为其默认值|
        |inherit|从其父元素继承此属性|
    * *Flex Direction*
        改变主轴的方向。其属性值包括：row,column,row-reverse,column-reverse。加了reverse的会使flex-start的起点也转换。
    * *Flex Grow*
        规定在相同的容器中，项目相对于其它弹性项目的增长量。
    * *Flex Shrink*
        在相同的容器中，项目相对于其它弹性项目的收缩量
    * *Flex Basis*
        规定弹性项目的初始长度。如下的例子在大屏上横向分割，在小屏上垂直分割：  

        ```html
        <div class="container">
            <div class="split"></div>
            <div class="split"></div>
        </div>
        ```

        ```css
        .split {
            width: 50%;
        }
        @media screen and (max-width: 767px){
            .split{
                width: 100%;
                height: 50%;
            }
        }
        ```  

        可以将其中的`width:50%`换成`flex-basis: 50%`。flex-basis可以根据宽度自我调整。
        不随个数改变，自动均分的css:

        ```css
        .container {
            display: flex;
        }
        .plan {
            flex-basis: 0%;
            flex-grow: 1;
            flex-shrink: 1;
        }
        ```

    * *Flex*
        可以使用flex代替flex-grow,flex-shrink,flex-basis。
        `flex: 1 1 0%;`

    * *Auto Margins*
        margin属性可以在弹性子项中用来扩大外边距以占据额外的空间。例如：  

        ```html
        <footer>
            <div class="footer-col">...</div>
            <div class="footer-col">...</div>
            <div class="footer-col">...</div>
            <div class="footer-col">...</div>
        </footer>
        ```

        ```css
        .footer-col:nth-child(2){
            margin-left:auto;
        }
        ```

    * *Order*
        例子：小屏时，将导航栏上的链接放在第二排  

        ```html
        <header>
            <a class="logo-wrap">...</a>
            <ul>...</ul>
            <span class="btn-wrap">...</span>
        </header>
        ```

        ```css
        @media screen and (max-width:767px){
            header {
                flex-wrap: wrap;
            }
            ul {
                order: 3;
                flex: 100%;
            }
        }
        ```  

        其中order属性为3，也就是将ul放置在最后。
    * *Align Self*
        属性指定弹性容器内所选项目的对齐方式。将覆盖弹性容器的align-items 属性。
    * *Flex Flow*
        结合了flex-direction和flex-wrap。`flex-flow: row wrap;`  
    * *Align Content*
        align-content用于flex容器中的多行flex子项，同理还有justify-content
    * *Inline Flex*
        将对象作为内联弹性伸缩盒显示  
12. Grid  
    * *Display Grid&Grid Template Columns*
        felxbox帮助我们安排一维的元素，grid帮助我们安排二维的元素。需要至少两个元素，一个父元素作为grid container，至少一个子元素为grid item。`grid-template-columns`声明了分成多少列，以及每个的宽度。
        `grid-template-columns: 1fr 1fr 1fr;`和`grid-template-columns: repeat(3,1fr)`
    * *Grid Template Rows*
        `grid-template-rows`声明分成了多少行，以及每行的高度。
    * *Gap*
        * column-gap
            设置两列之间的间距。
        * row-gap
            设置两行之间的间距。  

            ```css
            .container {
                display: grid;
                grid-template-columns: 1fr;
                column-gap: 2rem;
                row-gap: 2rem;
                <!-- 以上两条可替换成 gap:2rem; -->
            }

            @media screen and (min-width: 540px) {
                .container {
                    grid-template-columns: repeat(2, 1fr);
                }
            }

            @media screen and (min-width: 767px) {
                .container {
                    grid-template-columns: repeat(3, 1fr);
                }
            }
            ```

    * *Justify Content,Align Content*
        对于flex存在main axis和cross axis；对于grid存在inline axis和block axis。inline是横向，block为纵向。属性用于在容器内对齐整个网格。  
    * *Place Content*
        place-content 属性是align-content 和 justify-content的简写。使用这两个属性的值可以用于任何的布局情况。  
    * *Justify Items*
        justify-items 属性在网格容器上进行设置，使子元素（网格项）在行内方向对齐。对于英文页面，行内方向是从左到右，块方向是向下。如需使此属性具有任何对齐效果，网格项需要在行内方向上在自身周围留出可用空间。提示：如需在块方向而不是行内方向对齐网格项目，请使用 align-items 属性。
    * *Align Items*
        在水平轴上的对齐方式。
    * *Grid Column & Grid Row*
        grid-column-start :n声明从哪一条线开始。grid-column-end :n声明到哪一条线结束。还可以使用两条语句，表达其跨越了2列:grid-column-start: 1;grid-column-end: span 2;
        或者grid-column-start: span 2;
        grid-column-end: 3
13. 单位
    * *fr*
        fr是fraction的简称，代表剩余空间的一部分。在flexbox中，我们可以将项目的flex-grow设置为大于0的值，使这些元素占据父容器中剩余空间的几分之一。fr的单位与此很相似。在我们上面的例子中，只有一列有fr单元，所以这一列占据了100%的剩余空间。我们很快就会看到大部分涉及fr单元的例子。
