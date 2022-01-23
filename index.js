const http = require('http');

const app = {};

app.server = http.createServer((req,res)=>{
    const method = req.method.toLowerCase();
    const methods = ['get','post','put','delete'];
    console.log(methods.indexOf(method));
    if(methods.indexOf(method)>-1){
        res.write("hi...");
        res.end("Ending");
    }
    else{
        res.end('problem');
    }
    
})

app.server.listen(8000,console.log("Running.."));