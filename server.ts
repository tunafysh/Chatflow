Bun.serve({
    hostname: "localhost",
    port: 6969,
    fetch(request) {
        let url = request.url
        
        if(request.url == "http://"+this.hostname+":"+this.port+"/") {
            console.log("server running succesfully")
            return new Response(Bun.file("index.html"));
        }
        else if ("http://"+this.hostname+"/style.css"){
            return new Response(Bun.file("style.css"));
        }
        else if ("http://"+this.hostname+"/app.js"){
            return new Response('console.log("does this work?")', {
                headers: { 'Content-Type': 'application/javascript' },
            });
        }
        else{
            return new Response("Not found", { status: 404 });
        }
    }
})