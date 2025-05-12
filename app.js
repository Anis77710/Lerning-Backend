const http = require('http');

const server = http.createServer(function (req, res) {
    if(req.url ==='/'){
        res.end("hey")
        }
    // console.log(res)

    else if(req.url==="/red"){
        res.end("i love cr7");
    }

    else{
        res.end("page not found")
    }
    
})
server.listen(3000);