[toc]
# <center>《Web应用基础》结业报告
## 1、做的什么
本次web应用结业项目，利用所学的html，css，javascript等开发的个人网站。网站内容包括有：  
1. 主页，用于粗略介绍本人的一些经历，生活中的一些随记，看过的电影等等。 
2. 爱好，喜欢看的电影，动漫，书籍，摄影等等。 
3. 博客，在CSDN上写的文章，以及自己的学习笔记等。  
4. 其它，
## 2、开发过程

1. CSS animations可以将一个CSS样式配置转换到另一个CSS样式配置。动画包括两个部分，描述动画的样式规则和用于指定动画开始、结束以及中间点样式的关键帧（参考网站：<https://developer.mozilla.org/>）
    * animation:配置动画时间，时长及其它动画细节，不能配置实际表现。  
    * @keyframes规则实现动画的实际表现，需要建立两个或两个以上关键帧。  
  使用案例：<font color=red>首页鼠标滑动，字体的移出</font>  

      ```html
      <!-- html的实现 -->
            <div class="navigation">
                <div><h1 id="navigation1">Hi! I'm QuartFee.</h1></div>
                <div><h1 id="navigation2">Welcome To My Word</h1></div>
            </div>
      ```  
  
      ```css
      <!-- css的实现 -->
            .animate1 {
              animation-duration: 1s;
              animation-name: slideout1;
              animation-fill-mode: forwards;
            }

          .animate2 {
              animation-duration: 1s;
              animation-name: slideout2;
              animation-fill-mode: forwards;
            }
      ```  

      ```js
      <!-- js的实现 -->
            var the1 = document.getElementById('navigation1');
            var the2 = document.getElementById('navigation2');
            window.addEventListener('wheel', function (event) {

            if (event.deltaY < 0) {
                // 向上移时怎么返回来
            } else {
                the1.classList.add('animate1')
                the2.classList.add('animate2')
            }
            })
      ```

2. 字体的摆动
   也是通过css动画完成

      ```html
            <div class="first">
                <h1 style="color: aliceblue;">我来自重庆</h1>
                <div style="display: flex;">
                  <h1 class="hd" style="color: aliceblue;">火热</h1>
                  <h1 class="hd" style="color: aliceblue;">无常</h1>
                  <h1 class="hd" style="color: aliceblue;">奇妙</h1>
                </div>
                <h1 class="hd" style="color: aliceblue;">的城市</h1>
                <video width="100%" height="400" controls>
                  <source src="../imag/chongqing.mp4">
                </video>
            </div>
      ```

      ```css
            @keyframes shake {
              0% {
                  transform: rotate(0deg);
              }

              25% {
                  transform: rotate(5deg);
              }

              50% {
                  transform: rotate(0deg);
              }

              75% {
                  transform: rotate(-5deg);
              }

              100% {
                  transform: rotate(0deg);
              }
          }

            .first>h1 {
                animation: shake 0.5s infinite;
            }
      ```  

3. 滑动鼠标更换背景和图片
   使用jss控制组件的css样式，使用数组，将组件存放到一个变量中，循环更换组件

      ```js
          <script>
                const container = document.querySelector('.hobit_main_content div')
                const lis = document.querySelectorAll('.controls li')
                var index = 0

                document.addEventListener('mousewheel',function(e){
                    if(e.deltaY<0){
                        index--
                        if(index<0){
                            index=0
                        }
                    }
                    if(e.deltaY> 0){
                        index++
                        if(index>lis.length-1){
                            index=lis.length-1
                        }
                    }
                    container.className = 's' + index
                    if(index===0){
                        document.querySelector('.com a img').setAttribute('style', 'display: none')
                        document.querySelector('.introduction span').setAttribute('style', 'display: none')
                        const imgine = document.querySelectorAll('.guimie a img')
                        const intro = document.querySelector('.introduction .guimie')
                        var x;
                        for(x = 0; x<imgine.length; x++){
                            imgine[x].setAttribute('style', 'display: inline')
                        }
                        intro.setAttribute('style', 'display: inline')
                    }else if(index===1){
                        document.querySelector('.com a img').setAttribute('style', 'display: none')
                        document.querySelector('.introduction span').setAttribute('style', 'display: none')
                        const imgine = document.querySelectorAll('.zhoushu a img')
                        const intro = document.querySelector('.introduction .zhoushu')
                        var x;
                        for (x = 0; x < imgine.length; x++) {
                            imgine[x].setAttribute('style', 'display: inline')
                        }
                        intro.setAttribute('style', 'display: inline')
                    }else if(index===2){
                        document.querySelector('.com a img').setAttribute('style', 'display: none')
                        document.querySelector('.introduction span').setAttribute('style', 'display: none')
                        const imgine = document.querySelectorAll('.shiguang a img')
                        const intro = document.querySelector('.introduction .shiguang')
                        var x;
                        for (x = 0; x < imgine.length; x++) {
                            imgine[x].setAttribute('style', 'display: inline')
                        }
                        intro.setAttribute('style', 'display: inline')
                    }else if(index===3){
                        document.querySelector('.com a img').setAttribute('style', 'display: none')
                        document.querySelector('.introduction span').setAttribute('style', 'display: none')
                        const imgine = document.querySelectorAll('.zhoushu a img')
                        const intro = document.querySelector('.introduction .zhoushu')
                        var x;
                        for (x = 0; x < imgine.length; x++) {
                            imgine[x].setAttribute('style', 'display: inline')
                        }
                        intro.setAttribute('style', 'display: inline')
                    }
                })

                for(var i = 0;i<lis.length;i++){
                    lis[i].tag = i
                    lis[i].onclick = function(){
                        for(var j=0;j<lis.length;j++){
                            lis[j].className = ''
                        }
                        lis[this.tag].className = 'active'
                        container.className = 's'+this.tag
                        index = this.tag
                    }
                }
            </script>
      ```

## 3、遇到的问题及解决方法

1. display：flex下侧边浮动框的实现
   使用div将需要浮动的弹性子项包括起来，将position设为fix;

      ```html
            <div class="left">内容</div>
      ```

      ```css
            .left {
              box-sizing: border-box;
              /* border: solid 2px #00283A; */ 
              width: 40vw;
              height: 800px;
              display: flex;
              justify-content: center;
              align-items: center;
              }
      ```

## 4、尚未解决的问题

1. 页面飘雪花的效果，使用了别人的canvas，但是加进来没有应用到对应的地方，尚未实现  

2. hobit页面是想一个滑动一个动漫主题的介绍，但是图片加载很混乱，想实现艺术性字体，有缓慢进入页面的效果，尚未实现  

## 5、总结

初步使用html，css，js等实现该静态网页，稍微对其有了更近一步的了解，但是还不能够熟练使用，向css中的flex和grid也缺乏一定的应用熟练度，在写该网页的时候，发现了很多没有接触过的html及css属性，在css动画的加持下，页面稍微有了一点点美化的程度，但是无法做到非常的精密，因为当前也只要学的是后端，前端页面的了解程度不够，导致了在平常的课程设计方面，前端需要花费很长时间去做到稍微满意，从而导致时间的不充裕性，希望以后能够进一步了解前端技术，不奢求做大网站，但希望能轻松解决前端排版设计等环节。成为一个全栈工程师。  