# 上午课程－－HTML & CSS

> ### HTML (HyperText Markup Language) 超文本标记语言

超文本标记语言，严格的说，他不算是一门语言，只是一种标记符号；

我们把HTML 里面各种各样的符号叫做标签；

一共有多少标签呢？对不起，我不知道。但是我知道常用的有哪些。

标签＋包含在标签里面的内容构成元素；

比如： `<p>`我们只能叫他是一个p标签；

`<p>这里是一个段落</p>`我们就可以说这事一个p元素；

### 1、 分类：

标签的分类：闭合元素，非闭合元素；

闭合标签如：
    
    <html></html>
    <head></head>
    <body></body>
    <p></p>
    <a href=""></a>
    <div></div>
    所有成对出现的叫做闭合标签


非闭合标签：

    <input type="text">
    <img src="" alt="">  
    <br>
    <link rel="stylesheet" type="text/css" href="">  
    单独出现的标签叫做非闭合标签 

中间插入一个概念：标签属性

元素的分类：块级元素 和 内联元素；

区别：

- 块级元素默认情况下单独占据一行；而内联元素可以和其它内联元素共享同一行；
- 块级元素的宽高可以手动去设置；而内联原色的宽高由他里面的内容决定；
- 他们可以相互转化，同时，还可以转化成介于块级元素和内联元素之间的一种状态，叫做内联块状元素；这种状态即可以手动设置宽高，又可以和其它元素共享一行；

常用的块级元素有：

    <div></div>
    <p></p>
    <ul>
        <li></li>
    </ul>
    <ol>
        <li></li>
    </ol>
    <h1></h1>  <h2></h2>  ..... <h6></h6>
    <table></table>
    <form action=""></form>

    HTML5 新添加的块级元素：
    <main></main>
    <section></section>
    <article></article>
    <header></header>
    <footer></footer>
    <nav></nav>




常用的内联元素：

    <a href=""></a>
    <button type=""></button>
    <img src="" alt="">
    <input type="" name="">
    <span></span>
    <label for=""></label>
    <textarea name=""></textarea>


### 2、HTML文档结构：

    <!DOCTYPE html>   //告诉浏览器以什么标准去解析当前文档
    <html lang="en">  //声明当前使用的语言
    <head>             //head标签里面的内容主要给浏览器看的
      <meta charset="UTF-8">    //声明当前使用的字符集
      <title>Document</title>   //当前页面的title，会显示在浏览器的顶部
    </head>
    <body>
      //这里才是文档的内容部分，要在页面中展示的主体；
      <!--  -->  //注释
    </body>
    </html>

<br><br><br><br>

> ### CSS (Cascading Style Sheets)层叠样式表

也是一门标记语言

### 1、 有两种方式使用css样式表

1、直接将css样式信息写在html文件的`<style></style>`标签里面；

2、写在标签的`style=""`属性中；

3、将样式统一编码在一个`.css`文件中，然后在html文件中通过`<link rel="stylesheet" href="">`标签将样式文件加载进去；强烈推荐；

### 2、 CSS属性一共有多少？我还是不知道。。

    常用到的有以下：
    #id .class {
         width: ;
         height: ;
         max-width: ;
         max-height: ;
         min-width: ;
         min-height: ;
         color: ;
         font: ;
         font-size:;
         border: ;
         line-height: ;
         background: ;
         margin: ;
         padding: ;
         overflow: ;
         position: ;
         text-align: ;
         box-shadow:;
         float: ;
         display: ;
         box-sizing:;
         //一下四个需要再声明position属性的情况下才能生效；
         left: ;
         top: ;
         right: ;
         bottom: ;
     }

### 3、  有以下几个难点：

- 选择器和优先级（id , class , element)
- 盒模型
- 浮动
- 定位

###4、实战：用div+CSS画一个蓝色的菱形出来

<div style="background: red;border-radius: 50%;width: 100px;height: 100px;margin-left: 50px;margin-bottom: 30px;">
    
</div>

<div style="width: 100px;height:100px;float: left;background: red;border-top: 50px solid white;border-bottom: 50px solid white;border-right: 100px solid red;position: relative;box-sizing:border-box;">
</div>
<div style="width: 100px;height:100px;float: left;background: red;border-top: 50px solid white;border-bottom: 50px solid white;border-left: 100px solid red;">
</div>



<br><br><br><br><br><br>









