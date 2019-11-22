# 51Api.io
一个开源的API供新手学习前端时调用。
## 怎么调用后端API（供新手学习）
前端Javascript 普通调用示范


```
let http = new XMLHttpRequest();   // 新 HttpRequest 实例 
let url = "https://51api.io/test"; // 这个 是 API的链接，根据情况改变
xmlhttp.open("POST", theUrl); // 统一使用 POST 请求
xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8"); // 设置请求头Content-Type为 json

xmlhttp.onreadystatechange = function() { 当ready state发生改变，换言之可以用来捕捉API返回的数据
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        let response = JSON.parse(xhttp.responseText); // Parse返回的json
        console.log(response); // 在Console中显示返回的数据
    }
}
xmlhttp.send(JSON.stringify({ 'data': 'json格式，一些数据' )); 
```

## 在本机/server中配置此nodejs程序

新手请注意，你需要以下基本工具：
- npm（[下载与安装NPM](https://www.npmjs.com/get-npm)）
- 终端（Mac可以用Terminal，windows推荐[Cmder](https://cmder.net/)）

打开terminal，然后依次输入
```
git clone https://github.com/zhenhao-ma/51api.git
cd 51api
npm install
```
npm install 完毕之后，还要配置 config 文件夹中的 credential.js文件。
可以参考sampleCredential.js。里面主要需要包含你使用的sql数据库信息，提供给Sequelize ([Sequelize v5配置 根据cli](https://sequelize.org/v5/manual/migrations.html#the-cli))。配置credential.js完毕之后，直接运行下面代码：
```$xslt
node app/server.js
```

## 其它
### 想要修改这个项目？
- 开源API
- nodejs + express搭建
- 简单的结构（好吧，也只是抽个咖啡时间随便写的）



