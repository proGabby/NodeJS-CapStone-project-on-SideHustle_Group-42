const http = require("http");
const fs = require("fs");
const os = require("os");

const port = 2000
const host = '127.0.0.1';

const homePage = fs.readFileSync("./pages/index.html");
const aboutPage = fs.readFileSync("./pages/about.html");
const Page404 = fs.readFileSync("./pages/404.html");

const server = http.createServer((req, res)=>{
    const url = req.url;
    
    if(url === "/"){
        res.writeHead(200,{"content-type": "text/html"})
        res.write(homePage)
    }else if(url  === "/about"){
        res.writeHead(200,{"content-type": "text/html"})
        res.write(aboutPage)
    }else if(url === "/sys"){
        const hostName = os.hostname();
        const platform = os.platform();
        const architecture = os.arch();
        const numberOfCPUS = os.cpus.length;
        const networkInterfaces = os.networkInterfaces();
        const uptime = os.uptime();

        fs.writeFileSync("./osinfo.json", 
            `
            hostName: ${hostName},
            platform: ${platform},
            architecture: ${architecture},
            numberOfCPUS: ${numberOfCPUS},
            networkInterfaces: ${networkInterfaces},
            uptime:  ${uptime}
            `
        );
        res.writeHead(200, {"content-type": "text/plain"});

        res.write("Your OS info has been saved successfully!");
        
    }else{
        res.writeHead(404,{"content-type": "text/html"});
        res.write(Page404);
    }
    
    res.end()
});

server.listen(port,host, ()=>{
    console.log("server is running on port 2000")
})