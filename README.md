
<!-- 
 什么是TypeScript？
 在官方索引页已做介绍，这里我们使用自己对TS的理解什么是TS，
 当然前提是必须要先去做了解再回过来去理解。OK，言归正传。
 什么是ts？在原生JS规范上制定一个新的规范，那么和ESlint有什么区别呢？
 ESlint是制定一个书写规范，并不能编译和制定JS的类型声明，命名空间等。但是TS可以。

 TypeScript的优点：
 TypeScript的优点即是我们为什么要使用它的目的。
 那么TS的优点是什么？这里我们还是按照自己的理解去认识，
 当我们根据自己的理解去认识它的本质和优缺点以后我们可以再去
 看看别人的。OK. 言归正传。
 那么ts的优点是什么呢？我们不妨回头再去看看之前关于ts的介绍
 什么是ts。在原生JS规范上制定一个新的规范,例如类型声明，命名空间等。
 其实这就是它的优点。为什么要这么干呢？
 我们可以这么想一下，假设有一个公共的方法或者变量，它们的参数值你想约定
 它们参数值的类型，这个时候就可以使用ts，你可以事先约定一个参数的值的类型。
 假设使用者给予参数的值类型不是你事先约定的类型，那么就会报错，从而告诉使用者
 该参数接收嘛类型的值。

 在 ts 中我们会看到引入模块import和<reference types="node" />
 那么它们有什么区别呢？
 import是引入本地模块的绝对路径，而<reference types="node" />
 则表示使用@types/node/index.d.ts里面声明的名字； 
 并且，这个包需要在编译阶段与声明文件一起被包含进来,
 仅当在你需要写一个d.ts文件时才使用这个指令。
 在react typescript项目react-app-env.d.ts文件中<reference types="node" />
 表明这个文件使用了node_modules目录下的@types/node/index.d.ts里面声明的名字； 

 react-app-env.d.ts文件是干嘛的？关于这个文件在https://www.tslang.cn/docs/handbook/declaration-files/templates.html
 意思就是该文件是上述/// <reference types="node" />三个文件的全局模板环境配置文件。

 /// 三斜线引用告诉编译器在编译过程中要引入的额外的文件。

 -->
