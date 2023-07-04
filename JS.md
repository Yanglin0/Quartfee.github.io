[toc]

# JavaScript基础学习笔记  

## 1、序言  

JavaScript 是一门跨平台、面向对象的脚本语言，可以对网页行为进行编程（动画，点击的按钮响应，菜单等）。内置了一些对象的标准库，可使用数组、日期、数学等。JavaScript框架包括有：JQuery、Angular、React、Vue、Axios(前端通信框架)。运行javascript可以在浏览器控制台编写运行；也可以编写一个独立的js文件，然后在Html文件中引入，也可以用编辑软件如Webstrom或VSCode编写独立的js文件，由安装好的Node.js解释执行运行

## 2、快速入门

### 2.1、引入javascript  

* 使用`<script>`内部标签;  

    ```html
    <script>
        //.....
    </script>
    ```

* 外部引入：编辑一个js文件，直接写js代码，在html中使用script写入js的存放地址。

    ```html
    <script src="地址"></script>
    ```

### 2.2、基本语法

* 大小写敏感
* 变量命名规则：  
  第一个字符只能是字母、下划线（ _ ）或美元符号（ $ ）之一；其他字符可以是字母、下划线、美元符号或数字。
* 注释：  
  `/**/`，`//`  
* 变量：对于JavaScript来说，每个变量仅仅是一个用于保存值的占位符而已。数据类型包括有String、Number、Boolean以及Object等。使用`var`操作符定义变量，<font color=red>该变量为局部变量</font>。在 ECMAScript5 标准中，有一种 "严格模式"（Strict Mode）。在严格模式中，为未声明的标识符赋值将会抛引用错误，因此可以防止意外的全局变量属性的创造。共有三个关键字可以声明变量：`var`、`let`、`const`。var在 ECMAScript 的所有版本中都可以使用，而let和const只能在 ES6 及更晚的版本中使用。  

    | 关键字 | 作用域  | 其它 |
    | :----: | :----: | :----: |
    |var|局部变量，函数退出时销毁|不初始化的情况下，变量会保存一个特殊值undefined，可以改变保存的值，还可以改变值的类型|
    |let|块作用域|不允许同一个块作用域中出现冗余声明，let声明的变量不会在作用域中被提升（暂时性死区）|
    |const|块作用域|用const声明变量时必须同时初始化变量，且尝试修改const声明的变量会导致运行时报错,注意，const声明的限制只适用于它指向的变量的引用，换句话说，如果const变量引用的是一个对象，那么修改这个对象内部的属性并不违反const限制|
    <font color=red>注意一下两个🌰：</font>  

    ```Javascript
    for (var i = 0; i < 5; i++) {
        setTimeout( () => {
            console.log(i);//输出结果全部为5
        }, 0 )
        }
    ```

    ```Javascript
    for (let i = 0; i < 5; i++) {
        setTimeout( () => {
            console.log(i); // 输出0、1、2、3、4
        }, 0 )
        }
    ```  

* 操作符  
  * 一元操作符`++`、`--`  
  * 布尔操作符`&&`、`||`、`！`。其中`&&`和`||`为短路操作，也就是对于`&&`如果第一个为false那么就不会再看第二个。对于`||`如果第一个为true那么就不会再看第二个。  
  * 算数操作符`+ - * / %`
  * 关系操作符`<> <= >= == === != !==`。其中`==`如果类型不同，值相同也可以为true；而`===`是值和类型都相同。  
  * 条件操作符`? :`  
  * 赋值操作符 `= += -+ *= /= %=`  
* 语句  
  包括有`if do-while while for for-in for-of break continue switch`  
  `for-in`用来遍历数组时，取得的是数组的下标；`for-of`用来遍历数组时，取得的是元素值；`forEach`使用匿名函数进行遍历；  
* 函数  
  ECMAScript 函数不介意传递进来多少个参数，也不在乎传进来参数是什么数据类型。之所以会这样，原因是 ECMAScript 中的参数在内部是用一个数组来表示的。函数接收到的始终都是这个数组，而不关心数组中包含哪些参数（如果有参数的话）。如果这个数组中不包含任何元素，无所谓；如果包含多个元素，也没有问题。如果在 ECMAScript中定义了两个名字相同的函数，则该名字只属于后定义的函数。
* 对象Object  
  用来封装数据和方法。创建对象有两种方式：

  * new

    ```javascript
    var person = new Object();//生成空对象
    person.name = 'Elon Musk';//设置对象的属性
    person.age = 46;
    person.job = 'SpaceX Rocket';
    person.sayName = function(){    //设置对象的方法/函数，注意此处
        console.log(this.name);
    };
    ```

  * 字面量  

    ```javascript
    var person = {
    name: 'Lary Page',
    age: 47,
    job: 'Software Engineer',
    sayName: function(){        //注意此处
        console.log(this.name);
    }};
    ```

  * 工厂模式变体

    ```javascript

    function createPerson(name, age, job){
        var o = new Object();
        o.name = name;
        o.age = age;
        o.job = job;
        o.sayName = function(){
            console.log(this.name);
        };
        return o;
    }
    var person1 = createPerson('Steve Jobs',56 , 'Inventor');
    var person2 = createPerson('Linus Torvalds', 49, 'Software Engineer');
    var person2 = createPerson('Julian Assange', 47, 'Ethical Hacker');
    ```

