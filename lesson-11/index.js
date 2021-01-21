var userInfo;
(function (userInfo) {
    var user = {
        name: '张三',
        age: 27
    };
})(userInfo || (userInfo = {}));
var box = { height: 5, width: 6, scale: 10 };
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
 

 模块解析，相对路径时，会根据依赖的模块文件路径去查找，
 非相对路径会到package.json
*/ 
