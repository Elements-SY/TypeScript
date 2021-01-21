namespace userInfo {
   const user = {
      name: '张三', 
      age: 27
   }
}

/*
 
 命名空间的作用，我们看编译之后的结果：
 var userInfo;
 (function (userInfo) {
    var user = {
        name: '张三',
        age: 27
    };
 })(userInfo || (userInfo = {}));


 从上述感觉，除了隔绝作用域好像没什么特殊之处。
 OK, 我们来看一下官方如何解释的:
 link: https://www.tslang.cn/docs/handbook/declaration-files/library-structures.html
 
 在上述的链接内容，我们或许看到UMD库即(Universal Module Definition)通用模块定义规范的缩写UMD。
 那么嘛是通用模块定义呢？这里是指一个模块可以在多个环境下使用。
 我们知道一个JS可以有CommonJs、CMD、AMD等规范，那么我们要想一个库能够在这几个规范或者说环境下运行
 就必须要根据它们的API规范做兼容处理，例如下述就是一个典型的UMD库，它可以用于多个环境。
 
(function (root, factory) {
   if (typeof define === 'function' && define.amd) {
      // AMD. Register as an anonymous module.
      define(['exports', 'b'], factory);
   } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
      // CommonJS
      factory(exports, require('b'));
   } else {
      // Browser globals
      factory((root.commonJsStrict = {}), root.b);
   }
}(this, function (exports, b) {
    // use b in some fashion.
 
    // attach properties to the exports object to define
    // the exported module properties.
    exports.action = function () {};
}));

OK, 我们再来看一下“防止命名冲突”标题下有这么一段话，
一个简单的规则是使用库定义的全局变量名来声明命名空间类型。 
比如，库定义了一个全局的值cats，你可以这样写

declare namespace cats {
    interface KittySettings { }
}
不要
// at top-level
interface CatsKittySettings { }

意思就是作为全局库最好采取隔绝作用域作为保护层以免被受污染或者说遭受命名冲突。

declare关键字只是作为一个举例，例如：
declare namespace cats(举例一个命名空间cats)
declare var foo: number; (举例一个变量声明)
declare class Greeter {} (举例一个Greeter类)
...etc;


*/ 