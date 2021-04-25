const http = require("http");

http.createServer((request,  response) => {
    if(request.url === "/is-93-024"){
        response.end("Storozhuk Misha IS-93"); 
    } else{
        response.end("Unknown error");
    }
}).listen(3000, () => {
    console.log("Port 3000");
});