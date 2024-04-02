Bun.serve({
    fetch(request) {
        let url = request.url
        if(request.url == "http://localhost:3000/"){ 
            return new Response(Bun.file("index.html"));
        }
        else if (request.url.includes("/style.css")){
            return new Response(Bun.file("style.css"));
        }
        else if (request.url.includes("/app.js")){
            return new Response(Bun.file("app.js"));
        }
        else{
            return new Response("Not found", { status: 404 });
        }
    }// ,
    // Websocket(ws, request) {

    // }
})