* 数组Array  
  ECMAScript数组的每一项 可以保存任何类型的数据（不建议！）。且大小是可以动态调整的。创建方法有：
  * new

    ```javascript
    var colors = new Array('red', 'blue', 'green');
    ```

  * 字面量

    ```javascript
    var colors = ['red', 'blue', 'green']; // 创建一个包含 3 个字符串的数组
    console.log(colors[1]);
    colors[3] = 'brown';
    console.log(colors.length);
    var names = []; // 创建一个空数组
    var hyBird = [1, 2, 'haha', {firstName: 'Yong', lastName: 'Wang'}]; //不推荐！
    console.log(hyBird[3].firstName);
    ```

  数组方法：  
  * 元素联合：`Array.join('字符')` ：数组将用字符作为每个数组元素的连接符
  * 堆栈方法：`push()`，`pop()`，`shift()`，`unshift()`：push、pop操作在数组末，而 unshift、shift操作在数组头；push、unshift压入而pop、shift弹出。
  * 反转数组项：`Array.reverse()`
  * 链接方法：`Array1.concat(Array2)`：将Array1和Array2链接起来
  * 分片方法：`slice()`可以接受一或两个参数，即要返回项的起始和结束位置。在只有一个参数的情况下， slice() 方法返回从该参数指定位置开始到当前数组末尾的所有项。如果有两个参数，该方法返回起始和结束位置之间的项——但不包括结束位置的项。不会改变原数组。
  * splice方法：直接更改原始数组
    * 删除：`splice(0,2)` 会删除数组中的前两项。0表示删除第一项的位置，2表示要删除的项数；
    * 插入：`splice(2,0,'red','green')`向指定位置插入任意数量的项，只需提供3个参数：起始位置、0（要删除的项数） 和要插入的项。
    * 替换：`splice(2,1,'red','green')`起始位置、要删除的项数和要插入的任意数量的项。
* 链式语法

  ```javascript
  
    //链式语法
    var bird = {//定义对象字面量
    catapult: function() {
        console.log( 'Yippeeeeee!' );
        return this;//返回bird对象自身
    },
    destroy: function() {
        console.log( "That'll teach you... you dirty pig!" );
        return this;
    }
    };
    bird.catapult().destroy();//destroy()后还可以再链接吗？
  ```

* **闭包**
  闭包是函数的局部变量集合，只是这些局部变量在函数返回后会继续存在。函数的“堆栈”在函数返回后并不释放，可以理解为这些函数堆栈并不在栈上分配而是在堆上分配，当在一个函数内定义另外一个函数就会产生闭包：

  ```javascript
    function greeting(name) {
        var text = 'Hello ' + name; // local variable
        // 每次调用时，产生闭包，并返回内部函数对象给调用者
        return function() { console.log(text); }//注意该函数无名称，称为匿名函数
    }
    var sayHello = greeting('Closure');//调用greeting()返回了什么？
    sayHello();  // 注意此处的使用方法。通过闭包访问到了局部变量text
  ```

## 3、Typescript

### 3.1、Typescript简介

TypeScript是JavaScript的超集，具有可选的类型并可以编译为纯JavaScript。从技术上讲TypeScript就是具有静态类型的 JavaScript 。JavaScript无法合并类型以及编译时缺乏错误检查。`类型`是在我们运行程序之前通过在代码中描述我们计划如何使用数据来区分正确程序的方法。它们可以从简单的类型(如数字和字符串) 到为我们的问题域完美建模的复杂结构。编程语言分为两类：静态类型或动态类型。静态类型的语言中，变量的类型在编译时必须是已知的。动态类型的语言，只有在运行程序时才知道变量的类型。TypeScript可以支持静态类型，而JavaScript不支持。给JavaScript加上静态类型后，就能将调试从运行期提前到编码期，诸如类型检查、越界检查这样的功能才能真正发挥作用。无需运行程序即可修复潜在bug。基本类型包括有：`any number string boolean enum void null undefined never`

### 3.2、TS配置

1. 安装nodejs
2. 管理员身份运行终端：`npm -g install ts-node typescript`进行全局安装
3. 如在VC中开发，还要安装TSLint、TypeScript Hero、Bracket Pair Colorizer插件
   在vscode中使用`tsc`命令报错的解决办法：管理员身份打开powershell修改执行策略为RemoteSigned（`set-ExecutionPolicy RemoteSigned`）

### 3.3、基础知识点

* 变量声明
  使用let和const，加上类型说明，作用域为块级

  ```javascript
  
  let lang: string = 'TypeScript';//如果省略类型说明，TS也可进行自动推断
  lang = 1010;//error! 如果需要可以使用联合类型：let lang: number | string = 'TS';
  let age: number = 89;
  let age = 64;//error!

  const pi: number = 3.14159;//pi以后不可改变，类似常量
  pi = 3.14;//error!
  ```

* 运算符
  * 算数运算符：`+ - * / % ++ --`
  * 逻辑运算符：`&& || !`
  * 关系运算符：`== != > < >= <=`
  * 按位运算符：`& | ~ ^ << >> >>>`(>>>无符号右移)
  * 赋值运算符：`= += -= *= /=`
  * 三元运算符：`?:`
  * 字符串运算符：`+`
  * 类型运算符：`typeof instanceof`  
  
* 语句：
  
* 函数：
