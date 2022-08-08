var express = require('express');
var app = express();
var port = 3000;
/**
 *  使用JSON 中间站
 * **/
app.use(express.json());
app.listen(port, function () {
    console.log('🚀服务已启动');
});
app.get('/', function (req, res) {
    res.send('你好～');
});
var data = [
    {
        id: 1,
        title: '阿力甫的学习之路1 ',
        content: '阿力甫的开发之路之准备演示数据1'
    },
    {
        id: 2,
        title: '阿力甫的学习之路2 ',
        content: '阿力甫的开发之路之准备演示数据2'
    },
    {
        id: 3,
        title: '阿力甫的学习之路3 ',
        content: '阿力甫的开发之路之准备演示数据3'
    },
];
app.get('/posts', function (request, response) {
    response.send(data);
});
app.get('/posts/:postId', function (request, response) {
    //获取内容ID
    var postId = request.params.postId;
    //查找具体内容
    var posts = data.filter(function (item) { return item.id == postId; });
    //做出响应
    response.send(posts[0]);
});
/**
 * 创建内容
 * **/
app.post('/posts', function (req, res) {
    // 获取请求里的数据
    var content = req.body.content;
    // 设置响应状态吗
    res.status(201);
    // 输出请求里面头部数据
    console.log(req.headers["sendy"]);
    // 设置 响应的头部数据
    res.set('sendy', 'Say my name ');
    // 做出响应
    res.send({
        message: "\u521B\u5EFA\u4E86\u5185\u5BB9\uFF1A" + content
    });
});
