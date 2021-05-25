const http = require('http');
const fs = require('fs');
const port = 3000;

http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    let path = './views/';

    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/abot-me':
            res.statusCode = 301;
            res.setHeader('Location', 'about.html');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }


    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        //res.write(data);
        res.end(data);
    });
}).listen(port);