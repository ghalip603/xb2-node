    const http = require('http');

    const server = http.createServer((request, response) => {
        response.write('Hello~');
        response.end();
    });


    server.listen(3000 , () => {
        console.log('🚀服务已启动！');
    });