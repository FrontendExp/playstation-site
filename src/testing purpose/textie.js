var http = require ('http')


http.createServer(function(req,res){

    if(req.url==='/hello'){
        res.end('hii')
    }
    else if(req.url==='/welcome'){
        res.end('hey there nigga')


    }
    
    else{
        res.end('sup bruthaa')
    }
}).listen(2000)
